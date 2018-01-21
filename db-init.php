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

    $tb_members = $wpdb->get_blog_prefix()."rt_members";
    $sql = "CREATE TABLE IF NOT EXISTS {$tb_members} (
        `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `name` VARCHAR(200) NOT NULL,
        `surname` VARCHAR(200) NOT NULL,
        `midName` VARCHAR(200) NOT NULL,
        `email` VARCHAR(200) NOT NULL,
        `pass` VARCHAR(200) NOT NULL
    ) {$charset_collate}";
    dbDelta($sql);

    $tb_quiz = $wpdb->get_blog_prefix()."rt_quiz";
    $sql = "CREATE TABLE IF NOT EXISTS {$tb_quiz} (
        `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `memberId` BIGINT NOT NULL,
        `startDate` DATETIME DEFAULT NULL,
        `endDate` DATETIME DEFAULT NULL,
        `score` INT,
        `isPassed` INT(1),
        `dateOfFinish` DATETIME DEFAULT NULL
    ) {$charset_collate}";
    dbDelta($sql);

    $tb_quiz_results = $wpdb->get_blog_prefix()."rt_quiz_results";
    $sql = "CREATE TABLE IF NOT EXISTS {$tb_quiz_results} (
        `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `quizId` BIGINT NOT NULL,
        `questionId` BIGINT NOT NULL,
        `answerId` BIGINT NOT NULL,
        `answerValue` INT(1)
    ) {$charset_collate}";
    dbDelta($sql);