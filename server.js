const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/views'))

//HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Helpers


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Cristian david'
    });
})

app.get('/about', (req, res) => {

    res.render('about', {
        imge: (__dirname + '/assets/img/img.jpg')
    })

})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})