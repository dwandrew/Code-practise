// O(2^n)

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2)
}


// console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))

// Using dynamic programming

const fib_two = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib_two(n-1, memo) + fib_two(n-2, memo)
    return memo[n];
}

console.log(fib_two(6))
console.log(fib_two(47))
