module.exports = app => {
    const user = require('../controllers/user.controller')

    app.get('/user/:gid', user.findUser)

    app.post('/user', user.createUser)

    app.put('/user', user.updateUser)
}