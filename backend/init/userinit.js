const mongoose = require("mongoose")
const {faker}=require("@faker-js/faker")
const User = require("../model/userSchema")
mongoose.connect("mongodb://127.0.0.1:27017/karthik")
    .then(()=>console.log("Connected"))
    .catch((err)=>console.log(err));

for(let i=0;i<3;i++){
    user = {
        "name":faker.person.fullName(),
        "year":"2004",
        "Section":faker.helpers.arrayElement(["IT","CSE","EEE","EIE","AIML"]),
        "username":faker.internet.username(),
        "password":faker.internet.password(),
        "role":"User"
        
    }
    User.create(user)
}
