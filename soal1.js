var text = "NEGIE1"


function reverseString(str) {
    const lastIndex = str.length - 1;
    const exceptChar = str[lastIndex];
    const finish = str.slice(0, lastIndex).split('').reverse().join('');
  
    return finish + exceptChar;
}

const test = reverseString(text)
console.log(test)
