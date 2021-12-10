const User = require('../models/user')

exports.findUser = (req, res)=> {
    User.find(req.params.gid, (err, data)=> {
        if (err)
        {
            if(err.type == "not_found")
            {
                res.send({
                    message: "User Not Found"
                })
            }
            else{
                res.send({
                    message: err
                })
            }
        }
        else res.send(data)
    })
}