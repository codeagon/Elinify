module.exports = function Elinify(dispatch) {
    dispatch.hook('S_SPAWN_USER', 13, (event) => {
        race = Math.floor(event.templateId / 100) % 100;
        job = event.templateId % 100;
        if (job > 10) {
            return;
        }
        if (race !== 10) {
            event.templateId = 11000 + job;
            return true;
        }
    });
};