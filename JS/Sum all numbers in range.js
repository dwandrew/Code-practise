function sumAll(arr) {
    arr = arr.sort((a, b) => a - b)
    let total = 0
    let init = arr[0]
    while (init <= arr[1]){
    total+= init
    init+=1
    }
    return total;
  }
  
  sumAll([1, 4]);
  
//   Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.