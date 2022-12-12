const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const helmet = require('helmet');
const ejs = require('ejs')

//Instantiating the http server
const app = express();
const port = process.env.PORT|| 3000

//Security middleware
//app.use(helmet());

//Setting static public folder
app.use(express.static("public", {maxAge: '1d'} ));


//Setting view engine
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'))
app.engine('html', ejs.renderFile);

//Routes
require('./src/routes/index.routes.js')(app);

//404
app.use((req, res) => {
    console.error(res.stack)
    res.status(404).redirect('/404?url=' + req.url);
});


//Starting Server
const server = app.listen(port, () => console.log('Listening on port 3000'))


//Graceful shutdown
process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown(){
    console.info('SIGTERM signal received');
    server.close(() => {
        console.log('Http server closed.');
        process.exit(0);
    });
};