const nums = [1, 2, 3, 4, 5]

const sum = nums.reduce((accumulator, current, i) => {
    // console.log(accumulator,current);
    // return accumulator + current;
    // console.log(accumulator)
    return accumulator+current;
});

//**Accumulator takes first value of an array**
//**Current is the second position of an array**
//**Index of an array**