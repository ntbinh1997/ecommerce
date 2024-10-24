const compression = require('compression');
const express = require('express');
const { default: helmet} = require('helmet');
const morgan = require('morgan');
const app = express();

// init middlewares
app.use(morgan("combined")) //for the log
app.use(helmet()); //for pretect server
app.use(compression()) //for compress data send to user
// init db

// init routes
app.get('/', (req, res, next) => {
    const strCompress = "Hello Binh"
    return res.status(500).json({
        message: 'Welcome to Fantipjs',
        metadata: strCompress.repeat(10000)
    })
})
// handling error

module.exports = app;