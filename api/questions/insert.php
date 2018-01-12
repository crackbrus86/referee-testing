<?php
require_once "../config/connect.php";
require_once "../services/questions.php";

if(current_user_can("edit_others_pages")):
    $text = strip_tags(stripslashes($_POST["text"]));
    $service = new QuestionsService();
    echo $service->insert($text);
endif;