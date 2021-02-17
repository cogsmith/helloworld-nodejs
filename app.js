const port = process.argv[2] || 80; const host = process.argv[3] || '0.0.0.0';
const msg = function (req) { let msg = 'HELLOWORLD'; msg += ': '+require('os').hostname()+' @ '+host+':'+port+' @ '+(req?req.headers.host.toUpperCase():'_')+' @ '+new Date().toISOString(); return msg; };
const handler = function (req,res) { res.writeHead(200); res.end(msg(req)+"\n"); };
const server = require('http').createServer(handler); server.listen(port,host);
console.log(msg());