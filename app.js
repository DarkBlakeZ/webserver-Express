const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-type': 'application/json' })

        let salida = {
            nombre: 'Cristian',
            edad: '21',
            desc: 'Barbas :v',
            url: req.url
        }



        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(81);

console.log('Escuchando el Puerto:  8080');