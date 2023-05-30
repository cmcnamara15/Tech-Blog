const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll() 
    const posts = postData.map(post => post.get({plain:true}))
    res.render("home", {
        posts:posts,
        logged_in: req.session.logged_in
    })
}) 

router.get('/login', (req, res) => {
    res.render("login", {
        logged_in: req.session.logged_in
    })
}) 

router.get('/signup', (req, res) => {
    res.render("signup", {
        logged_in: req.session.logged_in
    })
}) 

router.get('/userPage', (req, res) => {
    res.render("userPage", {
        logged_in: req.session.logged_in
    })
    
}) 

router.get('/blogPost', (req, res) => {
    res.render("blogPost", {
        logged_in: req.session.logged_in
    })
})

router.get('/logout', (req, res) => {
    res.render("logout", {
        logged_in: req.session.logged_in
    })
})

module.exports = router;