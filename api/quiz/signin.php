<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/members.php";

$email = Core::escape($_POST["email"]);
$password = Core::escape($_POST["password"]);

$mService = new MembersService();
$password = Core::hashString($password);
$member = $mService->getMember($email, $password);
$output = new stdClass();
if($member){
    $_SESSION["currentTUser"] = serialize($member);
    $output->state = true;
    $output->message = "Вітаємо, $member->name $member->midName!";
    $output->object = $member;
}else{
    $output->state = false;
    $output->message = "Немає користувача з таким логіном або паролем!";
    $output->object = null;
}
$output = json_encode($output);
echo $output;