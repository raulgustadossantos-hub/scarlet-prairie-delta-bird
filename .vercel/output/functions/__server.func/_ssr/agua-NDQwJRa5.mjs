import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getLog, l as useApp, t as Button } from "./button-C4W7Lqn_.mjs";
import { r as todayMetrics, t as Ring } from "./selectors-DIDOHFos.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agua-NDQwJRa5.js
var import_jsx_runtime = require_jsx_runtime();
var ADDS = [
	200,
	300,
	500
];
function AguaPage() {
	const profile = useApp((s) => s.profile);
	const week = useApp((s) => s.week);
	const logs = useApp((s) => s.logs);
	const addWater = useApp((s) => s.addWater);
	const setWater = useApp((s) => s.setWater);
	const log = getLog(logs);
	const m = todayMetrics(profile, week, logs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-subtle",
					children: "Hidratação"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl leading-none",
					children: "Água"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Meta de hoje: ",
						(m.water / 1e3).toFixed(1),
						" litros. Urina clara = no caminho."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
					value: log.waterMl,
					max: m.water,
					label: "da meta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-display text-5xl leading-none",
					children: [(log.waterMl / 1e3).toFixed(1), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-2xl text-muted",
						children: [
							" / ",
							(m.water / 1e3).toFixed(1),
							" L"
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: ADDS.map((ml) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "h-14",
					onClick: () => addWater(ml),
					children: [
						"+",
						ml,
						" ml"
					]
				}, ml))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				className: "w-full",
				onClick: () => setWater(0),
				children: "Zerar o dia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bebe aos poucos, não de uma vez." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No treino, um gole entre as séries." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dia quente ou treino forte: soma mais 300–500 ml." })
				]
			})
		]
	});
}
//#endregion
export { AguaPage as component };
