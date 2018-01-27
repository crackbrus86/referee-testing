<?php
require_once "../config/connect.php";
require_once "../services/results.php";

if(current_user_can("edit_others_pages")):
    $service = new ResultsService();
    $response = $service->getAll();
    echo json_encode($response);
endif;