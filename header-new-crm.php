<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
require_once 'config.php';


$userId = '';
$walletName = 'Wallet User';
// $profilePic = 'Profile pic';
if (isset($_SESSION['user_id'])) {
  $stmt = $conn->prepare("SELECT wallet_name, user_id, created_at, profile_pic FROM wallet_data WHERE user_id = ? LIMIT 1");
  $stmt->bind_param("s", $_SESSION['user_id']);
  $stmt->execute();
  $result = $stmt->get_result();
  $user = $result->fetch_assoc();

  if (!$user) {
      // If user data not found for this user_id, something is wrong. Log out.
      // error_log("DEBUG: User data not found in DB for user_id in session: " . $_SESSION['user_id']);
      session_destroy();
      header("Location: new-login.php");
      exit();
  }

  // Populate variables from fetched user data
  $walletName = htmlspecialchars($user['wallet_name']);
  $userId = htmlspecialchars($user['user_id']);
  $profilePic = htmlspecialchars($user['profile_pic']);

  // Convert 'created_at' to only date (YYYY-MM-DD)
  $createdAt = $user['created_at'];
  $dateTime = new DateTime($createdAt);
  $memberSince = $dateTime->format('Y-m-d');

} else {
  // If is_logged_in is true but user_id is NOT set, something is wrong.
  // error_log("DEBUG: User logged in but user_id not set in session. Logging out.");
  session_destroy();
  header("Location: new-login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>My CryptoBank</title> 
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* Header theme variables */
    .header1-header {
      --header1-bg-primary: #0b0e11;
      --header1-bg-secondary: #1e1e1e;
      --header1-text-primary: #eaecef;
      --header1-text-secondary: #999;
      --header1-border-color: #2f3135;
      --header1-hover-color: #2f3135;
      --header1-button-yellow: #fcd535;
    }

    html[data-theme="light"] .header1-header {
      --header1-bg-primary: #ffffff;
      --header1-bg-secondary: #f5f5f5;
      --header1-text-primary: #1e2329;
      --header1-text-secondary: #707a8a;
      --header1-border-color: #e6e8ea;
      --header1-hover-color: #f0f1f2;
      --header1-button-yellow: #fcd535;
    }

    /* Global styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }
    
    html, body {
      background-color: var(--header1-bg-primary);
      color: var(--header1-text-primary);
      transition: background-color 0.3s, color 0.3s;
      min-height: 100vh;
      padding-top: 80px; /* Adjust this value based on your header height */
    }
    
    /* Apply theme to all elements */
    body * {
      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }
    
    /* Make sure all elements use theme variables */
    body, 
    div, 
    section, 
    article, 
    aside, 
    header, 
    footer, 
    nav, 
    main {
      background-color: var(--header1-bg-primary);
      color: var(--header1-text-primary);
    }
    
    /* Header specific styles */
    .header1-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background-color: var(--header1-bg-primary);
      border-bottom: 1px solid var(--header1-border-color);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: background-color 0.3s, border-color 0.3s;
    }
    .header1-logo {
      display: flex;
      align-items: center;
    }
    .header1-logo img {
      height: 28px;
      margin-right: 1px;
    }
    .header1-nav {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin: 0 2rem;
    }
    .header1-nav-buttons {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    .header1-nav button {
      color: var(--header1-text-primary);
      background: none;
      border: none;
      font-weight: 600;
      position: relative;
      cursor: pointer;
      white-space: nowrap;
      transition: color 0.3s;
      font-size: 15px;
    }
    .header1-nav button:hover::after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--header1-button-yellow);
    }
    .header1-dropdown-content {
      display: none;
      position: absolute;
      top: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--header1-bg-secondary);
      padding: 1rem;
      border-radius: 8px;
      width: 600px;
      justify-content: space-between;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 999;
      transition: background-color 0.3s;
    }
    .header1-futures-dropdown {
      width: 400px !important;
    }
    .header1-dropdown:hover .header1-dropdown-content {
      display: flex;
    }
    .header1-dropdown-column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 48%;
    }
    .header1-mobile-search {
      width: 100%;
      padding: 16px;
      border-bottom: 1px solid var(--header1-border-color);
      position: sticky;
      top: 0;
      background: var(--header1-bg-primary);
      z-index: 2;
    }
    .header1-mobile-search input {
      width: 100%;
      padding: 8px 12px;
      border-radius: 4px;
      border: none;
      background: var(--header1-bg-secondary);
      color: var(--header1-text-primary);
    }
    .header1-mobile-footer {
      margin-top: auto;
      width: 100%;
      padding: 16px;
      border-top: 1px solid var(--header1-border-color);
    }
    .header1-mobile-footer-item {
      padding: 12px 0;
      color: var(--header1-text-primary);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .header1-theme-toggle-mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
      color: var(--header1-text-primary);
    }
    .header1-theme-toggle-buttons {
      display: flex;
      gap: 8px;
    }
    .header1-theme-btn {
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid var(--header1-border-color);
      background: none;
      color: var(--header1-text-primary);
      cursor: pointer;
    }
    .header1-theme-btn.active {
      background: var(--header1-button-yellow);
      color: var(--header1-text-primary);
      border-color: var(--header1-button-yellow);
    }
    .header1-header-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .header1-auth-buttons {
      display: flex;
      gap: 1rem;
    }
    .header1-auth-buttons button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      white-space: nowrap;
    }
    .header1-login-btn {
      background-color: transparent;
      color: var(--header1-text-primary);
      border: 1px solid var(--header1-border-color) !important;
      transition: border-color 0.3s, color 0.3s;
    }
    .header1-signup-btn {
      background-color: var(--header1-button-yellow);
      color: var(--header1-text-primary);
    }
    .header1-icon-group {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .header1-icon-btn {
      background: none;
      border: none;
      color: var(--header1-text-primary);
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.5rem;
      transition: color 0.3s;
    }

    /* Dropdown styles */
    .header1-dropdown {
      position: relative;
    }
    .header1-dropdown-column h4 {
      color: var(--header1-text-primary);
      margin-bottom: 0.5rem;
      transition: color 0.3s;
    }
    .header1-dropdown-item {
      color: var(--header1-text-primary);
      font-size: 0.95rem;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.2s, color 0.3s;
      text-decoration: none;
      display: block;
    }
    .header1-dropdown-item:hover {
      background-color: var(--header1-hover-color);
    }
    .header1-dropdown-item span {
      display: block;
      color: var(--header1-text-secondary);
      font-size: 0.8rem;
      transition: color 0.3s;
    }

    /* Hamburger menu */
    .header1-hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      cursor: pointer;
      z-index: 1000;
    }
    .header1-hamburger span {
      display: block;
      height: 3px;
      width: 100%;
      background-color: var(--header1-text-primary);
      border-radius: 3px;
      transition: all 0.3s;
    }
    .header1-hamburger.active span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    .header1-hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .header1-hamburger.active span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }

    @media (max-width: 768px) {
      .header1-hamburger {
        display: flex;
        margin-left: auto;
      }
      .header1-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background-color: var(--header1-bg-primary);
        flex-direction: column;
        align-items: flex-start;
        padding: 80px 20px 20px;
        margin: 0;
        transition: right 0.3s ease, background-color 0.3s;
        z-index: 999;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
      }
      .header1-nav.active {
        right: 0;
      }
      body.menu-open {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
      }
      .header1-nav-buttons {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }
      .header1-nav-buttons button {
        width: 100%;
        text-align: left;
        padding: 12px 0;
      }
      .header1-header-actions {
        display: none;
      }
      .header1-nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
      }

      .header1-headeader1-auth-buttons {
        flex-direction: column;
        width: 100%;
        gap: 10px;
        margin-bottom: 20px;
      }
      .head.header1-header-actions er1-nav .header1-auth-buttons button {
        width: 100%;
        padding: 12px;
      }
      .header1-nav .header1-icon-group {
        justify-content: space-between;
        width: 100%;
      }
      .header1-dropdown-content {
        position: static;
        left: unset;
        transform: none;
        width: 100% !important;
        flex-direction: column;
        box-shadow: none;
        margin: 10px 0;
        display: none;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, padding 0.3s ease-out;
        padding: 0;
      }
      .header1-dropdown.active .header1-dropdown-content {
        display: flex;
        max-height: 300px;
        overflow-y: auto;
        padding: 1rem;
        transition: max-height 0.5s ease-in, padding 0.3s ease-in;
      }
      .header1-dropdown-column {
        width: 100%;
      }
      .header1-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
      }
      .header1-overlay.active {
        display: block;
      }
    }

    .nav-link {
      color: var(--header1-text-primary);
    }

    .nav-link:hover {
      color: var(--header1-button-yellow);
    }

    .dropdown-menu {
      background: var(--header1-bg-secondary);
      border: 1px solid var(--header1-border-color);
    }

    .dropdown-item {
      color: var(--header1-text-primary);
    }

    .dropdown-item:hover {
      background: var(--header1-hover-color);
      color: var(--header1-button-yellow);
    }

    .btn-primary {
      background: var(--header1-button-yellow);
      color: var(--header1-text-primary);
    }

    .btn-primary:hover {
      background: var(--header1-button-yellow);
      opacity: 0.9;
    }

    .theme-switch {
      background: var(--header1-hover-color);
      border: 1px solid var(--header1-border-color);
    }

    .theme-switch:hover {
      background: var(--header1-hover-color);
      opacity: 0.9;
    }

    body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

    .header1-notification-dropdown {
      position: relative;
    }
    
    .header1-notification-dropdown .header1-dropdown-content {
      display: none;
      position: absolute;
      top: 2.5rem;
      right: 0;
      width: 300px;
      background-color: var(--header1-bg-secondary);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 999;
    }
    
    .header1-notification-dropdown:hover .header1-dropdown-content {
      display: block;
    }
    
    @media (max-width: 768px) {
      .header1-notification-dropdown .header1-dropdown-content {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        background-color: var(--header1-bg-primary);
        border-radius: 0;
        overflow-y: auto;
        transition: right 0.3s ease;
        padding: 80px 20px 20px;
        z-index: 1000;
        display: none;
      }
      
      .header1-notification-dropdown.active .header1-dropdown-content {
        display: block;
        right: 0;
      }

      .header1-notification-dropdown .header1-dropdown-column {
        width: 100%;
      }

      .header1-notification-dropdown .header1-dropdown-item {
        padding: 12px 0;
        border-bottom: 1px solid var(--header1-border-color);
      }

      .header1-notification-dropdown .header1-dropdown-item:last-child {
        border-bottom: none;
      }

      .header1-logo {
        z-index: 1001;
        position: relative;
      }

      .header1-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
      }

      .header1-overlay.active {
        display: block;
      }
    }

    /* Profile dropdown improvements */
    .header1-profile-dropdown .header1-dropdown-content {
      left: 50% !important;
      right: auto !important;
      margin-top: 10px;
      transform: translateX(-50%) !important;
      min-width: 320px;
      max-width: 360px;
    }
    .header1-profile-dropdown .profile-top {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem 1rem 1rem 1rem;
      border-bottom: none;
      background: var(--header1-bg-secondary);
    }
    .header1-profile-dropdown .profile-avatar {
      width: 48px;
      height: 48px;
      background: #222;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      flex-shrink: 0;
    }
    .header1-profile-dropdown .profile-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.2em;
    }
    .header1-profile-dropdown .profile-email {
      font-size: 1.1em;
      font-weight: 700;
      color: var(--header1-text-primary);
      margin-bottom: 2px;
    }
    .header1-profile-dropdown .profile-type {
      font-size: 0.9em;
      color: var(--header1-text-secondary);
      margin-bottom: 6px;
    }
    .header1-profile-dropdown .profile-badges {
      display: flex;
      align-items: center;
      gap: 0.5em;
      margin: 0.2em 0 0 0;
    }
    .header1-profile-dropdown .profile-badge {
      background: var(--header1-button-yellow);
      color: #222;
      padding: 2px 10px;
      border-radius: 5px;
      font-size: 0.9em;
      font-weight: 600;
    }
    .header1-profile-dropdown .profile-linkx {
      background: #222;
      color: var(--header1-button-yellow);
      border: none;
      padding: 2px 10px;
      border-radius: 5px;
      font-size: 0.9em;
      font-weight: 600;
      cursor: pointer;
      margin-left: 0.2em;
    }
    .header1-profile-dropdown .profile-divider {
      border-top: 1px solid var(--header1-border-color);
      margin: 0.7em 0 0.2em 0;
    }
    .header1-profile-dropdown .profile-list {
      display: flex;
      flex-direction: column;
      padding: 0.5em 0 1em 0;
      background: var(--header1-bg-secondary);
      gap: 2px;
    }
    .header1-profile-dropdown .profile-list a {
      color: var(--header1-text-primary);
      text-decoration: none;
      padding: 0.7em 2em 0.7em 2.5em;
      font-size: 1em;
      border-radius: 4px;
      transition: background 0.2s, color 0.2s;
      margin: 0 0.5em;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 1em;
      position: relative;
    }
    .header1-profile-dropdown .profile-list a .profile-menu-icon {
      position: absolute;
      left: 1.2em;
      font-size: 1.15em;
      opacity: 0.85;
      width: 1.2em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header1-profile-dropdown .profile-list a:hover {
      background: var(--header1-hover-color);
      color: var(--header1-button-yellow);
    }
    .header1-profile-dropdown .profile-list a:last-child {
      color: #f66;
      font-weight: bold;
    }

    /* Profile section custom */
    .profile-top-custom {
      background: #111;
      border-radius: 8px;
      padding: 1rem 1rem 0.5rem 1rem;
      margin: 0.5rem 1rem 0.5rem 1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .profile-badge-yellow {
      background: #fcd535;
      color: #222;
      font-weight: 700;
      border-radius: 5px;
      padding: 4px 14px;
      margin-right: 6px;
      font-size: 1em;
      display: inline-block;
    }
    .profile-list a {
      color: #fff;
      font-size: 1.08em;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.7em;
      margin: 0.2em 0;
      transition: color 0.2s, background 0.2s;
    }
    .profile-list a .profile-menu-icon {
      font-size: 1.2em;
      width: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .profile-list a:hover {
      color: #fcd535;
      background: #222;
    }
    .profile-list .logout-link {
      color: #e74c3c !important;
      font-weight: bold;
    }
    .header1-profile-dropdown .header1-dropdown-content {
      box-shadow: 0 8px 32px rgba(0,0,0,0.28);
    }

    .profile-dropdown-binance {
      background: #181a20;
      border-radius: 14px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.28);
      padding: 0;
      width: 340px;
      overflow: hidden;
    }
    .profile-binance-vertical {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    .profile-binance-top {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      background: #101214;
      padding: 1.2rem 1.2rem 1rem 1.2rem;
      border-radius: 14px 14px 0 0;
    }
    .profile-avatar-img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #222;
      object-fit: cover;
    }
    .profile-binance-email {
      font-size: 1.1em;
      font-weight: 700;
      color: #fff;
    }
    .profile-binance-type {
      font-size: 0.95em;
      color: #b7bdc6;
      margin-bottom: 6px;
    }
    .profile-binance-badges {
      display: flex;
      gap: 0.5em;
      margin-top: 0.3em;
    }
    .profile-badge-binance {
      background: #fcd535;
      color: #222;
      font-weight: 700;
      border-radius: 6px;
      padding: 3px 14px;
      font-size: 0.98em;
      display: inline-block;
    }
    .profile-badge-linkx {
      background: #23262f;
      color: #fcd535;
      font-weight: 700;
      border-radius: 6px;
      padding: 3px 14px;
      font-size: 0.98em;
      display: inline-block;
    }
    .profile-binance-list {
      display: flex;
      flex-direction: column;
      padding: 0.5em 0 1em 0;
      background: #181a20;
      gap: 2px;
    }
    .profile-binance-list a {
      color: #eaecef;
      text-decoration: none;
      padding: 0.7em 2em 0.7em 2.5em;
      font-size: 1.05em;
      border-radius: 4px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 1em;
      transition: background 0.2s, color 0.2s;
    }
    .profile-binance-list a .profile-menu-svg {
      width: 1.3em;
      height: 1.3em;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.85;
    }
    .profile-binance-list a:hover {
      background: #23262f;
      color: #fcd535;
    }
    .profile-binance-list .logout-link {
      color: #f6465d !important;
      font-weight: bold;
    }

    /* Side Menu */
    .side-menu-binance {
      position: fixed;
      top: 60px;
      left: 0;
      width: 260px;
      background: #181a20;
      box-shadow: 2px 0 16px rgba(0,0,0,0.18);
      z-index: 3000;
      border-radius: 0 0 12px 12px;
      display: none;
      flex-direction: column;
    }
    .side-menu-binance.show {
      display: flex;
    }
    .side-menu-list {
      display: flex;
      flex-direction: column;
      margin-top: 0.5em;
      gap: 2px;
    }
    .side-menu-list a {
      color: #eaecef;
      text-decoration: none;
      padding: 1em 1.5em;
      font-size: 1.08em;
      border-radius: 4px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 1em;
      transition: background 0.2s, color 0.2s;
    }
    .side-menu-list a .side-menu-svg {
      width: 1.4em;
      height: 1.4em;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.85;
    }
    .side-menu-list a.active, .side-menu-list a:hover {
      background: #23262f;
      color: #fff;
    }
    .side-menu-content {
      margin-top: 2em;
    }

    #header1-logo-img{
        height: 50px;
     
      }

    @media (max-width: 768px) {
      #header1-logo-img{
        height: 40px;
      }
    }
  </style>
