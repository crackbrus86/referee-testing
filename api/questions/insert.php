<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/questions.php";
require_once "../services/answers.php";

if(current_user_can("edit_others_pages")):
    $text = Core::escape($_POST["text"]);
    $answers = $_POST["answers"];
    $service = new QuestionsService();
    $answersService = new AnswersService();
    $questionId = $service->insert($text);
    foreach($answers as $answer){
        $answerText = Core::escape($answer['text']);
        $isCorrect = Core::escape($answer['isCorrect']);
        $answersService->insert($questionId, $answerText, $isCorrect);
    }
endif;