function translatePigLatin(str) {
    if(str[0].match(/[AEIOUaeiou]/)){
      str+='way'
      return str
      }
    else {
     str = str.split(/(?![^aeiou])/g)
     let init = str.shift()
     str.push(init+'ay')
     str = str.join('')
     return str
    }
  
}

translatePigLatin("consonant");
translatePigLatin("glove")
translatePigLatin("Olive")