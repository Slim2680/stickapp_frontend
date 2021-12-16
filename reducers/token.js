export default function (token = '', action) {
	// console.log('---token', token);
	// console.log('---action', action);
	if (action.type == 'addToken') {
		return action.token;
	} else {
		return token;
	}
}
