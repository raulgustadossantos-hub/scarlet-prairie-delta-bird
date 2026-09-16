import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stat } from "@/components/stat";
import { useApp, getLog } from "@/lib/store";
import { todayMetrics } from "@/lib/selectors";
import { quoteFor, letterFor } from "@/lib/workouts";
import { bmiLabel } from "@/lib/calc";
import { weekdayName } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const profile = useApp((s) => s.profile);
  const week = useApp((s) => s.week);
  const logs = useApp((s) => s.logs);
  const now = new Date();
  const log = getLog(logs);
  const m = todayMetrics(profile, week, logs);
  const plan = week[now.getDay()];
  const letter = letterFor(now, week);
  const remaining = m.session.exercises.filter((e) => !log.done.includes(e.id)).length;

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-subtle">
          {weekdayName(now.getDay())}
        </p>
        <h1 className="font-display text-5xl leading-none text-fg">
          {profile.name ? `E aí, ${profile.name.split(" ")[0]}` : "E aí"}
        </h1>
        <p className="mt-2 text-sm text-muted">{quoteFor(now)}</p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-5">
        <p className="text-[11px] uppercase tracking-wider text-subtle">Hoje</p>
        <h2 className="mt-1 font-display text-4xl leading-none">
          {plan.kind === "rest"
            ? "Folga"
            : plan.kind === "leve"
              ? "Leve"
              : `Treino ${letter}`}
        </h2>
        <p className="mt-2 text-sm text-muted">{m.session.subtitle}</p>
        {plan.kind !== "rest" && (
          <p className="mt-3 flex items-center gap-2 text-sm text-fg">
            <Clock className="size-4 text-muted" />
            Horário: {plan.time} · {m.session.durationMin} min
          </p>
        )}
        <Button asChild className="mt-5 w-full" size="lg">
          <Link to="/treino">
            {remaining === 0 ? "Rever treino" : "Começar agora"}
            <ArrowRight />
          </Link>
        </Button>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <Stat
          label="IMC"
          value={m.bmi.toFixed(1)}
          hint={bmiLabel(m.bmi)}
        />
        <Stat
          label="Comer hoje"
          value={String(m.eat)}
          hint="kcal estimadas"
        />
        <Stat
          label="Gastas no treino"
          value={String(m.burned)}
          hint="kcal das séries feitas"
        />
        <Stat
          label="Água"
          value={`${(log.waterMl / 1000).toFixed(1)} L`}
          hint={`meta ${ (m.water / 1000).toFixed(1) } L`}
        />
      </div>

      <p className="text-xs text-subtle">
        TDEE estimado {m.tdee} kcal. Coma perto de {m.eat} para perder gordura e proteger músculo.
        Números são orientação — não substituem nutricionista.
      </p>
    </div>
  );
}
