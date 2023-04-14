// PROBLEM 1

let array = [28, 43, -12, 30, 4, 0, 12]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
// O(n^2)


// PROBLEM 2

const hasUniqueChars = (word) => {
    let letters = []
  
    for(let i = 0; i < word.length; i++){
      if(letters.includes(word[i])){
        return false
      } else {
        letters.push(word[i])
      }
    }
  
    return true
  }
  
  console.log(hasUniqueChars('word'))
  console.log(hasUniqueChars('Bob'))
  console.log(hasUniqueChars('racecar'))
// O(n)

// PROBLEM 3

const test = (string) => {
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }
  console.log(test("The quick brown fox jumps over the lazy dog"))
  console.log(test("Waltz, bad nymph, for quick jigs vex."))
  console.log(test("The five boxing wizards jump quickly."))
  console.log(test("The boxing wizards jump quickly."))
//   O(1)

// PROBLEM 4

function find_longest_word(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(let i = 1 ; i < array1.length ; i++)
  {
    if(result.length < array1[i].length)
    {
    result = array1[i];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));
O(n)