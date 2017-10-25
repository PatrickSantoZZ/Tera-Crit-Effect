const Command = require('command')

module.exports = function Critmod(dispatch) {
	const command = Command(dispatch)

dispatch.hook('S_LOGIN', 2, (event) => {
		pcid = event.cid;
})
	command.add('crit', (abn) => {
		dispatch.toClient('S_FONT_SWAP_INFO', 2, {
			abnormalityKind: abn
		})
	})
}