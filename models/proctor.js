const sql = require('../db/db')

const Proctor = function(proc)
{
    this.profile = proc.profile
    this.students = proc.students
    this.requests = proc.requests
}

Proctor.find = (pid, result) =>{
    console.log(pid)
    var select_proc = sql.query(`select * from proctor where pid = "${pid}";`, (err, res) => {
        if (err)
        {
            console.log("There was an error getting proctor profile", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Proctor found!", res[0])
            console.log(select_proc.sql)
            res[0].message = "Proctor Found"
            result(null, res[0])
            return
        }
        else{
            console.log("Proctor not found!")
            result({type : "not_found"}, null)
        }
    })
}

Proctor.findStudents = (pid, result)=> {
    var find_students = sql.query(`select * from student where proctor=${pid};`, (err, res)=> {
        if(err)
        {
            console.log(err)
            err.type = "not_found"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Student Fetched")
            console.log(find_students.sql)
            result(null, res)
            return
        }
        result(null, {message: "nothing here"})
    })
}

Proctor.create = (proc, result) => {
    console.log(proc.pid)
    var create_proctor = sql.query(`insert into proctor values('${proc.pid}', '${proc.name}', '${proc.email}', '${proc.department}', '${proc.phoneNumber}', '${proc.qualifications}', '${proc.initials}', '${proc.designation}', '${proc.image}');`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_created"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows !== 0)
        {
            console.log("Proctor Created")
            console.log(create_proctor.sql)
            res.message = "Proctor Created"
            result(null, res)
            return
        }
        err.type = "not_created"
        result(err, null)
        return
    })
}

Proctor.update = (proc, result) => {
    console.log(proc.pid)
    var update_proctor = sql.query(`update proctor set name='${proc.name}', email='${proc.email}', department='${proc.department}', phoneNumber='${proc.phoneNumber}', qualifications='${proc.qualifications}', initials='${proc.initials}', designation='${proc.designation}' where pid=${proc.pid};`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_updated"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows !== 0)
        {
            console.log("Proctor Updated")
            console.log(update_proctor.sql)
            res.message = "Proctor Updated"
            result(null, res)
            return
        }
        err.type = "not_updated"
        result(err, null)
        return
    })
}


Proctor.remove = (proc, result) => {
    console.log(proc.pid)
    var create_proctor = sql.query(`delete from proctor where pid="${pid}";`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_removed"
            result(err, null)
            return
        }
        if(res.affectedRows !== 0)
        {
            console.log("Proctor Removed")
            console.log(create_proctor.sql)
            res.message = "Proctor Removed"
            result(null, res)
            return
        }
        err.type = "not_removed"
        result(err, null)
        return
    })
}

Proctor.findAll = (result) => {
    var get_proctors = sql.query(`select * from proctor;`, (err, res)=>{
        if (err)
        {
            console.log(err)
            err.type = "not_retrived"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows !== 0)
        {
            console.log("Proctors Retrived")
            console.log(get_proctors.sql)
            res.message = "Proctors Retrived"
            result(null, res)
            return
        }
        err.type = "not_retrived"
        result(err, null)
        return
    })
}


module.exports = Proctor