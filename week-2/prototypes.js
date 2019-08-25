String.prototype.reverse = function() {
	let acc = '';
	let value = this.toString();
	for (let index = value.length; index > -1; index--) {
		acc += value.charAt(index);
	}
	return acc;
};

var test = 'test value';

console.log(test.reverse());
