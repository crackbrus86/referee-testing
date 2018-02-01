<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/members.php";
require_once "../services/settings.php";

$email = Core::escape($_POST["email"]);
$password = Core::escape($_POST["password"]);
$examLogin = Core::escape($_POST["examLogin"]);
$examPass = Core::escape($_POST["examPass"]);

$sService = new SettingsService();
$mService = new MembersService();
$password = Core::hashString($password);
$examPass = Core::hashString($examPass);
$member = $mService->getMember($email, $password);
$eLogin = $sService->getSetting("examinator_login");
$ePass = $sService->getSetting("examinator_pass");
$output = new stdClass();
if($examLogin != $eLogin->value)
{
    $output->state = false;
    $output->message = "Невірний логін екзаменатора!";
    $output->object = null;
}elseif($examPass != $ePass->value)
{
    $output->state = false;
    $output->message = "Невірний пароль екзаменатора!";
    $output->object = null;
}elseif(!$member){
    $output->state = false;
    $output->message = "Немає користувача з таким логіном або паролем!";
    $output->object = null;
}else{
    $_SESSION["currentTUser"] = serialize($member);
    $output->state = true;
    $output->message = "Вітаємо, $member->name $member->midName!";
    $output->object = $member;
}
$output = json_encode($output);
echo $output;