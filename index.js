const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/privateKeys');

const bodyParser = require('body-parser');
require('./models/User');
require('./models/Trades');
const app = express(); 

app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);  
// mongoose.connect(keys.devURI,{ useNewUrlParser: true });

require('./routes/createTrade')(app);
require('./routes/fetchTrades')(app);
require('./routes/fetchDayTrades')(app);
require('./routes/fetchSwingTrades')(app);
require('./routes/deleteTrade')(app);

if(process.env.NODE_ENV === 'production'){
    //express will serve up production assets
    app.use(express.static('client/build'));

    //express will serve up index.html file if it
    // doesn't recognize router
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000; 
app.listen(PORT);

