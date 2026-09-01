import http from 'http'

const server =http.createServer((reg,res)=> {
    res.write("<h1>Hello Client</h1>");
    res.write("<h2>Akhilesh</h2>");
    res.end();

});
server.listen(4444,()=>console.log("Server is running at 4444..."));
