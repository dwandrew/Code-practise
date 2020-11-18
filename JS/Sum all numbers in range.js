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
  