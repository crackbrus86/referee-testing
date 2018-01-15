<?php

class Member{
    public $id;
    public $name;
    public $surname;
    public $midName;
    public $email;

    public function __construct($id = null, $name = "", $surname = "", $midName = "", $email = ""){
        $this->id = $id;
        $this->name = $name;
        $this->surname = $surname;
        $this->midName = $midName;
        $this->email = $email;
    }
}