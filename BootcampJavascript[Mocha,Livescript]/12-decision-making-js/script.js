const userName = prompt('Enter Your Name.')
const userAge = parseInt(prompt('Enter Your Age'))

console.log(`Name : ${userName}`)
console.log(`Age : ${userAge}`)


if (userAge >= 0 && userAge <= 4) {
    console.log(`${userName} is a kid.`)
    console.log('He/She is playing .')
} else if (userAge >= 5 && userAge <= 17) {
    console.log(`${userName} is a school student.`)
    console.log('He/She is learning .')
} else if (userAge >= 18 && userAge <= 24) {
    console.log(`${userName} is a student.`)
    console.log('He/She is learning computer science.')
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${userName} is a working professional.`)
    console.log('He/She is web developer.')
} else if (userAge > 45) {
    console.log(`${userName} is a retired.`)
    console.log('He/She reads newspaper.')
} else if (userAge >= 121) {
    console.log(`${userName} is a immortal.`)
} else {
    console.log('Please Enter a valid Age.')
}
console.log('Program Ended!!')