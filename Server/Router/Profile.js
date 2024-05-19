const express= require('express');
const router = express.Router() 

const {
    auth,
  } = require("../Middleware/Auth");

const{updateProfile,deleteAccount,getAllUserDetails,updateProfilePhoto,updatePassword,getEnrolledCourse}=require("../Controller/Profile");

// router.post("/resetPasswordToken",resetPasswordToken)
// router.post("/resetPassword",resetPassword)


router.put("/updateProfile",auth,updateProfile);
router.delete("/deleteAccount",auth,deleteAccount)
router.get("/getAllUserDetails",auth,getAllUserDetails);
router.put("/updateProfilePhoto",auth,updateProfilePhoto);
router.put("/updatePassword",auth,updatePassword);
router.put("/getEnrolledCourse",auth,getEnrolledCourse);




module.exports = router;