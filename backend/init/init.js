const mongoose = require("mongoose")
const Notice = require("../model/noticeSchema.js")
const {faker, fa} = require("@faker-js/faker")
mongoose.connect('mongodb://127.0.0.1:27017/karthik').then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err))
// data=[]

for(let i=0;i<20;i++){
    data={
        "title" : faker.lorem.lines(lineCount=1),
        "description":faker.lorem.paragraph(),
        "date":faker.date.anytime(),
        "category":faker.helpers.arrayElement(["Placement","General","Exam"]),
    }
    Notice.create(data)
        .catch(err => console.log("Insert error:", err));
}

// Notice.find({}).then((data)=>console.log(data))
//     .catch((err)=>console.log(err))

