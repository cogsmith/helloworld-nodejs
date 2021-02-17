const port = process.argv[2] || 80; const host = process.argv[3] || '0.0.0.0';
const msg = function () { let msg = 'HELLOWORLD'; msg += ': ' + require('os').hostname() + ' @ ' + host + ':' + port + ' @ ' + new Date().toISOString(); return msg; };
const handler = function (req,res) { res.writeHead(200); res.end(msg()+"\n"); };
const server = require('http').createServer(handler); server.listen(port,host);
console.log(msg());