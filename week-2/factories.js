const createCat = function(name, age, breed, favouriteFood) {
	if (favouriteFood === undefined) {
		favouriteFood = 'tuna';
	}
	return {
		name: name,
		age: age,
		breed: breed,
		favouriteFood: favouriteFood,
		meow: function() {
			console.log(this.name + ' meows.');
		},
		eats: function(food) {
			console.log(`${name} eats ${food}.`);
		}
	};
};

let yoda = createCat('yoda', 2, 'siamese');

yoda.eats(yoda.favouriteFood);
yoda.favouriteFood = 'nutella';

yoda.eats(yoda.favouriteFood);
