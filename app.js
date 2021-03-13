const port = process.env.PORT || '_'; const host = process.env.HOST || '0.0.0.0';
const msg = function (req) { let msg = 'HELLOWORLD'; msg += ': '+require('os').hostname().toUpperCase()+' @ '; if (req) { msg += host+':'+port+' @ '+req.headers.host.toUpperCase()+' @ '; }; msg += new Date().toISOString(); return msg; };
if (port!='_') { const server = require('http').createServer((req,res) => { res.writeHead(200); res.end(msg(req)+"\n"); }); server.listen(port,host); }
console.log(msg());