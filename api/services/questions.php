<?php
include_once("../config/connect.php");
require_once "../models/question.php";

class QuestionsService{
    private $tableName;

    public function __construct()
    {
        global $wpdb;
        $this->tableName = $wpdb->get_blog_prefix() . "rt_questions";
    }

    public function getAll(){
        global $wpdb;
        $questions = array();
        $sql = $wpdb->prepare("SELECT * FROM $this->tableName", null);
        $result = $wpdb->get_results($sql);
        foreach($result as $item){
            array_push($questions, new Question($item->id, $item->text));
        }
        return json_encode($questions);
    }

    public function insert($text){
        global $wpdb;
        $question = new Question(null, $text);
        $sql = $wpdb->prepare("INSERT INTO $this->tableName (text) VALUES (%s)", $question->text);
        return ($wpdb->query($sql))? $wpdb->insert_id : false;
    }

    public function getSingle($id){
        global $wpdb;
    }

    public function update($id, $text){
        global $wpdb;
    }  
    
    public function delete($id){
        global $wpdb;
    }      
}