function find_min(A) {
    answer = A[0]
    i = 1
    
    while (i<A.length){
        if (answer > A[i]){
            answer = A[i]}
        i = i + 1
    }
    
    return answer
    }

console.log(find_min([7,2,3,4,5,6]))
console.log(find_min([100, 12, 15, 22, 3,4,5,6]))
console.log(find_min([4,5,6, -1]))
console.log(find_min([5, -1,6]))
console.log(find_min([5]))

    