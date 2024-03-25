require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnect } = require('./src/utils/dbConnection')
const bodyParser = require('body-parser')

dbConnect()

// Import routes
const userRouter = require('./src/routes/user.routes')
const newsRouter = require('./src/routes/news.routes')

app = express()

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Asanka Gamage - News Application Service working')
})

// Define routes for notes
app.use('/api/user', userRouter)
app.use('/api/news', newsRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.info(`Backend running on http://localhost:${PORT}`)
})
