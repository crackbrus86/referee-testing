<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/quizResult.php";

if(current_user_can("edit_others_pages")){
    $quizId = Core::escape($_POST["id"]);
    $quizResltService = new QuizResultService();
    $totalSummary = $quizResltService->getTotalSummary($quizId);
    $detailSummary = $quizResltService->getDetailSummary($quizId);
    $output = array();
    foreach($totalSummary as $item){
        $question = new stdClass();
        $question->id = $item->id;
        $question->questionId = $item->questionId;
        $question->text = $item->text;
        $question->isTrue = !!$item->isTrue;
        $question->answers = array();
        foreach($detailSummary as $aItem){
            $answer = new stdClass();
            $answer->id = $aItem->id;
            $answer->quizId = $aItem->quizId;
            $answer->questionId = $aItem->questionId;
            $answer->answerId = $aItem->answerId;
            $answer->answerText = $aItem->answerText;
            $answer->isTrue = (!$aItem->isCorrect && !!$aItem->userAnswer)? false : true;
            if($answer->questionId == $question->questionId){
                array_push($question->answers, $answer);
            }
        }
        array_push($output, $question);
    }
    echo json_encode($output);
}