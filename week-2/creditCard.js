function validateCreditCard(cardNum) {
	let cardNumStr = cardNum.toString();
	if (typeof cardNum === 'number' && cardNumStr.length === 16) {
		var splitNumbers = cardNumStr.split('');
		let unique = [ ...new Set(splitNumbers) ];
		if (unique.length != 1) {
			if (splitNumbers[splitNumbers.length - 1] % 2 === 0) {
				let numArray = [];
				splitNumbers.forEach((element) => {
					numArray.push(parseInt(element));
				});
				var total = 0;
				for (let i = 0; i < numArray.length; i++) {
					total = total + numArray[i];
				}
				return total > 16;
			}
		}
	}
	return false;
}

// // var cc = 1111111111111111;
// var cc = 1111111111111111;
// console.log(validateCreditCard(cc));

var valid1 = 9999999988880000;
var valid2 = 6666666666661666;

var invalid1 = 'a92332119c011112';
var invalid2 = 4444444444444444;
var invalid3 = 1111111111111110;
var invalid4 = 6666666666666661;

console.log(validateCreditCard(valid1));
console.log(validateCreditCard(valid2));

console.log(validateCreditCard(invalid1));
console.log(validateCreditCard(invalid2));
console.log(validateCreditCard(invalid3));
console.log(validateCreditCard(invalid4));
// The following credit card numbers are valid:
// 9999 - 9999 - 8888 - 0000
// 6666 - 6666 - 6666 - 1666
// The following credit card numbers are invalid:
// a923 - 3211 - 9c01 - 1112 invalid characters
// 4444 - 4444 - 4444 - 4444 only one type of number
// 1111 - 1111 - 1111 - 1110 sum less than 16
// 6666 - 6666 - 6666 - 6661 odd final number
