import { registerSettings } from "./settings.js";

export class VosensTensionMeter {
    static async init() {
        log('Initializing Vosens Tension Meter');
        registerSettings();
    }
}

Hooks.on('init', async function() {
   VosensTensionMeter.init();
});

Hooks.on('ready', async function() {

});