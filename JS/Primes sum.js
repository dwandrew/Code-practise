function sumPrimes(num) {
    let primes = []
    for (let i = 2; i<=num; i++){
      if (i == 2){
        primes.push(2)
      }
      else if( i % 2 !== 0 ){
        let prime = true
        for(let j=2; j<i; j++){
          if (i % j === 0 ){
            prime = false
          } 
        }
        if(prime === true){
          primes.push(i)
        }
      }
    
    }
    
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let total = primes.reduce(reducer)
      console.log(primes)
      console.log(total)
      return total;
    }
    
    sumPrimes(10);
    sumPrimes(977)

//     Intermediate Algorithm Scripting: Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.