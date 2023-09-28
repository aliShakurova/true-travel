const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Place = require('./models/Place');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const app = express();

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = '667atgcjacas87vydhsnn';

// middlewares
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(cookieParser());

// connect MongoDB
mongoose.connect(process.env.MONGO_URL);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(user)
    } catch (e) {
        res.status(422).json(e);
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user)
    if (user) {
        const isPasswordOk = bcrypt.compareSync(password, user.password);

        if (isPasswordOk) {
            jwt.sign({ email: user.email, id: user._id }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
        } else {
            res.status(422).json('Password not Ok')
        }

    } else {
        res.json('not found')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.listen(3000)