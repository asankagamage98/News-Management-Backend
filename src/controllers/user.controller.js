const userService = require("../services/user.service");

 // Create a new user 
const create = async (req, res) => {
  try {
    const user = await userService.create(req?.body);

    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting all users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update user
const update = async (req, res) => {
    try {
        const users = await userService.update(req.params.id, req.body)
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}

//remove user
const remove = async (req, res) => {
    try {
        const users = await userService.remove(req.params.id)
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}
module.exports = {
  create,
  getAllUsers,
  update,
  remove
};
