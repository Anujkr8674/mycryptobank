<?php
session_start();
include 'config.php'; // Assuming you have database configuration file


?>
<?php include "header.php"; ?>
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
      padding: 5px 10px;
      background-color: #1a1a1a;
      border: 1px solid #333;
      border-radius: 4px;
      color: #aaa;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.2s, border-color 0.2s, background-color 0.2s;
      font-size: 14px;
    }
    .coin-btn.active {
      color: #ffd600;
      border-color: #ffd600;
      background-color: #222;
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
        width: 100%;
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
    }
    .p2p-topbar-left {
      display: flex;
      align-items: center;
      gap: 0;
    }
    .p2p-topbar-right {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .p2p-menu-item {
      color: #fff;
      font-size: 1.13rem;
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
    }
    .p2p-menu-item .fa,
    .p2p-menu-item .fa-solid,
    .p2p-menu-item .fa-regular {
      font-size: 1.1rem;
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
      font-size: 0.9rem;
      margin-left: 2px;
    }
    .p2p-menu-item .fa-circle {
      color: #ffd600;
      font-size: 0.7rem;
      margin-left: 2px;
    }
    @media (max-width: 900px) {
      .p2p-topbar-right {
        gap: 18px;
      }
      .p2p-menu-item {
        font-size: 1rem;
        padding: 0 4px;
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
        gap: 10px;
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
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>

  
</head>
<body style="padding-top: 120px;">



<div class="p2p-topbar">
  <div class="p2p-topbar-left">
    <!-- Toggle switch will be here after this bar -->
  </div>
  <div class="p2p-topbar-right">
    <!-- P2P Help Center Dropdown -->
    <div class="p2p-menu-item" tabindex="0" id="helpCenterMenu">
      <i class="fa-solid fa-ticket" style="color:#ffd600;"></i>
      <span style="font-weight:600;">P2P Help Center</span>
      <i class="fa-solid fa-chevron-down"></i>
      <div class="p2p-menu-dropdown" id="helpCenterDropdown">
        <button class="p2p-menu-dropdown-item"><i class="fa-solid fa-arrows-rotate"></i> How to Buy/Sell</button>
        <button class="p2p-menu-dropdown-item"><i class="fa-regular fa-file-lines"></i> Placing an Order</button>
        <button class="p2p-menu-dropdown-item"><i class="fa-solid fa-circle-play"></i> Video tutorial</button>
      </div>
    </div>
    <!-- Orders (no dropdown) -->
    <a href="orders.php" class="p2p-menu-item" tabindex="0">
      <i class="fa-regular fa-file-lines"></i>
      <span>Orders</span>
    </a>
    <!-- P2P User Center (no dropdown for now) -->
    <a href="user-center.php" class="p2p-menu-item" tabindex="0">
      <i class="fa-solid fa-users"></i>
      <span>P2P User Center</span>
    </a>
    <!-- More Dropdown -->
    <div class="p2p-menu-item" tabindex="0" id="moreMenu">
      <!-- <i class="fa-solid fa-ellipsis"></i> -->
      <span>More</span>
      <i class="fa-solid fa-chevron-down"></i>
      <div class="p2p-menu-dropdown" id="moreDropdown">
        <button class="p2p-menu-dropdown-item"><i class="fa-solid fa-credit-card"></i> Payment Methods</button>
        <button class="p2p-menu-dropdown-item"><i class="fa-solid fa-plus"></i> Post new Ad</button>
        <button class="p2p-menu-dropdown-item"><i class="fa-solid fa-building"></i> My ads</button>
        <button class="p2p-menu-dropdown-item"><i class="fa-regular fa-comments"></i> Chat</button>
      </div>
    </div>
  </div>
</div>

<!-- Move the toggle switch just below the topbar -->
<div class="toggle-switch-3">
  <button id="toggleExpress" class="toggle3-btn">Express</button>
  <button id="toggleP2P" class="toggle3-btn active">P2P</button>
  <button id="toggleBlock" class="toggle3-btn">Block</button>
  <div class="toggle3-underline"></div>
</div>
<br/><br/>

<div id="p2p-section">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="buy">Buy BTC</button>
    <button class="tab-btn" data-tab="sell">Sell BTC</button>
  
  <!-- Coin Filter -->
  <div class="coin-filter">
    <span class="coin-btn" data-coin="USDT">USDT</span>
    <span class="coin-btn" data-coin="HMSTR">HMSTR</span>
    <span class="coin-btn active" data-coin="BTC">BTC</span>
    <span class="coin-btn" data-coin="USDC">USDC</span>
    <span class="coin-btn" data-coin="FDUSD">FDUSD</span>
    <span class="coin-btn" data-coin="BNB">BNB</span>
    <span class="coin-btn" data-coin="ETH">ETH</span>
    <span class="coin-btn" data-coin="TRX">TRX</span>
    <span class="coin-btn" data-coin="SHIB">SHIB</span>
    <span class="coin-btn" data-coin="XRP">XRP</span>
    <span class="coin-btn" data-coin="SOL">SOL</span>
    <span class="coin-btn" data-coin="TON">TON</span>
    <span class="coin-btn" data-coin="DOGE">DOGE</span>
    <span class="coin-btn" data-coin="PEPE">PEPE</span>
    <span class="coin-btn" data-coin="TRUMP">TRUMP</span>
  </div>
  </div>
  <br/><br/>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Advertisers</th>
          <th>Price</th>
          <th>Available/Order Limit</th>
          <th>Payment methods</th>
          <th>Trade</th>
        </tr>
      </thead>
      <tbody id="priceTableBody">
        <!-- Table content will be dynamically updated -->
      </tbody>
   
    </table>
  </div>
</div>
<div id="express-section" style="display:none; text-align:center; color:#fff; font-size:1.2rem; margin: 40px 0;">Coming Soon...</div>
<div id="block-section" style="display:none; text-align:center; color:#fff; font-size:1.2rem; margin: 40px 0;">Coming Soon...</div>

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

// Function to format numbers with specific decimal rules
function formatNumberWithDecimals(num) {
    if (num === null || num === undefined) {
        return '';
    }
    const numStr = String(num);
    if (numStr.indexOf('.') === -1) {
        // No decimal part
        return parseFloat(num).toLocaleString('en-IN');
    }

    const parts = numStr.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    if (decimalPart.length <= 2) {
        // 2 or fewer decimal places, show as is (toLocaleString will handle this well)
        return parseFloat(num).toLocaleString('en-IN', { minimumFractionDigits: decimalPart.length, maximumFractionDigits: decimalPart.length });
    }

    // Check if all digits after the second decimal place are zero
    const trailingDecimals = decimalPart.substring(2);
    let allTrailingZeros = true;
    for (let i = 0; i < trailingDecimals.length; i++) {
        if (trailingDecimals[i] !== '0') {
            allTrailingZeros = false;
            break;
        }
    }

    if (allTrailingZeros) {
        // Show only up to two decimal places
        return parseFloat(num).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
        // Show full decimal places
         return parseFloat(num).toLocaleString('en-IN', { minimumFractionDigits: decimalPart.length, maximumFractionDigits: decimalPart.length });
    }
}

// Function to update prices using AJAX
function updatePrices(type = 'buy', coin = 'BTC') {
    let apiUrl = '';
    if (type === 'buy') {
        apiUrl = './database/p2p/p2p_buy.php';
    } else if (type === 'sell') {
        apiUrl = './database/p2p/p2p_sell.php';
    }

    // Add coin parameter to the URL
    apiUrl += '?coin=' + coin;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const tableBody = $('#priceTableBody');
            tableBody.empty();
            
            if (data.length > 0) {
                data.forEach(item => {
                    const row = `
                        <tr>
                            <td data-label="Advertisers">
                                <div class="advertiser">
                                    <div class="avatar">${item.wallet_name.charAt(0)}</div>
                                    <div class="advertiser-info">
                                        <div class="advertiser-name">${item.wallet_name} </div>
                                        <div class="stats">${item.total_orders} orders | ${item.completion_rate}% completion</div>
                                        <div class="icons"><i class="fa-solid fa-thumbs-up"></i> ${item.thumbs_up_rating}% | <i class="fa-regular fa-clock"></i> ${item.avg_release_time_min} min</div>
                                    </div>
                                </div>
                            </td>
                            <td data-label="Price">
                                <div class="price">₹ ${formatNumberWithDecimals(item.price_inr)} </div>
                            
                            </td>
                            <td data-label="Available/Order Limit">
                                <div class="btc">${formatNumberWithDecimals(item.amount)} ${coin} </div>
                                <div class="limit"> ${formatNumberWithDecimals(item.min_order_limit)} INR  - ${formatNumberWithDecimals(item.max_order_limit)} INR </div>
                            </td>
                            <td data-label="Payment methods">
                                <div class="payment-methods">${item.payment_methods.replace(/,/g, ', ')}</div>
                            </td>
                            <td data-label="Trade">
                                <div class="buy-section">
                                    <button class="buy-btn ${type === 'sell' ? 'sell-btn' : ''}">${type === 'buy' ? 'Buy ' + coin : 'Sell ' + coin}</button>
                                </div>
                            </td>
                        </tr>
                        <br/><br/><hr/>
                    `;
                    tableBody.append(row);
                });
            } else {
                // Add a message indicating no data available
                const row = `
                    <tr>
                        <td colspan="5" style="text-align: center; padding: 40px;">
                            <div style="font-size: 1.2rem; color: #888;">No trading data available at the moment.</div>
                        </td>
                    </tr>
                `;
                tableBody.append(row);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching prices:', error);
            const tableBody = $('#priceTableBody');
            tableBody.empty();
            const row = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 40px;">
                        <div style="font-size: 1.2rem; color: #ff4444;">Error loading trading data.</div>
                    </td>
                </tr>
            `;
            tableBody.append(row);
        }
    });
}

// Handle tab switching
$('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    const activeCoin = $('.coin-btn.active').data('coin');
    updatePrices(tab, activeCoin); // Pass the tab type and active coin
});

// Handle coin filter button clicks
$('.coin-btn').click(function() {
    $('.coin-btn').removeClass('active');
    $(this).addClass('active');
    const coin = $(this).data('coin');
    const activeTab = $('.tab-btn.active').data('tab');
    updatePrices(activeTab, coin); // Pass the active tab and selected coin
});

// Update prices every 5 seconds using AJAX
// Fetch initial data on page load (default to buy and BTC)
updatePrices('buy', 'BTC');
setInterval(() => {
    const activeTab = $('.tab-btn.active').data('tab');
    const activeCoin = $('.coin-btn.active').data('coin');
    updatePrices(activeTab, activeCoin);
}, 5000);

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

// Toggle switch logic
function updateUnderline() {
  const activeBtn = document.querySelector('.toggle3-btn.active');
  const underline = document.querySelector('.toggle3-underline');
  if (activeBtn && underline) {
    underline.style.width = activeBtn.offsetWidth + 'px';
    underline.style.left = activeBtn.offsetLeft + 'px';
  }
}

document.querySelectorAll('.toggle3-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.toggle3-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    updateUnderline();
    // Show/hide sections
    if (this.id === 'toggleExpress') {
      document.getElementById('p2p-section').style.display = 'none';
      document.getElementById('express-section').style.display = '';
      document.getElementById('block-section').style.display = 'none';
    } else if (this.id === 'toggleP2P') {
      document.getElementById('p2p-section').style.display = '';
      document.getElementById('express-section').style.display = 'none';
      document.getElementById('block-section').style.display = 'none';
    } else {
      document.getElementById('p2p-section').style.display = 'none';
      document.getElementById('express-section').style.display = 'none';
      document.getElementById('block-section').style.display = '';
    }
  });
});

window.addEventListener('resize', updateUnderline);
window.addEventListener('DOMContentLoaded', updateUnderline);

// Mobile/touch device handling
function isTouchDevice() {
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
}

if (isTouchDevice()) {
  // Only for touch devices: open dropdown on click
  document.getElementById('helpCenterMenu').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('helpCenterDropdown');
    const isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.p2p-menu-dropdown').forEach(d => d.classList.remove('open'));
    if (!isOpen) dropdown.classList.add('open');
  });
  
  document.getElementById('moreMenu').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('moreDropdown');
    const isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.p2p-menu-dropdown').forEach(d => d.classList.remove('open'));
    if (!isOpen) dropdown.classList.add('open');
  });
  
  document.addEventListener('click', function() {
    document.querySelectorAll('.p2p-menu-dropdown').forEach(d => d.classList.remove('open'));
  });
}

// Keyboard accessibility for dropdowns
['helpCenterMenu','moreMenu'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isTouchDevice()) this.click();
    }
  });
});
</script>


</body>
<?php include "footer.php";?>
</html>
