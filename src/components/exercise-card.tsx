import { Check, ExternalLink } from "lucide-react";
import type { Exercise } from "@/lib/workouts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ExerciseCard({
  exercise,
  done,
  onToggle,
}: {
  exercise: Exercise;
  done: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={cn(
        "rounded-xl border bg-surface p-4",
        done ? "border-accent/40" : "border-border",
      )}
    >
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={done}
          aria-label={done ? "Desmarcar" : "Marcar como feito"}
          className={cn(
            "mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-md border",
            done ? "border-accent bg-accent text-accent-fg" : "border-border bg-elevated text-muted",
          )}
        >
          <Check className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-tight">{exercise.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-accent">{exercise.sets}</p>
          <p className="mt-2 text-sm text-muted">{exercise.cue}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wider text-subtle">{exercise.muscles}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={() => window.open(exercise.youtube, "_blank", "noopener,noreferrer")}
          >
            Como fazer?
            <ExternalLink />
          </Button>
        </div>
      </div>
    </article>
  );
}
