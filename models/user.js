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

User.create = (gid, role, result)=> {
    var create_user = sql.query(`insert into login values("${gid}", "${role}")`, (err, res)=>{
        if (err)
        {
            console.log("There was an error inserting values into login table", err)
            result(err, null)
            return
        }
    })
}


module.exports = User