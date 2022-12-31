const http = require ("http");

const POST = 2000;
const hostname = "localhost";

const server = http.createServer((req,res) => {
    console.log (req.url) 


    res.end("working")
});

server.listen(POST,hostname,()=>{
    console.log(`server is working on http://${hostname}:${POST}`)
});