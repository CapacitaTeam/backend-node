import { userFunctions } from '../controllers/controller.users';
const { getAllUsers } = userFunctions;

const queriesTypeUser = {
    users: async () => {
        return await getAllUsers();
    }
}

module.exports = {
    queriesTypeUser
}