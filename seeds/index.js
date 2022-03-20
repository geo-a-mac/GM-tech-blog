const seedUsers = require('./user-seeds');
const seedArticles = require('./article-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('Seeding Users');
    await seedUsers();
    console.log('Seeding Articles');
    await seedArticles();
    console.log('Seeding Comments');
    await seedComments();
    console.log('DONE');
    process.exit();
};

seedAll();