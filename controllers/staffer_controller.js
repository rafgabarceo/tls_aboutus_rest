import { getAllStaffers } from "../repositories/staffer_repository.js";
import { retrieveAllStaffers } from "../services/staffer_service.js";

const handleResponse = (res, data) => res.status(200).json(data);
const handleError = (res, err) => res.status(400).send(err);

// Will handle GET. Returns all staffers
export async function staffer_list(req, res){
    let a = retrieveAllStaffers()
        .then(data => {
            handleResponse(res, data);
        }).catch(err => {
            handleError(res, err);
        })
};