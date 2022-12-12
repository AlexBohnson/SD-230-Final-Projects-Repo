module.exports = (app) => {
    const { render } = require('../controllers/converter.controller.js');

    app.route('/convert').get(render);

}