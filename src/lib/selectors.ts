import { ACTIVITY, bmi, eatTarget, kcalFromMet, tdee, waterTargetMl } from "@/lib/calc";
import { getLog, type DayLog, type Profile } from "@/lib/store";
import { sessionFor, type DayPlan } from "@/lib/workouts";

export function metrics(profile: Profile, week: DayPlan[], log: DayLog, date = new Date()) {
  const session = sessionFor(date, week);
  const training = week[date.getDay()]?.kind !== "rest";
  const tdeeVal = tdee({
    weightKg: profile.weightKg,
    heightCm: profile.heightCm,
    age: profile.age,
    sex: profile.sex,
    activity: training ? ACTIVITY.moderate : ACTIVITY.light,
  });
  const eaten = log.meals.reduce((s, m) => s + m.kcal, 0);
  const protein = log.meals.reduce((s, m) => s + m.protein, 0);
  const burned = session.exercises
    .filter((e) => log.done.includes(e.id))
    .reduce((s, e) => s + kcalFromMet(e.met, profile.weightKg, e.minutes), 0);
  const hiitBurn = log.hiitDone ? kcalFromMet(8.5, profile.weightKg, 8) : 0;
  const proteinTarget = Math.round(profile.weightKg * 1.8);
  return {
    session,
    training,
    bmi: bmi(profile.weightKg, profile.heightCm),
    tdee: tdeeVal,
    eat: eatTarget(tdeeVal),
    water: waterTargetMl(profile.weightKg, training),
    eaten,
    protein,
    proteinTarget,
    burned: burned + hiitBurn,
  };
}

export function todayMetrics(profile: Profile, week: DayPlan[], logs: Record<string, DayLog>) {
  return metrics(profile, week, getLog(logs));
}
