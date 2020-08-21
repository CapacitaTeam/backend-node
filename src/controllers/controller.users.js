import { psql } from '../psqlAdapter';

const userFunctions = {

    getAllUsers: () => {
        const usersData = 'select id, firstname, lastname, username, password from public.user';
        return psql.manyOrNone(usersData);
    }
}

module.exports = {
    userFunctions
}