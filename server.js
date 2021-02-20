const path = require('path')
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

// body parser middleware (required inorder to use req.body)
app.use(express.json())

// load routers
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))
    // Create route (That is why we are doing this below all other route definitions)
    // load '/client/build/index.html'
    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
}

const PORT = process.env.PORT || 8000

// attach listener port to server
app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} ...`)
)
