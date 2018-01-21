<?php

class QuizResult{
    public $id;
    public $quizId;
    public $questionId;
    public $answerId;
    public $answerValue;

    public function __construct($quizId, $questionId, $answerId, $answerValue){
        $this->id = null;
        $this->quizId = $quizId;
        $this->questionId = $questionId;
        $this->answerId = $answerId;
        $this->answerValue = $answerValue;
    }
}