</head>
<body>
  <header class="header1-header">
  <div class="header1-logo">
  <a href="./en-IN.php"> <!-- ya "/" agar aap root URL dena chahte ho -->
    <img  src="./img/logo1.png" alt="Binance Logo" id="header1-logo-img" />
  </a>
</div>

    
    <nav class="header1-nav">
      <div class="header1-nav-buttons">
        <a href="./buy-crypto.php">
        <button>Buy Crypto</button></a>
        <a href="./market.php">
        <button>Markets</button></a>
        <div class="header1-dropdown">
          <button>Trade &#x25BE;</button>
          <div class="header1-dropdown-content">
            <div class="header1-dropdown-column">
              <h4>Basic</h4>
              <a href="./spot.php" class="header1-dropdown-item">Spot <span>Buy and sell on the Spot market with advanced tools</span></a>
              <a href="./spot.php" class="header1-dropdown-item">Margin <span>Increase your profits with leverage</span></a>
              <a href="./p2222p" class="header1-dropdown-item">P2P <span>Buy & sell cryptocurrencies using bank transfer and 800+ options</span></a>
              <a href="./currency-converter.php" class="header1-dropdown-item">Convert & Block Trade <span>The easiest way to trade at all sizes</span></a>
            </div>
            <div class="header1-dropdown-column">
              <h4>Advanced</h4>
              <a href="./copy-trade.php" class="header1-dropdown-item">Copy Trading <span>Follow the most popular traders</span></a>
            </div>
          </div>
        </div>
        <div class="header1-dropdown">
          <button>Futures &#x25BE;</button>
          <div class="header1-dropdown-content header1-futures-dropdown">
            <div class="header1-dropdown-column" style="width: 100%">
              <h4>Futures Products</h4>
              <a href="#" class="header1-dropdown-item">USD-M Futures <span>Trade BTC, ETH, and more with up to 125x leverage</span></a>
              <a href="#" class="header1-dropdown-item">COIN-M Futures <span>Trade crypto-crypto contracts</span></a>
            </div>
          </div>
        </div>
        <div class="header1-dropdown">
          <button>Earn &#x25BE;</button>
          <div class="header1-dropdown-content header1-futures-dropdown">
            <div class="header1-dropdown-column" style="width: 100%">
              <h4>Earn Products</h4>
              <a href="./overview.php" class="header1-dropdown-item">Overview <span>One-stop portal for all Earn products</span></a>
              <a href="./simple-earn.php" class="header1-dropdown-item">Simple Earn <span>Earn passive income on 300+ crypto assets with flexible and locked terms</span></a>
              <a href="./advanced-earn.php" class="header1-dropdown-item">Advanced Earn <span>Maximize your returns with our advanced yield investment products</span></a>
              <a href="./loan" class="header1-dropdown-item">Loans <span>Access quick and easy loans with competitive rates</span></a>
            </div>
          </div>
        </div>
        <div class="header1-dropdown">
          <button>Square &#x25BE;</button>
          <div class="header1-dropdown-content header1-futures-dropdown">
            <div class="header1-dropdown-column" style="width: 100%">
              <h4>Square Features</h4>
              <a href="#" class="header1-dropdown-item">Blog <span>Expand your knowledge and get the latest insights</span></a>
              <a href="./research.php" class="header1-dropdown-item">Research <span>Institutional-grade analysis, in-depth insights, and more</span></a>
            </div>
          </div>
        </div>
        <div class="header1-dropdown">
          <button>More &#x25BE;</button>
          <div class="header1-dropdown-content">
            <div class="header1-dropdown-column">
              <h4>Products</h4>
              <a href="./vip.php" class="header1-dropdown-item">VIP & Institutional <span>Your trusted digital asset platform for VIPs and institutions</span></a>
              <a href="./affiliate.php" class="header1-dropdown-item">Affiliate <span>Earn up to 50% commission per trade from referrals</span></a>
              <a href="./refer.php" class="header1-dropdown-item">Referral Program <span>Invite friends to earn either a commission rebate or a one-time reward</span></a>
            </div>
            <div class="header1-dropdown-column">
              <h4>Services</h4>
              <a href="./pay.php" class="header1-dropdown-item">Pay <span>Send, receive and spend crypto</span></a>
              <a href="#" class="header1-dropdown-item">Fan Token <span>Discover an all-new fandom and unlock unlimited fan experiences</span></a>
              <a href="./wallet.php" class="header1-dropdown-item">MyCryptoBank Wallet <span>Access and Navigate Web3 Effortlessly</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="header1-header-actions">
        <button class="header1-deposit-btn" style="background: var(--header1-button-yellow); color: black; font-weight: 400; border: none; border-radius: 8px; padding: 0.5rem 1.5rem; margin-right: 1rem;"> <span style="font-size:12px;vertical-align:middle;">&#8681;</span> Deposit</button>
        <div class="header1-icon-group">
          <button class="header1-icon-btn">🔍</button>
          <div class="header1-dropdown header1-profile-dropdown">
            <button class="header1-icon-btn" id="profileDropdownBtn">👤

            </button>
            <div class="header1-dropdown-content profile-dropdown-binance">
              <div class="profile-binance-vertical">
                <div class="profile-binance-top">
                  <img id="main-profile-pic" src="<?php echo (!empty($profilePic) && file_exists($profilePic)) ? htmlspecialchars($profilePic) : './img/earn3.png'; ?>" alt="avatar" class="profile-avatar-img" />
                  <div>
                    <div class="profile-binance-email"><?php echo $userId; ?></div>
                    <div class="profile-binance-type"><?php echo $walletName; ?></div>
                    <div class="profile-binance-badges">
                      <!-- <span class="profile-badge-binance">Unverified</span> -->
                      <!-- <a href="./account-identification.php" class="profile-badge-binance" style="background:#fcd535;color:#222;padding:2px 12px;border-radius:5px;font-size:0.95em;font-weight:600;margin-left:8px;text-decoration:none;display:inline-block;">Unverified</a> -->
                      <!-- <span class="profile-badge-linkx">Link X</span> -->
                    </div>
                  </div>
                </div>
                <div class="profile-binance-list">
                  <a href="./crm-dashboard.php"><span class="profile-menu-svg">
                    <svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='3' y='3' width='14' height='14' rx='2'/></svg>
                  </span>Dashboard</a>
                  <a href="./crm-overview.php"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='7'/><path d='M10 7v6M7 10h6'/></svg></span>Assets</a>
                  <a href="./crm-spot-order.php"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='6' width='12' height='8' rx='1'/><path d='M4 10h12'/></svg></span>Orders</a>
                  <a href="./account-identification.php"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='8' r='4'/><path d='M2 18c0-3.3 5.3-5 8-5s8 1.7 8 5'/></svg></span>Account</a>
                  <a href="./referal.php"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='7' cy='7' r='3'/><circle cx='17' cy='7' r='3'/><path d='M2 17c0-2.2 3.6-4 8-4s8 1.8 8 4'/></svg></span>Referral</a>
                  <a href="./rewards-hub.php"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Rewards Hub</a>
                  <!-- <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Settings</a> -->
                  <a href="logout.php" class="logout-link"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#f6465d' stroke-width='2'><path d='M15 12v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-2'/><path d='M10 17v-6'/></svg></span>Log Out</a>
                </div>
              </div>
            </div>
          </div>



          <div class="header1-dropdown header1-profile-dropdown">
            <button class="header1-icon-btn" id="profileDropdownBtn">
              <img style="height: 25px; width: 25px;"src="./img/wallet.png" alt="avatar" class="profile-avatar-img" />
            </button>
            <div class="header1-dropdown-content profile-dropdown-binance">
              <div class="profile-binance-vertical">
                <!-- <div class="profile-binance-top">
                  <img src="img/binance-avatar.png" alt="avatar" class="profile-avatar-img" />
                  <div>
                    <div class="profile-binance-email"><?php echo $userId; ?></div>
                    <div class="profile-binance-type">Regular User</div>
                    <div class="profile-binance-badges">
                      <span class="profile-badge-binance">Unverified</span>
                      <span class="profile-badge-linkx">Link X</span>
                    </div>
                  </div>
                </div> -->
                <div class="profile-binance-list">
                <a href="./crm-overview.php" class="header1-dropdown-item">Overview</a>
                <a href="./crm-spot.php" class="header1-dropdown-item">Spot</a>
                <a href="./crm-spot-order.php" class="header1-dropdown-item">Margin</a>
                <a href="./future.php" class="header1-dropdown-item">Futures</a>
                <a href="./option.php" class="header1-dropdown-item">Options</a>
                <!-- <a href="#" class="header1-dropdown-item">Trading Bots</a> -->
                <a href="#" class="header1-dropdown-item">Earn</a>
                <a href="./funding.php" class="header1-dropdown-item">Funding</a>
                <a href="./transtion-history.php" class="header1-dropdown-item">Transaction History</a>
                <a href="./account-managment.php" class="header1-dropdown-item">Account Statement</a>
                <a href="./verification-crm.php" class="header1-dropdown-item">Verification</a>
                </div>
              </div>
            </div>
          </div>
          <!-- <button class="header1-icon-btn" id="sideMenuBtn">🔐</button> -->
          <!-- <button class="header1-icon-btn">🔔</button> -->
          <div class="header1-header-actions">
        <div class="header1-icon-group">
          <div class="header1-dropdown">
            <button class="header1-icon-btn">🔔</button>
            <div class="header1-dropdown-content">
              <div class="header1-dropdown-column" style="width: 100%">
                <h4>Notifications</h4>
                <a href="./message.php" class="header1-dropdown-item">Announcements <span>MyCryptoBank will lunach USD</span></a>
              <a href="./Campaigon.php" class="header1-dropdown-item">Campaigon <span>No News to report</span></a>
              <a href="./assistant.php" class="header1-dropdown-item">Account Assistant <span>Login Attempted from new IP</span></a>
              <a href="./marketing.php" class="header1-dropdown-item">Marketing & Transactional <span>Start your trading Journey in MyCryptoBank</span></a>
              </div>
            </div>
          </div>
          
          <button class="header1-icon-btn header1-refresh-btn" title="Refresh page">🔄</button>
          <!-- <button class="header1-icon-btn">🌐</button> -->
          <!-- <button class="header1-icon-btn header1-theme-toggle">🌙</button> -->
        </div>
     
      </div>
          <!-- <button class="header1-icon-btn">🌐</button> -->
          <!-- <button class="header1-icon-btn header1-theme-toggle">🌙</button> -->
        </div>
      </div>
    </nav>

    <!-- Side menu for Assets -->
    <div id="assetsSideMenu" style="display:none;position:fixed;top:0;left:0;height:100vh;width:320px;background:var(--header1-bg-secondary);z-index:2000;box-shadow:2px 0 12px rgba(0,0,0,0.15);padding-top:80px;">
      <div style="padding:1.5rem 1rem 1rem 1rem; border-bottom:1px solid var(--header1-border-color); font-weight:700; font-size:1.2em;">Assets</div>
      <a href="#" class="header1-dropdown-item">Overview</a>
      <a href="#" class="header1-dropdown-item">Spot</a>
      <a href="#" class="header1-dropdown-item">Margin</a>
      <a href="#" class="header1-dropdown-item">Futures</a>
      <a href="#" class="header1-dropdown-item">Options</a>
      <a href="#" class="header1-dropdown-item">Trading Bots</a>
      <a href="#" class="header1-dropdown-item">Earn</a>
      <a href="#" class="header1-dropdown-item">Funding</a>
      <a href="#" class="header1-dropdown-item">Transaction History</a>
      <a href="#" class="header1-dropdown-item">Account Statement</a>
      <a href="#" class="header1-dropdown-item">Verification</a>
      <button onclick="document.getElementById('assetsSideMenu').style.display='none'" style="margin:1rem 0 0 1rem;background:#222;color:var(--header1-text-primary);border:none;padding:8px 16px;border-radius:5px;cursor:pointer;">Close</button>
    </div>

    <!-- Side menu for Lock/🔐 -->
    <!-- <div id="lockSideMenu" style="display:none;position:fixed;top:0;left:0;height:100vh;width:320px;background:var(--header1-bg-secondary);z-index:2000;box-shadow:2px 0 12px rgba(0,0,0,0.15);padding-top:80px;">
      <div style="padding:1.5rem 1rem 1rem 1rem; border-bottom:1px solid var(--header1-border-color); font-weight:700; font-size:1.2em;">Menu</div>
      <a href="#" class="header1-dropdown-item">Overview</a>
      <a href="#" class="header1-dropdown-item">Spot</a>
      <a href="#" class="header1-dropdown-item">Margin</a>
      <a href="#" class="header1-dropdown-item">Futures</a>
      <a href="#" class="header1-dropdown-item">Options</a>
      <a href="#" class="header1-dropdown-item">Trading Bots</a>
      <a href="#" class="header1-dropdown-item">Earn</a>
      <a href="#" class="header1-dropdown-item">Funding</a>
      <a href="#" class="header1-dropdown-item">Transaction History</a>
      <a href="#" class="header1-dropdown-item">Account Statement</a>
      <a href="#" class="header1-dropdown-item">Verification</a>
      <button onclick="document.getElementById('lockSideMenu').style.display='none'" style="margin:1rem 0 0 1rem;background:#222;color:var(--header1-text-primary);border:none;padding:8px 16px;border-radius:5px;cursor:pointer;">Close</button>
    </div> -->

    

    <button id="customProfileBtn1" class="header1-deposit-btn" style="background: var(--header1-button-yellow); color: black; font-weight: 400; border: none; border-radius: 8px; padding: 0.5rem 1.5rem; margin-right: 1rem;">
  <span style="font-size:12px;vertical-align:middle;">&#8681;</span> Deposit
