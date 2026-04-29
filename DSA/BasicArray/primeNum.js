//  let have a num to check for prime

let num = 345;
let c = 0;
let p = 1;

while (p <= num) {
	if (num % p == 0) {
		c++;
	}
	p++;
}

if (c == 2) {
	console.log('prime');
} else {
	console.log('non prime');
}



// prime between a range
let n = 10;
let m = 90;

while (n <= m) {
	let i = 2;
	let count = 0;

	while (i < n) { // ye loop n se i / means i ko n pr rkh kr hr baar n tk i ke liye chk
		if (n % i == 0) {
			count++;
		}
		i++;  
	}

	if (count == 0 && n > 1) {
		// apne ko mila n se phle ke number se devide nhi ho rha
		console.log(n);
	}

	n++;
}

