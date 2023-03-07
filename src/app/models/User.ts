import client from '../clients/pg'

import { type UserData } from '../types/dataMapper'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class User {
	static tableName = 'users'

	static findByEmail = async (email: string): Promise<UserData> => {
		const result = await client.query(
			`
            SELECT 
                u.id,
                u.lastname,
                u.firstname,
                u.email,
                u.password,
                r.name as "role"
            FROM "${this.tableName}" u
            JOIN roles r ON r.id = u.roles_id
            WHERE email = $1
            `,
			[email]
		)
		return result.rows[0]
	}
}
