<?php
    require_once "../config/connect.php";
    if(current_user_can("edit_others_pages")){
        if(isset($_SESSION["questionsEditor"])){
            unset($_SESSION["questionsEditor"]);
        }
    }