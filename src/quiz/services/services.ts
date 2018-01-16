import {runAjax} from "../../components/load";
import * as Models from "../models/quiz";

var dir = "../wp-content/plugins/referee-testing/api/quiz/";

export const register = (contract: Models.Register_Contract) => {
    return runAjax({
        url: dir + "register.php",
        type: "POST",
        data: contract
    })
}