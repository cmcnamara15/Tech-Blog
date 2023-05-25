const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', (req, res) => {
    res.render("home", {
        logged_in: req.session.logged_in
    })
});

router.get('/login', (req, res) => {
    res.render("login", {
        logged_in: req.session.logged_in
    })
});

router.get('/signup', (req, res) => {
    res.render("signup", {
        logged_in: req.session.logged_in
    })
});

router.get('/userPage', (req, res) => {
    res.render("userPage", {
        logged_in: req.session.logged_in
    })
});

router.get('/logout', (req, res) => {
    res.render("logout", {
        logged_in: req.session.logged_in
    })
});

module.exports = router;