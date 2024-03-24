const News = require('../models/news.model')
const NewsService = require('../services/news.service')

// Define controller functions

// Retrieves all news and search news 
const getAll = async (req, res) => {
    try {
        const { search, sortBy } = req.query

        const searchCriteria = {}
        if (search) {
            searchCriteria.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ]
        }

        let sortCriteria = {}
        if (sortBy) {
            const [field, order] = sortBy.split(':')
            sortCriteria[field] = order === 'desc' ? -1 : 1
        }

        const news = await News.find(searchCriteria).sort(sortCriteria)
        res.status(200).json(news)
    } catch (err) {
        res.status(500).json(err)
    }
}

// Retrieves news by its ID 
const getById = async (req, res) => {
    try {
        const note = await NewsService.getById(req.params.id)
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}
// Create new news 
const create = async (req, res) => {
    try {
        const news = await NewsService.create(req.body)
        res.status(200).json(news)
    } catch (err) {
        res.status(500).json(err)
    }
}

//update news
const update = async (req, res) => {
    try {
        const news = await NewsService.update(req.params.id, req.body)
        res.status(200).json(news)
    } catch (err) {
        res.status(500).json(err)
    }
}

//remove news
const remove = async (req, res) => {
    try {
        const news = await NewsService.remove(req.params.id)
        res.status(200).json(news)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}
