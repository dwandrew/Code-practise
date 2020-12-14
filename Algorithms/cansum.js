// Can you get a target sum from a given array on numbers?

// canSum(7, [5,3,4,7]) => true

const canSum = (target, numbers) => {
    if (target === 0) return true

    for (let num of numbers){
        const remainder = target - num
        if (canSum(remainder, numbers) === true) {
            return true
        }
    }

    return false
}