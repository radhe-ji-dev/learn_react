const obj = {
	name: 'rk',
	age: '28',
	address: {
		city: 'bsw',
		state: 'rajsthan',
		country: 'india',
	},
};

var getname = obj.name;
console.log(getname);

// ab dekhna h rest and spread
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
let [c, ...d] = [1, 2, 3, 4, 5, 6];
console.log(d);

let obj2 = obj;
console.log(obj2);

//ab yha se dekte hai call  y value jo ki primitive types k liye h or call by ref jo object ke liye hai

//spred dete hai only function ke args me

let names = 'name';

let arr = [1, 2, 3, 4, 5, 6];

let printarr = function (a, b) {
	return (a, b);
};

console.log(printarr(names, arr));

//pass by value and pass by reference

let n = 7;

let nc = n;
console.log(nc)
