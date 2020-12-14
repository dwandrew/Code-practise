// Basic recursive

const howSum = (target, numbers) => {
    if (target === 0) return []
    if(target < 0) return null

    for (let num of numbers){
     const remainder = target - num
     const result = howSum(remainder, numbers)
     if (result !== null){ 
         return [...result, num]
     }
    }

    return null
}
console.log(howSum(7, [5,3,4,7]))
console.log(howSum(8, [5,3,4,7]))
console.log(howSum(22, [5,3,4,7]))


// Memoised
const howSum_two = (target, numbers, memo = {}) => {
    if (target in memo) return target[memo]
    if (target === 0) return []
    if(target < 0) return null

    for (let num of numbers){
     const remainder = target - num
     const result = howSum_two(remainder, numbers, memo)
     if (result !== null){ 
         memo[target] = [...result, num]
         return [...result, num]
     }
    }

    return null
}
console.log(howSum_two(7, [5,3,4,7]))
console.log(howSum_two(8, [5,3,4,7]))
console.log(howSum_two(1220, [5,3,4,7]))