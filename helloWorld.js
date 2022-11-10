console.log("hello world")


/* import http module */
const http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello Node\n');
 }).listen(3000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:3000/');




/* ################################################################################### 
creation d'un ficher avec le nom welcome txt , le contenu hello node */
const fs=require('fs')
fs.writeFile("welcome.txt","Hello Node",err=>{
         if(err){console.log(err)}  else{
           console.log("created with success")
        } 

    })
/* ####################################################################################
changer le nom du fichier de welcome a hello  */



fs.rename('welcome.txt',"Hello.txt",err=>{
    err?console.log(err):console.log("renamed succefuly")
})
/* ####################################################################################
generation de mot de passe a l'aide du module generate password */
var generator = require('generate-password');

var password = generator.generate({
    length: 10,
    numbers: true
});

console.log(password);