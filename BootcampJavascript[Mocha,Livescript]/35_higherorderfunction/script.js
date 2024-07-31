debugger
function a(b) {
     console.log(b)
     b()
    // console.log(typeof(b))
        
}
// a("Hii")
// a({username : 'sendee', age : 22})
// a([1,2,3,4])
 function sayHi() {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
 }
a(sayHi)
