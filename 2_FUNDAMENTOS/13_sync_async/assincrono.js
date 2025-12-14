const fs = require('fs')

console.log('inicio')

fs.writeFile("arquivo1.txt", "kauan", function(err) {
    setTimeout(function() {
        console.log("Arquivo criado!")
    }, 2000)
})

console.log('Fim')