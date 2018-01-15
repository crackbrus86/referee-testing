<?php
    require_once "../config/connect.php";
    require_once "../services/core.php";
    require_once "../services/questions.php";
    require_once "../services/answers.php";

    if(current_user_can("edit_others_pages")){
        $questionId = Core::escape($_POST["questionId"]);
        $service = new QuestionsService();
        $answersService = new AnswersService();
        $service->delete($questionId);
        $answersService->deletedeleteByQuestionId($questionId);
    }