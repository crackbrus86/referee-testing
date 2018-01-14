import {runAjax} from "../../components/load";
import * as Models from "../models/questions";

var dir = "../wp-content/plugins/referee-testing/api/questions/";

export const getAll = () => {
    return runAjax({
        url: dir + "getAll.php",
        type: "GET"
    });
}

export const insert = (contract: Models.InsertQuestion_Contract) => {
    return runAjax({
        url: dir + "insert.php",
        type: "POST",
        data: contract
    })
}

export const update = (contract: Models.UpdateQuestion_Contract) => {
    return runAjax({
        url: dir + "update.php",
        type: "POST",
        data: contract
    })
}