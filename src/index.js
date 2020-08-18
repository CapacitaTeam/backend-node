import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import schema from './schemas/schema';

const app = express();

app.use('*', cors());

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, ()=> {
    console.log('conectado');
});