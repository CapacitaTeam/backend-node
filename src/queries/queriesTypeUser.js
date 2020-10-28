import { userFunctions } from '../controllers/controller.users';
const { getAllUsers, getUser } = userFunctions;

const queriesTypeUser = {
    users: async () => {      
        return await getAllUsers();
    },
    user: async (_, args, ctx) => {
        return await getUser(args);
    }

}

module.exports = {
    queriesTypeUser
}