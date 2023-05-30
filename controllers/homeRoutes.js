const router = require('express').Router();
const { Post, User } = require('../models');

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

router.get('/userPage', async (req, res) => {
    try { 
        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Post,
                }
            ]
        })
    const user = userData.get({plain:true})
    console.log(user)
    res.render("userPage", {
        user:user,
        logged_in: req.session.logged_in
    })
    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
}) 

router.get('/blogPost/:id', async (req, res) => {
    try {const postData = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ["userName"],
            },
        ],
    })
    const posts = postData.get({plain:true});
    console.log(posts)
    res.render("blogPost", {
        ...posts,
        logged_in: req.session.logged_in
    })
    } catch (err) {
        res.status(500).json(err);
        res.redirect("/home");
    }
}) 



router.get('/logout', (req, res) => {
    res.render("logout", {
        logged_in: req.session.logged_in
    })
}) 


module.exports = router;