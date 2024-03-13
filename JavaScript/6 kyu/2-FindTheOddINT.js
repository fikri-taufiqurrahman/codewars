// function findOdd(A) {
//     const sortArr = A.sort()
//     let node = 0
//     let storageArr = []
//     let answer = ""
//     for (let i = 0; i < sortArr.length; i++) {
//         if(sortArr[i]==sortArr[i+1]){
//             node++
//         } else{
//             node++
//             storageArr.push([node,sortArr[i]])
//             node = 0
//         }
//     }
//     for (let i = 0; i < storageArr.length; i++) {
//         for (let j = 0; j < storageArr[i].length; j++) {
//             if(storageArr[i][0]%2==1){
//                 return answer = storageArr[i][1]
//             }
//         }        
//     }
//   }




const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))