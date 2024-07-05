/*
+ 1 w stringu [+!![]  + +!![]] => string[1] (drugi znak)
((![] + [])[+!+[]]) + ((![] + [])[+!+[]]+ ([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]])
*/
/*
// a
console.log(
    (![] + [])[+!+[]]
)

// b
console.log(
    ([] + {})[+!![] + +!![]]
)

// c
console.log(
    ([] + {})[+!![] + +!![]  + +!![]  + +!![]  + +!![]]
)

// d
console.log(
    ([][[]] + {})[+!![] + +!![]]
)

// e
console.log(
    ([][[]] + {})[+!![] + +!![] + +!![]]
)

// f
console.log(
    ([][[]] + {})[+!![] + +!![] + +!![] + +!![]]
)

// g ?????????????

// h ?????????????

// i
console.log(
    ([][[]] + {})[+!![] + +!![] + +!![] + +!![] + +!![]]
)

// j
console.log(
    ([] + {} )[+!![] + +!![] + +!![]]
)

// k ??????????

// l ??????????

// m ???????

// n
console.log(
    ([][[]] + {})[+!![]]
)

// o
console.log(
    ([] + {})[+!+[]]
)

// u
console.log(
    ([][[]]  + {})[+![]]
)

// p ??????

// r
console.log(
    (!![] + {})[+!![]]
)

// s 
console.log(
    (![] + [])[!+[] + !![] + !![]]
)

// t
console.log(
    ([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]]
)

// u
console.log(
    ([][[]] + {})[+![]]
)

// w ?????


// x ?????

// y
console.log(
    (+!![] / +![] + {})[+!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]]
)

// z ??????

// " "
console.log(
    ([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![]]
)
*/
function generator(string) {
    string.toLowerCase()
    const arr = string.split('');
    let res = ""
    if(arr.length === 0) return "";
    let first = true

    arr.forEach(char => {
        if(first) {
            res += get_char(char)
            first = false
        } else {
            res += `+${get_char(char)}`
        }
    })
    return res
}

function get_char(char) {
    if(char === "a") {
        return "((![] + [])[+!+[]])"
    }else if(char === "b") {
        return "(([] + {})[+!![] + +!![]])"
    }else if(char === "c") {
        return "(([] + {})[+!![] + +!![]  + +!![]  + +!![]  + +!![]])"
    }else if(char === "d") {
        return "(([][[]] + {})[+!![] + +!![]])"
    }else if(char === "e") {
        return "(([][[]] + {})[+!![] + +!![] + +!![]])"
    }else if(char === "f") {
        return "(([][[]] + {})[+!![] + +!![] + +!![] + +!![]])"
    }else if(char === "g") {
        return "((_=>typeof 0n)()[2])"
    }else if(char === "h") {
        return "((new Date(2)+'')[1])"
    }else if(char === "i") {
        return "(([][[]] + {})[+!![] + +!![] + +!![] + +!![] + +!![]])"
    }else if(char === "j") {
        return "(([] + {} )[+!![] + +!![] + +!![]])"
    }else if (char === "k") {
        return  "'k'"
    }else if (char === "l") {
        return "'l'"
    }else if (char === "m") {
        return "((typeof Symbol())[2])"
    }else if (char === "n") {
        return  "(([][[]] + {})[+!![]])"
    }else if (char === "o") {
        return "(([] + {})[+!+[]])"
    }else if(char === "p") {
        return "((new Date(22418712654)+'')[6])"
    }else if (char === "u") {
        return "(([][[]]  + {})[+![])"
    }else if (char === "r") {
        return  "((!![] + {})[+!![]])"
    }else if (char === "s") {
        return "((![] + [])[!+[] + !![] + !![]])"
    }else if (char === "t") {
        return "(([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]])"
    }else if (char === 'u') {
        return "(([][[]] + {})[+![]])"
    }else if (char === "w") {
        return "'w'"
    }else if (char === "x") {
        return "'x'"
    }else if (char === "y") {
        return "((+!![] / +![] + {})[+!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]+ +!![]])"
    }else if (char === "z") {
        return "'z'"
    }else if (char === " ") {
        return "(([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![]])"
    }else if (char === "v") {
        return "((([][((![] + [])[+!+[]])+(([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]])]+[])[((![] + [])[+!+[]])+(([] + {})[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]])]('-10')))"
    }else{
        return "?"
    }
}

const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Input some string:   `, string => {
    const res = generator(string)
    console.log(`code: ${res}`);
    console.log("\n")
    console.log(eval(res))
    rl.close();
  });