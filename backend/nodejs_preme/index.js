const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const userRouter = require('./control/uesrRoutes')

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials : true
}));

app.use(express.json()) ;
app.use(cookieParser());

app.use('/api/user', userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})