import express from 'express'
import cors from 'cors'

import router from './router'

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

export default app
