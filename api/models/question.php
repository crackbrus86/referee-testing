<?php
class Question{
    public $id;
    public $text;

    public function __construct($id = null, $text = ""){
        $this->id = $id;
        $this->text = $text;
    }
}
?>