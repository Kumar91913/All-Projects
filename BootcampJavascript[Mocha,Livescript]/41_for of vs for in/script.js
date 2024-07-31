/// The Object
const person = {
    firstName : 'Manoj',
    lastName  : 'Sharma',
    Place     : 'Hyderabad',
    Occupation: 'Software Engineer',
    Gender    : 'Male'
}

for(value in person){
    console.log(value, ':' ,person[value])
}
/// The Array
//  const fruits = ['apple','banana','grapes','Amala']
// for( const fruit in fruits) {
//     console.log(fruit)
// }
// for (const fruit of fruits) {
//     console.log(fruit);
// }