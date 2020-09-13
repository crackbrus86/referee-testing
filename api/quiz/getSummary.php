<?php
require_once "../config/connect.php";
require_once "../models/quiz.php";
require_once "../services/core.php";
require_once "../services/quiz.php";

if(isset($_SESSION["currentTUser"])){
    $quizId = Core::escape($_POST["id"]);
    $quizService = new QuizService();
    $tmpQuiz = $quizService->getQuizById($quizId);
    if($tmpQuiz){
        $quiz = new Quiz($tmpQuiz->id, $tmpQuiz->memberId, $tmpQuiz->startDate, $tmpQuiz->endDate, $tmpQuiz->score, $tmpQuiz->isPassed, $tmpQuiz->dateOfFinish);
        $summary = new stdClass();
        $summary->startDate = $quiz->startDate;
        $summary->finishDate = $quiz->dateOfFinish;
        if(!$quiz->isPassed){
            $summary->status = false;
            $summary->reason = "Тестування не було завершене!";
            $summary->score = 0;
        }elseif(strtotime($quiz->dateOfFinish) > strtotime($quiz->endDate)){
            $summary->status = false;
            $summary->reason = "Тестування було завершене невчасно!";
            $summary->score = $quiz->score;
        }elseif($quiz->score < 80){
            $summary->status = false;
            $summary->reason = "Результат тестування має менше 80% правильних відповідей! Ваш результат ".$quiz->score."%.";
            $summary->score = $quiz->score;
        }else{
            $summary->status = true;
            $summary->reason = "Тестування пройдене успішно! Ваш результат ".$quiz->score."%.";
            $summary->score = $quiz->score;
        }
        echo json_encode($summary);
    }
}