import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp } from "@/lib/store";
import { shortWeekday } from "@/lib/utils";
import { bmi, bmiLabel } from "@/lib/calc";
import type { DayKind } from "@/lib/workouts";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/perfil")({ component: PerfilPage });

const KINDS: { id: DayKind; label: string }[] = [
  { id: "treino", label: "Treino" },
  { id: "leve", label: "Leve" },
  { id: "rest", label: "Folga" },
];

function PerfilPage() {
  const profile = useApp((s) => s.profile);
  const week = useApp((s) => s.week);
  const setProfile = useApp((s) => s.setProfile);
  const setDayPlan = useApp((s) => s.setDayPlan);
  const imc = bmi(profile.weightKg, profile.heightCm);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-subtle">Conta local</p>
        <h1 className="font-display text-5xl leading-none">Perfil</h1>
      </header>

      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-[11px] uppercase tracking-wider text-subtle">IMC atual</p>
        <p className="font-display text-4xl">
          {imc.toFixed(1)} <span className="text-xl text-muted">{bmiLabel(imc)}</span>
        </p>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="n">Nome</Label>
          <Input
            id="n"
            value={profile.name}
            onChange={(e) => setProfile({ name: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="a">Idade</Label>
            <Input
              id="a"
              type="number"
              value={profile.age}
              onChange={(e) => setProfile({ age: Number(e.target.value) })}
            />
          </div>
          <div className="space-y-1">
            <Label>Sexo</Label>
            <div className="flex h-11 gap-2">
              {(
                [
                  ["male", "Masc."],
                  ["female", "Fem."],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setProfile({ sex: id })}
                  className={cn(
                    "flex-1 rounded-md border text-sm",
                    profile.sex === id
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-border text-muted",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="h">Altura cm</Label>
            <Input
              id="h"
              type="number"
              value={profile.heightCm}
              onChange={(e) => setProfile({ heightCm: Number(e.target.value) })}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="w">Peso kg</Label>
            <Input
              id="w"
              type="number"
              step="0.1"
              value={profile.weightKg}
              onChange={(e) => setProfile({ weightKg: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>

      <section>
        <h2 className="font-display text-3xl">Horários</h2>
        <ul className="mt-3 space-y-2">
          {week.map((plan, i) => (
            <li
              key={i}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2"
            >
              <span className="w-10 text-xs font-semibold text-muted">{shortWeekday(i)}</span>
              <div className="flex flex-1 gap-1">
                {KINDS.map((k) => (
                  <button
                    key={k.id}
                    type="button"
                    onClick={() => setDayPlan(i, { ...plan, kind: k.id })}
                    className={cn(
                      "h-9 flex-1 rounded-sm text-[11px] font-medium",
                      plan.kind === k.id ? "bg-accent text-accent-fg" : "bg-elevated text-muted",
                    )}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
              {plan.kind !== "rest" && (
                <input
                  type="time"
                  value={plan.time}
                  onChange={(e) => setDayPlan(i, { ...plan, time: e.target.value })}
                  className="h-9 w-[6.5rem] rounded-sm border border-border bg-elevated px-2 text-xs text-fg"
                />
              )}
            </li>
          ))}
        </ul>
      </section>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          if (typeof Notification !== "undefined") void Notification.requestPermission();
        }}
      >
        Ativar aviso no horário
      </Button>

      <p className="text-xs text-subtle">
        Conteúdo educativo para treino em casa. Se doer além do músculo, para. Fala com médico antes
        se tiver qualquer condição de saúde — você ainda está crescendo.
      </p>
    </div>
  );
}
