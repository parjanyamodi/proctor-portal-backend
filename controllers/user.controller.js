const User = require('../models/user')

exports.findUser = (req, res)=> {
    User.find(req.query['gid'], (err, data)=> {
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

exports.createUser = (req, res)=> {
    User.create(req.query['gid'], req.query['role'], (err, data) => {
        if(err)
        {
            if(err.type == "not_created")
            {
                res.send({
                    message: "User Not Created"
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

exports.updateUser = (req, res)=> {
    User.update(req.query['gid'], req.query['role'], (err, data) => {
        if(err)
        {
            if(err.type == "not_updated")
            {
                res.send({
                    message: "User Not Updated"
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

exports.removeUser = (req, res)=> {
    User.remove(req.query['gid'], (err, data) => {
        if(err)
        {
            if(err.type == "not_removed")
            {
                res.send({
                    message: "User Not Removed"
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

exports.findAllUsers = (req, res)=> {
    User.findAll((err, data) => {
        if(err)
        {
            if(err.type == "not_retrived")
            {
                res.send({
                    message: "User Not Retrived"
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