const mongoose = require('mongoose');
const User = mongoose.model('user');
const Trades = mongoose.model('trades');

module.exports = app => {
    app.post('/api/createTrade', (req, res) => {

        const {
            id,
            ticker,
            buyPrice,
            sellPrice,
            numberOfShares,
            shortOrLong,
            shortPrice,
            coverPrice,
            typeOfTrade,
            startDate,
            endDate
        } = req.body;


        if (shortOrLong === 'short' && typeOfTrade === 'Day Trade') {
            const shortTrade = new Trades({
                ticker,
                shortOrLong,
                shortPrice,
                coverPrice,
                numberOfShares,
                typeOfTrade,
                startDate
            });

            User
                .findOne({googleId: id})
                .then((user) => {
                    if (!user) {
                        let newUser = new User({googleId: id});
                        newUser
                            .trades
                            .push(shortTrade);
                        Promise.all([
                            newUser.save(),
                            shortTrade.save()
                        ]).then((trade) =>  res.send("submitted"));

                    } else {
                        user
                            .trades
                            .push(shortTrade);
                        Promise.all([
                            user.save(),
                            shortTrade.save()
                        ]).then((trade) => res.send("submitted"));
                    }
                });

        } else if (shortOrLong === 'long' && typeOfTrade === 'Day Trade') {
            const longTrade = new Trades({
                ticker,
                shortOrLong,
                buyPrice,
                sellPrice,
                numberOfShares,
                typeOfTrade,
                startDate
            });

            User
                .findOne({googleId: id})
                .then((user) => {
                    if (!user) {
                        let newUser = new User({googleId: id});
                        newUser
                            .trades
                            .push(longTrade);
                        Promise.all([
                            newUser.save(),
                            longTrade.save()
                        ]).then(() => res.send("submitted"));

                    } else {
                        user
                            .trades
                            .push(longTrade);
                        Promise.all([
                            user.save(),
                            longTrade.save()
                        ]).then(() => res.send("submitted"));
                    }
                });
        } else if (shortOrLong === 'short' && typeOfTrade === 'Swing Trade') {
            const shortSwingTrade = new Trades({
                ticker,
                shortOrLong,
                shortPrice,
                coverPrice,
                numberOfShares,
                typeOfTrade,
                startDate,
                endDate
            });

            User
                .findOne({googleId: id})
                .then((user) => {
                    if (!user) {
                        let newUser = new User({googleId: id});
                        newUser
                            .trades
                            .push(shortSwingTrade);
                        Promise.all([
                            newUser.save(),
                            shortSwingTrade.save()
                        ]).then(() => res.send("submitted"));

                    } else {
                        user
                            .trades
                            .push(shortSwingTrade);
                        Promise.all([
                            user.save(),
                            shortSwingTrade.save()
                        ]).then(() => res.send("submitted"));
                    }
                });
        } else if (shortOrLong === 'long' && typeOfTrade === 'Swing Trade') {
            const longSwingTrade = new Trades({
                ticker,
                shortOrLong,
                buyPrice,
                sellPrice,
                numberOfShares,
                typeOfTrade,
                startDate,
                endDate
            });

            User
                .findOne({googleId: id})
                .then((user) => {
                    if (!user) {
                        let newUser = new User({googleId: id});
                        newUser
                            .trades
                            .push(longSwingTrade);
                        Promise.all([
                            newUser.save(),
                            longSwingTrade.save()
                        ]).then(() =>res.send("submitted"));

                    } else {
                        user
                            .trades
                            .push(longSwingTrade);
                        Promise.all([
                            user.save(),
                            longSwingTrade.save()
                        ]).then(() => res.send("submitted"));
                    }
                });
        }

    })
}