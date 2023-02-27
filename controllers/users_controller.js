const User = require("../models/User");

module.exports.register = function (req, res) {
  res.render("register", {
    title: "Register",
  });
};

module.exports.login = function (req, res) {
  res.render("login", {
    title: "Login",
  });
};

// Handle Register
module.exports.create = function (req, res) {
  const { name, email, password, confirm_password } = req.body;
  console.log(req.body);
  if (password != confirm_password) {
    console.log("Passwords not matched.");
    return res.redirect("back");
  }
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log("Error in finding user in signup");
      return;
    }
    if (!user) {
      User.create({ email, password, name }, (err, user) => {
        if (err) {
          console.log("Error in creating user in signup");
          return;
        }
        console.log("User created");
        return res.redirect("/users/login");
      });
    } else {
      console.log("User already registred");
      return res.redirect("/users/login");
    }
  });
};

// Handle Login
module.exports.createSession = (req, res) => {
  console.log(req.body);
  // Find User
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("Error in finding the user");
      return;
    }
    if (user) {
      if (user.password != req.body.password) {
        console.log("Username or password is incorrect.");
        return res.redirect("back");
      }

    //   handle session
      res.cookie('user_id',user.id);
      console.log("Logged in");
      return res.redirect("/users/me");
      // console.log('User is not registred with us');
      // return res.redirect('back');
    } else {
        console.log("Username or password is incorrect.");
      return res.redirect("back");
    }
  });
 
};
module.exports.profile = function (req, res) {
 if(req.cookies.user_id){
    User.findById({'_id' : req.cookies.user_id},(err,user)=>{
        if(err){
            console.log('Error in getting user');
            return;
        }
       return res.send(user);
      })
 }else{
    console.log('You are not logged in');
    return res.redirect('/users/login');
 }
  
 
};
