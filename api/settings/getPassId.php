<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/settings.php";
require_once "../services/settings.php";

if(current_user_can("edit_others_pages")):
    $pass = Core::escape($_GET["settingName"]);
    $service = new SettingsService();
    $id = $service->getSettingId($pass);
    echo json_encode($id);
endif;