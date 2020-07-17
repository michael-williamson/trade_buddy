const mongoose = require('mongoose');
const User = mongoose.model('user');



module.exports = app => {
    app.post('/api/fetchSwingTrades',(req,res)=>{  
        const {id,date} = req.body; 
        if(!date){
        User.findOne({googleId:id}).populate(
            {
            path:'trades',
            match: {typeOfTrade:'Swing Trade'}
            }
        ).then((item)=>{
            if(item.trades.length === 0){
                res.send([{message:"No Swing Trades at this time"}])
            }else{
            res.send(item.trades)
            }
        })
        .catch(err=>console.log(err))
    }else{
            User.findOne({googleId:id}).populate(
                {
                path:'trades',
                match: {typeOfTrade:'Swing Trade',startDate:date}
                }
            ).then((item)=>{
                if(item.trades.length === 0){
                    res.send([{message:"No Swing Trades at this date"}])
                }else{
                res.send(item.trades)
                }
            })    
            .catch(err=>console.log(err))        
        }
    });  
}