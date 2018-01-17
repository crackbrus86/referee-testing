<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../models/member.php";

$logout = Core::escape($_GET["logout"]);

if($logout && isset($_SESSION["currentTUser"])){
    $session = unserialize($_SESSION["currentTUser"]); 
    if($session->id === $logout) { unset($_SESSION["currentTUser"]); }
}
