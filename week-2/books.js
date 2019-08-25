let books = [
	(harryPotter = {
		pages: 400,
		readingTimeDays: 100,
		paperBack: true,
		firstSentence: 'Something about harry'
	}),
	(twighlight = {
		pages: 300,
		readingTimeDays: 100,
		paperBack: true,
		firstSentence: 'Very boring text'
	}),
	(theDictionary = {
		pages: 1000,
		readingTimeDays: 10000,
		paperBack: false,
		firstSentence: 'Abacus - A old timey calculator'
	})
];

console.log(books[0].pages);
