<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/questions.php";
require_once "../services/answers.php";

if(current_user_can("edit_others_pages")){
    $id = Core::escape($_POST["question"]["id"]);
    $text = Core::escape($_POST["question"]["text"]);
    $answers = $_POST["question"]["answers"];
    $service = new QuestionsService();
    $answersService = new AnswersService();
    $service->update($id, $text);
    $answersService->deleteByQuestionId($id);
    foreach($answers as $answer){
        $answerText = Core::escape($answer['text']);
        $isCorrect = Core::escape($answer['isCorrect']);
        $answersService->insert($id, $answerText, $isCorrect);
    }
}