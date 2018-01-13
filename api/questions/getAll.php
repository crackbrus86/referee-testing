<?php
require_once "../config/connect.php";
require_once "../services/questions.php";
require_once "../services/answers.php";

if(current_user_can("edit_others_pages")):
    $service = new QuestionsService();
    $answersService = new AnswersService();
    $questions = $service->getAll();
    foreach($questions as $question)
    {
        $question->answers = $answersService->getByQuestionId($question->id);
    }
    echo json_encode($questions);
endif;
