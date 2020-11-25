function sumPrimes(num) {
    let primes = [2]
    for (let i = 3; i<=num; i++){
      if( i % 2 !== 0 ){
        let prime = true
        if (prime){
          for(let j=2; j<i; j++){
            if (i % j === 0 ){
              prime = false
            } 
        }
        }
        if(prime){
          primes.push(i)
        }
      }
    
    }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let total = primes.reduce(reducer)
      return total;
    }
    
    console.log(sumPrimes(10));
    console.log(sumPrimes(977))

//     Intermediate Algorithm Scripting: Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.