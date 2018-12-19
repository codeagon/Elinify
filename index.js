module.exports = function Elinify(mod) {
	let race, job;
	mod.hook('S_SPAWN_USER', 14, (event) => {
		race = Math.floor(event.templateId / 100) % 100;
		job = event.templateId % 100;
		if ((job > 10) || (race === 10)) return;
		event.templateId = 11000 + job;
		return true;
	})
}