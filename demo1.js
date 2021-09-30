/*
   clientside scripting                          SERVERSIDE SCRIPTING
            frontend                                backend                   Database
            Html,css,bootstrap                   PYTHON,JAVA,PHP,ASP.NET       RDBMS (ORACLE,POSTGRES,--) , NOSQL(MONGODB,FIREBASE)
            JavaScript
            (BROWSER)                            NODEjS (RUN TIME ENV. FOR JAVA SCRIPT)
            ANGULAR,REACT                           RDBMS , NOSQL  (JSON)       NOSQL (JSON)
               (JSON)                                MODULES
                                                     1) CORE MODULES
                                                     2) LOCAL OR USER DEFINE MODULES
                                                     3) EXTERNAL MODULES
            REPL  read eval print loop

            CALLBACK ,ASYN., JSON (JAVASCRIPT OBJECT NOTATION)
     document   ,    window
     console
 */
function sayhello(msg)
{
    //console.log("hi ",msg);
    return "hi "+msg;
}

let id=1,name="vimal",age=23;
id=12.23;
id=[12,23,34];
console.log("hello wel come to the world of node js");
console.log("hi from server");
console.log("id:", id);
console.log("name:",name);
console.log("age:",age);
console.log(sayhello("vimal"));
console.log(sayhello("viren"));


