import express from 'express'
import client from '../clients/pg'
const router = express.Router()

// >>>>>>>>>>Test client PG<<<<<<<<<<<<<<
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (req, res): Promise<void> => {
	const result = await client.query(`
select * from "test"
`)
	res.json(result.rows)
})
// router.get('/', (req, res) => {
// res.send('hello')
// })

export default router
