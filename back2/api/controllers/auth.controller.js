const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Game = require("../models/game.model");

const signup = async (req, res) => {
  //console.log(req.body)
  try {
    req.body.user_password = bcrypt.hashSync(req.body.user_password, 10)
    const findUser = await User.findOne({
      where: {
        user_email: req.body.user_email
      },
    })
    console.log(findUser)
    if(findUser) {
      return res.status(404).send('Usuario already exist')
    }
    const user = await User.create(req.body)
    const game = await Game.findByPk(req.body.gameId)
    await user.addGame(game)
    const token = jwt.sign({ email: user.user_email }, "secret", {
      expiresIn: "7d",
    })
    res.status(200).json({ token })
  } catch (error) {
    console.log(error)
    res.status(500).send("Error creating user")
    throw new Error(error)
  }
}

const login = async (req, res) => {
  try {
    //console.log(req.body)
    const user = await User.findOne({
      where: { user_email: req.body.user_email },
    });
    //console.log(user);
    if (!user) {
      return res.status(400).send("user email or password incorrect");
    }
    bcrypt.compare(req.body.user_password, user.user_password, (err, result) => {
      if (err || !result) {
        return res.status(400).send("email or password incorrect");
      }
      const token = jwt.sign({ user_email: user.user_email }, "secret", {
        expiresIn: "7d",
      });
      const role = user.user_role;
      const id = user.user_id;
      return res.status(200).json({ token, role, id });
    })
  } catch (error) {
    console.log(error);
    res.status(500).send("Error: Cannot log in");
    throw new Error(error);
  }
}; 

module.exports = {
  signup,
  login,
};
