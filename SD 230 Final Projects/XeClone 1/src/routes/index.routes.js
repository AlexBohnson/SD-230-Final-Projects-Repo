module.exports = (app) => {

    //Require additional routes modules
    require('./converter.routes.js')(app);

    //Get the index controllers
    const { render, render404 } = require('../controllers/index.controller.js');

    app.route('/').get(render);

    app.route('/404').get(render404)
}