import {runAjax} from "../../components/load";
import * as Models from "../models/index";

var dir = "../wp-content/plugins/referee-testing/api/settings/";

export const getLogin = (contract: Models.GetLogin_Contract) => {
    return runAjax({
        url: dir + "getLogin.php",
        type: "GET",
        data: contract
    })
}

export const saveLogin = (contract: Models.SaveLogin_Contract) => {
    return runAjax({
        url: dir + "saveLogin.php",
        type: "POST",
        data: contract
    })
}

export const savePass = (contract: Models.SavePass_Contract) => {
    return runAjax({
        url: dir + "savePass.php",
        type: "POST",
        data: contract
    })
}