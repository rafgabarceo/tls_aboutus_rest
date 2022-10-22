import { getAllStaffers } from "../repositories/staffer_repository.js";

export async function retrieveAllStaffers (){
    let staffers = await getAllStaffers();
    return staffers;
}
