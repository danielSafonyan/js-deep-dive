// Failed number conversion (e.g. explicit ones like 
const parseInt_ = parseInt("blabla")
console.log("parseInt_", parseInt_)

const Number_ = Number(undefined)
console.log("Number_", Number_)

const MathAbs_ = Math.abs(undefined)
console.log("parseInt_", parseInt_)

// Math operation where the result is not a real number
const MathSqrt_ = Math.sqrt(-1)
console.log("MathSqrt_", MathSqrt_)

// Indeterminate form (e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)
const IndeterminateForm_ = Infinity / Infinity
console.log("IndeterminateForm_", IndeterminateForm_)

// A method or expression whose operand is or gets coerced to NaN (NaN is contagious) 
const Power_ = 7 ** undefined
console.log("Power_", Power_)

const Mult_ = 7 * "blabla"
console.log("Mult_", Mult_)
// Other cases where an invalid value is to be represented as a number 
const Date_ = new Date("blabla").getTime()
console.log("Date_", Date_)

const CharCode_ =  "".charCodeAt(1)
console.log("CharCode_", CharCode_)