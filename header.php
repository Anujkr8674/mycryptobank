<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Check if user is logged in
if(isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === true) {
    // User is logged in - show CRM header
    include "header-new-crm.php";
} else {
    // User is not logged in - show regular header
    include "header-new.php";
}
?>