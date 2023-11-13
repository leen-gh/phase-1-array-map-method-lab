const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const nt = tutorials.map((stringy) =>{
    const words = stringy.split(" ");
    //console.log(words)
    const tt = words.map((word) => { 
        //console.log(word)
      return word[0].toUpperCase() + word.substring(1) 
    }).join(" ");
    return tt
  })
 
  return nt
}
//console.log(titleCased())
