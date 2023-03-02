import { Client } from 'pg'

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false }

})

// eslint-disable-next-line @typescript-eslint/no-floating-promises
client.connect()

export default client
