<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/settings.php";
require_once "../services/settings.php";

if(current_user_can("edit_others_pages")):
    $pass = $_POST["pass"];
    $service = new SettingsService();
    $examPass = new Setting();
    $examPass->id = Core::escape($pass["id"]);
    $examPass->name = Core::escape($pass["name"]);
    $examPass->value = Core::hashString(Core::escape($pass["value"]));    
    $examPass->type = Core::escape($pass["type"]);
    if($service->checkSettingExists($examPass->name)){
        $service->updateSetting($examPass);
    }else{
        $service->insertSetting($examPass);
    }
endif;