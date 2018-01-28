import {runAjax} from "../../components/load";
import * as Models from "../models/index";

var dir = "../wp-content/plugins/referee-testing/api/results/";

export const getAll = () => {
    return runAjax({
        url: dir + "getAll.php",
        type: "GET"
    })
}

export const filter = (contract: Models.Filter_Contract) => {
    return runAjax({
        url: dir + "filter.php",
        type: "POST",
        data: contract
    })
}

export const getDetails = (contract: Models.GetDetails_Contract) => {
    return runAjax({
        url: dir + "quizDetails.php",
        type: "POST",
        data: contract
    })
}