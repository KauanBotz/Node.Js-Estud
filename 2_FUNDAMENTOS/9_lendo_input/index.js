const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual é a sua linguagem preferida? ", (language) => {
    if(language === "Python" || "python") {
        console.log("Isso nem é linguagem seu viadinho gay.")
    } else {
    console.log(`A minha linguagem preferida é ${language}`)}
    readline.close()
})