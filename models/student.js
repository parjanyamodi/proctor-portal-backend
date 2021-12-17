const sql = require('../db/db')
const Student = function(std){
    this.profile = std.profile
    this.proctor = std.proctor
    this.marks = std.marks
}

Student.findProfile = (sid, result) => {
    var find_profile = sql.query(`select * from student where sid="${sid}";`, (err, res) => {
        if(err){
            console.log("There was an error", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Student Profile found!", res[0])
            console.log(find_profile.sql)
            res[0].message = "Student Found"
            result(null, res[0])
            return
        }
        else{
            console.log("Student not found!")
            result({type : "not_found"}, null)
        }

    })
}

Student.findMarks = (sid, result) => {
    var find_marks = sql.query(`select * from marks where sid="${sid}";`, (err, res)=> {
        if(err)
        {
            console.log("There was some error", err)
            result(err, null)
            return
        }
    })
}

module.exports = Student