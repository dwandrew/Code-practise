const howSum = (target, numbers) => {
    if (target === 0) return []
    
    if(target < 0) return null

    for (let num of numbers){
        const remainder = target - num
        array = []
        array.push(num)
        if (howSum(remainder, numbers) === true) {
            return array
        }
    }

    return null
}
console.log(howSum(7, [5,3,4,7]))