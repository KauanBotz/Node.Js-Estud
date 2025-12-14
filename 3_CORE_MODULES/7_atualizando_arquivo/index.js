const http = require ('http')
const fs = require ('fs')
const url = require ('url')

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name
    
    if (!name) {
    fs.readFile('index.html', function(err, data) { 
        if (err) {
            res.writeHead (500, {'Content-Type': 'text/plain'})
            return res.end ('Err refreshing the page.')
        }  
        res.writeHead (200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
    } else {

        const updateName = name + ',\r\n'

        fs.appendFile(`file.txt`, updateName, function (err)  {
            if (err) {
                res.writeHead (500, {'Content-Type': 'text/plain'})
                return res.end ('Err updating the file.')
            }
            res.writeHead(302, {
                location: '/',
            })
            return res.end()    
        })
    }
    
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})