const { getUserByEmail, comparePassword } = require("./user.service");
const jwt = require("jsonwebtoken");

// login service
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        res.status(401).json({
          message: "Login not successful",
          error: "Invalid password",
        });
      }
      const token = generateToken(user);

      res.status(200).json({
        token,
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

//generate token service
const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.name,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

//validate token service
const validateToken = (req, res, next) => {
  const tokenHeder = req.headers.authorization;

  //get bearer token
  token = tokenHeder.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "No token provided",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      console.log("decoded", decoded);
      if (err) {
        res.status(401).json({
          message: "Invalid token",
          error: err.message,
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};

module.exports = {
  login,
  generateToken,
  validateToken,
};
