import { useEffect, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Droplets, House, UserRound, Dumbbell, Utensils } from "lucide-react";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Onboarding } from "@/components/onboarding";
import { useReminder } from "@/lib/use-reminder";

const NAV = [
  { to: "/", label: "Hoje", icon: House },
  { to: "/treino", label: "Treino", icon: Dumbbell },
  { to: "/nutri", label: "Nutri", icon: Utensils },
  { to: "/agua", label: "Água", icon: Droplets },
  { to: "/perfil", label: "Perfil", icon: UserRound },
];

export function AppShell({ children }: { children: ReactNode }) {
  const hydrate = useApp((s) => s.hydrate);
  const hydrated = useApp((s) => s.hydrated);
  const onboarded = useApp((s) => s.profile.onboarded);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useReminder();

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        <p className="font-display text-4xl tracking-widest text-fg">ÍMPETO</p>
      </div>
    );
  }

  if (!onboarded) return <Onboarding />;

  return (
    <div className="min-h-dvh w-full bg-bg">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
      <main className="flex-1 px-4 pb-28 pt-6">{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-lg items-stretch justify-around px-2 pt-2 pb-2">
          {NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-12 min-w-12 flex-1 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-medium",
                  active ? "text-fg" : "text-subtle hover:text-muted",
                )}
              >
                <Icon className="size-5" strokeWidth={active ? 2.2 : 1.7} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      </div>
    </div>
  );
}
