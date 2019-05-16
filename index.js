module.exports = function Crit_Mod(mod) {

    mod.command.add('crit', (abn) => {
        mod.send('S_FONT_SWAP_INFO', 3, {
            id: abn
        });
        mod.command.message(`Crit effect set to ${abn}.`);
    });
};