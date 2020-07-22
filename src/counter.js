function counter (startNum = 0, step = 1) {
	let count = startNum;

	return {
		count: function() {
			return count += step;
		},
		reset: function() {
			count = 0;
			step = 1;
		}
	} 
		
	};
	

let first = counter(12, 3);

console.log(first.count());
console.log(first.count());
console.log(first.count());
console.log(first.count());

first.reset();

console.log(first.count());
console.log(first.count());
console.log(first.count());
console.log(first.count());
