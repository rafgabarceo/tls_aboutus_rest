import * as mysql from "mysql2";

/**
 * 
 * This class provides an interface for the user to begin a MySQL connection.
 * Once established connection is to be discarded, please call the disconnect() method.
 * 
 */
class DBConnection {
    #db_host;
    #db_name;
    #db_password;
    #db_db;
    db_connection_pool;
    
    constructor(db_host, db_name, db_password, db_db) {
        this.#db_host = db_host;
        this.#db_name = db_name;
        this.#db_password = db_password,
        this.#db_db = db_db
        this.db_connection = mysql.createPool({
            host: db_host,
            user: db_name,
            password: db_password,
            database: db_db,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }
}

export {DBConnection};

