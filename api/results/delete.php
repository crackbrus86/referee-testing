<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/results.php";

if(current_user_can("edit_others_pages")):
    $quizId = Core::escape($_POST["quizId"]);
    $service = new ResultsService();
    $service->deleteQuiz($quizId);
    $service->deleteResultByQuizId($quizId);
endif;