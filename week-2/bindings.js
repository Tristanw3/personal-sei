const sayHello = function() {
	console.log('Hello ' + this.name);
	this.name = 'another';
};

const person = {
	name: 'Lewis'
};

// sayHello.call(undefined, person.name);

const hi = sayHello.bind(person);
hi();
