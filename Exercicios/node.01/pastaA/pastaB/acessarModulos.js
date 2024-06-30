const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo);

const http = require('http')
http.createServer((req, res) =>{
    res.write('ola');
    res.end()
}).listen(8080)