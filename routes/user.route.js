module.exports = app => {
    const user = require('../controllers/user.controller')

    app.get('/user/', user.findUser)

    app.post('/user', user.createUser)

    app.put('/user', user.updateUser)

    app.delete('/user', user.removeUser)

    app.get('/user/all', user.findAllUsers)
}