import pgPromise from 'pg-promise';

const connStr = 
{
    host: process.env.host,//'ct-db.capacita.tech', // server name or IP address;
    port: process.env.port,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
};

const pgp = pgPromise({}); // Instancia a pgPromise
const psql = pgp(connStr); // Conexión a la Instancia de la BD

const _psql = psql;
export { _psql as psql };