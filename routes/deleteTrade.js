const mongoose = require('mongoose');
const User = mongoose.model('user');
const Trades = mongoose.model('trades');

module.exports = app => {
    app.post('/api/deleteTrade', (req,res)=>{

       const {googleId,id} = req.body 

        User.find({googleId}).then(user => {
            let result = user[0].trades.filter(trade => trade != id && trade != null);
            let arr = [];

            user[0].trades = [];


            result.forEach(element=> {
              if(mongoose.Types.ObjectId.isValid(element)){
                arr.push(element);
              }  
            })

            user[0].trades = arr; 
            user[0].save().then(); 

        })
        .catch(err=>console.log(err))




        Trades.findByIdAndDelete(id)
        .then(() => res.status(202).send({message:"Deletion Successful"}))
        .catch(err=>console.log(err))


    });
}  