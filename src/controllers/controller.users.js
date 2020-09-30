import { psql } from '../psqlAdapter';

const userFunctions = {

    getAllUsers: () => {
        const usersData = 'select id, firstname, lastname, username, password, status, createdat from public.user';
        return psql.manyOrNone(usersData);
    },
    createUser: async (params) => {
        try {
            const { username, firstname, lastname, password } = params;

            const query_insert = `INSERT INTO public.user (firstname, lastname, username, password) VALUES('${firstname}', '${lastname}','${username}', crypt('${password}',gen_salt('bf')))`;
            const resultado = await psql.any(query_insert)
                .then((result) => {
                    console.log(params);
                    return params;
                })
                .catch((err) => {
                    console.log(err)
                    return err;
                });

            return resultado;
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