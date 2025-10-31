import { i18n } from "./utils.js"

export const registerSettings = function () {
	// Register any custom module settings here
	let modulename = "vosens-tension-meter";

	game.settings.register(modulename, "test-value", {
		name: i18n("VosensTensionMeter.test-value.name"),
		hint: i18n("VosensTensionMeter.test-value.hint"),
		scope: "world",
		config: true,
		range: {
			min: 0.0,
			max: 1.0,
			step: 0.05,
		},
		default: 0.5,
		type: Number,
	});
}