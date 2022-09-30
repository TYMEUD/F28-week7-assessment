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



 console.log(addToZero([1,2,3]))
 console.log(addToZero([1,2,3,-3]))
 console.log(addToZero([1,2,3,-1]))


 
 // Time O(n^2)
 
 

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
 
 console.log(hasUniqueChars("Monday"))
 console.log(hasUniqueChars("Moody"))
 console.log(hasUniqueChars("oblong"))

  // Time O(n)