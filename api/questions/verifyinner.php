<?php
require_once "../config/connect.php";
if(current_user_can("edit_others_pages"))
{
    $response = new stdClass();
    if(isset($_SESSION["questionsEditor"]))
    {
        $response->status = true;
    }else{
        $response->status = false;
    }
    echo json_encode($response);
}