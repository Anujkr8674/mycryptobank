<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
include 'config.php'; // Assuming you have database configuration file

// Add this PHP code to set a JavaScript variable based on login status
$isLoggedIn = isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === true;
?>

<!DOCTYPE html>
<html lang="en">
<head>


  <meta charset="UTF-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #0e0e0e;
      font-family: Arial, sans-serif;
      color: #fff;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
      min-width: 0;
      min-height: 0;
    }
    .tab-buttons {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .tab-btn {
      padding: 10px 20px;
      background-color: #1a1a1a;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 16px;
    }
    .tab-btn.active {
      background-color: #00c896;
    }
    .tab-btn:hover {
      background-color: #222;
    }
    .tab-btn.active:hover {
      background-color: #00a87a;
    }
    .coin-filter {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      margin-top: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    .coin-btn {
      padding: 5px 1px;
     
      color: #aaa;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.2s, border-color 0.2s, background-color 0.2s;
      font-size: 14px;
    }
    .coin-btn.active {
      color: #ffd600;
     
    }
    .coin-btn:hover:not(.active) {
      color: #ccc;
      border-color: #ccc;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 900px;
      background: transparent;
    }
    thead {
      background-color: #121212;
    }
    th, td {
      text-align: left;
      padding: 15px;
      vertical-align: middle;
      font-size: 14px;
    }
    th {
      color: #888;
      font-weight: normal;
    }
    tr {
      background-color: #1a1a1a;
    }
    tr:hover {
      background-color: #222;
    }
    hr {
      border: 0;
      border-top: 1px solid #333;
      margin: 0;
    }
    .advertiser {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      min-width: 36px;
    }
    .advertiser-info {
      display: flex;
      flex-direction: column;
    }
    .advertiser-name {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: bold;
      font-size: 16px;
      flex-wrap: wrap;
    }
    .stats {
      color: #aaa;
      font-size: 12px;
      margin-top: 5px;
    }
    .icons {
      font-size: 12px;
      color: #888;
      margin-top: 4px;
    }
    .price {
      font-size: 18px;
      font-weight: bold;
      word-break: break-all;
    }
    .btc {
      font-size: 12px;
      color: #aaa;
      margin-top: 5px;
      word-break: break-all;
    }
    .limit {
      font-size: 12px;
      color: #aaa;
      margin-top: 5px;
    }
    .payment-methods {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      color: #ccc;
      word-break: break-all;
    }
    .buy-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-end;
    }
    .buy-btn {
      padding: 8px 16px;
      background-color: #00c896;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 15px;
    }
    .buy-btn:hover {
      background-color: #00a87a;
    }
    .sell-btn {
      background-color: #ff4d4d; /* Red color for sell button */
    }
    .sell-btn:hover {
      background-color: #cc0000; /* Darker red on hover */
    }
    .badge {
      background: orange;
      color: black;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: bold;
      margin-left: 5px;
      margin-top: 2px;
      display: inline-block;
    }
    /* Responsive Styles */
    @media (max-width: 1024px) {
      table {
        min-width: 700px;
      }
      .tab-btn {
        font-size: 15px;
        padding: 8px 14px;
      }
      th, td {
        padding: 10px;
        font-size: 13px;
      }
      .price {
        font-size: 16px;
      }
      .advertiser-name {
        font-size: 14px;
        align-items: center;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      table {
        min-width: 600px;
      }
      .tab-btn {
        font-size: 14px;
        padding: 7px 10px;
      }
      th, td {
        padding: 8px 6px;
        font-size: 12px;
      }
      .price {
        font-size: 15px;
      }
      .advertiser-name {
        font-size: 13px;
      }
      .avatar {
        width: 30px;
        height: 30px;
        font-size: 13px;
        min-width: 30px;
      }
    }
    @media (max-width: 600px) {
      .table-container {
        overflow-x: auto;
      }
      table {
        min-width: 500px;
      }
      .tab-btn {
        font-size: 13px;
        padding: 6px 8px;
      }
      th, td {
        padding: 6px 4px;
        font-size: 11px;
      }
      .price {
        font-size: 13px;
      }
      .advertiser-name {
        font-size: 12px;
      }
      .avatar {
        width: 24px;
        height: 24px;
        font-size: 10px;
        min-width: 24px;
      }
      .buy-btn {
        padding: 5px 8px;
        font-size: 11px;
      }
      .badge {
        font-size: 8px;
        padding: 1px 4px;
      }
    }
    /* Card style for very small screens */
    @media (max-width: 400px) {
      .table-container {
        padding: 0;
      }
      table, thead, tbody, th, td, tr {
        display: block;
      }
      thead {
        display: none;
      }
      tr {
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        background: #181818;
      }
      td {
        padding: 8px 10px;
        border: none;
        position: relative;
        font-size: 10px;
      }
      td:before {
        content: attr(data-label);
        font-weight: bold;
        color: #888;
        display: block;
        margin-bottom: 2px;
      }
      .buy-section {
        align-items: flex-start;
      }
    }
    /* Card style for mobile screens */
    @media (max-width: 700px) {
      .table-container {
        padding: 0;
        overflow-x: unset;
      }
      table, thead, tbody, th, tr {
        display: block;
        width: 100%;
      }
      thead {
        display: none;
      }
      #priceTableBody {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      tr {
        background: #181818;
        margin-bottom: 0;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
        padding: 0 0 10px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      td {
        border: none;
        padding: 8px 16px 0 16px;
        font-size: 14px;
        width: 71%;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      td[data-label]::before {
        content: attr(data-label) ': ';
        font-weight: bold;
        color: #00c896;
        min-width: 110px;
        display: inline-block;
        font-size: 13px;
      }
      .advertiser {
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
      }
      .buy-section {
        align-items: flex-start;
        margin-top: 10px;
        width: 100%;
      }
      .buy-btn {
        width: 80%;
        font-size: 15px;
        padding: 10px 0;
      }
      .badge {
        margin-top: 6px;
        display: inline-block;
      }
      .price, .btc, .limit, .payment-methods {
        margin-bottom: 6px;
      }
      hr {
        display: none;
      }
    }
    /* How P2P Works Section */
    .p2p-works-section {
      margin: 40px auto 0 auto;
      max-width: 1200px;
      padding: 24px 12px;
      background: none;
    }
    .p2p-works-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 32px;
    }
    .p2p-works-title {
      font-size: 2.6rem;
      font-weight: bold;
      color: #fff;
      margin: 0;
    }
    .p2p-works-buttons {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .p2p-works-btn {
      background: linear-gradient(90deg, #00c896 0%, #00e0b6 100%);
      color: #181818;
      border: none;
      border-radius: 32px;
      padding: 14px 38px;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,200,150,0.12);
      transition: background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.1s;
      outline: none;
      letter-spacing: 0.5px;
      position: relative;
      z-index: 1;
    }
    .p2p-works-btn:not(.active) {
      background: #23272f;
      color: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    }
    .p2p-works-btn.active, .p2p-works-btn:hover {
      background: linear-gradient(90deg, #00c896 0%, #00e0b6 100%);
      color: #181818;
      box-shadow: 0 6px 24px rgba(0,200,150,0.18);
      transform: translateY(-2px) scale(1.04);
    }
    .p2p-steps {
      display: flex;
      gap: 24px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .p2p-step-card {
      background: #181b20;
      border-radius: 20px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.12);
      flex: 1 1 300px;
      min-width: 260px;
      max-width: 370px;
      padding: 32px 28px 28px 28px;
      margin-bottom: 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }
    .p2p-step-icon {
      width: 54px;
      height: 54px;
      background: #23272f;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
    }
    .p2p-step-icon img {
      width: 36px;
      height: 36px;
    }
    .p2p-step-title {
      font-size: 1.3rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 8px;
    }
    .p2p-step-desc {
      color: #bdbdbd;
      font-size: 1rem;
      margin-bottom: 0;
    }
    @media (max-width: 900px) {
      .p2p-steps {
        flex-direction: column !important;
        gap: 18px;
        align-items: stretch;
      }
      .p2p-step-card {
        max-width: 100%;
        min-width: 0;
        width: 100%;
      }
      .p2p-works-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
      }
    }
    @media (max-width: 600px) {
      .p2p-works-title {
        font-size: 1.5rem;
      }
      .p2p-step-title {
        font-size: 1.1rem;
      }
      .p2p-step-card {
        padding: 18px 10px 16px 10px;
      }
      .p2p-works-buttons {
        flex-direction: column;
        gap: 10px;
        width: 100%;
        align-items: stretch;
      }
      .p2p-works-btn {
        padding: 12px 0;
        font-size: 1.05rem;
        width: 100%;
      }
    }
    .top-payments-section {
      max-width: 1200px;
      margin: 48px auto 0 auto;
      padding: 0 12px 32px 12px;
    }
    .top-payments-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 32px;
    }
    .top-payments-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    @media (max-width: 900px) {
      .top-payments-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .top-payments-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
      }
      .top-payments-grid {
        grid-template-columns: 1fr;
        gap: 14px;
      }
    }
    .top-payment-card {
      background: #181b20;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.10);
      padding: 28px 24px 24px 24px;
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;
      border-left: 5px solid #00c896;
      min-height: 60px;
      transition: box-shadow 0.2s, border-color 0.2s;
    }
    .top-payment-card[data-color="orange"] { border-left-color: #ff9900; }
    .top-payment-card[data-color="yellow"] { border-left-color: #ffd600; }
    .top-payment-card[data-color="blue"] { border-left-color: #1e90ff; }
    .top-payment-card[data-color="purple"] { border-left-color: #a259ff; }
    .top-payment-card[data-color="gray"] { border-left-color: #888; }
    .top-payment-card:hover {
      box-shadow: 0 4px 24px rgba(0,200,150,0.18);
      border-left-width: 7px;
    }
    .faq-section {
      max-width: 900px;
      margin: 48px auto 0 auto;
      padding: 0 12px 48px 12px;
    }
    .faq-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 32px;
    }
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .faq-card {
      background: #181b20;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.10);
      padding: 0 0 0 0;
      overflow: hidden;
      transition: box-shadow 0.2s;
    }
    .faq-card.open {
      box-shadow: 0 4px 24px rgba(0,200,150,0.18);
    }
    .faq-question {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 28px 22px 28px;
      font-size: 1.18rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      border: none;
      background: none;
      width: 100%;
      outline: none;
      transition: background 0.15s;
    }
    .faq-question:hover {
      background: #22242a;
    }
    .faq-qnum {
      color: #888;
      font-size: 1.1rem;
      margin-right: 16px;
      font-weight: bold;
    }
    .faq-toggle {
      font-size: 1.5rem;
      color: #888;
      margin-left: 12px;
      transition: transform 0.2s;
    }
    .faq-card.open .faq-toggle {
      transform: rotate(90deg);
    }
    .faq-answer {
      padding: 0 28px 22px 60px;
      color: #bdbdbd;
      font-size: 1.05rem;
      line-height: 1.6;
      display: none;
    }
    .faq-card.open .faq-answer {
      display: block;
    }
    .faq-link {
      color: #00c896;
      text-decoration: underline;
      font-weight: 500;
    }
    @media (max-width: 600px) {
      .faq-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
      }
      .faq-question {
        font-size: 1rem;
        padding: 16px 12px 16px 12px;
      }
      .faq-answer {
        font-size: 0.98rem;
        padding: 0 12px 16px 32px;
      }
    }
    /* --- Global Responsive Enhancements --- */
    @media (max-width: 1200px) {
      .top-payments-section, .faq-section, .p2p-works-section {
        max-width: 1000px;
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    @media (max-width: 1024px) {
      .top-payments-section, .faq-section, .p2p-works-section {
        max-width: 900px;
      }
      .table-container {
        padding: 0 2px;
      }
    }
    @media (max-width: 900px) {
      .top-payments-section, .faq-section, .p2p-works-section {
        max-width: 100%;
        padding-left: 4px;
        padding-right: 4px;
      }
      .top-payments-title, .faq-title, .p2p-works-title {
        font-size: 2rem;
      }
    }
    @media (max-width: 700px) {
      .top-payments-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      .p2p-works-section, .faq-section, .top-payments-section {
        padding-left: 2px;
        padding-right: 2px;
      }
    }
    @media (max-width: 600px) {
      .top-payments-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .top-payments-title, .faq-title, .p2p-works-title {
        font-size: 1.2rem;
        margin-bottom: 12px;
      }
      .p2p-works-section, .faq-section, .top-payments-section {
        padding-left: 0;
        padding-right: 0;
      }
      .p2p-step-card, .faq-card, .top-payment-card {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
      .tab-buttons {
        flex-direction: column;
        gap: 8px;
        width: 100%;
        align-items: stretch;
      }
      .tab-btn {
        width: 100%;
        font-size: 1rem;
        padding: 8px 0;
      }
    }
    @media (max-width: 480px) {
      .top-payments-title, .faq-title, .p2p-works-title {
        font-size: 1rem;
        margin-bottom: 8px;
      }
      .p2p-step-title, .faq-question {
        font-size: 0.95rem;
      }
      .p2p-step-card, .faq-card, .top-payment-card {
        padding: 8px 4px 8px 8px !important;
        font-size: 0.95rem;
      }
      .buy-btn, .p2p-works-btn {
        font-size: 0.95rem;
        padding: 8px 0;
      }
      .avatar {
        width: 16px;
        height: 16px;
        font-size: 7px;
        min-width: 16px;
      }
    }
    body {
      box-sizing: border-box;
      min-width: 0;
      min-height: 0;
    }
    /* --- End Global Responsive Enhancements --- */
    .toggle-switch-3 {
      display: flex;
      align-items: flex-end;
      gap: 1px;
      margin-bottom: 10px;
      position: relative;
      width: fit-content;
    }
    .toggle3-btn {
      background: none;
      border: none;
      color: #aaa;
      font-size: 1rem;
      font-weight: 500;
      padding: 8px 18px 6px 18px;
      cursor: pointer;
      border-bottom: 2.5px solid transparent;
      transition: color 0.2s, font-weight 0.2s, border-bottom 0.2s;
      outline: none;
      position: relative;
      z-index: 1;
    }
    .toggle3-btn.active {
      color: #fff;
      font-weight: 600;
    }
    .toggle3-underline {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2.5px;
      width: 0;
      background: #ffd600;
      border-radius: 2px;
      transition: left 0.2s, width 0.2s;
      z-index: 0;
    }
    @media (max-width: 700px) {
      .toggle-switch-3 {
        gap: 1px;
      }
      .toggle3-btn {
        font-size: 1rem;
        padding: 7px 10px 5px 10px;
      }
    }
    @media (max-width: 480px) {
      .toggle-switch-3 {
        gap: 2px;
      }
      .toggle3-btn {
        font-size: 0.95rem;
        padding: 6px 6px 4px 6px;
      }
    }
    /* Topbar menu styles */
    .p2p-topbar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* background: #181a20; */
      padding: 0 0 0 0;
      min-height: 48px;
      position: relative;
      z-index: 10;
      border-bottom: 1.5px solid #181a20;
      gap: 100px;
    }
    .p2p-topbar-left {
      display: flex;
      align-items: center;
      gap: 0;
    }
    .p2p-topbar-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .p2p-menu-item {
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 7px;
      position: relative;
      padding: 0 8px;
      transition: color 0.18s;
      text-decoration: none;
    }
    .p2p-menu-item .fa,
    .p2p-menu-item .fa-solid,
    .p2p-menu-item .fa-regular {
      font-size: 12px;
    }
    .p2p-menu-item.active,
    .p2p-menu-item:focus,
    .p2p-menu-item:hover {
      color: #ffd600;
    }
    .p2p-menu-item:focus-within .p2p-menu-dropdown,
    .p2p-menu-item:hover .p2p-menu-dropdown {
      display: block;
    }
    .p2p-menu-dropdown {
      display: none;
      position: absolute;
      top: 120%;
      left: auto !important;
      right: 0 !important;
      min-width: 220px;
      background: #181a20;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.18);
      padding: 10px 0;
      z-index: 100;
      border: 1px solid #23272f;
    }
    .p2p-menu-dropdown.open {
      display: block;
    }
    .p2p-menu-dropdown-item {
      color: #bdbdbd;
      font-size: 1.08rem;
      padding: 10px 22px;
      background: none;
      border: none;
      outline: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.15s, color 0.15s;
    }
    .p2p-menu-dropdown-item:hover {
      background: #23272f;
      color: #ffd600;
    }
    .p2p-menu-item .fa-chevron-down {
      font-size: 0.7rem;
      margin-left: 2px;
    }
    .p2p-menu-item .fa-circle {
      color: #ffd600;
      font-size: 0.7rem;
      margin-left: 2px;
    }
    @media (max-width: 900px) {
      .p2p-topbar-right {
        gap: 8px;
      }
      .p2p-menu-item {
        font-size: 9rem;
        padding: 0 4px;
        display: none;
      }
    }
    @media (max-width: 700px) {
      .p2p-topbar {
        flex-direction: column;
        align-items: stretch;
        padding: 0;
        min-height: unset;
      }
      .p2p-topbar-right {
        gap: 6px;
        justify-content: flex-end;
        padding-right: 4px;
      }
    }
    @media (max-width: 480px) {
      .p2p-topbar-right {
        gap: 4px;
      }
      .p2p-menu-item {
        font-size: 0.98rem;
        padding: 0 2px;
      }
      .p2p-menu-dropdown {
        min-width: 150px;
        font-size: 0.95rem;
      }
    }
    @media (hover: none) and (pointer: coarse) {
      .p2p-menu-item:hover .p2p-menu-dropdown {
        display: none;
      }
    }
    /* Filter/Search Bar UI gold border on hover/focus/open */
    .filterbar-btn, .filterbar-dropdown-toggle {
      border: 1.5px solid #353945 !important;
      transition: border-color 0.2s;
    }
    .filterbar-btn:hover, .filterbar-btn:focus,
    .filterbar-dropdown-toggle:hover, .filterbar-dropdown-toggle:focus,
    .filterbar-dropdown.open .filterbar-dropdown-toggle {
      border: 1.5px solid #F0B90B !important;
    }
    .filterbar-dropdown-menu {
      border: 1.5px solid #353945;
      border-radius: 14px;
      background: #181A20;
      box-shadow: 0 4px 24px rgba(0,0,0,0.18);
      z-index: 10;
      max-height: 340px;
      overflow-y: auto;
      position: absolute;
      left: 0;
      top: 110%;
      min-width: 240px;
      display: none;
      padding-bottom: 10px;
    }
    .filterbar-dropdown.open .filterbar-dropdown-menu {
      display: block;
      
    }
    .filterbar-dropdown-menu input[type="text"] {
      width: 90%;
      margin: 10px 5%;
      background: #23262F;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 9px 12px;
      font-size: 15px;
      outline: none;
      margin-bottom: 8px;
    }
    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 8px;
      border-radius: 7px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      transition: background 0.18s;
      margin: 0 4px;
    }
    .dropdown-item:hover {
      background: #23262F;
    }
    .dropdown-item .fa,
    .dropdown-item .fa-solid,
    .dropdown-item .fa-regular {
      font-size: 18px;
    }
    .dropdown-section-label {
      color: #aaa;
      font-size: 13px;
      margin: 8px 0 2px 8px;
      font-weight: 500;
    }
    .dropdown-divider {
      border-bottom: 1px solid #23262F;
      margin: 6px 0 6px 0;
    }
    /* Custom scrollbar for dropdown */
    .filterbar-dropdown-menu::-webkit-scrollbar {
      width: 7px;
      background: #23262F;
      border-radius: 8px;
    }
    .filterbar-dropdown-menu::-webkit-scrollbar-thumb {
      background: #353945;
      border-radius: 8px;
    }
    #filterModalOverlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2000;
      display: none;
    }
    .filter-modal {
      position: fixed;
      top: 0;
      right: -420px;
      width: 400px;
      max-width: 95vw;
      height: 100vh;
      background: #23262F;
      color: #fff;
      z-index: 2001;
      box-shadow: -2px 0 24px rgba(0,0,0,0.25);
      border-radius: 0 0 0 12px;
      transition: right 0.35s cubic-bezier(.4,0,.2,1);
      display: flex;
      flex-direction: column;
    }
    .filter-modal.open {
      right: 0;
    }
    .filter-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 28px 28px 12px 28px;
      border-bottom: 1px solid #353945;
    }
    .filter-modal-title {
      font-size: 2rem;
      font-weight: bold;
    }
    .filter-modal-close {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
    }
    .filter-modal-content {
      flex: 1;
      overflow-y: auto;
      padding: 18px 28px 18px 28px;
    }
    .filter-modal-section {
      margin-bottom: 28px;
    }
    .filter-modal-label {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .filter-modal-subtitle {
      font-size: 1.15rem;
      font-weight: bold;
      margin-bottom: 12px;
    }
    .filter-modal-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
      font-size: 1.05rem;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
    }
    .switch input {display:none;}
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: #353945;
      transition: .4s;
      border-radius: 24px;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: #fff;
      transition: .4s;
      border-radius: 50%;
    }
    input:checked + .slider {
      background-color: #ffd600;
    }
    input:checked + .slider:before {
      transform: translateX(20px);
      background: #fff;
    }
    .filter-modal-timelimit {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .timelimit-btn {
      background: #181A20;
      color: #fff;
      border: 1.5px solid #353945;
      border-radius: 8px;
      padding: 10px 18px;
      font-size: 1rem;
      cursor: pointer;
      margin-bottom: 8px;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .timelimit-btn.active, .timelimit-btn:hover {
      border-color: #ffd600;
      color: #ffd600;
      background: #23262F;
    }
    .filter-modal-input {
      width: 100%;
      background: #181A20;
      color: #fff;
      border: 1.5px solid #353945;
      border-radius: 8px;
      padding: 12px 14px;
      font-size: 1rem;
      margin-bottom: 8px;
      outline: none;
    }
    .filter-modal-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 28px 24px 28px;
      border-top: 1px solid #353945;
      background: #23262F;
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .filter-modal-reset {
      background: #23262F;
      color: #fff;
      border: 1.5px solid #353945;
      border-radius: 8px;
      padding: 12px 32px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .filter-modal-reset:hover {
      border-color: #ffd600;
      color: #ffd600;
    }
    .filter-modal-apply {
      background: #ffd600;
      color: #181A20;
      border: none;
      border-radius: 8px;
      padding: 12px 48px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .filter-modal-apply:hover {
      background: #ffe066;
      color: #181A20;
    }
    @media (max-width: 600px) {
      .filter-modal {
        width: 100vw;
        max-width: 100vw;
        border-radius: 0;
        padding: 0;
        display: none;
      }
    }
      @media (max-width: 480px) {
      .filter-modal {
        width: 100vw;
        max-width: 100vw;
        border-radius: 0;
        padding: 0;
        display: block;
      }
    }
      .filter-modal-header, .filter-modal-content, .filter-modal-footer {
        padding-left: 14px !important;
        padding-right: 14px !important;
      }
    }
    // Add this CSS to hide the login modal by default
    .custom-popup-bg {
      display: none;
    }
    .custom-popup {
      display: none;
    }
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>

  
</head>
<body style="padding-top: 120px;">







<!-- Move the toggle switch just below the topbar -->

<br/>







<!-- How P2P Works Section -->
<div class="p2p-works-section">
  <div class="p2p-works-header">
    <div class="p2p-works-title">How P2P Works</div>
    <div class="p2p-works-buttons">
      <button class="p2p-works-btn active" id="showBuyCrypto">Buy Crypto</button>
      <button class="p2p-works-btn" id="showSellCrypto">Sell Crypto</button>
    </div>
  </div>
  <!-- Buy Steps -->
  <div class="p2p-steps" id="p2pBuySteps">
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/document--v1.png" alt="Order"></div>
      <div class="p2p-step-title">1. Place an Order</div>
      <div class="p2p-step-desc">Once you place a P2P order, the crypto asset will be escrowed by MyCryptoBank P2P.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/handshake.png" alt="Pay"></div>
      <div class="p2p-step-title">2. Pay the Seller</div>
      <div class="p2p-step-desc">Send money to the seller via the suggested payment methods. Complete the fiat transaction and click "Transferred, notify seller" on MyCryptoBank P2P.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/receive-cash.png" alt="Receive"></div>
      <div class="p2p-step-title">3. Receive Crypto</div>
      <div class="p2p-step-desc">Once the seller confirms receipt of money, the escrowed crypto will be released to you.</div>
    </div>
  </div>
  <!-- Sell Steps -->
  <div class="p2p-steps" id="p2pSellSteps" style="display:none;">
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/document--v1.png" alt="Order"></div>
      <div class="p2p-step-title">1. Place an Order</div>
      <div class="p2p-step-desc">After you place an order, your crypto will be escrowed by MyCryptoBank P2P.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/conference-call.png" alt="Verify"></div>
      <div class="p2p-step-title">2. Verify Payment</div>
      <div class="p2p-step-desc">Check the transaction record in the given payment account, and make sure you receive the money sent by the buyer.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/money-transfer.png" alt="Release"></div>
      <div class="p2p-step-title">3. Release Crypto</div>
      <div class="p2p-step-desc">Once you confirm the receipt of money, release crypto to the buyer on MyCryptoBank P2P.</div>
    </div>
  </div>
</div>

<div class="top-payments-section">
  <div class="top-payments-title">Top Payment Methods</div>
  <div class="top-payments-grid">
    <div class="top-payment-card" data-color="gray">UPI</div>
    <div class="top-payment-card" data-color="orange">IMPS</div>
    <div class="top-payment-card" data-color="yellow">Bank Transfer (India)</div>
    <div class="top-payment-card" data-color="blue">Digital eRupee</div>
    <div class="top-payment-card" data-color="blue">Google Pay (GPay)</div>
    <div class="top-payment-card" data-color="blue">Paytm</div>
    <div class="top-payment-card" data-color="purple">PhonePe</div>
    <div class="top-payment-card" data-color="orange">IMPS - PAN</div>
    <div class="top-payment-card" data-color="gray">UPI-PAN</div>
  </div>
</div>

<div class="faq-section">
  <div class="faq-title">FAQs</div>
  <div class="faq-list">
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">1</span> What is P2P exchange?<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">P2P stands for peer-to-peer, and P2P exchanges are platforms that allow users to buy and sell crypto for fiat currency directly with other users. Learn more about <a href="#" class="faq-link">What is P2P Trading</a> and <a href="#" class="faq-link">How Does a Local Bitcoin Exchange Work?</a></div>
    </div>
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">2</span> How do I sell Bitcoin locally on MyCryptoBank P2P?<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">First, browse Buy Ads for the crypto you wish to sell, and find the best offers with your preferred payment method. You can read the reviews and check the requirements of the buyer. If they are agreeable to you, start the trade, and do not release the crypto until you have received the money in the payment method you provided. Learn more about <a href="#" class="faq-link">how to sell crypto peer-to-peer</a> or <a href="#" class="faq-link">how to trade bitcoin for cash via MyCryptoBank P2P</a>.</div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">3</span> Which cryptocurrencies are supported in the P2P trade zone?<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer">There are many cryptocurrencies that you can use in the P2P trade zone. You can choose from digital assets like <a href="#" class="faq-link">Bitcoin</a>, <a href="#" class="faq-link">Ethereum</a> and stablecoins.</div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">4</span> Glossary of P2P trading terms<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">5</span> How to add new payment methods on MyCryptoBank P2P?<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">6</span> How do I buy Bitcoin locally on MyCryptoBank P2P?<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">After you complete identity verification and add your payment methods, you are ready to <a href="#" class="faq-link">buy crypto on MyCryptoBank P2P platform</a>. First, choose from all the available offers in the marketplace. Second, place an order to buy your crypto, and pay the seller based on the preferred payment methods. Lastly, get your crypto from the seller after you complete the fiat transaction and confirm your payment on MyCryptoBank P2P.</div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">7</span> Why is MyCryptoBank P2P better than other P2P marketplaces?<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer">MyCryptoBank P2P is the largest peer-to-peer exchange with more than 800+ payment methods and 100+ fiat currencies. We provide an escrow service that ensures safe and fair trading. Also, on MyCryptoBank P2P you can buy and sell crypto at zero fees. Learn more about <a href="#" class="faq-link">.</a></div>
    </div>
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">8</span> How do I protect myself against fraud? MyCryptoBank P2P Escrow FTW!<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">As one of the several safeguards on the platform, MyCryptoBank P2P has a holding mechanism for crypto funds that are involved in any pending transaction. This mechanism prevents incidents of theft or scam by adding another layer of trust, thus preventing malicious actors from stealing your money or crypto without completing their part of the trade.<a href="#" class="faq-link">Learn more.</a></div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">9</span> MyCryptoBank P2P trading FAQ<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">10</span> P2P user transaction policy<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>






// Show/hide buy/sell crypto table and steps on button click
$('#showBuyCrypto').click(function() {
  $(this).addClass('active');
  $('#showSellCrypto').removeClass('active');
  $('#p2pBuySteps').show();
  $('#p2pSellSteps').hide();
});
$('#showSellCrypto').click(function() {
  $(this).addClass('active');
  $('#showBuyCrypto').removeClass('active');
  $('#p2pBuySteps').hide();
  $('#p2pSellSteps').show();
});

// FAQ accordion logic
$('.faq-question').on('click', function() {
  const card = $(this).closest('.faq-card');
  if (card.hasClass('open')) {
    card.removeClass('open');
    $(this).find('.faq-toggle').html('&#43;');
  } else {
    // Close all other cards
    $('.faq-card').removeClass('open');
    $('.faq-toggle').html('&#43;');
    // Open this one
    card.addClass('open');
    $(this).find('.faq-toggle').html('&#8212;');
  }
});

































</script>


</body>

</html>

<script>
var isLoggedIn = <?php echo json_encode($isLoggedIn); ?>;
</script>




<style>

    #mob{
        display:none;
    }

    @media (max-width : 768px){
       
            #window{
                
            display: none !important;

            }
                .p2p-topbar{
                flex-direction:row;
                }
        
    }
    @media (max-width : 480px){
       
       #window{
           
       display: none !important;

       }
       #mob{
        display:block;
        cursor: pointer;
    }
     .p2p-topbar{
                flex-direction:row;
                }
   
}
</style>

<style>
    /* Mobile menu styles */

    #mob1-menu-toggle{
        display:none;
    }

    @media (max-width:768px)    {
        #mob1-menu-toggle{
        display:block;
    }
    }
.mob1-mobile-menu {
  display: none;
  background-color: #1e1e1e;
  padding: 15px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 999;
}

.mob1-mobile-menu.active {
  display: block;
}

.mob1-mobile-menu li {
  list-style: none;
  padding: 10px 0;
  color: #848e9c;
  font-size: 14px;
  border-bottom: 1px solid #333;
  cursor: pointer;
}

.mob1-icon-mobile {
  font-size: 24px;
  color: white;
  padding: 10px;
  cursor: pointer;
}

.mob1-dropdown-toggle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap:20px;
}

.mob1-submenu {
  display: none;
  padding-left: 20px;
}

.mob1-submenu li {
  padding: 8px 0;
  font-size: 15px;
  color: #bbb;
}
.mob1-item-text {
  margin-left: 15px;
}


</style>
<script>
  // Toggle Main Mobile Menu
  document.getElementById('mob1-menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mob1-mobileMenu');
    menu.classList.toggle('active');
  });

  // Toggle Dropdown Submenu
  document.getElementById('mob1-help-toggle').addEventListener('click', function () {
    const submenu = document.getElementById('mob1-help-submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
</script>
