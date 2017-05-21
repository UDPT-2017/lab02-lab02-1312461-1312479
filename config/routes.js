var Router = require('express').Router;


var controllers = require('../app/controllers');



module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var usersRoutes = Router()
        .get('/', controllers.users.index)
        .get('/login', controllers.users.login)
        .post('/login', controllers.users.search)
        .post('/register', controllers.users.register)
        .get('/logout', controllers.users.logout)
        .get('/register', controllers.users.signup);
    var messagesRoutes = Router()
        .get('/', controllers.messages.index);
    var aboutsRoutes = Router()
        .get('/', controllers.abouts.index);
    app.use('/', homeRoutes);
    app.use('/users', usersRoutes);
    app.use('/messages', messagesRoutes);
    app.use('/abouts', aboutsRoutes);

};
