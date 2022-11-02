import { query } from "express";
import {DBConnection} from "../classes/db_connect.mjs"
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

// Create
export function addStaffer(name, email, status, section){

};

export function addSection(name, category, logo){
    // TODO: ADD SINGLE SECTION
};

export async function getAllStaffers(){
    return new Promise((resolve, reject) => {
        connection.db_connection.query("SELECT staffer_name,section_id FROM staffer WHERE staffer_status=`regular`", (err, results, fields) => {
            if(err) {
                reject(new Error(`An error has occured. Trace: ${err} `));
            } else {
                resolve(results);
            } 
        });
    });
}

// Default parameter disables the email query. If Top 3 is queried, then the email will be included.
export function getStaffer(id, isTopThree = 0,){ 
	query = "SELECT staffer_name,section_id WHERE staffer_id=?";
	if(isTopThree){
		query = "SELECT staffer_name,staffer_email,section_id FROM staffer WHERE staffer_id=?";	
	}
    return new Promise((resolve, reject) => {
        connection.db_connection.query(query, [id], (err, results, fields) => {
			if(err){
				reject(new Error(`An error has occured. Trace: ${err}`));
			} else {
				resolve(results);
			}
		})
    })
}

// Update
export function updateStafferName(id, name){
    // TODO: UPDATE STAFFER WITH STATUS CODE.
};
export function updateStafferEmail(id, email){
    // TODO: UPDATE STAFFER EMAIL WITH STATUS CODE.
};
export function updateStafferStatus(id, status){
    // TODO: UPDATE STAFFER STATUS WITH STATUS CODE.
};

export function updateStafferSection(id, section){
    // TODO: UPDATE STAFFER SECTION WITH STATUS CODE.
};

export function updateStafferYear(id, year){
    // TODO: UPDATE STAFFER ENTRY YEAR WITH STATUS CODE.
};

// Delete
export function removeStaffer(id){
    // TODO: DELETE STAFFER WITH STATUS CODE.
};
