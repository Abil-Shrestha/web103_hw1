import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import creatorData from '../data/creators.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const creatorRouter = express.Router()

creatorRouter.get('/', (req, res) => {
    res.status(200).json(creatorData)
})

creatorRouter.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/careers.html'))
})

export default creatorRouter