// const equalZero = arr => {
//     let sum = false
//     for(let i = 0; i < arr.length; i++){
//         for(let k = 0; k < arr.length; k++){
//            if (i !== k) {
//             if (arr[i] + arr[k] === 0){
//                 sum = true
//             }
//         }
//     }        
//  }
//  return sum 
// }    
// console.log(equalZero([1, 2, 3, -2]))

// O(n^2)



// const uniqChar = str => {
//     let wordArr = str.split('')
//     let unique = true
//     for(let i = 0; i < wordArr.length; i++){
//         for(let k = 0; k < wordArr.length; k++){
//            if (i !== k){
//                if (wordArr[i] === wordArr[k]){
//                    unique = false
//                }
//         } 
//     } wordArr.join('')
//   }
//   return unique 
// }
// console.log(uniqChar('Monday'))

// O(n^2)



// const pangram = str => {
//     // let alphArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     // let wordArr = str.split('')
//     str = str.toLowerCase().split('').filter((e) => e >= "a" && e <= "z").length > 25;

//     let map = {}

//     for (let i = 0; i < str.length; i++){
//         let letter = str[i]
//         if(map[letter]){
//             map[letter] += 1
//         }else {
//             map[letter] = 1
//         }
//     }
//     let count = 0

//     for(let key in map){
//         count++
//     }
//     if(count >= 26){
//         return true
//     } else {
//         return false
//     }
// }

// O(n)



// const findLongest = arr => {
//     let wordLength = 0
//     arr.forEach(word => {
//         if(word.length > result){
//             result = word.length
//         }
//     })
//     return result 
// }

// O(n)