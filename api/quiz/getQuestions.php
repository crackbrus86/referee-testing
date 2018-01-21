<?php
require_once "../config/connect.php";
require_once "../services/questions.php";
require_once "../services/answers.php";

if(isset($_SESSION["currentTUser"])){
    $questionService = new QuestionsService();
    $answerService = new AnswersService();
    $questions = $questionService->getQuestionsForQuiz();
    foreach($questions as $question){
        $question->answers = $answerService->getForQuizByQuestId($question->id);
    }
    echo json_encode($questions);
}