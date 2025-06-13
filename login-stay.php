<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
require_once 'check-persistent-login.php';

// if (!isset($_SESSION['recovery_words']) || !isset($_SESSION['is_logged_in']) || $_SESSION['is_logged_in'] !== true) {

if (!isset($_SESSION['is_logged_in']) || $_SESSION['is_logged_in'] !== true) {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <title>Login Required</title> -->
      <style>
        body {
          background: #181A20;
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-popup-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(24,26,32,0.85);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-popup {
          background: #23262F;
          color: #fff;
          border-radius: 18px;
          box-shadow: 0 0 24px 0 rgba(0,0,0,0.5);
          padding: 36px 28px 28px 28px;
          max-width: 90vw;
          width: 350px;
          text-align: center;
          font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
          position: relative;
        }
        .custom-popup h2 {
          color: #F0B90B;
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        .custom-popup p {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 24px;
        }
        .custom-popup button {
          background: #F0B90B;
          color: #181A20;
          border: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .custom-popup button:hover {
          background: #e5a800;
        }
        @media (max-width: 480px) {
          .custom-popup {
            width: 98vw;
            padding: 18px 6vw 18px 6vw;
            border-radius: 10px;
          }
          .custom-popup h2 {
            font-size: 1.1rem;
          }
          .custom-popup button {
            font-size: 1rem;
            padding: 10px 18px;
          }
        }
      </style>
    </head>
    <body>
      <div class="custom-popup-bg">
        <div class="custom-popup">
          <h2>Login Required</h2>
          <p>Please login to access the dashboard.</p>
          <button onclick="window.location.href='new-login.php'">Login</button>
        </div>
      </div>
    </body>
    </html>
    <?php
    exit();
}

// ... existing code ...