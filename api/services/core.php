<?php
class Core{
    public static function escape($string){
        return strip_tags(stripslashes($string));
    }
}
?>