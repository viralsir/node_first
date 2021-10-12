let http=require("http");
let url=require("url");
let homepage=`
            <html>
            <head>
            <title>Home page</title>
</head>
    <body>
    <h1> 
        <a href="">Home</a> |
        <a href="Aboutus">About us</a> |
        <a href="Contactus">Contact us</a> |
        <a href="login">Login</a>
    </h1>
</body>
            </html>


`;
let server=http.createServer((request,response)=>{
      //console.log(request.url);
      let urlinfo=url.parse(request.url);

      if(urlinfo.path != '/favicon.ico')
      {
            if(urlinfo.path=='/Aboutus'){
                  response.write("<h1>Aboutus Page</h1>");
            }
            else if(urlinfo.path=='/Contactus'){
                  response.write("<h1>Contactus Page</h1>");
            }
            else if(urlinfo.path=='/login'){
                  response.write("<h1>Login Page </h1>");
            }
            else{
                  response.write(homepage);
            }
           //console.log(urlinfo);
           //response.write("hi from server");

      }
      response.end();
})

server.listen(9090,()=>console.log("server is running on port no:9090"));