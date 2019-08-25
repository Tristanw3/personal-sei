// const Person = function(name, surname) {
// 	this.name = name;
// 	this.surname = surname;

// 	this.fullName = function() {
// 		console.log(`${this.name} ${this.surname}`);
// 	};
// };

// const mary = new Person('Mary', 'Smith');

// mary.fullName();

const Cat = function(name, age, breed, favouriteFood) {
	this.name = name;
	this.age = age;
	this.breed = breed;
	this.favouriteFood = favouriteFood;

	(this.meow = function() {
		console.log(this.name + ' meows.');
	}),
		(this.eats = function(food) {
			console.log(`${this.name} eats ${this.favouriteFood}.`);
		});
	if (favouriteFood === undefined) {
		this.favouriteFood = 'fish';
	}
};

var ramboTheCat = new Cat('Rambo', 3, 'Siamese');

ramboTheCat.eats();

ramboTheCat.favouriteFood = 'mice';

ramboTheCat.eats();

console.log(ramboTheCat instanceof Cat);

var a = [ 1, 2, 3, 4, 6, 5, 6 ];

var x = a.reduce(function(acc, current, d) {
	return acc + current;
});

console.log(x);
