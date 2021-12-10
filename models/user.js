const sql = require('../db/db')
const User = function(user)
{
    this.gid = user.gid
    this.role = user.role
}

User.find = (gid, result) =>{
    result(null, `Fetching data of ${gid}`)
}

module.exports = User