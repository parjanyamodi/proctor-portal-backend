const User = function(user)
{
    this.gid = user.gid
    this.role = user.role
}

User.find = (gid, result) =>{
    result(null, "Fetching data")
}