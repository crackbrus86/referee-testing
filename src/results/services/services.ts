import {runAjax} from "../../components/load";
import * as Models from "../models/index";

var dir = "../wp-content/plugins/referee-testing/api/results/";

export const getAll = () => {
    return runAjax({
        url: dir + "getAll.php",
        type: "GET"
    })
}