export type Exercise = {
  id: string;
  name: string;
  sets: string;
  cue: string;
  muscles: string;
  youtube: string;
  minutes: number;
  met: number;
};

export type Session = {
  id: "A" | "B" | "leve" | "rest";
  title: string;
  subtitle: string;
  durationMin: number;
  exercises: Exercise[];
  hiit?: Exercise[];
};

export const EXERCISES: Record<string, Exercise> = {
  squat: {
    id: "squat",
    name: "Agachamento livre",
    sets: "3 × 10–15",
    cue: "Pés na largura dos ombros, quadril para trás, joelho alinhado com o pé. Desça como se sentasse.",
    muscles: "Quadríceps, glúteo",
    youtube: "https://www.youtube.com/watch?v=Ufh39C5cMfU",
    minutes: 6,
    met: 5.5,
  },
  push: {
    id: "push",
    name: "Flexão de braço",
    sets: "3 × máx. (joelho no chão se precisar)",
    cue: "Mãos um pouco mais abertas que os ombros. Corpo em linha. Joelho no chão é válido e forte.",
    muscles: "Peito, tríceps, ombro",
    youtube: "https://www.youtube.com/watch?v=HaaWL7Gt4Cs",
    minutes: 6,
    met: 6,
  },
  invrow: {
    id: "invrow",
    name: "Remada invertida na mesa",
    sets: "3 × 8–12",
    cue: "Deite debaixo de uma mesa firme, puxe o peito em direção ao tampo. Se não der, faça o Superman.",
    muscles: "Costas, bíceps",
    youtube: "https://www.youtube.com/watch?v=1PKnNIwro8I",
    minutes: 5,
    met: 5,
  },
  superman: {
    id: "superman",
    name: "Superman deitado",
    sets: "3 × 10–12",
    cue: "De barriga no chão, levante braços e pernas juntos. Pause 1s em cima. Pescoço longo.",
    muscles: "Lombar, posteriores",
    youtube: "https://www.youtube.com/watch?v=cc6CVY4CPEw",
    minutes: 4,
    met: 3.5,
  },
  bridge: {
    id: "bridge",
    name: "Elevação pélvica",
    sets: "3 × 12–15",
    cue: "Deitado, pés no chão. Empurre o quadril para cima e aperte o glúteo no topo.",
    muscles: "Glúteo, posterior",
    youtube: "https://www.youtube.com/watch?v=OUgsJ8-Vi0E",
    minutes: 5,
    met: 4,
  },
  latraise: {
    id: "latraise",
    name: "Elevação lateral",
    sets: "3 × 12–15",
    cue: "Garrafas d'água. Cotovelo levemente flexionado, sobe até a linha do ombro. Sem balanço.",
    muscles: "Ombros",
    youtube: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
    minutes: 4,
    met: 3.5,
  },
  plank: {
    id: "plank",
    name: "Prancha",
    sets: "3 × 20–40 s",
    cue: "Antebraços no chão, corpo reto. Empurre o chão, glúteo ativo. Joelho no chão se precisar.",
    muscles: "Core",
    youtube: "https://www.youtube.com/watch?v=qNRqGqESAWU",
    minutes: 4,
    met: 4,
  },
  lunge: {
    id: "lunge",
    name: "Afundo alternado",
    sets: "3 × 8–12 por perna",
    cue: "Passo à frente, joelho de trás desce perto do chão. Tronco alto. Segure numa cadeira se tremer.",
    muscles: "Pernas, glúteo",
    youtube: "https://www.youtube.com/watch?v=wrwwXE_x-pQ",
    minutes: 7,
    met: 5.5,
  },
  bulgarian: {
    id: "bulgarian",
    name: "Agachamento búlgaro",
    sets: "3 × 8–12 por perna",
    cue: "Pé de trás numa cadeira. Desça o joelho da frente. Comece sem peso.",
    muscles: "Quadríceps, glúteo",
    youtube: "https://www.youtube.com/watch?v=2C-uNgKwPZ4",
    minutes: 7,
    met: 6,
  },
  diamond: {
    id: "diamond",
    name: "Flexão diamante / estreita",
    sets: "3 × máx.",
    cue: "Mãos juntas formando um losango. Joelho no chão ok. Foco no tríceps.",
    muscles: "Tríceps, peito",
    youtube: "https://www.youtube.com/watch?v=J0DnG1_S92I",
    minutes: 5,
    met: 6,
  },
  calf: {
    id: "calf",
    name: "Elevação de panturrilha",
    sets: "3 × 15–20",
    cue: "Pode usar um degrau. Sobe na ponta do pé, desce lento. Segure a parede.",
    muscles: "Panturrilha",
    youtube: "https://www.youtube.com/watch?v=-M4-G8p8fmc",
    minutes: 4,
    met: 3.5,
  },
  curl: {
    id: "curl",
    name: "Rosca com garrafas",
    sets: "3 × 12–15",
    cue: "Cotovelo colado no tronco. Sobe sem balançar o corpo. Mochila também serve.",
    muscles: "Bíceps",
    youtube: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
    minutes: 4,
    met: 3.5,
  },
  crunch: {
    id: "crunch",
    name: "Abdominal crunch",
    sets: "3 × 12–15",
    cue: "Lombar no chão, sobe só o ombro. Expire na subida. Sem puxar o pescoço.",
    muscles: "Abdômen",
    youtube: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
    minutes: 4,
    met: 3.8,
  },
  jack: {
    id: "jack",
    name: "Polichinelo",
    sets: "30 s esforço",
    cue: "Salto leve, braços e pernas abrem juntos. Sem salto: só abre e fecha os pés.",
    muscles: "Cardio",
    youtube: "https://www.youtube.com/watch?v=iSSAk4XCsRA",
    minutes: 1,
    met: 8,
  },
  climber: {
    id: "climber",
    name: "Mountain climber",
    sets: "30 s esforço",
    cue: "Posição de prancha, joelho no peito alternando. Quadril estável.",
    muscles: "Cardio, core",
    youtube: "https://www.youtube.com/watch?v=nmwgirgXLYM",
    minutes: 1,
    met: 8.5,
  },
  run: {
    id: "run",
    name: "Corrida no lugar",
    sets: "30 s esforço",
    cue: "Joelho alto, braços batendo. Ritmo que você aguenta falar uma palavra só.",
    muscles: "Cardio",
    youtube: "https://www.youtube.com/watch?v=uY2ZOs5c2oA",
    minutes: 1,
    met: 8,
  },
  walk: {
    id: "walk",
    name: "Caminhada",
    sets: "30–40 min",
    cue: "Passo firme, ombros soltos. Pode ser em volta de casa se chover.",
    muscles: "Cardio leve",
    youtube: "https://www.youtube.com/watch?v=wYvdh_tqf-A",
    minutes: 35,
    met: 3.5,
  },
  mobility: {
    id: "mobility",
    name: "Mobilidade e alongamento",
    sets: "8–10 min",
    cue: "Círculos de ombro, gato-camelo, abrir peito na porta, alongar posterior.",
    muscles: "Recuperação",
    youtube: "https://www.youtube.com/watch?v=L_xrDAtykF0",
    minutes: 10,
    met: 2.5,
  },
};

