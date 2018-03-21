<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/settings.php";

if(current_user_can("edit_others_pages"))
{
    $code = Core::escape($_POST["code"]);
    $code = Core::hashString($code);
    
    $sService = new SettingsService();
    
    $sCode = $sService->getSetting("qadcd");
    $response = new stdClass();
    if($code !== $sCode->value)
    {
        $response->status = false;
        $response->message = "Невірний пароль для управління питаннями";
        $response->data = null;
    }else{
        $_SESSION["questionsEditor"] = time();
        $response->status = true;
        $response->message = "Вхід виконаний";
        $response->data = null;
    }
    echo json_encode($response);
}