</button>

<button id="customProfileBtn">👤</button>

<div id="mobileDropdown" style="display: none; position: fixed; top: 60px; right: 20px; background: #1e1e1e; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 1000; ">
  
<div class="profile-binance-top1">
          <img src="./img/earn3.png" alt="avatar" class="profile-avatar-img" />
          <div>
            <div class="profile-binance-email"><?php echo $userId; ?></div>
            <div class="profile-binance-type">Regular User</div>
            <div class="profile-binance-badges">
              <!-- <span class="profile-badge-binance">Unverified</span> -->
              <!-- <a href="./account-identification.php" class="profile-badge-binance" style="background:#fcd535;color:#222;padding:2px 12px;border-radius:5px;font-size:0.95em;font-weight:600;margin-left:8px;text-decoration:none;display:inline-block;">Unverified</a>
              <span class="profile-badge-linkx">Link X</span> -->
            </div>
          </div>
        </div>
        <br/>
        <!-- <a href="./crm-overview.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135; margin-left: 40px;">Dashboard</a> -->
  <!-- <a href="./crm-dashboard.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135; margin-bottom: 10px;margin-left: 40px;">Overview</a>
  <a href="./crm-spot.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none;margin-left: 40px;margin-bottom: 10px;">Spot</a>


  <a href="./crm-margin.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;">Margin</a>
  <a href="./future.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;">Futures</a>
  <a href="./option.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none;margin-left: 40px;margin-bottom: 10px;">Options</a>
  <a href="./funding.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;">Funding</a>
  <a href="" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;">Transtion History</a>
  <a href="./account-managmen.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none;margin-left: 40px;margin-bottom: 10px;">Account Statement</a>
  <a href="./verification-crm.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none;margin-left: 40px;">Verification</a> -->
  


  <a href="./crm-dashboard.php"  style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;"><span class="profile-menu-svg">
                    <svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='3' y='3' width='14' height='14' rx='2'/></svg>
                  </span>&nbsp;&nbsp;&nbsp;Dashboard</a>
                  <a href="./crm-overview.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='7'/><path d='M10 7v6M7 10h6'/></svg></span>&nbsp;&nbsp;&nbsp;Assets</a>
                  <a href="./crm-spot-order.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='6' width='12' height='8' rx='1'/><path d='M4 10h12'/></svg></span>&nbsp;&nbsp;&nbsp;Orders</a>
                  <a href="./account-identification.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='8' r='4'/><path d='M2 18c0-3.3 5.3-5 8-5s8 1.7 8 5'/></svg></span>&nbsp;&nbsp;&nbsp;Account</a>
                  <a href="./referal.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='7' cy='7' r='3'/><circle cx='17' cy='7' r='3'/><path d='M2 17c0-2.2 3.6-4 8-4s8 1.8 8 4'/></svg></span>&nbsp;&nbsp;&nbsp;Referral</a>
                  <a href="./rewards-hub.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path /></svg></span>&nbsp;&nbsp;&nbsp;  Rewards Hub</a>
                  <!-- <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Settings</a> -->
                  <a href="logout.php" style="display: block; padding: 12px 20px; color: #eaecef; text-decoration: none; border-bottom: 1px solid #2f3135;margin-bottom: 10px; margin-left: 40px;" class="logout-link"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#f6465d' stroke-width='2'><path d='M15 12v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-2'/><path d='M10 17v-6'/></svg></span>&nbsp;&nbsp;&nbsp;Log Out</a>
               
