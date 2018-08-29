const mongoose = require('mongoose');

const chestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    muscles:String
});

module.exports = mongoose.model('Chest',chestSchema);