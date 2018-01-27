<?php
require_once "../config/connect.php";
require_once "../models/question.php";

class QuestionsService{
    private $tableName;
    private $db;
    const MAX_QUIZ_QUESTIONS = 5;

    public function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->tableName = $this->db->get_blog_prefix() . "rt_questions";
    }

    public function getAll()
    {
        $questions = array();
        $sql = $this->db->prepare("SELECT * FROM $this->tableName", null);
        $result = $this->db->get_results($sql);
        foreach($result as $item){
            array_push($questions, new Question((int)$item->id, $item->text));
        }
        return $questions;
    }

    public function insert($text)
    {
        $question = new Question(null, $text);
        $sql = $this->db->prepare("INSERT INTO $this->tableName (text) VALUES (%s)", $question->text);
        return ($this->db->query($sql))? $this->db->insert_id : false;
    }

    public function update($id, $text)
    {
        $question = new Question($id, $text);
        print_r($question);
        $sql = $this->db->prepare("UPDATE $this->tableName SET text = %s WHERE id = %d", $question->text, $question->id);
        return $this->db->query($sql);
    }  
    
    public function delete($id)
    {
        $sql = $this->db->prepare("DELETE FROM $this->tableName WHERE id = %d", $id);
        return $this->db->query($sql);
    }   
    
    public function getQuestionsForQuiz()
    {
        $questions = array();
        $sql = $this->db->prepare("SELECT * FROM $this->tableName ORDER BY RAND() LIMIT %d", self::MAX_QUIZ_QUESTIONS);
        $result = $this->db->get_results($sql);
        foreach($result as $item){
            array_push($questions, new Question((int)$item->id, $item->text));
        }
        return $questions;
    }

    public function getMaxQuestionsQty()
    {
        return self::MAX_QUIZ_QUESTIONS;
    }
}