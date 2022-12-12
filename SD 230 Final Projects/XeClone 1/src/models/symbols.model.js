const axios = require('axios');
const cache = require('./cache.js');
require('dotenv').config()

const Symbols = function(){
    this.symbols = undefined;

    this.getSymbolsFromAPI = async function(cb=null){

        console.log('getting symbols from api');

        return axios({
            method: 'get',
            url: `${process.env.EXCHANGERATE_URL}/symbols`,
            timeout: 10000,
            redirect: 'follow',
            headers: {
                'Accept-Encoding': 'application/json',
                'Content-Type': 'application/json',
                'apikey' : process.env.EXCHANGERATE_KEY
            },
        }).then(({data}) => {
            this.symbols = data.symbols;
            cache.set('symbols', this.symbols, 864000);
            console.log('Symbols retrieved from api');
            if(cb) cb(data);
            console.log('Symbols retrieved from api')

        }).catch((e) => {
            console.error(e)
            throw new Error(e);
        })
    }

    this.getSymbolsFromCache = function (cb=null){
        console.log('getting symbols from cache...')
        this.symbols = cache.get('symbols');
        if(cb) cb(this.symbols)
        console.log('Symbols retrieved from cache')
    }
}

module.exports = Symbols;