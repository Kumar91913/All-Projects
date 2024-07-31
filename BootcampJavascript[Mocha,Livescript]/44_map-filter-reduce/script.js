const months = ['January', 'February', 'March', 'April', 'May']

//******************************Map Method *************************************************/
console.log(months.map((month) => {
    console.log(month);
    return month.toUpperCase()
}))


const capitalMonths = months.map((month) => {
         console.log(month);
         return month.toUpperCase()
     })

const FilteredMonths = months.map((month) => {
    console.log(month);
    return month.toUpperCase()
})

const students = [
    {
        name : 'Arun',
        age  : 25,
    },
    {
        name : 'Varun',
        age  : 16,
    },
    {
        name : 'Ajay',
        age  :  17,
    },{
        name : 'vijay',
        age  :  18,
    },
    {
        name : 'santosh',
        age  : 30,
    },
]

students.filter((student) => {
 return true;
 })

// **************************Chaining of map and filter methods*********************

const adultStudent = students.filter((student) => {
    return student.age >= 21;    
}).map((student) => {
    return student.name
})

const adultStudentName = adultStudent.map((student) => {
    return student.age
})

