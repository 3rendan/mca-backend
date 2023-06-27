require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const keys = require('./keys')
const regRoutes = require('./routes/registrations')
const stationRoutes = require('./routes/stations')
const tracRoutes = require('./routes/tracs')
const programRoutes = require('./routes/programs')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true })

app.use(express.json())
app.use((req, res, next) => {
    console.log(res.path, res.method)
    next()
})

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/registrations', regRoutes)
app.use('/api/stations', stationRoutes)
app.use('/api/tracs', tracRoutes)
app.use('/api/programs', programRoutes)

app.get(('/'), (req, res) => {
    res.json({mssg: 'Welcome to the FM registration.'})
})

// // connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            const db = client.db('test')
            db.collection('tracs').createIndexes([
                {
                    key: { _id: 1 },
                    _id: 'id_index',
                }
            ])
        })
    })
    .catch((error) => {
        console.log(error)
    })

// // Redis client setup
// const redis = require('redis')
// const redisClient = redis.createClient({
//     host: keys.redisHost,
//     port: keys.redisPort,
//     retry_strategy: () => 1000
// })
// const redisPublisher = redisClient.duplicate()