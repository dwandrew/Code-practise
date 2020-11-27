function joinedLogger(level, sep) {
  // write your code here
  let array = []
  return function f(...messages){
        messages.forEach(message =>{
          if (message.level >= level){
              array.push(message.text)
          }
          })
          console.log(array.join(`${sep}`))
          let string = array.join(`${sep}`)
          return string
  }
}