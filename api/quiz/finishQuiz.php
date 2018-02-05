<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/quizResult.php";
require_once "../services/quizResult.php";
require_once "../services/quiz.php";
require_once "../services/questions.php";
require_once "../services/core.php";


if(isset($_SESSION["currentTUser"])){
    date_default_timezone_set("Europe/Kiev");
    $data = json_decode(Core::escape($_POST["json"]), true);
    $quiz = $data["quiz"];
    $questions = $data["questions"];
    $quizServise = new QuizService();
    $resultService = new QuizResultService();
    $qtService = new QuestionsService();

    foreach($questions as $question){
        foreach($question['answers'] as $answer){
            $result = new QuizResult(Core::escape($quiz["id"]), Core::escape($question["id"]), Core::escape($answer["id"]), Core::escape($answer["isCorrect"]));
            $resultService->insert($result->quizId, $result->questionId, $result->answerId, $result->answerValue);
        }
    }

    $totalSummary = $resultService->getTotalSummary(Core::escape($quiz["id"]));
    $total = 0;
    foreach($totalSummary as $question){
        $total += $question->isTrue;
    }
    $max = $qtService->getMaxQuestionsQty();
    $score = floor(($total / $max) * 100);

    $finishDate = date("Y-m-d H:i:s");
    $quizServise->update(Core::escape($quiz["id"]), $score, 1, $finishDate);
}

