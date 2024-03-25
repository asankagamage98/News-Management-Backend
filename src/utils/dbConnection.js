const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connect to MongoDB successfully')
    } catch (error) {
        console.log('Connect failed ' + error.message)
    }
}

module.exports = {
    dbConnect,
}
