var mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    // name: {type: String, required: [true, "A baker needs a name"], minlength: 3},
    // image: {type: String, required: [true, "A cake can't be rated if we can't see it!"]},
    // comments: [CommentSchema],
}, {timestamps: true});

mongoose.model('Coin', CoinSchema);
const Coin = mongoose.model('Coin');