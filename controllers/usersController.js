const db = require("../database/models");

module.exports = {
    find: function (req, res) {
        console.log("Getting user")
        db.Users.findAll({
            where: {
                id: req.params.id,
            }
        }).then(function (user) {
            res.json(user)
        });
    },
    findAll: function (req, res) {
        console.log("Getting all users")
        db.Users.findAll().then(function (users) {
            res.json(users)
        });
    },
    create: function (req, res) {
        console.log(`Creating user ${req.body.email}`)
        db.Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
            .then(function (response) {
                res.sendStatus(200)
            }).catch(function (err) {
                console.error(err.original.sqlMessage)
                res.sendStatus(400)
            });
    },
    remove: function (req, res) {
        console.log(`Removing user ${req.params.email}`)
        db.Users.destroy({
            where: {
                id: req.params.id,
            }
        }).then(function () {
            res.sendStatus(200)
        }).catch(function (err) {
            console.error(err.original.sqlMessage)
            res.sendStatus(400)
        });
    }
};