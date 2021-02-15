const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/db')

/* ===== This needs to loaded before other configurations ===== */
// load environment varibles from a .env file into process.env
dotenv.config({path: './config/config.env'})

// load DB connection
connectDB()

// initialize app
app = express()

// use HTTP request logger middleware if server is running in development mode
process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

const PORT = process.env.PORT || 8000

// attach listener port to server
app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} ...`)
)
