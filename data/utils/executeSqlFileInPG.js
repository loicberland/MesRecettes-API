import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config'
import * as fs from 'fs'

// IIFE
const executeSqlFileInPG = async (connectionString, path) => {
	const client = new Client({
		connectionString: connectionString ?? process.env.DATABASE_URL,
		ssl: { rejectUnauthorized: false }
	})
	await client.connect()

	const sql = fs.readFileSync(path).toString()
	try {
		await client.query(sql)
		console.log(`Requête du fichier : ${path} executé sans erreur`)
	} catch (error) {
		console.error(error)
	}
	client.end()
}

export default executeSqlFileInPG
