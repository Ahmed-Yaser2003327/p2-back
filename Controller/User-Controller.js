const validateUser = require("../Validation/User-Validation");
const User = require("../Model/User-Model");
const bcrypt = require("bcrypt");

//!==========================================

const getUser = (req, res) => {
  res.send("getUser");
};
  
//!================Valid==================
const valid = (req, res, next) => {
  const valided = validateUser(req.body);

  if (!valided) {
    return res.status(400).json({
      error: "data incorrect",
      details: validateUser.errors,
    });
  }

  next();
};

//!------------------------------adduser-------------------------------------
const addUser = async (req,res) => {
  const { userName, password, email } = req.body;

  let user = await User.findOne({ email: req.body.email }).exec();

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      return res.status(202).send("user already Registered !!");
    }
  }

  let hashedPswd = await bcrypt.hash(password, 10);

  const newUser = new User({ userName, password: hashedPswd, email });
  await newUser.save();

  res.status(203).send(" success");
};

module.exports = { getUser, addUser,valid };



//!.......................................................
