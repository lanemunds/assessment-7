

//sum zero 

const sumZero = (arr)=>{
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length;j++){
            if(arr[i] + arr[j] === 0 ){
             return true
            }
                
            }
        }return false
    }
    

console.log(sumZero([1,2,3,4]))

//0(n)


//unique Characters

const UniqueChars = (string)=>{
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length;j++){
            
            if( i !== j && arr[i] === arr[j]){
             return false}
            
            }
        }
        return true
    }
    

console.log(UniqueChars('helo'))

//0(n)

//pangram sentence

const pangram = (string) =>{
    let string2 = string.toLowerCase()
    let arr = string2.split('')

   if (arr.includes('a') === true &&
   arr.includes('b') === true &&
   arr.includes('c') === true &&
   arr.includes('d') === true &&
   arr.includes('e') === true &&
   arr.includes('f') === true &&
   arr.includes('g') === true &&
   arr.includes('h') === true &&
   arr.includes('i') === true &&
   arr.includes('j') === true &&
   arr.includes('k') === true &&
   arr.includes('l') === true &&
   arr.includes('m') === true &&
   arr.includes('n') === true &&
   arr.includes('o') === true &&
   arr.includes('p') === true &&
   arr.includes('q') === true &&
   arr.includes('r') === true &&
   arr.includes('s') === true &&
   arr.includes('t') === true &&
   arr.includes('u') === true &&
   arr.includes('v') === true &&
   arr.includes('w') === true &&
   arr.includes('x') === true &&
   arr.includes('y') === true &&
   arr.includes('z') === true 
){
   return true
   }else{
    return false
   }
}
console.log(pangram('abcdefghijklmnopqstuvwxyz'))

//o(n^2)

// longest word

const longestWord = (arr)=>{
    let lgth = 0
for(let i = 0; i<arr.length; i++){
if (arr[i].length > lgth){
    lgth = arr[i].length
}

return lgth
}
}
console.log(longestWord(['helllllllo','hi','hobo']))

//o(n)