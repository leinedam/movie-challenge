const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

/*
 * Settings
*/
app.set('port', process.env.PORT || 3000);

/*
 * Midlewares
*/
app.use(morgan('dev'))
    .use(express.json())
    .use(cors({ origin : 'http://localhost:4200'}));

/*
 * Routes
*/
app.use('/api/movies' , require('./routes/movie.routes'));


/*
 * Starting Server..
*/
app.listen( app.get('port') , () =>  {
    console.log('server is running on port= ', app.get('port'));
});
