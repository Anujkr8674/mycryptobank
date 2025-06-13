<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if(isset($_SESSION['user_id']) && isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === true) {
    // User is logged in
    include "header-new-crm.php";
} else {
    // User is not logged in
    include "header-new.php";
}
?>