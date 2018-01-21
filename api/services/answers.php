<?php
require_once "../config/connect.php";
require_once "../models/answer.php";

class AnswersService{
    private $table;
    private $db;

    public function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $this->db->get_blog_prefix() . "rt_answers";
    }

    public function insert($questionId = null, $text = "", $isCorrect = false)
    {
        $answer = new Answer(null, $questionId, $text, $isCorrect);
        $sql = $this->db->prepare("INSERT INTO $this->table (questionId, text, isCorrect) VALUES (%d, %s, %d)", $answer->questionId, $answer->text, (int)($answer->isCorrect == 'true'));
        return $this->db->query($sql);
    }

    public function getByQuestionId($questionId = null)
    {
        $answers = array();
        if(!$questionId) return  $answers;
        $sql = $this->db->prepare("SELECT * FROM $this->table WHERE questionId = %d", $questionId);
        $result = $this->db->get_results($sql);
        foreach($result as $item){
            array_push($answers, new Answer((int)$item->id, (int)$item->questionId, $item->text, (bool)$item->isCorrect));
        }
        return $answers;
    }

    public function deleteByQuestionId($questionId)
    {
        $sql = $this->db->prepare("DELETE FROM $this->table WHERE questionId = %d", $questionId);
        return $this->db->query($sql);
    }

    public function getForQuizByQuestId($questionId = null)
    {
        $answers = array();
        $sql = $this->db->prepare("SELECT id, questionId, text FROM $this->table WHERE questionId = %d", $questionId);
        $result = $this->db->get_results($sql);
        foreach($result as $item){
            array_push($answers, new Answer((int)$item->id, (int)$item->questionId, $item->text, false));
        }
        return $answers;
    }
}
?>