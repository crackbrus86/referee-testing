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

    public static function sendEmail($email, $subj, $mess){
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: Eudemo <crackbrus86@gmail.com>' . "\r\n";
        $headers .= 'Cc: ' . "\r\n";
        $headers .= 'Bcc: ' . "\r\n";
        $for = $email;
        $subject = $subj;
        $message = $mess;
        mail($for, $subject, $message, $headers);        
    }
}
?>