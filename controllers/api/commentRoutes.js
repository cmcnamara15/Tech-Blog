const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.post('/', async (req, res) => {
    console.log('working')
    try {
        const newPost = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id || req.body.user_id,
        });
        console.log(newPost)
        
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
    });

router.get('/', async (req, res) => {
    try {
        const existingComments = await Comment.findAll({
        attributes: ['content', 'user_id', 'date_created']
        });
        console.log('called')
        res.status(200).json(existingComments);
    } catch (err) {
        res.status(400).json(err);
    }
    });


router.get('/comment/:id', async (req, res) => {
    try {
        const matchComment = await Comment.findAll({
        where: {
            id: req.params.id,
        }
        });

        res.status(200).json(matchComment);
    } catch (err) {
        res.status(400).json(err);
    }
    });


router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
        where: {
            id: req.params.id,
        },
        });


        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
    });



module.exports = router