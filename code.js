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


 const hasUniqueChars = (string) => {
for (let i = 0; i < string.length; i++) {
    
    
}
 }
