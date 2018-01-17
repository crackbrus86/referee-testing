<?php
require_once "../config/connect.php";
require_once "../models/member.php";

class MembersService{
    private $table;
    private $db;

    public function __construct(){
        global $wpdb;
        $this->db = $wpdb;
        $this->table = $this->db->get_blog_prefix() . "rt_members";
    }

    public function insert($name, $surname, $midName, $email, $pass)
    {
        $member = new Member(null, $name, $surname, $midName, $email);
        $sql = $this->db->prepare("INSERT INTO $this->table (name, surname, midName, email, pass) VALUES (%s, %s, %s, %s, %s)", $member->name, $member->surname,
        $member->midName, $member->email, $pass);
        return $this->db->query($sql);
    }

    public function isEmailBusy($email)
    {
        $sql = $this->db->prepare("SELECT COUNT(*) FROM $this->table WHERE email = %s", $email);
        return $this->db->get_var($sql);
    }
}