let recipe = {
	name: 'spagBowl',
	serves: 2,
	ingredients: [ 'tomato paste', 'pasta', 'herbs' ],
	makeDish() {
		var dish = `You made ${this.name} using ${this.ingredients} for ${this.serves}.`;
		console.log(dish.replace(',', ', '));
	}
};

recipe.makeDish();
