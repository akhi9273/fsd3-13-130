import http from 'http'

const server =http.createServer((reg,res)=> {
    res.write("<h1>Hello Client</H1>");
    res.end();

});
server.listen(4444,()=>console.log("Server is running at 4444..."));
