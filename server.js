const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');


const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connec mongoDB
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected'))
    .catch(error => console.log(error));


app.get('/', (req, res) => res.send('Helloooo'));

//Use Routes
app.use('/api/users', users);
app.use('api/profile', profile);
app.use('api/post', post)


const port = process.env.PORT || 7890;

app.listen(port, () => console.log(`Server Running on port ${port}`));