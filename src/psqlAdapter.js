import pgPromise from 'pg-promise';

const connStr = 
{
    // host: 'localhost', // server name or IP address;
    // port: 5432,
    // database: 'capacita_tech',
    // user: 'postgres',
    // password: 'Capacit@Tech2020'

    host: 'ct-db.capacita.tech', // server name or IP address;
    port: 5432,
    database: 'template03',
    user: 'web_team',
    password: 'w3b_t3@m_2k20'
};

const pgp = pgPromise({}); // Instancia a pgPromise
const psql = pgp(connStr); // Conexión a la Instancia de la BD

const _psql = psql;
export { _psql as psql };