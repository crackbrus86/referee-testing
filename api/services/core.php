<?php
class Core{
    public static function escape($string){
        return strip_tags(stripslashes($string));
    }

    public static function validateString($string){
        return !!(strlen($string));
    }

    public static function validateEmail($string){
        return filter_var($string, FILTER_VALIDATE_EMAIL);
    }

    public static function hashString($string){
        return md5($string);
    }

    public static function comparePass($password, $confirm){
        return $password == $confirm;
    }

    public static function sendEmail(){
        
    }
}
?>