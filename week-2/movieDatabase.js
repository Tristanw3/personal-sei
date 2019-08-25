function printMovieInfo(movie) {
	console.log(
		`My favourite movie is ${movie.title} and it runs for ${movie.durationHours} hours. It has the tags: ${movie.tags.join(
			', '
		)}.`
	);
}

favMovie = {
	title: 'Aliens',
	durationHours: 2,
	tags: [ 'Space', 'Action', 'Sci-fi' ]
};

printMovieInfo(favMovie);
