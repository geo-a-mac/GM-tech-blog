const router = require('express').Router();
const sequelize = require('../config/connection');
const { Article, Comment, User } = require('../models');

// get all articles for homepage
router.get('/', (req,res) => {
    Article.findAll({
        attributes: [
            'id',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'article_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbArticleData => {
            const articles = dbArticleData.map(article => article.get({plain: true}));
            res.render('homepage', { articles, LoggedIn: req.session.loggedIn});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;