// what will be the ouput of this code?

// for (var i = 0; i < 3; i++) {
//     const log = () => console.log(i)
//     setTimeout(log, 300)
// }
// console.log(i) // should be 3, 3, 3, 3

// why is that? Because var creates a global variable and log() closes on a global variable which in the end of a loop = 3 and by the end of timeouts = 3, so we are logging the same value.

// what will be the ouput of this code?

for (let i = 0; i < 3; i++) {
    const log = () => console.log(i)
    setTimeout(log, 300)
}
// console.log(i)

// we will get an error because i is not declared.
// if we comment out console.log(i) the output should be: 0, 1, 2. Why? Because let is block scoped and value remains only during the iteration.

