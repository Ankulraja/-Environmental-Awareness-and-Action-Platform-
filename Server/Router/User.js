const express = require("express");
const router = express.Router();

const {
  auth,
  isStudent,
  isAdmin,
  isInstructor,
} = require("../Middleware/Auth");

const {
  OtpGenerator,
  signup,
  login,
  changePassword,
} = require("../Controller/Auth");
// const {
//   resetPasswordToken,
//   resetPassword,
// } = require("../Controller/ResetPassword");



router.post("/signup", signup);
router.post("/login", login);
// router.post("/OtpGenerator", ()=>{
//   console.log("Hello World")
// });
router.post("/OtpGenerator", OtpGenerator);




module.exports = router;
