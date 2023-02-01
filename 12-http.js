const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end('Welcome to our home page')
    }
    if(req.url === "/About"){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>OOPS!</h1>
<p> We are not able to find the page you're looking for </p>
<a href = "/">Back home</a>
    `)
})
server.listen(5000)