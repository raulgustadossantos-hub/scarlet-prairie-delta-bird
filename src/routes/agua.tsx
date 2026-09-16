import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Ring } from "@/components/stat";
import { useApp, getLog } from "@/lib/store";
import { todayMetrics } from "@/lib/selectors";

export const Route = createFileRoute("/agua")({ component: AguaPage });

const ADDS = [200, 300, 500];

function AguaPage() {
  const profile = useApp((s) => s.profile);
  const week = useApp((s) => s.week);
  const logs = useApp((s) => s.logs);
  const addWater = useApp((s) => s.addWater);
  const setWater = useApp((s) => s.setWater);
  const log = getLog(logs);
  const m = todayMetrics(profile, week, logs);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-subtle">Hidratação</p>
        <h1 className="font-display text-5xl leading-none">Água</h1>
        <p className="mt-2 text-sm text-muted">
          Meta de hoje: {(m.water / 1000).toFixed(1)} litros. Urina clara = no caminho.
        </p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-5">
        <Ring value={log.waterMl} max={m.water} label="da meta" />
        <p className="mt-4 font-display text-5xl leading-none">
          {(log.waterMl / 1000).toFixed(1)}
          <span className="text-2xl text-muted"> / {(m.water / 1000).toFixed(1)} L</span>
        </p>
      </section>

      <div className="grid grid-cols-3 gap-2">
        {ADDS.map((ml) => (
          <Button key={ml} variant="outline" className="h-14" onClick={() => addWater(ml)}>
            +{ml} ml
          </Button>
        ))}
      </div>
      <Button variant="ghost" className="w-full" onClick={() => setWater(0)}>
        Zerar o dia
      </Button>

      <ul className="space-y-2 text-sm text-muted">
        <li>Bebe aos poucos, não de uma vez.</li>
        <li>No treino, um gole entre as séries.</li>
        <li>Dia quente ou treino forte: soma mais 300–500 ml.</li>
      </ul>
    </div>
  );
}
