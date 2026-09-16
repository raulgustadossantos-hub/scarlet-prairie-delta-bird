import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var EXERCISES = {
	squat: {
		id: "squat",
		name: "Agachamento livre",
		sets: "3 × 10–15",
		cue: "Pés na largura dos ombros, quadril para trás, joelho alinhado com o pé. Desça como se sentasse.",
		muscles: "Quadríceps, glúteo",
		youtube: "https://www.youtube.com/watch?v=Ufh39C5cMfU",
		minutes: 6,
		met: 5.5
	},
	push: {
		id: "push",
		name: "Flexão de braço",
		sets: "3 × máx. (joelho no chão se precisar)",
		cue: "Mãos um pouco mais abertas que os ombros. Corpo em linha. Joelho no chão é válido e forte.",
		muscles: "Peito, tríceps, ombro",
		youtube: "https://www.youtube.com/watch?v=HaaWL7Gt4Cs",
		minutes: 6,
		met: 6
	},
	invrow: {
		id: "invrow",
		name: "Remada invertida na mesa",
		sets: "3 × 8–12",
		cue: "Deite debaixo de uma mesa firme, puxe o peito em direção ao tampo. Se não der, faça o Superman.",
		muscles: "Costas, bíceps",
		youtube: "https://www.youtube.com/watch?v=1PKnNIwro8I",
		minutes: 5,
		met: 5
	},
	superman: {
		id: "superman",
		name: "Superman deitado",
		sets: "3 × 10–12",
		cue: "De barriga no chão, levante braços e pernas juntos. Pause 1s em cima. Pescoço longo.",
		muscles: "Lombar, posteriores",
		youtube: "https://www.youtube.com/watch?v=cc6CVY4CPEw",
		minutes: 4,
		met: 3.5
	},
	bridge: {
		id: "bridge",
		name: "Elevação pélvica",
		sets: "3 × 12–15",
		cue: "Deitado, pés no chão. Empurre o quadril para cima e aperte o glúteo no topo.",
		muscles: "Glúteo, posterior",
		youtube: "https://www.youtube.com/watch?v=OUgsJ8-Vi0E",
		minutes: 5,
		met: 4
	},
	latraise: {
		id: "latraise",
		name: "Elevação lateral",
		sets: "3 × 12–15",
		cue: "Garrafas d'água. Cotovelo levemente flexionado, sobe até a linha do ombro. Sem balanço.",
		muscles: "Ombros",
		youtube: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
		minutes: 4,
		met: 3.5
	},
	plank: {
		id: "plank",
		name: "Prancha",
		sets: "3 × 20–40 s",
		cue: "Antebraços no chão, corpo reto. Empurre o chão, glúteo ativo. Joelho no chão se precisar.",
		muscles: "Core",
		youtube: "https://www.youtube.com/watch?v=qNRqGqESAWU",
		minutes: 4,
		met: 4
	},
	lunge: {
		id: "lunge",
		name: "Afundo alternado",
		sets: "3 × 8–12 por perna",
		cue: "Passo à frente, joelho de trás desce perto do chão. Tronco alto. Segure numa cadeira se tremer.",
		muscles: "Pernas, glúteo",
		youtube: "https://www.youtube.com/watch?v=wrwwXE_x-pQ",
		minutes: 7,
		met: 5.5
	},
	bulgarian: {
		id: "bulgarian",
		name: "Agachamento búlgaro",
		sets: "3 × 8–12 por perna",
		cue: "Pé de trás numa cadeira. Desça o joelho da frente. Comece sem peso.",
		muscles: "Quadríceps, glúteo",
		youtube: "https://www.youtube.com/watch?v=2C-uNgKwPZ4",
		minutes: 7,
		met: 6
	},
	diamond: {
		id: "diamond",
		name: "Flexão diamante / estreita",
		sets: "3 × máx.",
		cue: "Mãos juntas formando um losango. Joelho no chão ok. Foco no tríceps.",
		muscles: "Tríceps, peito",
		youtube: "https://www.youtube.com/watch?v=J0DnG1_S92I",
		minutes: 5,
		met: 6
	},
	calf: {
		id: "calf",
		name: "Elevação de panturrilha",
		sets: "3 × 15–20",
		cue: "Pode usar um degrau. Sobe na ponta do pé, desce lento. Segure a parede.",
		muscles: "Panturrilha",
		youtube: "https://www.youtube.com/watch?v=-M4-G8p8fmc",
		minutes: 4,
		met: 3.5
	},
	curl: {
		id: "curl",
		name: "Rosca com garrafas",
		sets: "3 × 12–15",
		cue: "Cotovelo colado no tronco. Sobe sem balançar o corpo. Mochila também serve.",
		muscles: "Bíceps",
		youtube: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
		minutes: 4,
		met: 3.5
	},
	crunch: {
		id: "crunch",
		name: "Abdominal crunch",
		sets: "3 × 12–15",
		cue: "Lombar no chão, sobe só o ombro. Expire na subida. Sem puxar o pescoço.",
		muscles: "Abdômen",
		youtube: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
		minutes: 4,
		met: 3.8
	},
	jack: {
		id: "jack",
		name: "Polichinelo",
		sets: "30 s esforço",
		cue: "Salto leve, braços e pernas abrem juntos. Sem salto: só abre e fecha os pés.",
		muscles: "Cardio",
		youtube: "https://www.youtube.com/watch?v=iSSAk4XCsRA",
		minutes: 1,
		met: 8
	},
	climber: {
		id: "climber",
		name: "Mountain climber",
		sets: "30 s esforço",
		cue: "Posição de prancha, joelho no peito alternando. Quadril estável.",
		muscles: "Cardio, core",
		youtube: "https://www.youtube.com/watch?v=nmwgirgXLYM",
		minutes: 1,
		met: 8.5
	},
	run: {
		id: "run",
		name: "Corrida no lugar",
		sets: "30 s esforço",
		cue: "Joelho alto, braços batendo. Ritmo que você aguenta falar uma palavra só.",
		muscles: "Cardio",
		youtube: "https://www.youtube.com/watch?v=uY2ZOs5c2oA",
		minutes: 1,
		met: 8
	},
	walk: {
		id: "walk",
		name: "Caminhada",
		sets: "30–40 min",
		cue: "Passo firme, ombros soltos. Pode ser em volta de casa se chover.",
		muscles: "Cardio leve",
		youtube: "https://www.youtube.com/watch?v=wYvdh_tqf-A",
		minutes: 35,
		met: 3.5
	},
	mobility: {
		id: "mobility",
		name: "Mobilidade e alongamento",
		sets: "8–10 min",
		cue: "Círculos de ombro, gato-camelo, abrir peito na porta, alongar posterior.",
		muscles: "Recuperação",
		youtube: "https://www.youtube.com/watch?v=L_xrDAtykF0",
		minutes: 10,
		met: 2.5
	}
};
var HIIT = [
	EXERCISES.jack,
	EXERCISES.climber,
	EXERCISES.run
];
var SESSION_A = {
	id: "A",
	title: "Treino A — corpo inteiro",
	subtitle: "Agacha, empurra, puxa. Casa, sem desculpa.",
	durationMin: 45,
	exercises: [
		EXERCISES.squat,
		EXERCISES.push,
		EXERCISES.invrow,
		EXERCISES.bridge,
		EXERCISES.latraise,
		EXERCISES.plank
	],
	hiit: HIIT
};
var SESSION_B = {
	id: "B",
	title: "Treino B — corpo inteiro",
	subtitle: "Pernas unilaterais, tríceps e core. Mesma casa, outro estímulo.",
	durationMin: 45,
	exercises: [
		EXERCISES.lunge,
		EXERCISES.diamond,
		EXERCISES.superman,
		EXERCISES.calf,
		EXERCISES.curl,
		EXERCISES.crunch
	],
	hiit: HIIT
};
var SESSION_LIGHT = {
	id: "leve",
	title: "Sábado leve",
	subtitle: "Caminhada + mobilidade. Recupera e ainda conta.",
	durationMin: 40,
	exercises: [EXERCISES.walk, EXERCISES.mobility]
};
var SESSION_REST = {
	id: "rest",
	title: "Descanso ativo",
	subtitle: "Hoje o músculo cresce. Alonga, bebe água, come proteína.",
	durationMin: 12,
	exercises: [EXERCISES.mobility]
};
var DEFAULT_WEEK = [
	{
		kind: "rest",
		time: "09:00"
	},
	{
		kind: "rest",
		time: "18:00"
	},
	{
		kind: "treino",
		time: "18:00"
	},
	{
		kind: "treino",
		time: "18:00"
	},
	{
		kind: "rest",
		time: "18:00"
	},
	{
		kind: "treino",
		time: "18:00"
	},
	{
		kind: "leve",
		time: "09:00"
	}
];
function isoWeek(d) {
	const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	const day = t.getUTCDay() || 7;
	t.setUTCDate(t.getUTCDate() + 4 - day);
	const y = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
	return Math.ceil(((t.getTime() - y.getTime()) / 864e5 + 1) / 7);
}
function letterFor(date, week) {
	const day = date.getDay();
	if (week[day]?.kind !== "treino") return null;
	const pos = week.map((p, i) => p.kind === "treino" ? i : -1).filter((i) => i >= 0).indexOf(day);
	if (pos === 0) return "A";
	if (pos === 1) return "B";
	return isoWeek(date) % 2 === 0 ? "A" : "B";
}
function sessionFor(date, week) {
	const kind = week[date.getDay()]?.kind ?? "rest";
	if (kind === "leve") return SESSION_LIGHT;
	if (kind === "rest") return SESSION_REST;
	return letterFor(date, week) === "B" ? SESSION_B : SESSION_A;
}
var QUOTES = [
	"O treino de hoje é o corpo de daqui a 8 semanas.",
	"Ninguém vê a série feia. Todo mundo vê o resultado.",
	"Casa também é academia. O chão não julga.",
	"Consistência vence o treino perfeito que não aconteceu.",
	"Você não precisa estar pronto. Precisa começar.",
	"Descanso não é preguiça. É parte do programa.",
	"A namorada não pediu um herói. Pediu alguém que cuida de si.",
	"Água, proteína, sono. O resto é barulho.",
	"Uma flexão no joelho ainda é uma flexão.",
	"Mostre para você, não para o espelho."
];
function quoteFor(date) {
	const start = new Date(date.getFullYear(), 0, 0);
	const diff = date.getTime() - start.getTime();
	return QUOTES[Math.floor(diff / 864e5) % QUOTES.length];
}
var MEAL_IDEAS = [
	{
		name: "Ovos + banana",
		kcal: 420,
		protein: 28,
		when: "Café"
	},
	{
		name: "Ovos mexidos + aveia com leite",
		kcal: 520,
		protein: 32,
		when: "Café"
	},
	{
		name: "Frango + arroz + feijão + salada",
		kcal: 680,
		protein: 48,
		when: "Almoço"
	},
	{
		name: "Ovos + feijão + arroz + legumes",
		kcal: 610,
		protein: 36,
		when: "Almoço"
	},
	{
		name: "Iogurte + fruta",
		kcal: 220,
		protein: 12,
		when: "Lanche"
	},
	{
		name: "Leite + banana",
		kcal: 250,
		protein: 10,
		when: "Lanche"
	},
	{
		name: "Omelete + vegetais",
		kcal: 380,
		protein: 26,
		when: "Jantar"
	},
	{
		name: "Sobra do almoço (proteína + carbo)",
		kcal: 620,
		protein: 40,
		when: "Jantar"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function todayKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function weekdayName(d) {
	return [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado"
	][d] ?? "";
}
function shortWeekday(d) {
	return [
		"Dom",
		"Seg",
		"Ter",
		"Qua",
		"Qui",
		"Sex",
		"Sáb"
	][d] ?? "";
}
var KEY = "impeto-v1";
var defaultProfile = {
	name: "",
	age: 16,
	sex: "male",
	heightCm: 177,
	weightKg: 90,
	onboarded: false
};
function emptyLog() {
	return {
		done: [],
		hiitDone: false,
		waterMl: 0,
		meals: []
	};
}
function persist(state) {
	try {
		localStorage.setItem(KEY, JSON.stringify({
			profile: state.profile,
			week: state.week,
			logs: state.logs
		}));
	} catch {}
}
var useApp = create((set) => ({
	hydrated: false,
	profile: defaultProfile,
	week: DEFAULT_WEEK,
	logs: {},
	hydrate: () => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				set({
					profile: {
						...defaultProfile,
						...parsed.profile
					},
					week: parsed.week?.length === 7 ? parsed.week : DEFAULT_WEEK,
					logs: parsed.logs ?? {},
					hydrated: true
				});
				return;
			}
		} catch {}
		set({ hydrated: true });
	},
	setProfile: (p) => {
		set((s) => {
			const next = {
				...s,
				profile: {
					...s.profile,
					...p
				}
			};
			persist(next);
			return next;
		});
	},
	setDayPlan: (index, plan) => {
		set((s) => {
			const week = s.week.slice();
			week[index] = plan;
			const next = {
				...s,
				week
			};
			persist(next);
			return next;
		});
	},
	toggleExercise: (id, date) => {
		const key = date ?? todayKey();
		set((s) => {
			const log = s.logs[key] ?? emptyLog();
			const done = log.done.includes(id) ? log.done.filter((x) => x !== id) : [...log.done, id];
			const logs = {
				...s.logs,
				[key]: {
					...log,
					done
				}
			};
			persist({
				...s,
				logs
			});
			return { logs };
		});
	},
	toggleHiit: (date) => {
		const key = date ?? todayKey();
		set((s) => {
			const log = s.logs[key] ?? emptyLog();
			const logs = {
				...s.logs,
				[key]: {
					...log,
					hiitDone: !log.hiitDone
				}
			};
			persist({
				...s,
				logs
			});
			return { logs };
		});
	},
	addWater: (ml, date) => {
		const key = date ?? todayKey();
		set((s) => {
			const log = s.logs[key] ?? emptyLog();
			const logs = {
				...s.logs,
				[key]: {
					...log,
					waterMl: Math.max(0, log.waterMl + ml)
				}
			};
			persist({
				...s,
				logs
			});
			return { logs };
		});
	},
	setWater: (ml, date) => {
		const key = date ?? todayKey();
		set((s) => {
			const log = s.logs[key] ?? emptyLog();
			const logs = {
				...s.logs,
				[key]: {
					...log,
					waterMl: Math.max(0, ml)
				}
			};
			persist({
				...s,
				logs
			});
			return { logs };
		});
	},
	addMeal: (meal, date) => {
		const key = date ?? todayKey();
		set((s) => {
			const log = s.logs[key] ?? emptyLog();
			const logs = {
				...s.logs,
				[key]: {
					...log,
					meals: [...log.meals, {
						...meal,
						id: crypto.randomUUID()
					}]
				}
			};
			persist({
				...s,
				logs
			});
			return { logs };
		});
	},
	removeMeal: (id, date) => {
		const key = date ?? todayKey();
		set((s) => {
			const log = s.logs[key] ?? emptyLog();
			const logs = {
				...s.logs,
				[key]: {
					...log,
					meals: log.meals.filter((m) => m.id !== id)
				}
			};
			persist({
				...s,
				logs
			});
			return { logs };
		});
	}
}));
function getLog(logs, date) {
	return logs[date ?? todayKey()] ?? emptyLog();
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			inverse: "bg-fg text-bg hover:bg-fg/90",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			ghost: "text-fg hover:bg-elevated",
			subtle: "bg-elevated text-fg hover:bg-elevated/80"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
export { letterFor as a, shortWeekday as c, getLog as i, useApp as l, MEAL_IDEAS as n, quoteFor as o, cn as r, sessionFor as s, Button as t, weekdayName as u };
