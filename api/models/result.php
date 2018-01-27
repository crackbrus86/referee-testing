<?php
class Result{
    public $id;
    public $memberId;
    public $fullName;
    public $email;
    public $start;
    public $finish;
    public $inTime;
    public $score;
    public $isSuccessful;

    public function __construct($dbResult)
    {
        $this->id = $dbResult->id;
        $this->memberId = $dbResult->memberId;
        $this->fullName = $dbResult->fullName;
        $this->email = $dbResult->email;
        $this->start = $dbResult->start;
        $this->finish = $dbResult->finish;
        $this->inTime = $dbResult->inTime;
        $this->score = $dbResult->score;
        $this->isSuccessful = $dbResult->isSuccessful;
    }

}