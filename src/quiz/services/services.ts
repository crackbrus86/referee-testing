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

export const signIn = (contract: Models.SignIn_Contract) => {
    return runAjax({
        url: dir + "signin.php",
        type: "POST",
        data: contract
    })
}

export const getUser = () => {
    return runAjax({
        url: dir + "getUser.php",
        type: "GET"
    })
}

export const signOut = (contract: Models.SignOut_Contract) => {
    return runAjax({
        url: dir + "signout.php",
        type: "GET",
        data: contract
    })
}