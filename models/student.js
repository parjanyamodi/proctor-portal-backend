const sql = require('../db/db')
const Student = function(student)
{
    this.profile = student.profile
    this.proctor = student.proctor
    this.marks = student.marks
}

Student.findProfile = function(sid, result){
    console.log(sid)
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

Student.getBranchChange = function(sid, result){
    console.log(sid)
    var find_branchChange = sql.query(`select * from branch_change where sid="${sid}";`, (err, res) => {
        if(err){
            console.log("There was an error", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Student Branch Change Details found!", res[0])
            console.log(find_branchChange.sql)
            res[0].message = "Student Found"
            result(null, res[0])
            return
        }
        else{
            console.log("Student branch change details not found!")
            result({type : "not_found"}, null)
            return
        }

    })
}


Student.createProfile = (req, result)=> {
    console.log(req)
    var create_profile = sql.query(`insert into student values("${req.sid}", "${req.usn}", "${req.name}", "${req.email}","${req.department}","${req.gender}", "${req.phno}", "${req.semester}", "${req.cgpa}", "${req.img}", "${req.proctor}");`, (err, res)=> {
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
            console.log("Student Profile Created")
            console.log(create_profile.sql)
            res.message = "Student Profile Created"
            result(null, res)
            return
        }
        err.type = "not_created"
        result(err, null)
        return
    })
}


Student.createMarks = (req, result)=> {
    console.log(req)
    var create_profile = sql.query(`insert into reg_marks values("${req.usn}", "${req.cid}", "${req.internal}", "${req.see}", "${req.faculty}", "${req.course_reg_type}", "${req.semester}", "${req.grade}", "${req.attandance}", "${req.year}");`, (err, res)=> {
        if(err)
        {
            console.log(err)
            err.type = "not_inserted"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Student Marks inserted")
            console.log(create_profile.sql)
            res.message = "Student Marks inserted"
            result(null, res)
            return
        }
        err.type = "not_inserted"
        result(err, null)
        return
    })
}




Student.updateProfile = (student, result)=> {
    var update_student = sql.query(`update student set usn="${student.usn}", name="${student.name}", email="${student.email}",
    department="${student.department}", gender="${student.gender}", phno="${student.phno}", semester="${student.semester}",
    cgpa "${student.cgpa}", img "${student.img}", proctor="${student.pid}" where sid="${student.sid}";`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_updated"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Student Updated")
            console.log(update_student.sql)
            res.message = "Student Updated"
            result(null, res)
            return
        }
        err.type = "not_updated"
        result(err, null)
        return
    })
}

Student.updateMarks = (req, result)=> {
    console.log(req)
    var update_student = sql.query(`update reg_marks set internal="${req.internal}",see= "${req.see}",course_faculty= "${req.faculty}",type= "${req.course_reg_type}",semester= "${req.semester}",grade= "${req.grade}",attendance= "${req.attendance}",year= "${req.year}" where usn="${req.usn}" and cid="${req.cid}"`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_updated"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Student Updated")
            console.log(update_student.sql)
            res.message = "Student Updated"
            result(null, res)
            return
        }
        err.type = "not_updated"
        result(err, null)
        return
    })
}



Student.remove = (std, result) => {
    console.log(std.pid)
    var delete_student = sql.query(`delete from student where sid=${std.sid};`, (err, res) => {
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
            console.log(delete_student.sql)
            res.message = "Profile Removed"
            result(null, res)
            return
        }
        err.type = "not_removed"
        result(err, null)
        return
    })
}

Student.removeMarks = (params, result) => {
    console.log(params)
    params=params.query
    var delete_student = sql.query(`delete from reg_marks where usn="${params.usn}" and cid="${params.cid}" and type="${params.course_reg_type}" and year="${params.year}";`, (err, res) => {
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
            console.log("Marks Removed")
            console.log(delete_student.sql)
            res.message = "Marks Removed"
            result(null, res)
            return
        }
        err.type = "not_removed"
        result(err, null)
        return
    })
}



Student.findMarks = (usn, result) => {
    var find_marks = sql.query(`select r.cid, r.course_faculty, r.attendance, r.internal, r.see, r.grade, r.year, c.credits, c.title, r.semester from reg_marks r join courses c on r.cid = c.cid where usn="${usn}";`, (err, res)=> {
        if(err)
        {
            console.log("There was some error", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Student Marks found!", res)
            console.log(find_marks.sql)
            res[0].message = "Student Marks Found"
            result(null, res)
            return
        }
        else{
            console.log("Student Marks not found!")
            result({type : "not_found"}, null)
        }
    })
}

Student.findDetails = (usn, result) => {
    console.log(usn)
    var find_details = sql.query(`select * from details where usn="${usn}";`, (err, res)=> {
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

Student.updateDetails = (req)=> {
    var update_studentDetails = sql.query(`update details set data=${String(req)};`,  (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_updated"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Student Details Updated")
            console.log(update_studentDetails.sql)
            res.message = "Student Details Updated"
            result(null, res)
            return
        }
        err.type = "not_updated"
        result(err, null)
        return
    })
}


Student.findAll = (result) => {
    var get_students = sql.query(`select * from student;`, (err, res)=>{
        if (err)
        {
            console.log(err)
            err.type = "not_retrived"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Students Retrived")
            console.log(get_students.sql)
            res.message = "Students Retrived"
            result(null, res)
            return
        }
        err.type = "not_retrived"
        result(err, null)
        return
    })
}

module.exports = Student