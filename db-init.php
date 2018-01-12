<?php
    global $wpdb;
    $charset_collate = "DEFAULT CHARACTER SET {$wpdb->charset} COLLATE {$wpdb->collate}";
    require_once(ABSPATH . "wp-admin/includes/upgrade.php");

    $tb_questions = $wpdb->get_blog_prefix()."rt_questions";
    $sql = "CREATE TABLE IF NOT EXISTS {$tb_questions} (
        `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `text` VARCHAR(500) NOT NULL
    ) {$charset_collate}";
    dbDelta($sql);

    $tb_answers = $wpdb->get_blog_prefix()."rt_answers";
    $sql = "CREATE TABLE IF NOT EXISTS {$tb_answers} (
        `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `questionId` BIGINT NOT NULL,
        `text` VARCHAR(500) NOT NULL,
        `isCorrect` INT(1) DEFAULT NULL
    ) {$charset_collate}";
    dbDelta($sql);