import {runAjax} from "../../components/load";

var dir = "../wp-content/plugins/referee-testing/api/questions/";

export const getAll = () => {
    return runAjax({
        url: dir + "getAll.php",
        type: "GET"
    });
}