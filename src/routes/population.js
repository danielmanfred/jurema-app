import express from 'express'
import controller from '../controllers/population'

const router = express.Router()

router.get('/', controller.getStatePopulation)
router.get('/:uf', controller.getStatePopulation)

module.exports = app => app.use('/populacao', router)