</div>
  <style>
     #mobileDropdown{
      width: 100%;
     }
     #customProfileBtn1{
      display: none;
     }
    
    @media (max-width: 768px) {
      #mobileDropdown{
        width: 100%;
        margin-top: 40px;
        height:100vh;

      }
      #customProfileBtn1{
      display: block;
     }
      .profile-binance-top1{
        margin-left: 50px;
        
      }
    }
  </style>


<div id="mobileDropdown" class="header1-dropdown-content profile-dropdown-binance" style="display:none; position:absolute; right:2rem; top:60px; z-index:3002;">
      <div class="profile-binance-vertical">
        <div class="profile-binance-top">
          <img src="img/binance-avatar.png" alt="avatar" class="profile-avatar-img" />
          <div>
            <div class="profile-binance-email"><?php echo $userId; ?></div>
            <div class="profile-binance-type">Regular User</div>
            <div class="profile-binance-badges">
              <!-- <span class="profile-badge-binance">Unverified</span>
              <a href="/account-identification.php" class="profile-badge-binance" style="background:#fcd535;color:#222;padding:2px 12px;border-radius:5px;font-size:0.95em;font-weight:600;margin-left:8px;text-decoration:none;display:inline-block;">Verify Now</a>
              <span class="profile-badge-linkx">Link X</span> -->
            </div>
          </div>
        </div>
        <div class="profile-binance-list">
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='3' y='3' width='14' height='14' rx='2'/></svg></span>Dashboard</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='7'/><path d='M10 7v6M7 10h6'/></svg></span>Assets</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='6' width='12' height='8' rx='1'/><path d='M4 10h12'/></svg></span>Orders</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='8' r='4'/><path d='M2 18c0-3.3 5.3-5 8-5s8 1.7 8 5'/></svg></span>Account</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='7' cy='7' r='3'/><circle cx='17' cy='7' r='3'/><path d='M2 17c0-2.2 3.6-4 8-4s8 1.8 8 4'/></svg></span>Referral</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Rewards Hub</a>
          <!-- <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Settings</a> -->
          <a href="logout.php" class="logout-link"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#f6465d' stroke-width='2'><path d='M15 12v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-2'/><path d='M10 17v-6'/></svg></span>Log Out</a>
        </div>
      </div>
    </div>

