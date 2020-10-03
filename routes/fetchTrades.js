const mongoose = require("mongoose");
const User = mongoose.model("user");

module.exports = (app) => {
  app.post("/api/fetchTrades", (req, res) => {
    const { id } = req.body;

    User.findOne({ googleId: id })
      .populate("trades")
      .then((user) => {
        res.send(user.trades);
      })
      .catch((err) => console.log(err));
  });
};
