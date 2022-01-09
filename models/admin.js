const sql = require('../db/db')

const Admin = function(admin){
    this.name = admin.name
}

Admin.insertBranchChange = function(req, result){
    console.log(req)
    var insert_branchChange = sql.query(`insert into branch_change values("${req.sid}", "${req.initial_branch}", "${req.current_branch}", "${req.initial_usn}", "${req.current_usn}");`, (err, res)=> {
        if(err){
            console.log("There was an error", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("Student Branch Change Details inserted", res[0])
            console.log(insert_branchChange.sql)
            res[0].message="Student Details inserted"
            result(null, res[0])
            return
        }
        else{
            console.log("Student details not inserted!")
            result({type: "Not inserted da"}, null)
            return
        }
    })
}

module.exports = Admin
