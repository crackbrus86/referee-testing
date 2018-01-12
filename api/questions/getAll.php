<?php
require_once "../config/connect.php";
require_once "../services/questions.php";

if(current_user_can("edit_others_pages")):
    $service = new QuestionsService();
    echo $service->getAll();
endif;