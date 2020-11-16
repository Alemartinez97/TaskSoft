var express = require("express");
var router = express.Router();
var User = require("../models/User");

/* LOGIN ROUTER */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Please Sign In with:" });
});

/* LOGOUT ROUTER */
// router.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/");
// });
// /* GOOGLE ROUTER */
// router.get(
//   "/google",
//   passportGoogle.authenticate("google", {
//     scope: ["https://www.googleapis.com/auth/plus.login"],
//   })
// );

// router.get(
//   "/google/callback",
//   passportGoogle.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
//     res.redirect("/users");
//   }
// );
router.get("/api/auth", async (req, res) => {
  const user = await User.find();
  res.send(user);
});
router.post("/api/auth", async (req, res) => {
  try {
    const { profileObj } = req.body;
    console.log("profile", profileObj);
    let user = new User(
      //   { userid: profileObj.googleId },
      { email: profileObj.email, userid: profileObj.googleId }
    );
    let newUser = await user.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ mensaje: "Error desconcido, Contactarse con soporte" });
  }
});
module.exports = router;
