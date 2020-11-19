function steamrollArray(arr) {
    return arr.reduce(function(a, b) {
       if (Array.isArray(b)) {
         return a.concat(steamrollArray(b))
       }
       return a.concat(b)
     }, [])
   }
   
   steamrollArray([1, [2], [3, [[4]]]]);

//    Intermediate Algorithm Scripting: Steamroller
//    Flatten a nested array. You must account for varying levels of nesting.   