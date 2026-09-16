import { create } from "zustand";
import { DEFAULT_WEEK, type DayPlan } from "@/lib/workouts";
import type { Sex } from "@/lib/calc";
import { todayKey } from "@/lib/utils";

export type MealLog = {
  id: string;
  name: string;
  kcal: number;
  protein: number;
};

export type DayLog = {
  done: string[];
  hiitDone: boolean;
  waterMl: number;
  meals: MealLog[];
};

export type Profile = {
  name: string;
  age: number;
  sex: Sex;
  heightCm: number;
  weightKg: number;
  onboarded: boolean;
};

type AppState = {
  hydrated: boolean;
  profile: Profile;
  week: DayPlan[];
  logs: Record<string, DayLog>;
  hydrate: () => void;
  setProfile: (p: Partial<Profile>) => void;
  setDayPlan: (index: number, plan: DayPlan) => void;
  toggleExercise: (id: string, date?: string) => void;
  toggleHiit: (date?: string) => void;
  addWater: (ml: number, date?: string) => void;
  setWater: (ml: number, date?: string) => void;
  addMeal: (meal: Omit<MealLog, "id">, date?: string) => void;
  removeMeal: (id: string, date?: string) => void;
};

const KEY = "impeto-v1";

const defaultProfile: Profile = {
  name: "",
  age: 16,
  sex: "male",
  heightCm: 177,
  weightKg: 90,
  onboarded: false,
};

function emptyLog(): DayLog {
  return { done: [], hiitDone: false, waterMl: 0, meals: [] };
}

function persist(state: Pick<AppState, "profile" | "week" | "logs">) {
  try {
    localStorage.setItem(
      KEY,
      JSON.stringify({ profile: state.profile, week: state.week, logs: state.logs }),
    );
  } catch {
    /* ignore */
  }
}

export const useApp = create<AppState>((set) => ({
  hydrated: false,
  profile: defaultProfile,
  week: DEFAULT_WEEK,
  logs: {},
  hydrate: () => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Pick<AppState, "profile" | "week" | "logs">>;
        set({
          profile: { ...defaultProfile, ...parsed.profile },
          week: parsed.week?.length === 7 ? parsed.week : DEFAULT_WEEK,
          logs: parsed.logs ?? {},
          hydrated: true,
        });
        return;
      }
    } catch {
      /* ignore */
    }
    set({ hydrated: true });
  },
  setProfile: (p) => {
    set((s) => {
      const next = { ...s, profile: { ...s.profile, ...p } };
      persist(next);
      return next;
    });
  },
  setDayPlan: (index, plan) => {
    set((s) => {
      const week = s.week.slice();
      week[index] = plan;
      const next = { ...s, week };
      persist(next);
      return next;
    });
  },
  toggleExercise: (id, date) => {
    const key = date ?? todayKey();
    set((s) => {
      const log = s.logs[key] ?? emptyLog();
      const done = log.done.includes(id) ? log.done.filter((x) => x !== id) : [...log.done, id];
      const logs = { ...s.logs, [key]: { ...log, done } };
      persist({ ...s, logs });
      return { logs };
    });
  },
  toggleHiit: (date) => {
    const key = date ?? todayKey();
    set((s) => {
      const log = s.logs[key] ?? emptyLog();
      const logs = { ...s.logs, [key]: { ...log, hiitDone: !log.hiitDone } };
      persist({ ...s, logs });
      return { logs };
    });
  },
  addWater: (ml, date) => {
    const key = date ?? todayKey();
    set((s) => {
      const log = s.logs[key] ?? emptyLog();
      const logs = { ...s.logs, [key]: { ...log, waterMl: Math.max(0, log.waterMl + ml) } };
      persist({ ...s, logs });
      return { logs };
    });
  },
  setWater: (ml, date) => {
    const key = date ?? todayKey();
    set((s) => {
      const log = s.logs[key] ?? emptyLog();
      const logs = { ...s.logs, [key]: { ...log, waterMl: Math.max(0, ml) } };
      persist({ ...s, logs });
      return { logs };
    });
  },
  addMeal: (meal, date) => {
    const key = date ?? todayKey();
    set((s) => {
      const log = s.logs[key] ?? emptyLog();
      const logs = {
        ...s.logs,
        [key]: {
          ...log,
          meals: [...log.meals, { ...meal, id: crypto.randomUUID() }],
        },
      };
      persist({ ...s, logs });
      return { logs };
    });
  },
  removeMeal: (id, date) => {
    const key = date ?? todayKey();
    set((s) => {
      const log = s.logs[key] ?? emptyLog();
      const logs = { ...s.logs, [key]: { ...log, meals: log.meals.filter((m) => m.id !== id) } };
      persist({ ...s, logs });
      return { logs };
    });
  },
}));

export function getLog(logs: Record<string, DayLog>, date?: string): DayLog {
  return logs[date ?? todayKey()] ?? emptyLog();
}
