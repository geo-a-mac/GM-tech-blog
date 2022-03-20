# GM Tech Blog

## Technologies
- express
- express-handlebars
- express-session
- connect-session-sequelize
- mysql2
- sequelize
- dotenv
- bcrypt

## Models
### User
Has primary key: ID, autoincrements; username; email; password: encrypted using bcrypt on creation and on update.
Has instance method: checkpassword.

### Article
Has primary key: ID, autoincrement; title, user_id references user.id

### Comment


