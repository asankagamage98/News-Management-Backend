// Import the news model
const News = require('../models/news.model')

//  retrieve a news by its ID
const getById = async (id) => {
    try {
        return await News.findById(id)
    } catch (err) {
        throw err
    }
}

// create a new news
const create = async (data) => {
    try {
        return await new News(data).save()
    } catch (err) {
        throw err
    }
}

// update an existing news by its ID
const update = async (id, data) => {
    try {
        return await News.findByIdAndUpdate(id, data)
    } catch (err) {
        throw err
    }
}

// remove a news by its ID
const remove = async (id) => {
    try {
        return await News.findByIdAndDelete(id)
    } catch (err) {
        throw err
    }
}

// functions for use in other files
module.exports = {
    getById,
    create,
    update,
    remove,
}
