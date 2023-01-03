const myObj = {
    firstName: 'Daniil',
    lastName: 'Safonov',
    details : {
        age: 29,
        occupation: 'unemployed'
    }
}

const { firstName, lastName } = myObj
console.log(`Name: ${firstName} ${lastName}`)

const { details : {age} } = myObj
console.log(`Age: ${age}`)

// So, to destructure a nested first you should destructure the property which hold a nested object like this: const { details } = myObj
// Then, to the same line add another level of destructuring : { age }
// The whole construction will look like this: const { details : { age } } = myObj