const Proctor = require('../models/proctor')

exports.findProctor = (req, res)=> {
    Proctor.find(req.query['pid'], (err, data)=> {
        if (err)
        {
            if(err.type == "not_found")
            {
                res.send({
                    message: "Proctor Not Found"
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

exports.createProctor = (req, res)=> {
    Proctor.create(req.data, (err, data) => {
        if(err)
        {
            if(err.type == "not_created")
            {
                res.send({
                    message: "Proctor Not Created"
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

exports.updateProctor = (req, res)=> {
    Proctor.update(req.data, (err, data) => {
        if(err)
        {
            if(err.type == "not_updated")
            {
                res.send({
                    message: "Proctor Not Updated"
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

exports.removeProctor = (req, res)=> {
    Proctor.remove(req.query['pid'], (err, data) => {
        if(err)
        {
            if(err.type == "not_removed")
            {
                res.send({
                    message: "Proctor Not Removed"
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

exports.findAllProctors = (req, res)=> {
    Proctor.findAll((err, data) => {
        if(err)
        {
            if(err.type == "not_retrived")
            {
                res.send({
                    message: "Proctor Not Retrived"
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