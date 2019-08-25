var x = {
	one: '1',
	two: '2',
	three: '3'
};

function cashRegister(cart) {
	var arr = Object.values(cart);
	var total = 0;
	arr.forEach(function(e) {
		total = total + parseFloat(e);
	});

	return total;
}

console.log(cashRegister(x));
