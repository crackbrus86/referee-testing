<?php
require_once "../config/connect.php";
require_once "../models/settings.php";

class SettingsService{
    private $table;
    private $db;

    public function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $this->db->get_blog_prefix()."rt_settings";

    }

    public function checkSettingExists($settingName)
    {
        $sql = $this->db->prepare("SELECT COUNT(*) FROM $this->table WHERE settingName = %s", $settingName);
        return $this->db->get_var($sql);
    }

    private function mapToSetting($settingObj)
    {
        return new Setting($settingObj->id, $settingObj->name, $settingObj->value, $settingObj->type);
    }

    public function insertSetting($settingObj)
    {
        $setting = $this->mapToSetting($settingObj);
        $sql = $this->db->prepare("INSERT INTO $this->table (settingName, settingValue, settingType) VALUES (%s, %s, %s)", 
        $setting->name, $setting->value, $setting->type);
        return $this->db->query($sql);
    }

    public function updateSetting($settingObj)
    {
        $setting = $this->mapToSetting($settingObj);
        $sql = $this->db->prepare("UPDATE $this->table SET settingName = %s, settingValue = %s, settingType = %s WHERE id = %d",
        $setting->name, $setting->value, $setting->type, $setting->id);
        return $this->db->query($sql);
    }

    public function getSetting($settingName)
    {
        $sql = $this->db->prepare("SELECT * FROM $this->table WHERE settingName = %s", $settingName);
        $response = $this->db->get_row($sql);
        return new Setting($response->id, $response->settingName, $response->settingValue, $response->settingType);
    }
}