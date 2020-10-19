import { userFunctions } from '../controllers/controller.users';
const { createUser, updateUser, updateStatusUser } = userFunctions;

const mutationsTypeUser = {
   
    createUser: (_, args, ctx) => {
        return createUser(args);
    },
    updateUser: (_, args, ctx) => {
        return updateUser(args);
    },
    updateStatusUser: (_, args, ctx) => {
        return updateStatusUser(args);
    },
}

module.exports = {
    mutationsTypeUser
}