const HIIT: Exercise[] = [EXERCISES.jack, EXERCISES.climber, EXERCISES.run];

export const SESSION_A: Session = {
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
    EXERCISES.plank,
  ],
  hiit: HIIT,
};

export const SESSION_B: Session = {
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
    EXERCISES.crunch,
  ],
  hiit: HIIT,
};

export const SESSION_LIGHT: Session = {
  id: "leve",
  title: "Sábado leve",
  subtitle: "Caminhada + mobilidade. Recupera e ainda conta.",
  durationMin: 40,
  exercises: [EXERCISES.walk, EXERCISES.mobility],
};

export const SESSION_REST: Session = {
  id: "rest",
  title: "Descanso ativo",
  subtitle: "Hoje o músculo cresce. Alonga, bebe água, come proteína.",
  durationMin: 12,
  exercises: [EXERCISES.mobility],
};

export type DayKind = "rest" | "treino" | "leve";

export type DayPlan = { kind: DayKind; time: string };

export const DEFAULT_WEEK: DayPlan[] = [
  { kind: "rest", time: "09:00" },
  { kind: "rest", time: "18:00" },
  { kind: "treino", time: "18:00" },
  { kind: "treino", time: "18:00" },
  { kind: "rest", time: "18:00" },
  { kind: "treino", time: "18:00" },
  { kind: "leve", time: "09:00" },
];

export function isoWeek(d: Date) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - y.getTime()) / 86400000 + 1) / 7);
}

export function letterFor(date: Date, week: DayPlan[]): "A" | "B" | null {
  const day = date.getDay();
  if (week[day]?.kind !== "treino") return null;
  const trainingIdx = week
    .map((p, i) => (p.kind === "treino" ? i : -1))
    .filter((i) => i >= 0);
  const pos = trainingIdx.indexOf(day);
  if (pos === 0) return "A";
  if (pos === 1) return "B";
  return isoWeek(date) % 2 === 0 ? "A" : "B";
}

export function sessionFor(date: Date, week: DayPlan[]): Session {
  const kind = week[date.getDay()]?.kind ?? "rest";
  if (kind === "leve") return SESSION_LIGHT;
  if (kind === "rest") return SESSION_REST;
  return letterFor(date, week) === "B" ? SESSION_B : SESSION_A;
}

export const QUOTES = [
  "O treino de hoje é o corpo de daqui a 8 semanas.",
  "Ninguém vê a série feia. Todo mundo vê o resultado.",
  "Casa também é academia. O chão não julga.",
  "Consistência vence o treino perfeito que não aconteceu.",
  "Você não precisa estar pronto. Precisa começar.",
  "Descanso não é preguiça. É parte do programa.",
  "A namorada não pediu um herói. Pediu alguém que cuida de si.",
  "Água, proteína, sono. O resto é barulho.",
  "Uma flexão no joelho ainda é uma flexão.",
  "Mostre para você, não para o espelho.",
];

export function quoteFor(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const day = Math.floor(diff / 86400000);
  return QUOTES[day % QUOTES.length];
}

export const MEAL_IDEAS = [
  { name: "Ovos + banana", kcal: 420, protein: 28, when: "Café" },
  { name: "Ovos mexidos + aveia com leite", kcal: 520, protein: 32, when: "Café" },
  { name: "Frango + arroz + feijão + salada", kcal: 680, protein: 48, when: "Almoço" },
  { name: "Ovos + feijão + arroz + legumes", kcal: 610, protein: 36, when: "Almoço" },
  { name: "Iogurte + fruta", kcal: 220, protein: 12, when: "Lanche" },
  { name: "Leite + banana", kcal: 250, protein: 10, when: "Lanche" },
  { name: "Omelete + vegetais", kcal: 380, protein: 26, when: "Jantar" },
  { name: "Sobra do almoço (proteína + carbo)", kcal: 620, protein: 40, when: "Jantar" },
];
