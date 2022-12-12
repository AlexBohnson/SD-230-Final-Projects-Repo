const render = (req, res) => {

    try{

        res.render('pages/index', {
            title: 'XE Clone',
            heading: 'Welcome to Xe Clone',
            trays: null
        })

    } catch(error){
        console.error(error);
        res.status(500).send(error);
    }
};

const render404 = (req, res) => {

    res.render('pages/404', {
        title: 'XE Clone',
        heading: 'Looks like you\'re lost',
        url: req.query.url,
        trays: null
    })
};

module.exports = { render, render404 };