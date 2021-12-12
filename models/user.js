const sql = require('../db/db')
const User = function(user)
{
    this.gid = user.gid
    this.role = user.role
}

User.find = (gid, result) =>{
    console.log(gid)
    var select_user = sql.query(`select * from login where gid = "${gid}";`, (err, res) => {
        if (err)
        {
            console.log("There was an error getting user role", err)
            result(err, null)
            return
        }
        if(res.length){
            console.log("User found!", res[0])
            console.log(select_user.sql)
            res[0].message = "User Found"
            result(null, res[0])
            return
        }
        else{
            console.log("User not found!")
            result({type : "not_found"}, null)
        }
    })
}

User.create = (gid, role, result) => {
    console.log(gid)
    var create_user = sql.query(`insert into login values('${gid}', '${role}');`, (err, res) => {
        if (err)
        {
            console.log(err)
            err.type = "not_created"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows === 1)
        {
            console.log("User Created")
            console.log(create_user.sql)
            res.message = "User Created"
            result(null, res)
            return
        }
        err.type = "not_created"
        result(err, null)
        return
    })
}

User.update = (gid, role, result) => {
    var update_user = sql.query(`update login set role="${role}" where gid="${gid}";`, (err, res)=>{
        if (err)
        {
            console.log(err)
            err.type = "not_updated"
            result(err, null)
            return
        }
        // console.log(res.affectedRows)
        if(res.affectedRows === 1)
        {
            console.log("User Updated")
            console.log(update_user.sql)
            res.message = "User Updated"
            result(null, res)
            return
        }
        err.type = "not_updated"
        result(err, null)
        return
    })
}


module.exports = User