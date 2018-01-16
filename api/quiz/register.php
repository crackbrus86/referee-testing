<?php
require_once "../config/connect.php";
require_once "../services/core.php";
require_once "../services/members.php";

$name = Core::escape($_POST["name"]);
$surname = Core::escape($_POST["surname"]);
$midName = Core::escape($_POST["midName"]);
$email = Core::escape($_POST["email"]);
$password = Core::escape($_POST["password"]);
$confirm = Core::escape($_POST["confirm"]);
$mService = new MembersService();

$output = new stdClass();
$output->status = true;
$output->message = "";

if(!Core::validateString($name)){
    $output->status = false;
    $output->message = "Не введено ім'я!";
}elseif(!Core::validateString($surname)){
    $output->status = false;
    $output->message = "Не введено прізвище!";
}elseif(!Core::validateString($midName)){
    $output->status = false;
    $output->message = "Не введено по-батькові!";
}elseif(!Core::validateString($email) || !Core::validateEmail($email)){
    $output->status = false;
    $output->message = "Не правильно введено email!";
}elseif(!Core::validateString($password)){
    $output->status = false;
    $output->message = "Не введено пароль!";
}elseif(!Core::validateString($confirm)){
    $output->status = false;
    $output->message = "Не введено підтвердження пароля!";
}elseif(!Core::comparePass($password, $confirm)){
    $output->status = false;
    $output->message = "Пароль та підтвердження не співпадають!";
}

$password = Core::hashString($password);
$confirm = Core::hashString($confirm);

if($output->status){
    $mService->insert($name, $surname, $midName, $email, $password);
    $output->message = "Реєстрація пройшла успішно!";
}

$result = json_encode($output);
echo $result;