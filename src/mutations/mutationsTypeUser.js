import { userFunctions } from '../controllers/controller.users';
const { createUser } = userFunctions;

const mutationsTypeUser = {
    updateUser: (_, args, ctx) => {
        return args;
    },
    createUser: (_, args, ctx) => {
        return createUser(args);
    }
}

module.exports = {
    mutationsTypeUser
}