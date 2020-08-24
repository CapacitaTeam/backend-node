import { authFunctions } from '../controllers/controller.auth';
const { login } = authFunctions;

const mutationsTypeAuth = {
    login: (_, args, ctx) => {
        return login(args);
    }
}

module.exports = {
    mutationsTypeAuth
}