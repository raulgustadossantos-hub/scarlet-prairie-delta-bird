import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp } from "@/lib/store";
import { shortWeekday } from "@/lib/utils";
import type { DayKind } from "@/lib/workouts";
import { cn } from "@/lib/utils";

const KINDS: { id: DayKind; label: string }[] = [
  { id: "treino", label: "Treino" },
  { id: "leve", label: "Leve" },
  { id: "rest", label: "Folga" },
];

export function Onboarding() {
  const profile = useApp((s) => s.profile);
  const week = useApp((s) => s.week);
  const setProfile = useApp((s) => s.setProfile);
  const setDayPlan = useApp((s) => s.setDayPlan);
  const [step, setStep] = useState(0);

  return (
    <div className="flex min-h-dvh w-full justify-center bg-bg">
    <div className="flex min-h-dvh w-full max-w-lg flex-col px-5 py-8">
      <p className="font-display text-sm tracking-[0.28em] text-muted">ÍMPETO</p>
      {step === 0 && (
        <div className="mt-10 flex flex-1 flex-col">
          <h1 className="font-display text-5xl leading-[0.9] text-fg">O treino começa em casa.</h1>
          <p className="mt-4 max-w-sm text-muted">
            Rotina de iniciante, corpo inteiro, sem academia. Calorias, água e horário — tudo no
            mesmo lugar.
          </p>
          <div className="mt-auto pt-10">
            <Button className="w-full" size="lg" onClick={() => setStep(1)}>
              Quero começar
            </Button>
          </div>
        </div>
      )}
      {step === 1 && (
        <form
          className="mt-8 flex flex-1 flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setStep(2);
          }}
        >
          <h2 className="font-display text-4xl">Quem treina</h2>
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              required
              value={profile.name}
              onChange={(e) => setProfile({ name: e.target.value })}
              placeholder="Como te chamamos"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="age">Idade</Label>
              <Input
                id="age"
                type="number"
                min={13}
                max={80}
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
              <Label htmlFor="h">Altura (cm)</Label>
              <Input
                id="h"
                type="number"
                min={120}
                max={230}
                value={profile.heightCm}
                onChange={(e) => setProfile({ heightCm: Number(e.target.value) })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="w">Peso (kg)</Label>
              <Input
                id="w"
                type="number"
                min={35}
                max={250}
                step="0.1"
                value={profile.weightKg}
                onChange={(e) => setProfile({ weightKg: Number(e.target.value) })}
              />
            </div>
          </div>
          <p className="text-xs text-subtle">
            Já deixei 1,77 m e 90 kg. Ajuste se mudou. Estimativas de calorias são para orientação,
            não substitui médico.
          </p>
          <div className="mt-auto flex gap-2 pt-6">
            <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(0)}>
              Voltar
            </Button>
            <Button type="submit" className="flex-1">
              Agenda
            </Button>
          </div>
        </form>
      )}
      {step === 2 && (
        <div className="mt-8 flex flex-1 flex-col">
          <h2 className="font-display text-4xl">Sua semana</h2>
          <p className="mt-2 text-sm text-muted">
            Terça, quarta e sexta de treino. Quinta e domingo folga. Sábado leve. Muda o que quiser.
          </p>
          <ul className="mt-5 space-y-2">
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
          <div className="mt-auto flex gap-2 pt-6">
            <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
              Voltar
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                if (typeof Notification !== "undefined" && Notification.permission === "default") {
                  void Notification.requestPermission();
                }
                setProfile({ onboarded: true, name: profile.name.trim() || "Atleta" });
              }}
            >
              Entrar
            </Button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
