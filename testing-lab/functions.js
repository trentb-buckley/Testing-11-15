// echo \"Error: no test specified\" && exit 1

const returnTwo = () => {
    return 2
}

const greeting = (name) => {
    if(name === true){
        return 'Hello, true'
    }
    else if(name === false) {
        return 'Hello, false'
    }
    else if(typeof name === 'number') {
        return "Hello, number"
    } else {
        return `Hello, ${name}`;
    }
}
console.log(greeting(true))

const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}


module.exports = {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
}

// console.log(((.35 * 100)/100) + ((.1 * 100)/100))

// console.log(typeof true)