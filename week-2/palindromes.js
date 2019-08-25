String.prototype.reverse = function() {
	let acc = '';
	let value = this.toString();
	for (let index = value.length; index > -1; index--) {
		acc += value.charAt(index);
	}
	return acc;
};

String.prototype.palindrome = function() {
	if (this == this.reverse()) {
		return true;
	}
	// console.log(this.reverse());
	return false;
};

var test = 'dinosaur';
var r = 'racecar';
var m = 'madam';

console.log(test.palindrome());
console.log(r.palindrome());
console.log(m.palindrome());
