function sumFibs(num) {
    if (num <= 1){
      return 1
    }
    let fibnums = [1,1]
    const reducer = (accumulator, currentValue) =>    accumulator + currentValue
    while (fibnums[fibnums.length-1] < num){
      let next = fibnums[fibnums.length-1] + fibnums[fibnums.length-2]
      fibnums.push(next)
    }
    let odd = fibnums.filter(number => number%2 !== 0 && number <= num)
      let sum = odd.reduce(reducer)
    return sum;
  }
  
  sumFibs(4);
  sumFibs(75024)
  sumFibs(75025)


// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

