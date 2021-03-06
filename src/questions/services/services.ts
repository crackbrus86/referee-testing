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

export const deleteQuestion = (contract: Models.DeleteQuestion_Cotract) => {
    return runAjax({
        url: dir + "delete.php",
        type: "POST",
        data: contract
    })
}

export const verify = () => {
    return runAjax({
        url: dir + "verifyinner.php",
        type: "POST"
    })
}

export const signIn = (contract: Models.SignIn_Contract) => {
    return runAjax({
        url: dir + "signinner.php",
        type: "POST",
        data: contract
    })
}

export const signOut = () => {
    return runAjax({
        url: dir + "signout.php",
        type: "PoST"
    })
}