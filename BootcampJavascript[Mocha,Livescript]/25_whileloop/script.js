console.log("Program Started")
// let i = 1;
// while(i<=100) {
//     console.log(i)
//     i = i + 1
// }
const  friendsName = ['Karun','Vijay','Sumant','Naveen','Sandeep']
let i = 0
while (i<friendsName.length){
    // console.log(i + 1 +'.', friendsName[i])
    console.log(`${ i + 1}. ${friendsName[i]} Brightcomgroup`)
    friendsName[i] = friendsName[i] + 'Brightcomgroup'
    i++
}
console.log("Program Ended")