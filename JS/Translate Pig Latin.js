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

// Intermediate Algorithm Scripting: Pig LatinPassed
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.