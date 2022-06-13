const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


const url = "mongodb+srv://thanweer:thanweer123@cluster0.4wmga.mongodb.net/notesDB";



mongoose.connect(url)

const userSchema = {
    name: String,
    email: String,
    phoneNumber: String,
    password: String
};

const User = new mongoose.model("User", userSchema);
app.post("/signup", function (req, res) {
    const newUser = new User({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password

    });
    newUser.save(function (err) {
        if (err) {
            res.send(err);
        } else {

        }

    });
});

app.post("/log", function (req, res) {
    const name = req.body.name;

    const password = req.body.password;

    User.find({ name: name, password: password }, function (err, result) {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);

        } else {
            res.send({
                message: "wrong username/password"
            })
        }
    });
   

});

app.get('/datas', (req,res) => {
    User.find({})
        .then(foundUser => res.json(foundUser))
        
      
   
});










app.listen(3001, function () {
    console.log("express server is running on port 3001 ");
})