module.exports = app => {
    const proctor = require('../controllers/proctor.controller')

    app.get('/proctor', proctor.findProctor)

    app.get('/proctor/students', proctor.findProctorStudents)
    
    app.post('/proctor', proctor.createProctor)

    app.put('/proctor', proctor.updateProctor)

    app.delete('/proctor', proctor.removeProctor)

    app.get('/proctor/all', proctor.findAllProctors)
}