import crypto from 'crypto'
import bcrypt from 'bcrypt'

// Génère un secret aléatoire de 64 octets
const secret = crypto.randomBytes(64).toString('hex')
console.log(secret)

// // Hache le secret avec bcrypt
// const saltRounds = 10 // Nombre de tours de hachage à effectuer
// bcrypt.hash(secret, saltRounds, (err, hash) => {
// 	if (err != null) throw err

// 	// Stocke le hash dans une variable d'environnement
// 	process.env.SECRET_HASH = hash
// 	console.log(hash)
// })

