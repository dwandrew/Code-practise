// Can you get a target sum from a given array on numbers?

// canSum(7, [5,3,4,7]) => true

const canSum = (target, numbers) => {
    if (target === 0) return true
    
    if(target < 0) return false

    for (let num of numbers){
        const remainder = target - num
        if (canSum(remainder, numbers) === true) {
            return true
        }
    }

    return false
}


// console.log(canSum(7, [5,3,4,7]))
// console.log(canSum(22, [5,3,4,7]))
// console.log(canSum(7, [5,3]))

// Memoizing it.

const canSum_two = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return true
    if(target < 0) return false
    for (let num of numbers){
        const remainder = target - num
        if (canSum_two(remainder, numbers, memo) === true) {
            memo[target] = true
            return true
        }
    }

    return false
}

console.log(canSum(7, [5,3,4,7]))
console.log(canSum(22, [5,3,4,7]))
console.log(canSum(1025, [5,3]))