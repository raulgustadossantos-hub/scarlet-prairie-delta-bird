import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as shortWeekday, l as useApp, r as cn, t as Button } from "./button-C4W7Lqn_.mjs";
import { n as bmi, r as bmiLabel } from "./calc-DIf6Bd8M.mjs";
import { n as Label, r as Input } from "./router-Be6iIEPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/perfil-DKpd5Eqv.js
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	{
		id: "treino",
		label: "Treino"
	},
	{
		id: "leve",
		label: "Leve"
	},
	{
		id: "rest",
		label: "Folga"
	}
];
function PerfilPage() {
	const profile = useApp((s) => s.profile);
	const week = useApp((s) => s.week);
	const setProfile = useApp((s) => s.setProfile);
	const setDayPlan = useApp((s) => s.setDayPlan);
	const imc = bmi(profile.weightKg, profile.heightCm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-subtle",
				children: "Conta local"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-5xl leading-none",
				children: "Perfil"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wider text-subtle",
					children: "IMC atual"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl",
					children: [
						imc.toFixed(1),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl text-muted",
							children: bmiLabel(imc)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "n",
							children: "Nome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "n",
							value: profile.name,
							onChange: (e) => setProfile({ name: e.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "a",
								children: "Idade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "a",
								type: "number",
								value: profile.age,
								onChange: (e) => setProfile({ age: Number(e.target.value) })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sexo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 gap-2",
								children: [["male", "Masc."], ["female", "Fem."]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setProfile({ sex: id }),
									className: cn("flex-1 rounded-md border text-sm", profile.sex === id ? "border-accent bg-accent text-accent-fg" : "border-border text-muted"),
									children: label
								}, id))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "h",
								children: "Altura cm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "h",
								type: "number",
								value: profile.heightCm,
								onChange: (e) => setProfile({ heightCm: Number(e.target.value) })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "w",
								children: "Peso kg"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "w",
								type: "number",
								step: "0.1",
								value: profile.weightKg,
								onChange: (e) => setProfile({ weightKg: Number(e.target.value) })
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Horários"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: week.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 text-xs font-semibold text-muted",
							children: shortWeekday(i)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-1 gap-1",
							children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDayPlan(i, {
									...plan,
									kind: k.id
								}),
								className: cn("h-9 flex-1 rounded-sm text-[11px] font-medium", plan.kind === k.id ? "bg-accent text-accent-fg" : "bg-elevated text-muted"),
								children: k.label
							}, k.id))
						}),
						plan.kind !== "rest" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "time",
							value: plan.time,
							onChange: (e) => setDayPlan(i, {
								...plan,
								time: e.target.value
							}),
							className: "h-9 w-[6.5rem] rounded-sm border border-border bg-elevated px-2 text-xs text-fg"
						})
					]
				}, i))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "w-full",
				onClick: () => {
					if (typeof Notification !== "undefined") Notification.requestPermission();
				},
				children: "Ativar aviso no horário"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: "Conteúdo educativo para treino em casa. Se doer além do músculo, para. Fala com médico antes se tiver qualquer condição de saúde — você ainda está crescendo."
			})
		]
	});
}
//#endregion
export { PerfilPage as component };
