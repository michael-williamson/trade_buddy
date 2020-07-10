const mongoose = require('mongoose');
const User = mongoose.model('user');



module.exports = app => {
    app.post('/api/fetchDayTrades',(req,res)=>{  
        const {id,date} = req.body; 
        if(!date){
        User.findOne({googleId:id}).populate(
            {
            path:'trades',
            match: {typeOfTrade:'Day Trade'}
            }
        ).then((item)=>{
            if(item.trades.length === 0){
                res.send([{message:"No Day Trades at this time"}])
            }else{
            res.send(item.trades)
            }
        })}else{
            User.findOne({googleId:id}).populate(
                {
                path:'trades',
                match: {typeOfTrade:'Day Trade',startDate:date}
                }
            ).then((item)=>{
                if(item.trades.length === 0){
                    res.send([{message:"No Day Trades at this date"}])
                }else{
                res.send(item.trades)
                }
            })            
        }

    
    });  
}