localhost -URL
127.0.0.1-IP address
ctrl+c-stop the server

every request from a client 
has a pair of{ request ,
response}
## NOde package Manager (NPM)
used to install ,run,uninstall any program /project and package 
-npm install <packageName>
-npm uninstall<packageName>


to use npm ,the project must be npm projact,
to create npm projectr we can use 

-npm init -y
-it create a package.json file automatically 
package.json holds all the information related to install 
package from npm 
-update package.json,set type='module'
-it also create a folder node_modules automatically 
-node_modules holds the package /library files 
-generally we ignore the node_modules by .gitignore









Nodemon -it restart the server automatically when file change,
to install

>npm  i nodemon -D

Note: -D Flag will install this package as devloper dependency 


-to execute any program,update 
the package.json file then start 
the server as 
<b> npm run dev </b>
-start -> it will execute the app 
on deployment 
-dev -> it will start server in 
devlopment phase (only for developer)
-res: it will return contents (json/html/plain) to the user /client
-req: it will retrive the information 
from client to the server
-server send also statusCodes to the client, that indicates the error /success message 
## status codes 
-200 ->ok 
-201->created
-400->BAd request 
-402->Unautorized
-403->forbidden
-404->not found 
-500->inetrnal server error 
#Context type 
-text/plain 
-text/html
-application/json
-text/css

the content type and status code can be send back to client by two ways 

1.res.writeHead 
2.res.setheader
3.res.statusCode


