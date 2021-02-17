const port = process.argv[2] || 80; const host = process.argv[3] || '0.0.0.0';
let msg = 'HELLOWORLD'; msg += " @ " + host + ':' + port;
const handler = function (req,res) { res.writeHead(200); res.end(msg+"\n"); };
const server = require('http').createServer(handler); server.listen(port,host);
console.log(msg);