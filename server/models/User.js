const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    trades: [{type: Schema.Types.ObjectId, ref: 'trades'}]

});

mongoose.model('user',userSchema);
