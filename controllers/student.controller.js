const Student = require('../models/user')

exports.findStudentProfile = (req, res)=> {
    Student.findProfile(req.query['sid'], (err, data)=> {
        if (err)
        {
            if(err.type == "not_found")
            {
                res.send({
                    message: "Student Profile Not Found"
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

exports.createStudentProfile = (req, res)=> {
    console.log(req.body)
    Student.createProfile(req.body, (err, data) => {
        if(err)
        {
            if(err.type == "not_created")
            {
                res.send({
                    message: "Student Profile Not Created"
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

exports.updateStudentProfile = (req, res)=> {
    console.log(req.body)
    Student.updateProfile(req.body, (err, data) => {
        if(err)
        {
            if(err.type == "not_updated")
            {
                res.send({
                    message: "Student Profile Not Created"
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

exports.removeStudentProfile = (req, res)=> {
    Student.removeProfile(req.query['sid'], (err, data) => {
        if(err)
        {
            if(err.type == "not_removed")
            {
                res.send({
                    message: "Student Profile Not Removed"
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

exports.findAllStudents = (req, res)=> {
    Student.findAll((err, data) => {
        if(err)
        {
            if(err.type == "not_retrived")
            {
                res.send({
                    message: "Student Not Retrived"
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