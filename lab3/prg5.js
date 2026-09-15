import http from  'http'


const server =http.createServer((req,res)=>{
    //req method -> GET ,put,DELETE,PATCH
    console.log("Method:",req.method);
    comsole.log("URL",req.url);
    //browser can send only GET request to the server 
    //post/put/patch/delete -> can be checked by api tester
    //api tester :-postman echo api ,thunder client
    



});