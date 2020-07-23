function sumArg() {
	let count = 0;
	return function(i) {
		return count = count + i;
	}
}

let res = sumArg();
console.log('+2 = ', res(2));

console.log('+3 = ', res(3));

console.log('+4 = ', res(4));

console.log('+5 = ', res(5));

module.exports = { sumArg };