<?php

class Quiz{
    public $id;
    public $memberId;
    public $startDate;
    public $endDate;
    public $score;
    public $isPassed;
    public $dateOfFinish;

    public function __construct($id = null, $memberId = null, $startDate = null, $endDate = null, $score = 0, $isPassed = false, $dateOfFinish = null)
    {
        $this->id = $id;
        $this->memberId = $memberId;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->score = $score;
        $this->isPassed = $isPassed;
        $this->dateOfFinish = $dateOfFinish;
    }
}