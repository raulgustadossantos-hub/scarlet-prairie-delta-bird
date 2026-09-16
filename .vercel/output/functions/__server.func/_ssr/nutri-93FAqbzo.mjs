import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getLog, l as useApp, n as MEAL_IDEAS, t as Button } from "./button-C4W7Lqn_.mjs";
import { n as Stat, r as todayMetrics } from "./selectors-DIDOHFos.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { n as Label, r as Input } from "./router-Be6iIEPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nutri-93FAqbzo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NutriPage() {
	const profile = useApp((s) => s.profile);
	const week = useApp((s) => s.week);
	const logs = useApp((s) => s.logs);
	const addMeal = useApp((s) => s.addMeal);
	const removeMeal = useApp((s) => s.removeMeal);
	const log = getLog(logs);
	const m = todayMetrics(profile, week, logs);
	const [name, setName] = (0, import_react.useState)("");
	const [kcal, setKcal] = (0, import_react.useState)("400");
	const [protein, setProtein] = (0, import_react.useState)("25");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-subtle",
					children: "Comida de verdade"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl leading-none",
					children: "Nutrição"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Sem whey. Ovos, frango, feijão, leite, fruta. Meta: ~",
						m.eat,
						" kcal e ",
						m.proteinTarget,
						" g de proteína."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Meta",
						value: String(m.eat),
						hint: "kcal para comer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Registrado",
						value: String(m.eaten),
						hint: `${m.protein} g proteína`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "TDEE",
						value: String(m.tdee),
						hint: "gasto estimado do dia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Saldo",
						value: String(m.eaten - m.eat + m.burned),
						hint: "comido − meta + treino"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Ideias baratas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: MEAL_IDEAS.map((meal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: meal.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								meal.when,
								" · ",
								meal.kcal,
								" kcal · ",
								meal.protein,
								" g prot"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => addMeal({
							name: meal.name,
							kcal: meal.kcal,
							protein: meal.protein
						}),
						children: "Somar"
					})]
				}, meal.name))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Hoje"
			}), log.meals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Nada registrado ainda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: log.meals.map((meal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm",
							children: meal.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								meal.kcal,
								" kcal · ",
								meal.protein,
								" g"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 items-center justify-center text-muted",
						onClick: () => removeMeal(meal.id),
						"aria-label": "Remover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}, meal.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-3 rounded-xl border border-border bg-surface p-4",
				onSubmit: (e) => {
					e.preventDefault();
					addMeal({
						name: name.trim() || "Refeição",
						kcal: Number(kcal) || 0,
						protein: Number(protein) || 0
					});
					setName("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Registrar outra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "mn",
							children: "Nome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "mn",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Ovos + arroz"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "mk",
								children: "kcal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "mk",
								type: "number",
								value: kcal,
								onChange: (e) => setKcal(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "mp",
								children: "Proteína (g)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "mp",
								type: "number",
								value: protein,
								onChange: (e) => setProtein(e.target.value)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Adicionar"
					})
				]
			})
		]
	});
}
//#endregion
export { NutriPage as component };
