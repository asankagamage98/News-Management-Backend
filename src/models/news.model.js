const { Schema, default: mongoose } = require('mongoose')

const newsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['politics', 'sports', 'technology', 'entertainment'],
            required: true,
        },
    },
    {
        timestamps: true,
    }
)
const News = mongoose.model('News', newsSchema)
module.exports = News
