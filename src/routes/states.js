import express from 'express'
import controller from '../controllers/states'

const router = express.Router()

router.get('/', controller.getStates)

module.exports = app => app.use('/estados', router)
