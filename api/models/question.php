<?php
class Question{
    public id;
    public text;
    public answers;

    public function __construct($id = null, $text = ""){
        $this->id = $id;
        $this->text = $text;
        $this->answers = array();
    }
}
?>