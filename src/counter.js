function counter (startNum = 0, step = 1) {
	let count = startNum;

	return {
		count: function() {
			return count += step;
		},
		reset: function() {
			count = startNum;
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


let second = counter(3, 2);

console.log(second.count());
console.log(second.count());
console.log(second.count());
console.log(second.count());

second.reset();

console.log(second.count());
console.log(second.count());
console.log(second.count());
console.log(second.count());