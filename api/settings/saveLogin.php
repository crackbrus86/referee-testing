<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/settings.php";
require_once "../services/settings.php";

if(current_user_can("edit_others_pages")):
    $login = $_POST["login"];
    $service = new SettingsService();
    $examLogin = new Setting();
    $examLogin->id = Core::escape($login["id"]);
    $examLogin->name = Core::escape($login["name"]);
    $examLogin->value = Core::escape($login["value"]);
    $examLogin->type = Core::escape($login["type"]);

    if($service->checkSettingExists($examLogin->name)){
        $service->updateSetting($examLogin);
    }else{
        $service->insertSetting($examLogin);
    }
endif;