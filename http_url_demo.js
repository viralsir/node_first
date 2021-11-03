let http=require("http");
let url=require("url");
let userinfo=[
      {"username":"admin","password":"123"},
      {"username":"vimal","password":"345"},
      {"username":"viren","password":"123"}
]

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
let loginpage=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page </title>
</head>
<body>
<form action="checklogin">
    <table>
        <tr>
            <td> User Name :</td>
            <td><input type="text" name="username"></td>
        </tr>
        <tr>
            <td>Password :</td>
            <td><input type="password" name="password"></td>
            
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit">
                <input type="reset">
            </td>
        </tr>
    </table>
</form>
</body>
</html>
`
let server=http.createServer((request,response)=>{
      //console.log(request.url);
      let urlinfo=url.parse(request.url,true);
      //console.log(urlinfo);
      if(urlinfo.path != '/favicon.ico')
      {
            if(urlinfo.pathname=='/calc')
            {
                let a=parseInt(urlinfo.query.a);
                let b=parseInt(urlinfo.query.b);

                if(urlinfo.query.func.toLowerCase()=="sub")
                {

                    response.write("Subtraction is :"+(a-b));
                }
                else if(urlinfo.query.func=="add")
                {
                        response.write("Addition  is :"+(a+b));
                }
                console.log(urlinfo.query.func);
                console.log(urlinfo.query.a);
                console.log(urlinfo.query.b);


            }

            else if(urlinfo.path=='/Aboutus'){
                  response.write("<h1>Aboutus Page</h1>");
            }
            else if(urlinfo.path=='/Contactus'){
                  response.write("<h1>Contactus Page</h1>");
            }
            else if(urlinfo.path=='/login'){
                  response.write(loginpage);
            }
            else if(urlinfo.pathname =='/checklogin')
            {
                let result=userinfo.find(user=>user.username==urlinfo.query.username && user.password==urlinfo.query.password);
                console.log(result);
                if(result != undefined)
                {
                      response.write("<h1>login successfully</h1>");
                }
                else
                {
                      response.write("<h1>wrong username or password</h1>");
                }
                if(urlinfo.query.username=="admin" && urlinfo.query.password=="123")
                {
                      response.write("<h1>login successfully</h1>");
                }
                else
                {
                      response.write("<h1>wrong username or password</h1>");
                }
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