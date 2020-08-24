import { psql } from '../psqlAdapter';
import jwt from 'jsonwebtoken';
import { encryptPassword, comparePassword } from '../utilities/passwordHandler';
import config from '../config';

const authFunctions = {

    login: async (params) => {
        try {
            const { username, password } = params;
            
            const user = await psql.one('SELECT * FROM public.user WHERE username = $1', username);
            
            if(user) {
                const validPassword = await comparePassword(user.password, password);                
                // Crea el Token
                var token_generated = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 60 * 60 * 24 // expira en 24 hours
                });
                user.token = token_generated;

                return user;
            }
            return null;
        }
        catch (e) {
            console.log(e)
            return null;
        }

    }
}

module.exports = {
    authFunctions
}