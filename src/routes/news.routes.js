const { getAll, getById, create, update, remove } = require('../controllers/news.controller')
const { validateToken } = require('../services/auth.service')

const router = require('express').Router()

//athenticate the routes from  jwt athentication

// Route to create a new news article
router.post('/', validateToken, create)
// Route to update news article
router.put('/:id', validateToken, update)
// Route to remove news article
router.delete('/:id', validateToken, remove)
// Route to get news articale by id
router.get('/:id', getById)
//Route to get all news article
router.get('/', getAll)

module.exports = router
