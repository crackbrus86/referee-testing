<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/quizResult.php";
require_once "../services/quizResult.php";
require_once "../services/quiz.php";
require_once "../services/questions.php";


if(isset($_SESSION["currentTUser"])){
    date_default_timezone_set("Europe/Kiev");
    $quiz = $_POST["quiz"];
    $questions = $_POST["questions"];
    $quizServise = new QuizService();
    $resultService = new QuizResultService();
    $qtService = new QuestionsService();

    foreach($questions as $question){
        foreach($question['answers'] as $answer){
            $result = new QuizResult(Core::escape($quiz["id"]), Core::escape($question["id"]), Core::escape($answer["id"]), Core::escape($answer["isCorrect"]));
            $resultService->insert($result->quizId, $result->questionId, $result->answerId, $result->answerValue);
        }
    }
    $totalResult = $resultService->getResultByQuizId(Core::escape($quiz["id"]));

    $questionsScores = array();
    foreach($questions as $question){
        $rFilter = array_filter($totalResult, function($object) use($question){
            if(isset($object->questionId) && $object->questionId == $question["id"]){
                return TRUE;
            }
            return FALSE;
        });
        $score = 1;
        foreach($rFilter as $item){
            $score *= $item->isCorrect;
        }
        $questionsScores[$question["id"]] = $score;
    }

    $total = 0;
    foreach($questionsScores as $key => $value){
        $total += $value;
    }
    $max = $qtService->getMaxQuestionsQty(); 
    $score = floor(($total / $max) * 100);

    $finishDate = date("Y-m-d H:i:s");
    $quizServise->update(Core::escape($quiz["id"]), $score, 1, $finishDate);
}

