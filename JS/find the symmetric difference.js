function sym(...args) {
    let len = args.length
    args = args.map(arg => [...new Set(arg)])
    let all = args.flat()
    let hash = {}
    all.forEach(num => {
      if (hash[num]){
        hash[num] +=1
      }
      else {
        hash[num] = 1
      }
    })
    let keys = Object.keys(hash)
    let array = keys.map( key =>  {if(hash[key] == 1 || hash[key]%2 !=0){
      return parseInt(key)
    }})
    array = array.filter(e => e!=undefined)
    console.log(array)
    return array;
  }

//   Algorithms: Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).