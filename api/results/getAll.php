<?php
require_once "../config/connect.php";
require_once "../services/results.php";

if(current_user_can("edit_others_pages")):
    $service = new ResultsService();
    $response = $service->getAll();
    foreach($response as $item){
        $item->inTime = ($item->inTime)? TRUE : FALSE;
        $item->isSuccessful = ($item->isSuccessful)? TRUE : FALSE;
    }
    echo json_encode($response);
endif;