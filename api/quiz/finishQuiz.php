<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/quizResult.php";
require_once "../services/quizResult.php";
require_once "../services/quiz.php";


if(isset($_SESSION["currentTUser"])){
    $quiz = $_POST["quiz"];
    $questions = $_POST["questions"];
    $quizServise = new QuizService;
    $resultService = new QuizResultService();

    foreach($questions as $question){
        foreach($question['answers'] as $answer){
            $result = new QuizResult(Core::escape($quiz["id"]), Core::escape($question["id"]), Core::escape($answer["id"]), Core::escape($answer["isCorrect"]));
            $resultService->insert($result->quizId, $result->questionId, $result->answerId, $result->answerValue);
        }
    }
    $totalResult = $resultService->getResultByQuizId(Core::escape($quiz["id"]));
    print_r($totalResult);
    $finishDate = date("Y-m-d H:i:s");
    $quizServise->update($quiz->id, 0, 1, $finishDate);
}

