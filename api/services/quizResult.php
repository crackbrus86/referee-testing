<?php
require_once "../config/connect.php";
require_once "../models/quizResult.php";

class QuizResultService{
    private $table;
    private $db;
    private $tb_questions;
    private $tb_answers;

    public function __construct()
    {
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $this->db->get_blog_prefix()."rt_quiz_results";
        $this->tb_questions = $this->db->get_blog_prefix()."rt_questions";
        $this->tb_answers = $this->db->get_blog_prefix()."rt_answers";
    }

    public function insert($quizId, $questionId, $answerId, $answerValue)
    {
        $quizResult = new QuizResult($quizId, $questionId, $answerId, $answerValue);
        $sql = $this->db->prepare("INSERT INTO $this->table (quizId, questionId, answerId, answerValue) VALUES (%d, %d, %d, %d)", 
        $quizResult->quizId, $quizResult->questionId, $quizResult->answerId, (int)($quizResult->answerValue == "true"));
        return $this->db->query($sql);
    }

    public function getResultByQuizId($quizId)
    {
        $sql = $this->db->prepare("SELECT qr.id, qr.quizId, qt.id AS questionId, qt.text AS questionText, an.id AS answerId, 
        an.text AS answerText, (qr.answerValue = an.isCorrect) AS isCorrect FROM $this->table AS qr
            JOIN $this->tb_questions AS qt
                ON qr.questionId = qt.id
            JOIN $this->tb_answers AS an
                ON qr.answerId = an.id
        WHERE qr.quizId = %d", $quizId);
        $result = $this->db->get_results($sql);
        return $result;
    }
}

// SELECT qr.id, qr.questionId, qn.text, (SUM((qr.answerValue = an.isCorrect)) = COUNT(qr.questionId)) as isTrue FROM wp_rt_quiz_results as qr
// JOIN wp_rt_answers as an
// ON qr.answerId = an.id
// JOIN wp_rt_questions as qn
// ON qr.questionId = qn.id
// WHERE quizId = 2 GROUP BY qr.questionId