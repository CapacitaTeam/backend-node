import { psql } from '../psqlAdapter';

const userFunctions = {

    getAllUsers: () => {
        const usersData = "select id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat  from public.user";
        return psql.manyOrNone(usersData);
    },
    createUser: async (params) => {
        try {
            const { username, firstname, lastname, password, status } = params;

            const query_insert = `INSERT INTO public.user (firstname, lastname, username, password, status) VALUES('${firstname}', '${lastname}','${username}', crypt('${password}',gen_salt('bf')), '${status}') RETURNING *`;
            const resultado = await psql.query(query_insert)

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

    }
}

module.exports = {
    userFunctions
}