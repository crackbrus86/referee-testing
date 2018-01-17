<?php
/*
Plugin Name: Referee Testing
Description: App for testing referees 
Version: 1.0
Author: Salivon Eugene
*/
define('RT_DIR', plugin_dir_path(__FILE__));
add_action("admin_menu", array("RefereeTesting", "initSettings"));
add_action("admin_init", array("RefereeTesting", "initDb"));

add_action( 'init', 'do_session_start' ); 
function do_session_start() { 
    if ( !session_id() ) session_start(); 
}

// wp_register_script('react_register', plugins_url('/node_modules/react/umd/react.development.js', __FILE__));
wp_register_script('react_register', 'https://unpkg.com/react@16/umd/react.development.js');
wp_enqueue_script('react_register');
// wp_register_script('react_dom_register', plugins_url('/node_modules/react-dom/umd/react-dom.development.js', __FILE__));
wp_register_script('react_dom_register', 'https://unpkg.com/react-dom@16/umd/react-dom.development.js');
wp_enqueue_script('react_dom_register');
wp_register_style('font-awesome', plugins_url('/css/font-awesome.min.css',__FILE__));
wp_enqueue_style('font-awesome');
wp_register_style('app-styles', plugins_url('/css/dist/styles.css',__FILE__));
wp_enqueue_style('app-styles');

function quizzApp(){
    wp_register_script('quiz_bundle', plugins_url('/dist/quiz-bundle.js', __FILE__));
    wp_enqueue_script('quiz_bundle');
    $otput=<<<_END
<div id="quiz-app"></div>
_END;
    echo $otput;
}
add_shortcode('rtQuiz', 'quizzApp');

class RefereeTesting {
    public function initSettings(){
        add_menu_page("Referee Testing", "Тестування", "manage_options", "referee-testing", array("RefereeTesting", "editQuestons"));
    }

    public function loadQuestionsApp(){
        wp_register_script('questions_bundle', plugins_url('/dist/questions-bundle.js', __FILE__));
        wp_enqueue_script('questions_bundle');
    }

    public function initDb(){
        require_once(RT_DIR."./db-init.php");
    }

    public function editQuestons(){
        RefereeTesting::loadQuestionsApp();
        $plName = "Запитання до тестування";
        $otput=<<<_END
<div class="container-fluid">
        <h2>$plName</h2>
        <div id="app"></div>
</div>
_END;
echo $otput;
    }
}

?>