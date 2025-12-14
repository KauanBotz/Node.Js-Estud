const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    
    const urlInfo = require('url').parse(req.url, true);
    const pesquisa = urlInfo.query.pesquisa

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if(!pesquisa) {
        res.end('<h1>Digite um item</h1> <form method="GET"><input type="text" name="pesquisa"/><input type="submit" value="Enviar"/></form>')
    } else {
        res.end(`<h1>Voce pesquisou uma: ${pesquisa}</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})