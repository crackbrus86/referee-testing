<?php
class Answer{
    public $id;
    public $questionId;
    public $text;
    public $isCorrect;

    public function __construct($id = null, $questionId = null, $text = "", $isCorrect = false){
        $this->id = $id;
        $this->questionId = $questionId;
        $this->text = $text;
        $this->isCorrect = $isCorrect;
    }
}