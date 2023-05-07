const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const existingPosts = await Post.findall({
      attributes: ['title', 'date']
    });
    console.log('called')
    res.status(200).json(existingPosts)
  } catch (err) {
    res.status(400).json(err);
  }
});

