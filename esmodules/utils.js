export let i18n = (key, args) => {
    if (args) {
        return game.i18n.format(key, args);
    }
    return game.i18n.localize(key);
};