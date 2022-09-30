const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }

    return false
}



//  console.log(addToZero([1,2,3]))
//  console.log(addToZero([1,2,3,-3]))
//  console.log(addToZero([1,2,3,-1]))


 
 // Time O(n^2)
 // Space O(n^2)
 
 

 let charArr = []

 const hasUniqueChars = (word) => {
   for (let i = 0; i < word.length; i++){
     if (charArr.includes(word[i])){
        return false
     }else {
       charArr.push(word[i])}
   }
   return true
 }
 
//  console.log(hasUniqueChars("Monday"))
//  console.log(hasUniqueChars("Moody"))
//  console.log(hasUniqueChars("oblong"))

  // Time O(n)
  // Space O(n^2)

  const isPangram = (str) => {
    str = str.toLowerCase().split('')
    
    const alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0, 
        f: 0,
        g: 0, 
        h: 0, 
        i: 0,
        j: 0,
        k: 0, 
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    }

    for(let i = 0; i < str.length; i++){
        if(alphabet[str[i]] === 0){
            alphabet[str[i]] += 1
        }
    }

    for(let key in alphabet){
        if(alphabet[key] === 0){
            return false
        }
    }
    
    return true
}

 console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// Time O(n)
// Space O(n)


const findLongestWord = (arr) => {
    let longestLength = 0

    arr.forEach((word) => {
        if(word.length > longestLength){
            longestLength = word.length
        }
    })

    return longestLength

}

console.log(findLongestWord(['bruh', 'canada','arasaka']))


// Time O(n)
// Space O(n)