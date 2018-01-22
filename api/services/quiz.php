<?php
require_once "../config/connect.php";
require_once "../models/quiz.php";

class QuizService{
    private $table;
    private $db;

    public function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $this->db->get_blog_prefix()."rt_quiz";
    }

    public function insert($memberId, $startDate, $endDate)
    {
        $quiz = new Quiz(null, $memberId, $startDate, $endDate, 0, 0, null);
        $sql = $this->db->prepare("INSERT INTO $this->table (memberId, startDate, endDate, score, isPassed, dateOfFinish) VALUE (%d, %s, %s, %d, %d, %s)", 
        $quiz->memberId, $quiz->startDate, $quiz->endDate, $quiz->score, $quiz->isPassed, $quiz->dateOfFinish);
        return ($this->db->query($sql))? $this->db->insert_id : false;
    }

    public function getQuizById($id)
    {
        $sql = $this->db->prepare("SELECT id, memberId, startDate, endDate, score, isPassed, dateOfFinish FROM $this->table WHERE id = %d", $id);
        $result = $this->db->get_row($sql);
        return new Quiz($result->id, $result->memberId, $result->startDate, $result->endDate, $result->score, $result->isPassed, $result->dateOfFinish);
    }

    public function update($id, $score, $isPassed, $dateOfFinish)
    {
        $sql = $this->db->prepare("UPDATE $this->table SET dateOfFinish = %s, score = %d, isPassed = %d WHERE id = %d", $dateOfFinish, $score, $isPassed, $id);
        return $this->db->query($sql);
    }
}