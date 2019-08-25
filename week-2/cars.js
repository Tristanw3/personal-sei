const car = {
	make: 'Fiat',
	year: 1999,
	position: 0,
	start: function() {
		console.log('Car started.');
	},
	stop: function() {
		console.log('Car stopped.');
	},
	moveForward: function() {
		this.position;
		console.log('Moving forward to ' + this.position + '.');
	}
};

car.moveForward();
