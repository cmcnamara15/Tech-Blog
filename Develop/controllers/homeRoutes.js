const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("home")
});

router.get('/login', (req, res) => {
    res.render("login")
});

router.get('/signup', (req, res) => {
    res.render("signup")
});

router.get('/userpage', (req, res) => {
    res.render("userPage")
});

router.get('/logout', (req, res) => {
    res.render("logout")
});

