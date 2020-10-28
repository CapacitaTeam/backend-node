import { userFunctions } from '../controllers/controller.users';
const { createUser, updateUser, updateStatusUser } = userFunctions;

const mutationsTypeUser = {
   
    createUser: (_, args, ctx) => {
        return createUser(args);
    },
    createUsers: (_, args, ctx) => {
        //console.log(args);
        let values = [];
        args.users.map((item) => {            
            values.push(createUser(item));
        });
        return values;        
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