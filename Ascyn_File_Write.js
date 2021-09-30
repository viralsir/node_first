/*
  fs is core module
  how to write or append data into file.
 */
let fs=require("fs");
var msg="hi wel come to node js\n ";
fs.writeFile("first.txt",msg,{flag:"a+"},(err) =>{
    if(!err)
    {
       console.log("data is being stored successfully");
    }

})
console.log("statement2");
console.log("statement3");