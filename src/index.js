import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import schema from './schemas/schema';
import jwt from 'jsonwebtoken';
import config from './config';

const app = express();

// Middleware para verificar token
const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log(req.headers);
    if (!req.headers.authorization) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    // Decodifica el token
    const decoded = await jwt.verify(req.headers.authorization, config.secret);
    //Asigna el id del usuario logueado
    req.id = decoded.id;
    console.log(decoded);
    ///console.log(req);
    next();
}

app.use('*', cors());

//Para utilizar el middleware token quitar comentario
//app.use(verifyToken);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3001, () => {
    console.log('conectado');
});