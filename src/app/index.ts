import { errorHandler } from './helpers/errorHandler'
import express from 'express'
import cors from 'cors'

import router from './router'
import HttpError from './errors/HTTPError'

const app = express()

app.use(cors({
	origin: ''
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
	res.send('hello')
})

app.use(router)

app.use((req, res, next) => {
	next(new HttpError(404, 'endpoint not found'))
})

app.use(errorHandler)

export default app
