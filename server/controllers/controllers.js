var mongoose = require('mongoose');
require('../models/models.js');

const Coin = mongoose.model('Coin');


module.exports={
    index: (req, res) => {
        res.render('index');
    },
}