import { psql } from '../psqlAdapter';

const userFunctions = {
    getUser: (params) => {
        const { id } = params;        
        const userData = `select id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat  from public.user WHERE id = ${id}`;
        return psql.query(userData);
    },
    getAllUsers: () => {
        const usersData = "select id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat  from public.user";
        return psql.manyOrNone(usersData);     
    },
    createUser: async (params) => {
        try {
            const { username, firstname, lastname, password, status } = params;

            const createUser = `INSERT INTO public.user (firstname, lastname, username, password, status) VALUES('${firstname}', '${lastname}','${username}', crypt('${password}',gen_salt('bf')), '${status}') RETURNING *`;
            const resultado = await psql.query(createUser)

                .then((result) => {
                    //console.log(result[0]);
                    return result[0];
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
    },
    updateUser: async (params) => {
        try {
            const { id, username, firstname, lastname, password, status } = params;

            const updateUser = `UPDATE public.user SET firstname = '${firstname}', lastname = '${lastname}', status = '${status}' WHERE id = ${id} RETURNING *`;
            const resultado = await psql.query(updateUser)

                .then((result) => {
                    return result[0];
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