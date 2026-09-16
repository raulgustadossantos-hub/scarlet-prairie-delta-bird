import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stat } from "@/components/stat";
import { useApp, getLog } from "@/lib/store";
import { todayMetrics } from "@/lib/selectors";
import { MEAL_IDEAS } from "@/lib/workouts";
import { useState } from "react";

export const Route = createFileRoute("/nutri")({ component: NutriPage });

function NutriPage() {
  const profile = useApp((s) => s.profile);
  const week = useApp((s) => s.week);
  const logs = useApp((s) => s.logs);
  const addMeal = useApp((s) => s.addMeal);
  const removeMeal = useApp((s) => s.removeMeal);
  const log = getLog(logs);
  const m = todayMetrics(profile, week, logs);
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("400");
  const [protein, setProtein] = useState("25");

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-subtle">Comida de verdade</p>
        <h1 className="font-display text-5xl leading-none">Nutrição</h1>
        <p className="mt-2 text-sm text-muted">
          Sem whey. Ovos, frango, feijão, leite, fruta. Meta: ~{m.eat} kcal e {m.proteinTarget} g
          de proteína.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <Stat label="Meta" value={String(m.eat)} hint="kcal para comer" />
        <Stat label="Registrado" value={String(m.eaten)} hint={`${m.protein} g proteína`} />
        <Stat label="TDEE" value={String(m.tdee)} hint="gasto estimado do dia" />
        <Stat
          label="Saldo"
          value={String(m.eaten - m.eat + m.burned)}
          hint="comido − meta + treino"
        />
      </div>

      <section>
        <h2 className="font-display text-3xl">Ideias baratas</h2>
        <ul className="mt-3 space-y-2">
          {MEAL_IDEAS.map((meal) => (
            <li
              key={meal.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-3"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{meal.name}</p>
                <p className="text-xs text-muted">
                  {meal.when} · {meal.kcal} kcal · {meal.protein} g prot
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => addMeal({ name: meal.name, kcal: meal.kcal, protein: meal.protein })}
              >
                Somar
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl">Hoje</h2>
        {log.meals.length === 0 ? (
          <p className="mt-2 text-sm text-muted">Nada registrado ainda.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {log.meals.map((meal) => (
              <li
                key={meal.id}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{meal.name}</p>
                  <p className="text-xs text-muted">
                    {meal.kcal} kcal · {meal.protein} g
                  </p>
                </div>
                <button
                  type="button"
                  className="flex size-11 items-center justify-center text-muted"
                  onClick={() => removeMeal(meal.id)}
                  aria-label="Remover"
                >
                  <X className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <form
        className="space-y-3 rounded-xl border border-border bg-surface p-4"
        onSubmit={(e) => {
          e.preventDefault();
          addMeal({
            name: name.trim() || "Refeição",
            kcal: Number(kcal) || 0,
            protein: Number(protein) || 0,
          });
          setName("");
        }}
      >
        <h3 className="text-sm font-semibold">Registrar outra</h3>
        <div className="space-y-1">
          <Label htmlFor="mn">Nome</Label>
          <Input id="mn" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ovos + arroz" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="mk">kcal</Label>
            <Input id="mk" type="number" value={kcal} onChange={(e) => setKcal(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="mp">Proteína (g)</Label>
            <Input id="mp" type="number" value={protein} onChange={(e) => setProtein(e.target.value)} />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Adicionar
        </Button>
      </form>
    </div>
  );
}
