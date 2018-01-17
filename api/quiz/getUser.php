<?php
require_once "../config/connect.php";
require_once "../models/member.php";

$member = null;

if(isset($_SESSION["currentTUser"])){
    $session = unserialize($_SESSION["currentTUser"]);  
    $member = new Member($session->id, $session->name, $session->surname, $session->midName, $session->email);
}

$member = json_encode($member);
echo $member;