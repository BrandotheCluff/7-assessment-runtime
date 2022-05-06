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

const pangram = str => {
    let alphArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let wordArr = str.split('')
}