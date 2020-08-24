import { psql } from '../psqlAdapter';
import jwt from 'jsonwebtoken';
import { encryptPassword, comparePassword } from '../utilities/passwordHandler';
import config from '../config';

const userFunctions = {

    getAllUsers: () => {
        const usersData = 'select id, firstname, lastname, username, password from public.user';
        return psql.manyOrNone(usersData);
    },
    createUser: async (params) => {
        try {
            const { id, username, firstname, lastname, password, token } = params;
            
            var password_formatted = await encryptPassword(password);            
            psql.any(`INSERT INTO public.user (id, firstname, lastname, username, password) VALUES('${id}', '${firstname}', '${lastname}','${username}', '${password_formatted}')`)
                .then((result) => {                    
                    return params;
                })
                .catch((err) => {
                    console.log(err)
                    return err;
                });
        }
        catch (e) {
            console.log(e)
            return 'There was a problem registering your user' + e;
        }

    }
}

module.exports = {
    userFunctions
}