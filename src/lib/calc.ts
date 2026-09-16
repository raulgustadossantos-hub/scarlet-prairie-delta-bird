export type Sex = "male" | "female";

export function bmi(weightKg: number, heightCm: number) {
  const m = heightCm / 100;
  if (!m || !weightKg) return 0;
  return weightKg / (m * m);
}

export function bmiLabel(value: number) {
  if (value <= 0) return "—";
  if (value < 18.5) return "Abaixo";
  if (value < 25) return "Saudável";
  if (value < 30) return "Sobrepeso";
  return "Obesidade";
}

/** Mifflin-St Jeor. Estimate for teens — shown as estimate in UI. */
export function bmr(weightKg: number, heightCm: number, age: number, sex: Sex) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return Math.round(sex === "male" ? base + 5 : base - 161);
}

export function tdee(params: {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: Sex;
  activity: number;
}) {
  return Math.round(bmr(params.weightKg, params.heightCm, params.age, params.sex) * params.activity);
}

export function eatTarget(tdeeValue: number) {
  return Math.max(1800, tdeeValue - 400);
}

/** Teen heuristic: ~40 ml/kg, capped 4 L, extra 400 ml on training days. */
export function waterTargetMl(weightKg: number, trainingDay: boolean) {
  const base = Math.round(weightKg * 35);
  const extra = trainingDay ? 400 : 0;
  return Math.min(4000, Math.max(2000, base + extra));
}

export function kcalFromMet(met: number, weightKg: number, minutes: number) {
  return Math.round(met * weightKg * (minutes / 60));
}

export const ACTIVITY = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
} as const;
