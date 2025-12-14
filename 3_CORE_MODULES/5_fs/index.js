const http = require ('http')
const port = 3000
const fs = require ('fs')

const server = http.createServer((req, res) => {

    fs.readFile('mensagem.html', (err, data) => {   
        if (err) {
            res.writeHead = (404, {'Content-Type': 'text/plain'})
            return res.end('Arquivo não encontrado') 
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })
    
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})