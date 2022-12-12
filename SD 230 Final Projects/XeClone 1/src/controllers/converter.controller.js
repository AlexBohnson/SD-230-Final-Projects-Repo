const Symbols = require('../models/symbols.model.js');

const getSymbols = async function(){
    try{

        const symbols = new Symbols();

        symbols.getSymbolsFromCache();

        if(!symbols.symbols){
            await symbols.getSymbolsFromAPI();
        }

        return symbols.symbols;

    } catch(e){
        console.error(e);
        throw new Error(e);
    }
}

const renderPage = (res, currencyOptions) => {
    res.render('pages/converter', {
        title: 'Xe Clone',
        heading: 'Currency Converter',
        selectedTab: 'Convert',
        trays: null,
        options: currencyOptions,
        layout: 'layouts/tab_layout'
    })
}

exports.render = async (req, res) => {
    try {

        let currencyOptions = await getSymbols();

        if(req.query === undefined || Object.keys(req.query).length === 0 ) {
            return renderPage(res, Object.entries(currencyOptions));
        }

    } catch(e){
        console.error('error', e)
        res.redirect("/404?url=/convert")
    }
}