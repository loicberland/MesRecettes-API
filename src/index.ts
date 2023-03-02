import { createServer } from 'http'
import 'dotenv/config'
import myapp from './app'

const PORT = process.env.PORT ?? 5000

const server = createServer(myapp)

server.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`)
})
