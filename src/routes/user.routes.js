const {create,getAllUsers,update,remove} = require("../controllers/user.controller");
const { login,validateToken } = require("../services/auth.service");

const router = require("express").Router();


//athenticate the routes from  jwt athentication

// Route to create a new user
router.post("/create", create);
//login route
router.post("/login", login);
// Route to update user 
router.put("/:id",validateToken, update);
// Route to remove user
router.delete("/:id",validateToken, remove);
//Route to get all user details
router.get("/", getAllUsers);

module.exports = router;
