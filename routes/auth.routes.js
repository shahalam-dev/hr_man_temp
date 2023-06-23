const express = require("express");
const router = express.Router();

const {
  signUp,
  logIn,
  verify,
  verifyOTP,
  forgotPassword,
  resetPassword,
  verifyEmail,
} = require("../controllers/auth.controllers");

router.post("/verify_email", verifyEmail);
router.post("/register", signUp);
router.post("/login", logIn);
// router.post("/verify_token", verify);
// router.post("/verify_otp", verifyOTP);
router.post("/forgot_password", forgotPassword);
router.post("/reset_password", resetPassword);

module.exports = router;
