const http = require("http");


http.createServer((req, res) =>
{
    res.writeHead(200,{'content-type': 'application/json'});
   

    if(req.url === '/produto' )
    {
        res.end(JSON.stringify( {message: "rota de produto"}))
    } 

    if(req.url === '/usuarios')
    {
        res.end(JSON.stringify({message: "rota de usuarios"}))
    }

}  ).listen(4001 ,()=> {console.log("server is running ")})