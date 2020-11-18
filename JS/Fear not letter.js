function fearNotLetter(str) {
    let first = str.charCodeAt(0)
    let last = str.charCodeAt(str.length-1)
    let i = first
    let test = []
    while (i <= last){
      test.push(String.fromCharCode(i))
      i++
    } 
    let split = str.split('')
    for (let j=0; j<test.length; j++){
      if (split.indexOf(test[j]) === -1){
        return test[j]
      }
    }
    return undefined;
  }
  
  fearNotLetter("abce");


// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.