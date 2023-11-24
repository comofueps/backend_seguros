// CONTROLADORES NECESARIOS SEGUN EL MOTOR DE BASE DE DATOS A UTILIZAR
// # One of the following:
// $ npm install --save pg pg-hstore # Postgres
// $ npm install --save mysql2
// $ npm install --save mariadb
// $ npm install --save sqlite3
// $ npm install --save tedious # Microsoft SQL Server
// $ npm install --save oracledb # Oracle Database

// CONEXION MySQL
const Sequelize = require('sequelize');

const DB_NAME = 'seguros_mysql_nodejs';

const DB_USER = 'root';

const DB_PASS = '12345678';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }

);


async function generateDb() {
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();
// FIN CONEXION MySQL



// CONEXION ORACLE
// const Sequelize = require('sequelize');

// const DB_NAME = 'xe';

// const DB_USER = 'user_seguros';

// const DB_PASS = '12345678';



// export const database = new Sequelize(
//     DB_NAME,
//     DB_USER,
//     DB_PASS,

//     {
//         host: 'localhost',
//         dialect: 'oracle',
//         port: 1521
//     }

// );


// async function generateDb() {
//     await database.sync({ force: true})
//     console.log('Base de datos y tablas creada');
// }

// generateDb();
// FIN CONEXION ORACLE



// CONEXION POSTGRESQL
// const Sequelize = require('sequelize');

// const DB_NAME = 'seguros_postgresql_nodejs';

// const DB_USER = 'postgres';

// const DB_PASS = '12345678';



// export const database = new Sequelize(
//     DB_NAME,
//     DB_USER,
//     DB_PASS,

//     {
//         host: 'localhost',
//         dialect: 'postgres',
//         port: 5432
//     }

// );


// async function generateDb() {
//     await database.sync({ force: false })
//     console.log('Base de datos y tablas creada');
// }

// generateDb();
// FIN CONEXION POSTGRESQL



// CONEXION SQL SERVER
// const Sequelize = require('sequelize');

// const DB_NAME = 'seguros_mysql_nodejs';

// const DB_USER = 'root';

// const DB_PASS = '12345678';



// export const database = new Sequelize(
//     DB_NAME,
//     DB_USER,
//     DB_PASS,

//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     }

// );


// async function generateDb() {
//     await database.sync({ force: false })
//     console.log('Base de datos y tablas creada');
// }
// generateDb();
// FIN CONEXION SQL SERVER







