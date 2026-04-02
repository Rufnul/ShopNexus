import User from "../models/Subscribe.js";

// Subscribe User
const subscribeUser = async (req, res) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already subscribed" });
  }
  const user = await User.create({ email });
  if (user) {
    res.status(201).json({
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "Invalid Email" });
  }
};

export { subscribeUser };
