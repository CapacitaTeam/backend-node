import pgPromise from 'pg-promise';

const connStr = 
{
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'capacita_tech',
    user: 'postgres',
    password: 'postgres'
};

const pgp = pgPromise({}); // Instancia a pgPromise
const psql = pgp(connStr); // Conexión a la Instancia de la BD

const _psql = psql;
export { _psql as psql };