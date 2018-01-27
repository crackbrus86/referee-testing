<?php
require_once "../config/connect.php";
require_once "../models/result.php";

class ResultsService{
    private $quizTable;
    private $quizResultsTable;
    private $membersTable;
    private $db;

    public function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->quizTable = $this->db->get_blog_prefix() . "rt_quiz";
        $this->quizResultsTable = $this->db->get_blog_prefix() . "rt_quiz_results";
        $this->membersTable = $this->db->get_blog_prefix() . "rt_members";
    }

    public function getAll()
    {
        $response = array();
        $sql = $this->db->prepare("SELECT qz.id, qz.memberId, CONCAT(mb.surname,' ', mb.name,' ', mb.midName) AS fullName, mb.email, 
        qz.startDate AS start, qz.dateOfFinish AS finish, IF(qz.dateOfFinish <= qz.endDate, 1, 0) AS inTime,
        qz.score, IF(qz.score < 90, 0, 1) AS isSuccessful
        FROM $this->quizTable AS qz 
        JOIN $this->membersTable AS mb
        ON qz.memberId = mb.id
        WHERE qz.isPassed = 1", null);
        $results = $this->db->get_results($sql);
        foreach($results as $result){
            array_push($response, new Result($result));
        }
        return $response;
    }
}