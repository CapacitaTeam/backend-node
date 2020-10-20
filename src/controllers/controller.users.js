import { psql } from '../psqlAdapter';

const generatePasswordRand  = e => {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var length = 7;    
    var pass = "";
    for (var i=0; i < length; i++){
        pass += characters.charAt(Math.floor(Math.random()*characters.length));   
    }
    return pass;
}

const userFunctions = {
    getUser: (params) => {
        const { id } = params;        
        const userData = `select id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat, id_role  from public.user WHERE id = ${id}`;
        return psql.query(userData);
    },
    getAllUsers: () => {
        const usersData = "select id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat, id_role  from public.user";
        return psql.manyOrNone(usersData);     
    },
    createUser: async (params) => {
        try {
            var pass = "";
            const { username, firstname, lastname, status, password, id_role } = params;
            if(!password)
                pass = generatePasswordRand();
            else
                pass = password

            const createUser = `INSERT INTO public.user (firstname, lastname, username, password, status, id_role) VALUES('${firstname}', '${lastname}','${username}', crypt('${pass}',gen_salt('bf')), '${status}', '${id_role}') RETURNING id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat`;
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
            const { id, firstname, lastname, status } = params;

            const updateUser = `UPDATE public.user SET firstname = '${firstname}', lastname = '${lastname}', status = '${status}' WHERE id = ${id} RETURNING id, firstname, lastname, username, password, status, TO_CHAR(createdat, 'DD/MM/YYYY') AS createdat`;
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
    },
    updateStatusUser: async (params) => {
        try {
            const { id, status } = params;

            const updateStatusUser = `UPDATE public.user SET status = '${status}' WHERE id = ${id} RETURNING *`;
            const resultado = await psql.query(updateStatusUser)

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