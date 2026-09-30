# Express


1. Create project Folder
2. goto project and open terminal
3. execute 'npm init -y'
4. install 'npm i nodemon -D'
10. install 'npm i express'
5. open package.json
    a. change 'type:'module''
    b. update script {
        "start":"node peg1.js"
        "dev":"nodemon prg1.js"
    }
6. create prg1.js in folder
7. add folderName/node_module in .gitignore
8. we can also add status code with status function it can be change in send function 
## map


  this fucntion is used to iterate any arr it must reaturn new arr 
  syntax
  ```
  array.map((item))=>{
    return
  })
  array.map((item)=>())
  ```
 in first syntax we have to used return keyworsd where in syntax 2 is not requirsedd 
 exclude number of properties fronm any json objects 
## search

 to search any item in json array we used find method it will return null on unsuccessful on objects on successful
```
arra.find((item)=>ietm.id===id);
