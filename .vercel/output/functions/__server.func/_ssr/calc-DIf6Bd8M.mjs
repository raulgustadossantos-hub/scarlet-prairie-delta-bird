//#region node_modules/.nitro/vite/services/ssr/assets/calc-DIf6Bd8M.js
function bmi(weightKg, heightCm) {
	const m = heightCm / 100;
	if (!m || !weightKg) return 0;
	return weightKg / (m * m);
}
function bmiLabel(value) {
	if (value <= 0) return "—";
	if (value < 18.5) return "Abaixo";
	if (value < 25) return "Saudável";
	if (value < 30) return "Sobrepeso";
	return "Obesidade";
}
/** Mifflin-St Jeor. Estimate for teens — shown as estimate in UI. */
function bmr(weightKg, heightCm, age, sex) {
	const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
	return Math.round(sex === "male" ? base + 5 : base - 161);
}
function tdee(params) {
	return Math.round(bmr(params.weightKg, params.heightCm, params.age, params.sex) * params.activity);
}
function eatTarget(tdeeValue) {
	return Math.max(1800, tdeeValue - 400);
}
/** Teen heuristic: ~40 ml/kg, capped 4 L, extra 400 ml on training days. */
function waterTargetMl(weightKg, trainingDay) {
	const base = Math.round(weightKg * 35);
	return Math.min(4e3, Math.max(2e3, base + (trainingDay ? 400 : 0)));
}
function kcalFromMet(met, weightKg, minutes) {
	return Math.round(met * weightKg * (minutes / 60));
}
var ACTIVITY = {
	sedentary: 1.2,
	light: 1.375,
	moderate: 1.55
};
//#endregion
export { kcalFromMet as a, eatTarget as i, bmi as n, tdee as o, bmiLabel as r, waterTargetMl as s, ACTIVITY as t };
