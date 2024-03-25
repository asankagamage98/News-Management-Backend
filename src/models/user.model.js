const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, //vlidate email
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)
const User = mongoose.model('User', userSchema)
module.exports = User
