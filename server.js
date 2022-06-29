const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://Pooja1010:JfnE38uRPOS0bajB@cluster0.zsuwb.mongodb.net/Pooja1010", 
{useNewUrlParser:true} , {useUrlFiedTopology:true})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const contactSchema  = {
      name:String,
      email:String,
      phone:String,
      description:String
}

const con = mongoose.model("contact",contactSchema)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    let data = new con({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        description:req.body.description
    })
    data.save()
    console.log(data)
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("Server is running on 3000")
})