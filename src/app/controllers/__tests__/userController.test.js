import { userController } from '../userController'
import User from '../../models/User'
import client from '../../clients/pg'

jest.mock('../../models/User')

describe('Test userController', () => {
	it('should be call by good email and return a correct JSON', async () => {
		const userMock = {
			id: 2,
			lastname: 'test',
			firstname: 'test',
			email: 'test@admin.com',
			password: '$2a$12$x2krErvPCvW4MZMH1wR4Gu1obP3G5/n.9sOG4Wdhc8Hw6GjFJ8DqG',
			role: 'admin'
		}
		
		const mockedClient = { query: jest.fn() };
		jest.spyOn(client, 'query').mockResolvedValueOnce({ rows: [userMock] });
		jest.spyOn(User, 'findByEmail').mockResolvedValueOnce(userMock);

		const req = {
			body: {
				email: 'test@admin.com',
				password: 'test'
			}
		}
		const res = {
			json: jest.fn()
		}

		await userController.login(req, res)
		
		// expect(mockedClient.query).toHaveBeenCalled();		
		// expect(User.findByEmail).toHaveBeenCalled();
		expect(User.findByEmail).toHaveBeenCalledWith(req.body.email)
	})
})


/*
Testez que la fonction login appelle la fonction findByEmail avec l'email correct et que le résultat de la fonction est correctement traité.

Testez que la fonction login renvoie une erreur 404 si la fonction findByEmail renvoie undefined.

Testez que la fonction login renvoie une erreur 401 si le mot de passe fourni est incorrect.

Testez que la fonction login renvoie un token valide si l'utilisateur fourni des informations valides.

Testez que la fonction login renvoie une erreur si le SECRET_HASH n'est pas défini.

Testez que la fonction login renvoie une erreur si le EXPIRES_TOKEN n'est pas défini.

Testez que la fonction login renvoie une erreur si l'utilisateur fourni n'a pas de mot de passe.

Testez que la fonction login ne renvoie pas le mot de passe de l'utilisateur dans la réponse.
*/