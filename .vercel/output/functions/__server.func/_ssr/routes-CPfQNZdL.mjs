import { R as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as letterFor, i as getLog, l as useApp, o as quoteFor, t as Button, u as weekdayName } from "./button-C4W7Lqn_.mjs";
import { r as bmiLabel } from "./calc-DIf6Bd8M.mjs";
import { n as Stat, r as todayMetrics } from "./selectors-DIDOHFos.mjs";
import { f as ArrowRight, u as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CPfQNZdL.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const profile = useApp((s) => s.profile);
	const week = useApp((s) => s.week);
	const logs = useApp((s) => s.logs);
	const now = /* @__PURE__ */ new Date();
	const log = getLog(logs);
	const m = todayMetrics(profile, week, logs);
	const plan = week[now.getDay()];
	const letter = letterFor(now, week);
	const remaining = m.session.exercises.filter((e) => !log.done.includes(e.id)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-subtle",
					children: weekdayName(now.getDay())
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl leading-none text-fg",
					children: profile.name ? `E aí, ${profile.name.split(" ")[0]}` : "E aí"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: quoteFor(now)
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-subtle",
						children: "Hoje"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl leading-none",
						children: plan.kind === "rest" ? "Folga" : plan.kind === "leve" ? "Leve" : `Treino ${letter}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: m.session.subtitle
					}),
					plan.kind !== "rest" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-center gap-2 text-sm text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-muted" }),
							"Horário: ",
							plan.time,
							" · ",
							m.session.durationMin,
							" min"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-5 w-full",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/treino",
							children: [remaining === 0 ? "Rever treino" : "Começar agora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "IMC",
						value: m.bmi.toFixed(1),
						hint: bmiLabel(m.bmi)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Comer hoje",
						value: String(m.eat),
						hint: "kcal estimadas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Gastas no treino",
						value: String(m.burned),
						hint: "kcal das séries feitas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Água",
						value: `${(log.waterMl / 1e3).toFixed(1)} L`,
						hint: `meta ${(m.water / 1e3).toFixed(1)} L`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-subtle",
				children: [
					"TDEE estimado ",
					m.tdee,
					" kcal. Coma perto de ",
					m.eat,
					" para perder gordura e proteger músculo. Números são orientação — não substituem nutricionista."
				]
			})
		]
	});
}
//#endregion
export { Home as component };
