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

export const startQuiz = () => {
    return runAjax({
        url: dir + "startQuiz.php",
        type: "POST"
    })
}

export const getQuestions = () => {
    return runAjax({
        url: dir + "getQuestions.php",
        type: "GET"
    })
}

export const finishQuiz = (contract: Models.FinishQuiz_Contract) => {
    return runAjax({
        url: dir + "finishQuiz.php",
        type: "POST",
        data: contract
    })
}

export const getSummary = (contract: Models.GetSummary_Contract) => {
    return runAjax({
        url: dir + "getSummary.php",
        type: "POST",
        data: contract
    })
}

export const getDetails = (contract: Models.GetSummary_Contract) => {
    return runAjax({
        url: dir + "quizDetails.php",
        type: "POST",
        data: contract
    })
}