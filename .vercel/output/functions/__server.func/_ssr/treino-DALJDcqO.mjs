import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as letterFor, i as getLog, l as useApp, r as cn, s as sessionFor, t as Button, u as weekdayName } from "./button-C4W7Lqn_.mjs";
import { a as kcalFromMet } from "./calc-DIf6Bd8M.mjs";
import { a as Timer, d as Check, s as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/treino-DALJDcqO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ExerciseCard({ exercise, done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("rounded-xl border bg-surface p-4", done ? "border-accent/40" : "border-border"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onToggle,
				"aria-pressed": done,
				"aria-label": done ? "Desmarcar" : "Marcar como feito",
				className: cn("mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-md border", done ? "border-accent bg-accent text-accent-fg" : "border-border bg-elevated text-muted"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold leading-tight",
						children: exercise.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs font-medium text-accent",
						children: exercise.sets
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: exercise.cue
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] uppercase tracking-wider text-subtle",
						children: exercise.muscles
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "mt-3",
						onClick: () => window.open(exercise.youtube, "_blank", "noopener,noreferrer"),
						children: ["Como fazer?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
					})
				]
			})]
		})
	});
}
function TreinoPage() {
	const profile = useApp((s) => s.profile);
	const week = useApp((s) => s.week);
	const logs = useApp((s) => s.logs);
	const toggleExercise = useApp((s) => s.toggleExercise);
	const toggleHiit = useApp((s) => s.toggleHiit);
	const now = /* @__PURE__ */ new Date();
	const session = sessionFor(now, week);
	const log = getLog(logs);
	const letter = letterFor(now, week);
	const plan = week[now.getDay()];
	const doneCount = session.exercises.filter((e) => log.done.includes(e.id)).length;
	const burn = session.exercises.filter((e) => log.done.includes(e.id)).reduce((s, e) => s + kcalFromMet(e.met, profile.weightKg, e.minutes), 0);
	const hiitKcal = log.hiitDone ? kcalFromMet(8.5, profile.weightKg, 8) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-subtle",
					children: [
						weekdayName(now.getDay()),
						" · ",
						plan.time
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl leading-none",
					children: plan.kind === "treino" ? `Treino ${letter}` : session.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: session.subtitle
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						doneCount,
						"/",
						session.exercises.length,
						" exercícios"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl leading-none",
					children: [burn + hiitKcal, " kcal"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestTimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: session.exercises.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseCard, {
					exercise: ex,
					done: log.done.includes(ex.id),
					onToggle: () => toggleExercise(ex.id)
				}) }, ex.id))
			}),
			session.hiit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "HIIT curto — depois da força"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "6 a 8 rounds: 30 s forte + 30–45 s andando no lugar. Esforço 7/10. Faz depois das séries para não tremer no agachamento."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-fg",
						children: session.hiit.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-xs font-medium text-accent underline-offset-2 hover:underline",
								onClick: () => window.open(h.youtube, "_blank", "noopener,noreferrer"),
								children: "Como fazer?"
							})]
						}, h.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: log.hiitDone ? "default" : "outline",
						className: "mt-4 w-full",
						onClick: () => toggleHiit(),
						children: log.hiitDone ? "HIIT feito" : "Marcar HIIT"
					})
				]
			}),
			doneCount === session.exercises.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-accent/30 bg-elevated p-4 text-sm text-fg",
				children: "Sessão fechada. Água, proteína, sono. Amanhã você volta."
			})
		]
	});
}
function RestTimer() {
	const [left, setLeft] = (0, import_react.useState)(0);
	const [running, setRunning] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = window.setInterval(() => {
			setLeft((s) => {
				if (s <= 1) {
					setRunning(false);
					return 0;
				}
				return s - 1;
			});
		}, 1e3);
		return () => window.clearInterval(id);
	}, [running]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "subtle",
				className: "flex-1",
				onClick: () => {
					setLeft(60);
					setRunning(true);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {}), "Descanso 60s"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "subtle",
				className: "flex-1",
				onClick: () => {
					setLeft(90);
					setRunning(true);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {}), "90s"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-14 text-right font-display text-2xl tabular-nums",
				children: running || left ? left : "—"
			})
		]
	});
}
//#endregion
export { TreinoPage as component };
