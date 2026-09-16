import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Timer } from "lucide-react";
import { ExerciseCard } from "@/components/exercise-card";
import { Button } from "@/components/ui/button";
import { useApp, getLog } from "@/lib/store";
import { sessionFor, letterFor } from "@/lib/workouts";
import { kcalFromMet } from "@/lib/calc";
import { weekdayName } from "@/lib/utils";

export const Route = createFileRoute("/treino")({ component: TreinoPage });

function TreinoPage() {
  const profile = useApp((s) => s.profile);
  const week = useApp((s) => s.week);
  const logs = useApp((s) => s.logs);
  const toggleExercise = useApp((s) => s.toggleExercise);
  const toggleHiit = useApp((s) => s.toggleHiit);
  const now = new Date();
  const session = sessionFor(now, week);
  const log = getLog(logs);
  const letter = letterFor(now, week);
  const plan = week[now.getDay()];
  const doneCount = session.exercises.filter((e) => log.done.includes(e.id)).length;
  const burn = session.exercises
    .filter((e) => log.done.includes(e.id))
    .reduce((s, e) => s + kcalFromMet(e.met, profile.weightKg, e.minutes), 0);
  const hiitKcal = log.hiitDone ? kcalFromMet(8.5, profile.weightKg, 8) : 0;

  return (
    <div className="space-y-5">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-subtle">
          {weekdayName(now.getDay())} · {plan.time}
        </p>
        <h1 className="font-display text-5xl leading-none">
          {plan.kind === "treino" ? `Treino ${letter}` : session.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{session.subtitle}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        <p className="text-sm text-muted">
          {doneCount}/{session.exercises.length} exercícios
        </p>
        <p className="font-display text-2xl leading-none">{burn + hiitKcal} kcal</p>
      </div>

      <RestTimer />

      <ol className="space-y-3">
        {session.exercises.map((ex) => (
          <li key={ex.id}>
            <ExerciseCard
              exercise={ex}
              done={log.done.includes(ex.id)}
              onToggle={() => toggleExercise(ex.id)}
            />
          </li>
        ))}
      </ol>

      {session.hiit && (
        <section className="rounded-xl border border-border bg-surface p-4">
          <h2 className="font-display text-3xl">HIIT curto — depois da força</h2>
          <p className="mt-1 text-sm text-muted">
            6 a 8 rounds: 30 s forte + 30–45 s andando no lugar. Esforço 7/10. Faz depois das
            séries para não tremer no agachamento.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-fg">
            {session.hiit.map((h) => (
              <li key={h.id} className="flex items-center justify-between gap-2">
                <span>{h.name}</span>
                <button
                  type="button"
                  className="text-xs font-medium text-accent underline-offset-2 hover:underline"
                  onClick={() => window.open(h.youtube, "_blank", "noopener,noreferrer")}
                >
                  Como fazer?
                </button>
              </li>
            ))}
          </ul>
          <Button
            variant={log.hiitDone ? "default" : "outline"}
            className="mt-4 w-full"
            onClick={() => toggleHiit()}
          >
            {log.hiitDone ? "HIIT feito" : "Marcar HIIT"}
          </Button>
        </section>
      )}

      {doneCount === session.exercises.length && (
        <p className="rounded-xl border border-accent/30 bg-elevated p-4 text-sm text-fg">
          Sessão fechada. Água, proteína, sono. Amanhã você volta.
        </p>
      )}
    </div>
  );
}

function RestTimer() {
  const [left, setLeft] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="subtle"
        className="flex-1"
        onClick={() => {
          setLeft(60);
          setRunning(true);
        }}
      >
        <Timer />
        Descanso 60s
      </Button>
      <Button
        variant="subtle"
        className="flex-1"
        onClick={() => {
          setLeft(90);
          setRunning(true);
        }}
      >
        <Timer />
        90s
      </Button>
      <span className="w-14 text-right font-display text-2xl tabular-nums">
        {running || left ? left : "—"}
      </span>
    </div>
  );
}
