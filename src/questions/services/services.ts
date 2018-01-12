import {runAjax} from "../../components/load";
import * as Models from "../models/questions";
import { InsertQuestion_Contract } from "../models/questions";

var dir = "../wp-content/plugins/referee-testing/api/questions/";

export const getAll = () => {
    return runAjax({
        url: dir + "getAll.php",
        type: "GET"
    });
}

export const insert = (contract: InsertQuestion_Contract) => {
    return runAjax({
        url: dir + "insert.php",
        type: "POST",
        data: contract
    })
}