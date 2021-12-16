export default function (count = 0, action) {
	console.log('///reducer---count', count);
	console.log('///---action', action);
	if (action.type == 'addPoints') {
		return count + 1000;
	} else {
		return count;
	}
}
