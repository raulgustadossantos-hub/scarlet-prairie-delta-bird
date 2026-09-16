import { useEffect } from "react";
import { useApp } from "@/lib/store";

export function useReminder() {
  const week = useApp((s) => s.week);
  const onboarded = useApp((s) => s.profile.onboarded);

  useEffect(() => {
    if (!onboarded || typeof window === "undefined") return;
    const now = new Date();
    const plan = week[now.getDay()];
    if (!plan || plan.kind === "rest") return;
    const [h, m] = plan.time.split(":").map(Number);
    const target = new Date(now);
    target.setHours(h, m, 0, 0);
    const delay = target.getTime() - now.getTime();
    if (delay <= 0 || delay > 12 * 60 * 60 * 1000) return;

    const id = window.setTimeout(() => {
      if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        new Notification("Ímpeto — hora de treinar", {
          body: "Seu horário chegou. Abre o treino de hoje e começa.",
        });
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [week, onboarded]);
}
