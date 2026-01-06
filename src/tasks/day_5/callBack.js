function test(a, b, calc) {
    return calc(a,b)
}

function calc(a, b) {
    return a+b
}

console.log(test(5,4,calc));
