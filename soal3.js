function countOccurrences(arrayA, arrayB) {
    const occurrences = {};
    for (const item of arrayA) {
      occurrences[item] = (occurrences[item] || 0) + 1;
    }
    const result = [];
    for (const item of arrayB) {
      result.push(occurrences[item] || 0)
    }
  
    return result;
  }

let INPUT = ['xc', 'dz', 'bbb', 'dz']  
let QUERY = ['bbb', 'ac', 'dz']  

const occurrences = countOccurrences(INPUT, QUERY);
console.log(occurrences);