const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
//const MongoClient = require('mongodb').MongoClient;

const app = express();


// connection to db
//MongoClient.connect('mongodb://localhost/crud-mongo',{ useNewUrlParser: true })
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');
const contactosRoutes = require('./routes/contactos');
const revistasRoutes = require('./routes/revistas');
const edicionesRoutes = require('./routes/ediciones');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// mmiddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// routes
app.use('/', indexRoutes);
app.use('/', contactosRoutes);
app.use('/', revistasRoutes);
app.use('/', edicionesRoutes);


//Escuchando puerto 
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

