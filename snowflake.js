/* eslint-disable */
String.prototype.toSnowflakeCase = function() {
    // let snowflakeStr = ''

    // for (let i = 0; i < this.length; i++) {
    //     const currentChar = this[i]
    //     if (i % 2 === 0) {
    //         snowflakeStr += currentChar.toUpperCase()
    //     } else {
    //         snowflakeStr += currentChar.toLowerCase()
    //     }
    // }

    // return snowflakeStr

    const characterArray = this.split('')

    const snowflakeArray = characterArray.map(function(char, index) {
        if (index % 2 === 0) {
            return char.toLowerCase()
        } else {
            return char.toUpperCase()
        }
    })

    const snowflakeString = snowflakeArray.join('')

    return snowflakeString

    // return this.split('')
    //     .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    //     .join('')
}

const myStr = 'ironhack'

console.log(myStr.toSnowflakeCase())

function logThis() {
    console.log(this)
}

logThis()

const ironhack = {
    location: 'Berlin',
    students: 'great (mostly)',
    logThis,
}

ironhack.logThis()
