import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import CareersController from '../controllers/careers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const creatorRouter = express.Router()

creatorRouter.get('/', CareersController.getCareers)

creatorRouter.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/careers.html'))
})

export default creatorRouter