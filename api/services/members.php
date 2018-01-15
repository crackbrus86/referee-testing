<?php
require_once "../config/connect.php";
require_once "../models/question.php";

class MembersService{
    private $table;
    private $db;

    public function __construct(){
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $this->db->get_blog_prefix() . "rt_members";
    }
}