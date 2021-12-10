const User = function(user)
{
    this.gid = user.gid
    this.role = user.role
}

User.findUser = (gid, result) =>{
    result(null, "Fetching data")
}