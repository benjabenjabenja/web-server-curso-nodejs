const http = require('http');
require('dotenv').config();


const { PORT } = process.env;

http.createServer(
    (req, res) => {

        // res.writeHead(200, { 'Content-Type': 'application/json' });

        res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        res.writeHead(200, { 'Content-Type': 'application/csv' });
        
        res.write('id ; Nombre\n');
        res.write('1 ; Benja\n');
        res.write('2 ; Benja2\n');
        res.write('3 ; Benja3\n');
        res.write('4 ; Benja4\n');
        res.end();
    }
).listen(PORT);

console.log('escuchando el puerto', PORT );