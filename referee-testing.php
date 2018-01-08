<?php
/*
Plugin Name: Referee Testing
Description: App for testing referees 
Version: 1.0
Author: Salivon Eugene
*/
define('RT_DIR', plugin_dir_path(__FILE__));
add_action("admin_menu", array("RefereeTesting", "initSettings"));

class RefereeTesting {
    public function initSettings(){
        add_menu_page("Referee Testing", "Тестування", "manage_options", "referee-testing", array("RefereeTesting", "editQuestons"));
    }

    public function editQuestons(){
        $plName = "Запитання до тестування";
        $otput=<<<_END
<div class="container-fluid">
        <h2>$plName</h2>
</div>
_END;
echo $otput;
    }
}

?>