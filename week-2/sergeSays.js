function sergeSays(sentence) {
	if (!sentence) {
		return 'Fine. Be that way.';
	} else if (sentence.endsWith('?')) {
		return 'Sure.';
	} else if (sentence.toUpperCase() === sentence) {
		return 'Woah, chill out!';
	}
	return null;
}

function checkSpecification(expected, sentence) {
	const actual = sergeSays(sentence);
	console.assert(expected === actual, `Expected '${expected}', but got '${actual}'`);
}
