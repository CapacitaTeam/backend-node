import { psql } from '../psqlAdapter';
import jwt from 'jsonwebtoken';
import config from '../config';

const authFunctions = {

    login: async (params) => {
        try {
            const { username, password } = params;
            const user = await psql.one(`select firstname, lastname, username, password FROM public.user WHERE username = '${username}' and password = crypt('${password}', password) limit 1`)

            if (user) {
                console.log(user);                
                // Crea el Token
                var token_generated = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 60 * 60 * 24 // expira en 24 hours
                });
                user.token = token_generated;

                return user;
            }
            return {
                username: username,
                token: 'null',
                error: e
            };
        }
        catch (e) {
            const { username, password } = params;
            return {
                username: username,
                token: 'null',
                error: e
            };
        }

    }
}

module.exports = {
    authFunctions
}