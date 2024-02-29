const { Schema, model } = require("mongoose");

const userSchema = new Schema({
<<<<<<< HEAD
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  role: { type: String, default: "user" },
  address: { type: String, required: true },
  city: { type: String, required: true },
  joining: { type: Date, default: Date.now },
  profile_pic: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/7605/7605078.png",
  },
});
=======
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    address: { type: String, required: true },
    city: { type: String, required: true },
    joining: { type: Date, default: Date.now },
    profile_pic: { type: String, default: "https://cdn-icons-png.flaticon.com/512/7605/7605078.png" }
})
>>>>>>> 4413dccd8d784cda79b89ec2be32869f7bf46392

const Users = model("user", userSchema);
module.exports = Users;
