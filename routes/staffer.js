import express, { application } from "express"
import {staffer_list} from "../controllers/staffer_controller.js";

const router = express.Router();

// Handles the initial get request staffer_list
router.get("/", staffer_list);

router.get("/:staffer_id")

export {router};