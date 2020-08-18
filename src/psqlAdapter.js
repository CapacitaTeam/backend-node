import pgPromise from 'pg-promise';

const connStr = 
{
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'capacita-tech',
    user: 'postgres',
    password: 'Capacit@Tech2020'
};

const pgp = pgPromise({}); // Instancia a pgPromise
const psql = pgp(connStr); // Conexión a la Instancia de la BD

const _psql = psql;
export { _psql as psql };