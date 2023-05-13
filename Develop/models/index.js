const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMant(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});