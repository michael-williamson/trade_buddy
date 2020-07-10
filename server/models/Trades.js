const mongoose = require('mongoose');
const { Schema } = mongoose;

const tradesSchema = new Schema({
    ticker: String,
    shortOrLong:String,
    buyPrice: String,
    sellPrice: String,
    shortPrice:String,
    coverPrice:String,
    numberOfShares: String,
    typeOfTrade:String,
    startDate:String,
    endDate:String
});

mongoose.model('trades',tradesSchema);

