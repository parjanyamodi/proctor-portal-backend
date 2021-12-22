const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Port = 4500
const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true}))


app.get("/", (req, res)=>{
    console.log(req)
    var arr = {
        123: {
            name: "Jeevan",
            section: "5-B"
        },
        456: {
            name: "Mallika",
            section: "5-B"
        }
    }
    console.log(arr[req.query.name])
    res.send(arr[req.query.name])
})

app.use(cors({
    origin:'*',
}))

require('./routes/user.route')(app)
require('./routes/proctor.route')(app)
require('./routes/student.route')(app)
app.get("/home", (req, res)=>{
    res.send({message: "This is home"})
})
app.listen(Port, console.log("Listening to post 4500"))