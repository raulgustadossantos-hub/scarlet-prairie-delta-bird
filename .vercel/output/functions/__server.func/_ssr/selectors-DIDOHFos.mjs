import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getLog, r as cn, s as sessionFor } from "./button-C4W7Lqn_.mjs";
import { a as kcalFromMet, i as eatTarget, n as bmi, o as tdee, s as waterTargetMl, t as ACTIVITY } from "./calc-DIf6Bd8M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/selectors-DIDOHFos.js
var import_jsx_runtime = require_jsx_runtime();
function Stat({ label, value, hint, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-xl border border-border bg-surface px-3 py-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-wider text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl leading-none text-fg",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function Ring({ value, max, label }) {
	const pct = max > 0 ? Math.min(1, value / max) : 0;
	const r = 28;
	const c = 2 * Math.PI * r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "72",
			height: "72",
			viewBox: "0 0 72 72",
			className: "-rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "36",
				r,
				fill: "none",
				stroke: "var(--color-elevated)",
				strokeWidth: "6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "36",
				r,
				fill: "none",
				stroke: "var(--color-accent)",
				strokeWidth: "6",
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: c * (1 - pct)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-2xl leading-none",
			children: [Math.round(pct * 100), "%"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		})] })]
	});
}
function metrics(profile, week, log, date = /* @__PURE__ */ new Date()) {
	const session = sessionFor(date, week);
	const training = week[date.getDay()]?.kind !== "rest";
	const tdeeVal = tdee({
		weightKg: profile.weightKg,
		heightCm: profile.heightCm,
		age: profile.age,
		sex: profile.sex,
		activity: training ? ACTIVITY.moderate : ACTIVITY.light
	});
	const eaten = log.meals.reduce((s, m) => s + m.kcal, 0);
	const protein = log.meals.reduce((s, m) => s + m.protein, 0);
	const burned = session.exercises.filter((e) => log.done.includes(e.id)).reduce((s, e) => s + kcalFromMet(e.met, profile.weightKg, e.minutes), 0);
	const hiitBurn = log.hiitDone ? kcalFromMet(8.5, profile.weightKg, 8) : 0;
	const proteinTarget = Math.round(profile.weightKg * 1.8);
	return {
		session,
		training,
		bmi: bmi(profile.weightKg, profile.heightCm),
		tdee: tdeeVal,
		eat: eatTarget(tdeeVal),
		water: waterTargetMl(profile.weightKg, training),
		eaten,
		protein,
		proteinTarget,
		burned: burned + hiitBurn
	};
}
function todayMetrics(profile, week, logs) {
	return metrics(profile, week, getLog(logs));
}
//#endregion
export { Stat as n, todayMetrics as r, Ring as t };
