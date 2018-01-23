<?php
require_once "../config/connect.php";
require_once "../models/member.php";
require_once "../models/quiz.php";
require_once "../services/quiz.php";

if(isset($_SESSION["currentTUser"])){
    date_default_timezone_set("Europe/Kiev");
    $user = unserialize($_SESSION["currentTUser"]);
    $startDate = date("Y-m-d H:i:s");
    // $endDate = date("Y-m-d H:i:s", strtotime('+2 hours'));
    $endDate = date("Y-m-d H:i:s", strtotime('+5 minutes'));
    $newQuiz = new Quiz(null, $user->id, $startDate, $endDate);
    $quizServise = new QuizService();
    $quizId = $quizServise->insert($newQuiz->memberId, $newQuiz->startDate, $newQuiz->endDate);
    if($quizId){
        $quiz = $quizServise->getQuizById($quizId);
        echo json_encode($quiz);
    }
}
