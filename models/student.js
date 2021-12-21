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

Student.createProfile = (req, result)=> {
    console.log(req)
    var update_profile = sql.query(`insert into student values("${req.sid}", usn varchar(20), "${req.name}", "${req.email}",
    "${req.department}","${req.gender}", "${req.phno}", "${req.semester}", "${req.cgpa}", "${req.img}", "${req.proctor}");`, (err, res)=> {
        if(err)
        {
            console.log(err)
            err.type = "not_updated"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows !== 0)
        {
            console.log("Student Profile Updated")
            console.log(update_profile.sql)
            res.message = "Student Profile Updated"
            result(null, res)
            return
        }
        err.type = "not_updated"
        result(err, null)
        return
    })
}

Proctor.remove = (std, result) => {
    console.log(std.pid)
    var create_proctor = sql.query(`delete from proctor where sid=${std.sid};`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_removed"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows !== 0)
        {
            console.log("Profile Removed")
            console.log(create_proctor.sql)
            res.message = "Profile Removed"
            result(null, res)
            return
        }
        err.type = "not_removed"
        result(err, null)
        return
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
        if(res.length){
            console.log("Student Marks found!", res[0])
            console.log(find_marks.sql)
            res[0].message = "Student Marks Found"
            result(null, res[0])
            return
        }
        else{
            console.log("Student Marks not found!")
            result({type : "not_found"}, null)
        }
    })
}

Student.findDetails = (sid, result) => {
    var find_details = sql.query(`select * from details where sid="${sid}";`, (err, res)=> {
        if(err)
        {
            console.log("There was some error", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Student Details found!", res[0])
            console.log(find_details.sql)
            res[0].message = "Student Details Found"
            result(null, res[0])
            return
        }
        else{
            console.log("Student Details not found!")
            result({type : "not_found"}, null)
        }
    })
}

Student.findProctor = (sid, result) => {
    var find_proctor = sql.query(`select * from proctor where pid=(select proctor from student where sid="${sid}");`, (err, res)=> {
        if(err)
        {
            console.log("There was some error", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Student Profile found!", res[0])
            console.log(find_proctor.sql)
            res[0].message = "Student Found"
            result(null, res[0])
            return
        }
        else{
            console.log("Student not found!")
            result({type : "not_found"}, null)
            return
        }
    })
}

module.exports = Student