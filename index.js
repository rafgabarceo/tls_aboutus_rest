import { DBConnection } from "./db_connect.mjs";

// Retrieve variables from the environment.
const db_host = process.env.db_host;
const db_name = process.env.db_name;
const db_password = process.env.db_password;
const db_db = process.env.db_db;

// Initialize connection to the database through the DBConnection class.
let connection = new DBConnection(
    db_host,
    db_name,
    db_password,
    db_db
);


// Disconnect when done. 
connection.disconnect();

