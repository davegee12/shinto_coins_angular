var Coin = require('../controllers/controllers.js');

module.exports = function(app){
    app.get('/coins', (req, res) => {
        res.render('/coins');
    })
}