<?php
class Setting{
    public $id;
    public $name;
    public $value;
    public $type;
    public function __construct($id = null, $name = "", $value = "", $type = "")
    {
        if($id) $this->id = $id;
        $this->name = $name;
        $this->value = $value;
        $this->type = $type;
    }
}