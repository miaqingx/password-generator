
const http = require("http");
// console.log(http)
const generator = require('generate-password');


// // console.log(http);
http.createServer((req, res) => { 
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write(`<h1>Hello from Node>JS</h1>`);
//    res.end(); 
const password = generator.generate({
	length: 10,
	numbers: true,
    symbols: true,
    excludeSimilarCharacters: true,
});
console.log("Generated Password: ", password);

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<h1>Generated Password: ${password}</h1>`);
    res.end();





}).listen(3050, () => {console.log("Listening on port 3050")});