<script>
  document.getElementById('customProfileBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    var dropdown = document.getElementById('mobileDropdown');
    if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  document.addEventListener('click', function(e) {
    var dropdown = document.getElementById('mobileDropdown');
    var profileBtn = document.getElementById('customProfileBtn');
    if (!dropdown.contains(e.target) && e.target !== profileBtn) {
      dropdown.style.display = 'none';
    }
  });

  window.addEventListener('scroll', function() {
    document.getElementById('mobileDropdown').style.display = 'none';
  });
</script>

<style>
  @media only screen and (max-width: 767px) {
    #customProfileBtn {
      display: inline-block;
      font-size: 20px;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 768px) {
    #customProfileBtn {
      display: none;
    }
    #mobileDropdown {
      display: none !important;
    }
  }
</style>

    <div id="customProfileDropdown" class="header1-dropdown-content profile-dropdown-binance" style="display:none; position:absolute; right:2rem; top:60px; z-index:3002;">
      <div class="profile-binance-vertical">
        <div class="profile-binance-top">
          <img src="img/binance-avatar.png" alt="avatar" class="profile-avatar-img" />
          <div>
            <div class="profile-binance-email"><?php echo $userId; ?></div>
            <div class="profile-binance-type">Regular User</div>
            <div class="profile-binance-badges">
              <!-- <span class="profile-badge-binance">Unverified</span>
              <a href="/account-identification.php" class="profile-badge-binance" style="background:#fcd535;color:#222;padding:2px 12px;border-radius:5px;font-size:0.95em;font-weight:600;margin-left:8px;text-decoration:none;display:inline-block;">Verify Now</a>
              <span class="profile-badge-linkx">Link X</span> -->
            </div>
          </div>
        </div>
        <div class="profile-binance-list">
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='3' y='3' width='14' height='14' rx='2'/></svg></span>Dashboard</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='7'/><path d='M10 7v6M7 10h6'/></svg></span>Assets</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='6' width='12' height='8' rx='1'/><path d='M4 10h12'/></svg></span>Orders</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='8' r='4'/><path d='M2 18c0-3.3 5.3-5 8-5s8 1.7 8 5'/></svg></span>Account</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='7' cy='7' r='3'/><circle cx='17' cy='7' r='3'/><path d='M2 17c0-2.2 3.6-4 8-4s8 1.8 8 4'/></svg></span>Referral</a>
          <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Rewards Hub</a>
          <!-- <a href="#"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='10' cy='10' r='8'/><path d='M10 6v4l3 3'/></svg></span>Settings</a> -->
          <a href="logout.php" class="logout-link"><span class="profile-menu-svg"><svg width='20' height='20' fill='none' stroke='#f6465d' stroke-width='2'><path d='M15 12v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-2'/><path d='M10 17v-6'/></svg></span>Log Out</a>
        </div>
      </div>
    </div>
    <div class="header1-hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    

    <div class="header1-overlay"></div>
  </header>
  
  <!-- Side Menu -->
  <div id="sideMenu" class="side-menu-binance">
    <div class="side-menu-list">
      <a href="#" class="active"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='3' y='3' width='16' height='16' rx='2'/><path d='M3 9h16M9 3v16'/></svg></span>Overview</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><path d='M11 2v20M2 11h20'/></svg></span>Spot</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='11' cy='11' r='9'/><path d='M7 11h8M11 7v8'/></svg></span>Margin</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='6' width='14' height='10' rx='2'/><path d='M4 10h14'/></svg></span>Futures</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='6' width='14' height='10' rx='2'/><path d='M4 10h14'/></svg></span>Options</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='3' y='13' width='16' height='6' rx='2'/><rect x='7' y='3' width='8' height='6' rx='2'/></svg></span>Trading Bots</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='11' cy='11' r='9'/><path d='M11 7v4l3 3'/></svg></span>Earn</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='11' cy='11' r='9'/><path d='M7 11h8'/></svg></span>Funding</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><circle cx='11' cy='11' r='9'/><path d='M11 7v8'/></svg></span>Transaction History</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><path d='M4 17v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2'/><circle cx='12' cy='7' r='4'/></svg></span>Account Statement</a>
      <a href="#"><span class="side-menu-svg"><svg width='22' height='22' fill='none' stroke='#b7bdc6' stroke-width='2'><rect x='4' y='4' width='14' height='14' rx='2'/><path d='M4 9h14'/></svg></span>Verification</a>
    </div>
    <div class="side-menu-content">
      <h3 style="color:#fcd535;margin:1em 0 0.5em 1.5em;">Welcome to MyCryptoBank Side Menu!</h3>
      <p style="color:#b7bdc6;margin:0 1.5em 1em 1.5em;">Yahan aap apna custom content ya info dikha sakte hain.</p>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.querySelector('.header1-hamburger');
      const nav = document.querySelector('.header1-nav');
      const overlay = document.querySelector('.header1-overlay');
      const dropdowns = document.querySelectorAll('.header1-dropdown');
      const themeToggles = document.querySelectorAll('.header1-theme-toggle');
      const refreshButtons = document.querySelectorAll('.header1-refresh-btn');
      const html = document.documentElement;
      const logoImg = document.getElementById('header1-logo-img');
      const notificationBtn = document.querySelector('.header1-dropdown .header1-icon-btn');
      const notificationDropdown = document.querySelector('.header1-dropdown');
      const sideMenuBtn = document.getElementById('sideMenuBtn');
      const sideMenu = document.getElementById('sideMenu');
      let hoverTimeout;

      // Store current scroll position before refresh
      function storeScrollPosition() {
        sessionStorage.setItem('scrollPosition', window.scrollY);
      }

      // Restore scroll position after refresh
      function restoreScrollPosition() {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition));
          sessionStorage.removeItem('scrollPosition');
        }
      }

      // Add refresh functionality
      refreshButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Store scroll position
          storeScrollPosition();
          
          // Add spinning animation
          button.style.transition = 'transform 0.5s';
          button.style.transform = 'rotate(360deg)';
          
          // Reload the page after animation
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      });

      // Restore scroll position when page loads
      if (performance.navigation.type === 1) { // Check if it's a refresh
        restoreScrollPosition();
      }
      
      // Theme toggle function
      function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        
        // Update theme toggle icons
        themeToggles.forEach(toggle => {
          toggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        });

        // Update logo based on theme
        if (newTheme === 'light') {
          logoImg.style.filter = 'brightness(0.2)';
        } else {
          logoImg.style.filter = 'none';
        }

        // Save theme preference
        localStorage.setItem('theme', newTheme);
      }

      // Set initial theme from localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        themeToggles.forEach(toggle => {
          toggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
        });
        if (savedTheme === 'light') {
          logoImg.style.filter = 'brightness(0.2)';
        }
      }
      
      // Add click event to theme toggles
      themeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleTheme);
      });
      
      // Toggle mobile menu
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });
      
      // Close mobile menu when clicking overlay
      overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
      
      // Toggle dropdowns on mobile
      dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        button.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            
            // Close all other dropdowns first
            dropdowns.forEach(d => {
              if (d !== dropdown) {
                d.classList.remove('active');
              }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
            
            // If dropdown is now active, scroll it into view if needed
            if (dropdown.classList.contains('active')) {
              setTimeout(() => {
                const dropdownContent = dropdown.querySelector('.header1-dropdown-content');
                if (dropdownContent) {
                  const rect = dropdownContent.getBoundingClientRect();
                  const isInViewport = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                  );
                  
                  if (!isInViewport) {
                    dropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }
                }
              }, 100);
            }
          }
        });
      });
      
      // Close dropdowns when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.header1-dropdown')) {
          dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
          });
        }
      });

      // Handle hover on desktop
      if (window.innerWidth > 768) {
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', () => {
            // Close all other dropdowns first
            dropdowns.forEach(d => {
              if (d !== dropdown) {
                d.classList.remove('active');
              }
            });
          });
        });
      }
      
      // Handle window resize
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
          dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
          });
        }
      });

      notificationBtn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();
          notificationDropdown.classList.toggle('active');
          document.body.style.overflow = notificationDropdown.classList.contains('active') ? 'hidden' : '';
        }
      });
      
      // Close notification dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.header1-dropdown')) {
          notificationDropdown.classList.remove('active');
          document.body.style.overflow = '';
        }
      });

      // Handle window resize
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
          notificationDropdown.classList.remove('active');
          document.body.style.overflow = '';
        }
      });

      // Profile dropdown toggle
      const profileDropdownBtn = document.getElementById('profileDropdownBtn');
      const profileDropdown = document.querySelector('.header1-profile-dropdown');
      profileDropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.header1-profile-dropdown')) {
          profileDropdown.classList.remove('active');
        }
      });
      // Assets side menu toggle
      const assetsMenuBtn = document.getElementById('assetsMenuBtn');
      const assetsSideMenu = document.getElementById('assetsSideMenu');
      assetsMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        assetsSideMenu.style.display = 'block';
      });

      // Lock side menu toggle + hover
      const lockSideMenuBtn = document.getElementById('sideMenuBtn');
      const lockSideMenu = document.getElementById('lockSideMenu');
      let lockMenuHoverTimeout;

      // Click to open
      lockSideMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        lockSideMenu.style.display = 'block';
      });

      // Hover to open/close
      lockSideMenuBtn.addEventListener('mouseenter', function() {
        clearTimeout(lockMenuHoverTimeout);
        lockSideMenu.style.display = 'block';
      });
      lockSideMenu.addEventListener('mouseenter', function() {
        clearTimeout(lockMenuHoverTimeout);
        lockSideMenu.style.display = 'block';
      });
      lockSideMenuBtn.addEventListener('mouseleave', function() {
        lockMenuHoverTimeout = setTimeout(() => {
          lockSideMenu.style.display = 'none';
        }, 200);
      });
      lockSideMenu.addEventListener('mouseleave', function() {
        lockMenuHoverTimeout = setTimeout(() => {
          lockSideMenu.style.display = 'none';
        }, 200);
      });

      // Side Menu toggle
      function openMenu() {
        sideMenu.classList.add('show');
      }
      function closeMenu() {
        sideMenu.classList.remove('show');
      }

      sideMenuBtn.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        openMenu();
      });
      sideMenu.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        openMenu();
      });
      sideMenuBtn.addEventListener('mouseleave', function() {
        hoverTimeout = setTimeout(closeMenu, 200);
      });
      sideMenu.addEventListener('mouseleave', function() {
        hoverTimeout = setTimeout(closeMenu, 200);
      });

      const btn = document.getElementById('customProfileBtn');
      const dropdown = document.getElementById('mobileDropdown');

      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (dropdown.style.display === 'none') {
          dropdown.style.display = 'block';
        } else {
          dropdown.style.display = 'none';
        }
      });

      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && e.target !== btn) {
          dropdown.style.display = 'none';
        }
      });

      window.addEventListener('scroll', function() {
        dropdown.style.display = 'none';
      });
    });
  </script>
  <style>
    #mob {
        display: none;
    }

    @media (max-width: 768px) {
    #mob {
        display: block;
      }
    }
  </style>
</body>
</html>