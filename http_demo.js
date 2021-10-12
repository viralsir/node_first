let http=require("http");
let server=http.createServer((request,response)=>{
     response.end("Welcome to the world of node js");

})

server.listen(9090,()=>{
    console.log("server is running at port no 9090")
})

