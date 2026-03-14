// diagonal sum of a matrix

let matx = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

let n = 3;
function daisum(n, mat) {
	let sum = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i == j) {
				sum = sum + mat[i][j];
			}
		}
	}
	return sum;
}

//console.log(n, daisum(n, matx));

// now we nee to improve it for better performance and sum of both diagonals

function diagonalSum(n, mat) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += mat[i][i];
	}
	return sum;
}
//console.log(n, diagonalSum(n, matx));

function diagonalSumBoth(n, mat) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += mat[i][i]; // Primary diagonal
		if (i !== n - i - 1) {
			// Avoid double counting the center element in odd-sized matrices
			sum += mat[i][n - i - 1]; // Secondary diagonal
		}
	}

	return sum;
}
//console.log(n, diagonalSumBoth(n, matx));

// Further DSA problems on matrix can be added here
// 1. Rotate matrix by 90 degrees
// 2. Spiral order traversal
// 3. Search in a sorted matrix
// 4. Set matrix zeroes
// 5. Transpose of a matrix

// 6. Matrix multiplication
let matA = [
	[1, 2, 3],
	[4, 5, 6],
];

let matB = [
	[7, 8, 9, 10],
	[10, 11, 12],
	[13, 14, 15],
];
// we need to multiply matA and matB
//but rules of matrix multiplication say that number of columns in first matrix should be equal to number of rows in
//  second matrix

function multiplyMatrices(matA, matB) {
	let rowsA = matA.length;
	let colsA = matA[0].length;
	let rowsB = matB.length;
	let colsB = matB[0].length;
	if (colsA !== rowsB) {
		console.log('Matrix multiplication not possible');
		return;
	}
	let result = new Array(rowsA);
	for (let i = 0; i < rowsA; i++) {
		result[i] = new Array(colsB).fill(0);
	}
	for (let i = 0; i < rowsA; i++) {
		for (let j = 0; j < colsB; j++) {
			for (let k = 0; k < colsA; k++) {
				result[i][j] += matA[i][k] * matB[k][j];
			}
		}
	}
	return result;
}

// 7. Find saddle point in a matrix
// 8. Count islands in a binary matrix
// 9. Print matrix in wave form
// 10. Find median in a row-wise sorted matrix
// 11. Snake pattern in matrix
// 12. Rotate matrix layers
// 13. Maximum sum submatrix
// 14. Diagonal traversal of matrix
// 15. Boundary traversal of matrix
// 16. Search in a row-wise and column-wise sorted matrix //important
// 17. Kth smallest element in a sorted matrix
// 18. Largest rectangle of 1s in a binary matrix
// 19. Count of submatrices with all 1s
// 20. Minimum path sum in a grid
