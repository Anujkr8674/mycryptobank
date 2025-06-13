<?php $currentTab = 'p2p'; ?>
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
   <?php include "p2phead.php"; ?>





<!-- Move the toggle switch just below the topbar -->

<br/>

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
  

  <!-- Filter/Search Bar UI (as per screenshots) -->
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; background: none; margin-bottom: 32px; gap: 0;">
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <!-- Transaction Amount & Currency Dropdown -->
      <div style="display: flex; align-items: center; gap: 0;">
        <input type="text" placeholder="Transaction amount" style="background: #181A20; color: #fff; border: 1.5px solid #353945; border-radius: 8px 0 0 8px; padding: 12px 14px; font-size: 15px; outline: none; width: 100px;">
        <div class="filterbar-dropdown" style="position: relative;">
          <button class="filterbar-dropdown-toggle" style="background: #181A20; color: #fff; border: 1.5px solid #353945; border-left: none; border-radius: 0 8px 8px 0; padding: 8px 18px 12px 10px; font-size: 15px; display: flex; align-items: center; gap: 6px; cursor: pointer;">
            <span style="color: #F0B90B; font-size: 18px;">₹</span> <b>INR</b> <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>
          </button>
          <div class="filterbar-dropdown-menu">
            <input type="text" placeholder="Search">
            <div class="dropdown-item"><span style="color:#F0B90B; font-size:18px; font-weight:bold;">₹</span> <b>INR</b></div>
            <div class="dropdown-item"><span style="color:#00c896;"><i class="fa-solid fa-money-bill-wave"></i></span> AED</div>
            <div class="dropdown-item"><span style="color:#00c896;"><i class="fa-solid fa-coins"></i></span> AFN</div>
            <div class="dropdown-item"><span style="color:#ff4444;"><i class="fa-solid fa-circle"></i></span> ALL</div>
            <div class="dropdown-item"><span style="color:#ffd600;"><i class="fa-solid fa-coins"></i></span> AMD</div>
            <div class="dropdown-item"><span style="background:#000; color:#ffd600; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">Kz</span> AOA</div>
            <div class="dropdown-item"><span style="color:#1e90ff;"><i class="fa-solid fa-dollar-sign"></i></span> ARS</div>
            <div class="dropdown-item"><span style="color:#1e90ff;"><i class="fa-solid fa-dollar-sign"></i></span> AUD</div>
            <div class="dropdown-item"><span style="background:#00c896; color:#fff; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">AZN</span> AZN</div>
            <div class="dropdown-item"><span style="background:#ffd600; color:#000; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">KM</span> BAM</div>
            <div class="dropdown-item"><span style="background:#00c896; color:#fff; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">৳</span> BDT</div>
            <div class="dropdown-item"><span style="background:#00c896; color:#fff; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">Лв</span> BGN</div>
            <div class="dropdown-item"><span style="background:#ff4444; color:#fff; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">د.ب</span> BHD</div>
            <div class="dropdown-item"><span style="background:#bdfb00; color:#000; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">FBu</span> BIF</div>
            <div class="dropdown-item"><span style="background:#ffd600; color:#000; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">B$</span> BND</div>
            <div class="dropdown-item"><span style="background:#00c896; color:#fff; border-radius:50%; width:22px; height:22px; display:inline-flex; align-items:center; justify-content:center; font-size:13px;">$B</span> BOB</div>
          </div>
        </div>
      </div>

      <!-- Payment Methods Dropdown -->
      <div class="filterbar-dropdown" style="position: relative; min-width: 220px;">
      <button class="filterbar-dropdown-toggle" style="background: #181A20; color: #fff; border: 1.5px solid #353945; border-radius: 8px; padding: 12px 18px 12px 14px; font-size: 15px; display: flex; align-items: center; gap: 6px; cursor: pointer; min-width: 180px;">
          All payment meth... <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>
      </button>
      <div class="filterbar-dropdown-menu">
        <input type="text" placeholder="Search">
          <div class="dropdown-item"><input type="checkbox" checked style="accent-color:#F0B90B;"> <span style="color:#F0B90B; font-size:18px;">●</span> <b>All payment methods</b></div>
          <div class="dropdown-section-label">Recommended: Instant Release <i class="fa fa-info-circle"></i></div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#F0B90B; font-size:18px;">●</span> Lightning UPI <span style="color:#ff4444;"><i class="fa fa-bolt"></i></span></div>
          <div class="dropdown-section-label">Popular</div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#F0B90B; font-size:18px;">●</span> UPI <span style="color:#F0B90B;"><i class="fa fa-tint"></i></span></div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#F0B90B; font-size:18px;">●</span> IMPS <span style="color:#F0B90B;"><i class="fa fa-tint"></i></span></div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#F0B90B; font-size:18px;">●</span> Bank Transfer (India) <span style="color:#F0B90B;"><i class="fa fa-tint"></i></span></div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#1e90ff; font-size:18px;">●</span> Google Pay (GPay) <span style="color:#F0B90B;"><i class="fa fa-tint"></i></span></div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#1e90ff; font-size:18px;">●</span> Paytm <span style="color:#F0B90B;"><i class="fa fa-tint"></i></span></div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-section-label">Others</div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#a259ff; font-size:18px;">●</span> PhonePe</div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#1e90ff; font-size:18px;">●</span> Digital eRupee</div>
          <div class="dropdown-item"><input type="checkbox"> <span style="color:#ff9900; font-size:18px;">●</span> IMPS - PAN</div>
        </div>
      </div>

      <!-- Beginner's Guide Button -->
      <!-- <button class="filterbar-btn" style="background: #181A20; color: #F0B90B; border: 1.5px solid #353945; border-radius: 8px; padding: 12px 24px; font-size: 15px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">
        <i class="fa fa-bolt" style="color:#F0B90B;"></i> Beginner's Guide <i class="fa fa-chevron-right" style="font-size: 13px;"></i>
      </button> -->

      <!-- Filter Icon Button -->
      <button class="filterbar-btn" style="background: #181A20; color: #fff; border: 1.5px solid #353945; border-radius: 8px; padding: 12px 16px; font-size: 17px; display: flex; align-items: center; cursor: pointer;">
        <i class="fa fa-filter"></i>
      </button>

   
    </div>
    <div style="display: flex; gap: 16px; align-items: center;">
      <!-- Sort By Dropdown -->
      <div class="filterbar-dropdown" style="position: relative; min-width: 140px;">
        <button class="filterbar-dropdown-toggle" style="background: #181A20; color: #fff; border: 1.5px solid #353945; border-radius: 8px; padding: 12px 18px 12px 14px; font-size: 15px; display: flex; align-items: center; gap: 6px; cursor: pointer; min-width: 120px;">
          Sort By <span style="font-weight:600; color:#fff;">Price</span> <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>
        </button>
        <div class="filterbar-dropdown-menu">
          <!-- ... sort dropdown items ... -->
           <div class="dropdown-item" style="color:#fff; font-weight:600;"><i class="fa fa-check" style="color:#F0B90B;"></i> Price</div>
          <div class="dropdown-item">Completed order number</div>
          <div class="dropdown-item">Completion Rate</div>
          <div class="dropdown-item">Rating</div>
        </div>
      </div>
      <!-- Refresh Button -->
      <button class="filterbar-btn" style="background: #181A20; color: #fff; border: 1.5px solid #353945; border-radius: 8px; padding: 12px 16px; font-size: 17px; display: flex; align-items: center; cursor: pointer; margin-left: 0;">
        <i class="fa fa-refresh"></i>
      </button>
    </div>
  </div>

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

<?php include "p2pother.php"; ?>


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

// Track selected coin, currency, and payment methods globally
let selectedCoin = 'BTC';
let selectedCurrency = 'inr'; // default
let selectedPaymentMethods = []; // array of selected payment methods

function updatePrices(type = 'buy') {
    let apiUrl = '';
    if (type === 'buy') {
        apiUrl = './database/p2p/p2p_buy.php';
    } else if (type === 'sell') {
        apiUrl = './database/p2p/p2p_sell.php';
    }
    apiUrl += '?coin=' + encodeURIComponent(selectedCoin) + '&currency=' + encodeURIComponent(selectedCurrency);
    if (selectedPaymentMethods.length > 0 && !selectedPaymentMethods.includes('All payment methods')) {
        apiUrl += '&payment_methods=' + encodeURIComponent(selectedPaymentMethods.join(','));
    }

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const tableBody = $('#priceTableBody');
            tableBody.empty();
            // Combine all filters on frontend as well (safety net)
            let filtered = data;
            // Payment methods filter (OR logic on frontend as safety net)
            if (selectedPaymentMethods.length > 0 && !selectedPaymentMethods.includes('All payment methods')) {
                filtered = filtered.filter(row => {
                    const pm = (row.payment_methods || '').toLowerCase();
                    // Use 'some' for OR logic: true if AT LEAST ONE selected method is included in the row's payment methods
                    return selectedPaymentMethods.some(method => pm.includes(method.toLowerCase()));
                });
            }
            // Show filtered data
            if (filtered.length > 0) {
                filtered.forEach((item, index) => { // Added index here
                    const mainRow = `
                        <tr data-row-index="${index}" class="main-row"> <!-- Added data-row-index and class -->
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
                                <div class="btc">${formatNumberWithDecimals(item.amount)} ${selectedCoin} </div>
                                <div class="limit"> ${formatNumberWithDecimals(item.min_order_limit)} INR  - ${formatNumberWithDecimals(item.max_order_limit)} INR </div>
                            </td>
                            <td data-label="Payment methods">
                                <div class="payment-methods">${item.payment_methods.replace(/,/g, ', ')}</div>
                            </td>
                            <td data-label="Trade">
                                <div class="buy-section">
                                    <!-- Added class for easier selection -->
                                    <button class="buy-btn trade-btn ${type === 'sell' ? 'sell-btn' : ''}">${type === 'buy' ? 'Buy ' + selectedCoin : 'Sell ' + selectedCoin}</button>
                                </div>
                            </td>
                        </tr>
                    `;
                    // Added a hidden detail row below the main row
                    const detailRow = `
                        <tr data-detail-for="${index}" class="detail-row" style="display: none;"> <!-- Hidden by default, linked by index -->
                            <td colspan="5"> <!-- Span all columns -->
                                <div class="order-details" style="background: #121212; padding: 20px; border-radius: 8px; margin-top: 10px; color: #ccc;">
                                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
                                        <!-- Left Section: Terms -->
                                        <div style="flex: 1 1 300px;">
                                            <h4 style="color: #fff; margin-bottom: 10px;">Advertisers' Terms</h4>
                                            <ul class ="first" style="list-style: disc; margin-left: 20px; margin-bottom:15px; font-size: 0.95rem;">
                                                <li>NO THIRD PARTY PAYMENT.</li>
                                                <li>NO UPI.</li>
                                                <li>DIGITAL ERUPEE ONLY.</li>
                                                <li>NO REFUNDS.</li>
                                                <li>IF YOU PAY VIA UPI OR VIA THIRD PARTY ACCOUNT THEN ONLY 50% OF YOUR MONEY WILL BE REFUNDED IN 48 HOURS AND YOU WILL BE REPORTED TO BINANCE.</li>
                                            </ul>
                                        </div>
                                        <style>
                                        
                                          .first li{
                                              margin-bottom: 12px;
                                              text-decoration: none;
                                            }
                                        </style>
                                        <!-- Right Section: Pay/Receive -->
                                        <div style="flex: 1 1 250px; max-width: 350px;">
                                            <div style="margin-bottom: 15px;">
                                                <!-- Removed outer label, integrated into the input container -->
                                                 <div style="color: #fff; margin-bottom: 5px;">Price : ${formatNumberWithDecimals(item.price_inr)}</div>
                                                <div class="platform-fee-display" style="color: #fff; font-size: 0.9rem; margin-bottom: 5px;"></div>
                                                <div style="color: #fff; margin-bottom: 5px;">You Pay</div>
                                                <div style="display: flex; align-items: center; background: #1a1a1a; border: 1px solid #333; border-radius: 5px; padding: 10px;">
                                                    <!-- Placeholder includes the range -->
                                                    <input type="number" class="you-pay-input" step="0.01"
                                                           min="${item.min_order_limit}" max="${item.max_order_limit}"
                                                           placeholder="${formatNumberWithDecimals(item.min_order_limit)} - ${formatNumberWithDecimals(item.max_order_limit)}"
                                                           style="flex-grow: 1; padding: 0; background: none; border: none; color: #fff; outline: none; font-size: 1rem;">
                                                
                                                    <span style="font-size: 1.2rem; color: #F0B90B; margin-left: 5px;"> &nbsp;&nbsp; ₹</span>
                                                    <span style="font-size: 0.95rem; color: #fff; margin-left: 2px;">&nbsp;&nbsp; INR</span>
                                                </div>
                                                <span style="font-size: 0.9rem; color: #888; margin-top: 5px; display: block;">Limit: ${formatNumberWithDecimals(item.min_order_limit)} INR - ${formatNumberWithDecimals(item.max_order_limit)} INR</span>
                                            </div>
                                            <!-- Advertiser's Payment Method Dropdown for selection -->
                                         
                                            <div style="margin-bottom: 15px;">
                                                <!-- Removed outer label, integrated into the input container -->
                                                 <div style="color: #fff; margin-bottom: 5px;">You Receive (${selectedCoin})</div>
                                                <div style="display: flex; align-items: center; background: #1a1a1a; border: 1px solid #333; color: #fff; border-radius: 5px; padding: 10px;">
                                                     <input type="text" class="you-receive-input" value="0.00" readonly
                                                            style="flex-grow: 1; padding: 0; background: none; border: none; color: #fff; outline: none; font-size: 1rem;">
                                                     <!-- Dynamically add coin icon/text based on selectedCoin -->
                                                     <span style="font-size: 1.2rem; margin-right: 3px;"> &nbsp;&nbsp;${getCurrencyIcon(selectedCoin)}</span>
                                                     <span style="font-size: 0.95rem; color: #fff;">&nbsp;&nbsp;${selectedCoin}</span>
                                                </div>
                                            </div>
                                               <div class="filterbar-dropdown advertiser-payment-dropdown" style="position: relative; margin-bottom: 15px; width: 100%;">
                                                <button class="filterbar-dropdown-toggle advertiser-payment-method-toggle" style="background: #1a1a1a; color: #fff; border: 1px solid #333; border-radius: 5px; padding: 10px 14px; font-size: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 6px; cursor: pointer; width: 100%;">
                                                    Select Payment Method <i class="fa fa-chevron-down" style="font-size: 0.8rem;"></i>
                                                </button>
                                                <div class="filterbar-dropdown-menu advertiser-payment-method-menu" style="position: absolute; top: 100%; left: 0; width: 100%; margin-top: 5px; z-index: 50;">
                                                    <!-- Advertiser's payment methods will be populated here by JavaScript -->
                                                  ${(item.payment_methods || '').split(',').map(method => {
                                                        const trimmedMethod = method.trim();
                                                        if (trimmedMethod) {
                                                            return `<div class="dropdown-item" data-value="${trimmedMethod}">${trimmedMethod}</div>`;
                                                        }
                                                        return '';
                                                    }).join('')}
                                                </div>
                                            </div>
                                            <button class="confirm-trade-btn buy-btn ${type === 'sell' ? 'sell-btn' : ''}"
                                                    style="width: 100%; padding: 12px; font-size: 1rem; margin-top: 10px;">
                                                ${type === 'buy' ? 'Buy ' + selectedCoin : 'Sell ' + selectedCoin} Now
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
                    tableBody.append(mainRow + detailRow + '<tr class="separator-row"><td colspan="5"><hr/></td></tr>'); // Add separator row with hr
                });

                // Function to get currency icon/symbol (basic example, extend as needed)
                function getCurrencyIcon(coin) {
                     switch(coin) {
                         case 'USDT': return '<i class="fa-solid fa-gem" style="color:#00c896;"></i>'; // Example icon
                         case 'BTC': return '<i class="fa-brands fa-bitcoin" style="color:#ff9900;"></i>'; // Example icon
                         case 'ETH': return '<i class="fa-brands fa-ethereum" style="color:#666;"></i>'; // Example icon
                         case 'HMSTR': return '<i class="fa-solid fa-paw" style="color:#fff;"></i>'; // Example icon for HMSTR
                         case 'USDC': return '<i class="fa-solid fa-coins" style="color:#1e90ff;"></i>'; // Example
                         case 'FDUSD': return '<i class="fa-solid fa-coins" style="color:#fff;"></i>'; // Example
                         case 'BNB': return '<i class="fa-solid fa-circle" style="color:#f3cc30;"></i>'; // Example
                         case 'TRX': return '<i class="fa-solid fa-bolt" style="color:#ff4444;"></i>'; // Example
                         case 'SHIB': return '<i class="fa-solid fa-dog" style="color:#e55d35;"></i>'; // Example
                         case 'XRP': return '<i class="fa-solid fa-square-xmark" style="color:#888;"></i>'; // Example
                         case 'SOL': return '<i class="fa-solid fa-sun" style="color:#00a87a;"></i>'; // Example
                         case 'TON': return '<i class="fa-solid fa-comment" style="color:#1e90ff;"></i>'; // Example
                         case 'DOGE': return '<i class="fa-solid fa-dog" style="color:#ffd600;"></i>'; // Example
                         case 'PEPE': return '<i class="fa-solid fa-frog" style="color:#00c896;"></i>'; // Example
                         case 'TRUMP': return '<i class="fa-solid fa-crown" style="color:#ff4444;"></i>'; // Example
                         default: return ''; // No icon for unknown coins
                     }
                 }

                // Add event listener for the Pay input to calculate Receive amount
                $('.you-pay-input').on('input', function() {
                    const payAmount = parseFloat($(this).val());
                    const rowIndex = $(this).closest('.detail-row').data('detail-for');
                    const price = filtered[rowIndex].price_inr; // Use original item data for price
                    let receiveAmountBeforeFee = 0;
                    let platformFee = 0;
                    let finalReceiveAmount = 0;

                    if (!isNaN(payAmount) && payAmount > 0 && price > 0) {
                         if (type === 'buy') { // If buying, pay INR, receive Crypto
                             receiveAmountBeforeFee = payAmount / price;
                             platformFee = receiveAmountBeforeFee * 0.05; // 5% fee
                             finalReceiveAmount = receiveAmountBeforeFee - platformFee;
                         } else { // If selling, receive INR (which is pay amount), calculate crypto to sell
                             // User enters INR they want to RECEIVE (Pay), calculate Crypto they must GIVE (Receive)
                             // Assuming the 5% fee is on the crypto amount given/received
                             receiveAmountBeforeFee = payAmount / price; // Crypto amount before fee consideration
                             platformFee = receiveAmountBeforeFee * 0.05; // 5% fee on crypto
                             finalReceiveAmount = receiveAmountBeforeFee - platformFee; // Crypto amount user actually needs to provide/receives
                             // NOTE: The image implies 'You Pay' is INR the user pays/receives.
                             // If buying: You Pay INR -> Receive Crypto (minus fee)
                             // If selling: You Pay (Receive) INR -> Give Crypto (adjusted for fee)
                             // The current logic calculates crypto based on the INR amount.
                             // Let's stick to the logic: user enters INR, we calculate crypto received/given, and apply the fee to the crypto.
                         }
                    }
                    // Update You Receive input
                    $(this).closest('.order-details').find('.you-receive-input').val(formatNumberWithDecimals(finalReceiveAmount));

                    // Update Platform Fee display
                    const feeDisplayElement = $(this).closest('.order-details').find('.platform-fee-display');
                    if (platformFee > 0) {
                         feeDisplayElement.text(`Processing Fee: ${formatNumberWithDecimals(platformFee)} ${selectedCoin}`);
                         feeDisplayElement.show(); // Make sure it's visible
                    } else {
                         feeDisplayElement.text(''); // Clear if no fee
                         feeDisplayElement.hide(); // Hide if no fee
                    }
                });

                 // Update label for 'You Pay' in the modal if it's a sell ad
                 if (type === 'sell') {
                    // Check if the label exists before trying to change its text
                    const youPayLabel = $('.detail-row .order-details div:contains("You Pay")');
                    if (youPayLabel.length > 0) {
                         youPayLabel.text('You Receive (INR)');
                    }
                 }


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
    updatePrices(tab);
});

// Handle coin filter button clicks
$('.coin-btn').click(function() {
    $('.coin-btn').removeClass('active');
    $(this).addClass('active');
    selectedCoin = $(this).data('coin');
    const activeTab = $('.tab-btn.active').data('tab');
    updatePrices(activeTab);
});

// Update prices every 5 seconds using AJAX
// Fetch initial data on page load (default to buy and BTC)
// updatePrices('buy');
// setInterval(() => {
//     const activeTab = $('.tab-btn.active').data('tab');
//     updatePrices(activeTab);
// }, 5000);

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

// Dropdown open/close logic
document.querySelectorAll('.filterbar-dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    // Close all other dropdowns
    document.querySelectorAll('.filterbar-dropdown').forEach(dd => dd.classList.remove('open'));
    // Open this one
    this.parentElement.classList.toggle('open');
    // Focus the search input if opening
    if (this.parentElement.classList.contains('open')) {
      const searchInput = this.parentElement.querySelector('.filterbar-dropdown-menu input[type="text"]');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 10);
      }
    }
  });
});
// Close dropdowns on click outside
document.addEventListener('click', function() {
  document.querySelectorAll('.filterbar-dropdown').forEach(dd => dd.classList.remove('open'));
});

// Dropdown value selection logic
// Currency Dropdown (first filterbar-dropdown)
const currencyDropdown = document.querySelectorAll('.filterbar-dropdown')[0];
const currencyToggle = currencyDropdown.querySelector('.filterbar-dropdown-toggle');
currencyDropdown.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // Only update if not clicking on a checkbox
    if (this.querySelector('input[type="checkbox"]')) return;
    currencyToggle.innerHTML = this.innerHTML + ' <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>';
    currencyDropdown.classList.remove('open');
    // Get the selected currency code (text after icon)
    selectedCurrency = this.textContent.trim().split(' ').pop().toLowerCase();
    const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
    updatePrices(activeTab);
  });
});

// Payment Methods Dropdown (second filterbar-dropdown)
// No single select, checkboxes handle their own state
const paymentDropdown = document.querySelectorAll('.filterbar-dropdown')[1];
const paymentToggle = paymentDropdown.querySelector('.filterbar-dropdown-toggle');
function updatePaymentToggleText() {
  const checked = paymentDropdown.querySelectorAll('.dropdown-item input[type="checkbox"]:checked');
  // If 'All payment methods' is checked, show that (with icon and style)
  const allPayment = paymentDropdown.querySelector('.dropdown-item b');
  selectedPaymentMethods = [];
  if (allPayment && allPayment.parentElement.querySelector('input[type="checkbox"]').checked) {
    paymentToggle.innerHTML = allPayment.parentElement.innerHTML + ' <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>';
    selectedPaymentMethods = ['All payment methods'];
    updatePrices($('.tab-btn.active').data('tab'));
    return;
  }
  // Otherwise, show checked payment methods (with icons/colors)
  let selected = [];
  checked.forEach(cb => {
    // Get only the label text (after icon and checkbox), remove emoji, colored dots, and extra spaces
    let label = cb.parentElement.innerText
      .replace(/\s+/g, ' ') // collapse whitespace
      .replace(/[^\w\s\(\)\-]/g, '') // remove all non-alphanumeric, non-space, non-parenthesis, non-hyphen
      .trim();
    selected.push(label);
    selectedPaymentMethods.push(label);
  });
  if (selected.length > 0) {
    let display = selected.slice(0,2).join(', ');
    if (selected.length > 2) {
      display += ` <span style='color:#aaa; font-size:13px;'>+${selected.length-2}</span>`;
    }
    paymentToggle.innerHTML = display + ' <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>';
  } else {
    paymentToggle.innerHTML = 'Select payment method <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>';
  }
  updatePrices($('.tab-btn.active').data('tab'));
}
paymentDropdown.querySelectorAll('.dropdown-item input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', updatePaymentToggleText);
});
// Initialize on page load
updatePaymentToggleText();

// Sort By Dropdown (fourth filterbar-dropdown)
const sortDropdown = document.querySelectorAll('.filterbar-dropdown')[2];
const sortToggle = sortDropdown.querySelector('.filterbar-dropdown-toggle');
sortDropdown.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // Remove check icon from all
    sortDropdown.querySelectorAll('.fa-check').forEach(icon => icon.style.display = 'none');
    // Add check icon to this
    let checkIcon = this.querySelector('.fa-check');
    if (!checkIcon) {
      checkIcon = document.createElement('i');
      checkIcon.className = 'fa fa-check';
      checkIcon.style.color = '#F0B90B';
      this.prepend(checkIcon);
    }
    checkIcon.style.display = '';
    // Update button text
    sortToggle.innerHTML = 'Sort By <span style="font-weight:600; color:#fff;">' + this.textContent.trim() + '</span> <i class="fa fa-chevron-down" style="font-size: 13px; margin-left: 6px;"></i>';
    sortDropdown.classList.remove('open');
  });
});

// Dropdown search filter logic for all dropdowns
document.querySelectorAll('.filterbar-dropdown-menu').forEach(menu => {
  const searchInput = menu.querySelector('input[type="text"]');
  if (!searchInput) return;
  searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    let anyVisible = false;
    menu.querySelectorAll('.dropdown-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = '';
        anyVisible = true;
      } else {
        item.style.display = 'none';
      }
    });
    // Always show section labels and dividers
    menu.querySelectorAll('.dropdown-section-label, .dropdown-divider').forEach(el => {
      el.style.display = '';
    });
  });
});

setTimeout(function() {
  const filterBtn = document.querySelectorAll('.filterbar-btn')[0]; // The filter icon button
  const filterModal = document.getElementById('filterModal');
  const filterModalOverlay = document.getElementById('filterModalOverlay');
  const closeFilterModal = document.getElementById('closeFilterModal');

  filterBtn.addEventListener('click', function(e) {
    filterModal.classList.add('open');
    filterModalOverlay.style.display = 'block';
    setTimeout(() => { filterModalOverlay.style.opacity = 1; }, 10);
  });
  closeFilterModal.addEventListener('click', function() {
    filterModal.classList.remove('open');
    filterModalOverlay.style.opacity = 0;
    setTimeout(() => { filterModalOverlay.style.display = 'none'; }, 300);
  });
  filterModalOverlay.addEventListener('click', function() {
    filterModal.classList.remove('open');
    filterModalOverlay.style.opacity = 0;
    setTimeout(() => { filterModalOverlay.style.display = 'none'; }, 300);
  });
  // Time limit button group logic
  const timelimitBtns = document.querySelectorAll('.timelimit-btn');
  timelimitBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      timelimitBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  // Reset/Apply
  document.getElementById('resetFilterModal').onclick = function() {
    // Reset all toggles to default (as per screenshot)
    document.getElementById('saveFilterToggle').checked = false;
    document.getElementById('tradableAdsToggle').checked = true;
    document.getElementById('verifiedMerchantToggle').checked = true;
    document.getElementById('noVerificationToggle').checked = false;
    document.getElementById('tradedWithToggle').checked = false;
    document.getElementById('followedToggle').checked = false;
    // Reset time limit to 'All'
    timelimitBtns.forEach(b => b.classList.remove('active'));
    timelimitBtns[0].classList.add('active');
    // Reset country input
    document.querySelector('.filter-modal-input').value = '';
    // Do NOT close the modal!
  };
  document.getElementById('applyFilterModal').onclick = function() {
    filterModal.classList.remove('open');
    filterModalOverlay.style.opacity = 0;
    setTimeout(() => { filterModalOverlay.style.display = 'none'; }, 300);
  };
}, 500);

// Add event listener for Buy/Sell buttons using event delegation on the table body
$('#priceTableBody').on('click', '.trade-btn', function() {
    // Check if the user is logged in using the JavaScript variable
    if (!isLoggedIn) {
        // Show the login popup
        $('.custom-popup-bg').css('display', 'flex');
        $('.custom-popup').css('display', 'block');
        return; // Stop here, don't show the order details
    }

    // If logged in, proceed with showing the detail row
    const clickedButton = $(this);
    const mainRow = clickedButton.closest('.main-row');
    const detailRow = mainRow.next('.detail-row'); // Get the next sibling row which is the detail row

    // Close any currently open detail rows, unless it's the one just clicked
    $('#priceTableBody .detail-row').not(detailRow).slideUp(200);
    $('#priceTableBody .main-row').removeClass('active-trade-row'); // Remove active class from previously active rows

    // Toggle the clicked detail row
    detailRow.slideToggle(200, function() {
        if (detailRow.is(':visible')) {
            mainRow.addClass('active-trade-row'); // Add active class if showing
            // Focus the first input in the opened detail row
            detailRow.find('.you-pay-input').focus();
        } else {
            mainRow.removeClass('active-trade-row'); // Remove active class if hiding
        }
    });
});

// Add click handler to close the login popup when clicking outside
$(document).on('click', '.custom-popup-bg', function(e) {
    if ($(e.target).hasClass('custom-popup-bg')) {
        $('.custom-popup-bg').css('display', 'none');
        $('.custom-popup').css('display', 'none');
    }
});

// Add event listener for the Cancel button inside the detail row
$('#priceTableBody').on('click', '.cancel-trade-btn', function() {
    const detailRow = $(this).closest('.detail-row');
    const mainRow = detailRow.prev('.main-row'); // Get the previous sibling row which is the main row
    detailRow.slideUp(200, function() {
        mainRow.removeClass('active-trade-row'); // Remove active class after hiding
    });
});

// Add event listener for the advertiser payment method dropdown toggle (using delegation)
$('#priceTableBody').on('click', '.advertiser-payment-method-toggle', function(e) {
    e.stopPropagation();
    // Close any other open dropdowns in this detail row
    $(this).closest('.order-details').find('.filterbar-dropdown').not($(this).parent()).removeClass('open');
    // Toggle this dropdown
    $(this).parent().toggleClass('open');
});

// Add event listener for selecting an item in the advertiser payment method dropdown (using delegation)
$('#priceTableBody').on('click', '.advertiser-payment-method-menu .dropdown-item', function(e) {
    e.stopPropagation();
    const selectedMethod = $(this).data('value');
    const dropdownToggle = $(this).closest('.filterbar-dropdown').find('.advertiser-payment-method-toggle');

    // Update the toggle button text
    dropdownToggle.html(`${selectedMethod} <i class="fa fa-chevron-down" style="font-size: 0.8rem;"></i>`);

    // You can store or use the selected method here for the trade
    console.log("User selected advertiser's payment method:", selectedMethod);

    // Close the dropdown
    $(this).closest('.filterbar-dropdown').removeClass('open');
});

// Close advertiser payment dropdowns when clicking anywhere else
$(document).on('click', function() {
    $('.advertiser-payment-dropdown').removeClass('open');
});

// Prevent dropdown menu clicks from closing the menu immediately
$('#priceTableBody').on('click', '.advertiser-payment-method-menu', function(e) {
    e.stopPropagation();
});

</script>

<!-- Filter Modal/Sidebar (hidden by default) -->
<div id="filterModalOverlay" style="display:none;"></div>
<div id="filterModal" class="filter-modal">
  <div class="filter-modal-header">
    <span class="filter-modal-title">More Filters</span>
    <button class="filter-modal-close" id="closeFilterModal"><i class="fa fa-times"></i></button>
  </div>
  <div class="filter-modal-content">
    <div class="filter-modal-section">
      <label class="filter-modal-label">Save filter for next use <i class="fa fa-info-circle" title="Save your filter settings for next time."></i></label>
      <label class="switch">
        <input type="checkbox" id="saveFilterToggle">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="filter-modal-section">
      <div class="filter-modal-subtitle">Ad Types</div>
      <div class="filter-modal-row">
        <span>Tradable Ads Only <i class="fa fa-info-circle" title="Show only tradable ads."></i></span>
        <label class="switch"><input type="checkbox" id="tradableAdsToggle" checked><span class="slider round"></span></label>
      </div>
      <div class="filter-modal-row">
        <span>Verified Merchant Ads only <i class="fa fa-info-circle" title="Show only verified merchant ads."></i></span>
        <label class="switch"><input type="checkbox" id="verifiedMerchantToggle" checked><span class="slider round"></span></label>
      </div>
      <div class="filter-modal-row">
        <span>Ads With No Verification Required</span>
        <label class="switch"><input type="checkbox" id="noVerificationToggle"><span class="slider round"></span></label>
      </div>
      <div class="filter-modal-row">
        <span>Advertisers you've traded with <i class="fa fa-info-circle"></i></span>
        <label class="switch"><input type="checkbox" id="tradedWithToggle"><span class="slider round"></span></label>
      </div>
      <div class="filter-modal-row">
        <span>Advertisers you follow <i class="fa fa-info-circle"></i></span>
        <label class="switch"><input type="checkbox" id="followedToggle"><span class="slider round"></span></label>
      </div>
    </div>
    <div class="filter-modal-section">
      <div class="filter-modal-subtitle">Payment Time Limit (minutes)</div>
      <div class="filter-modal-timelimit">
        <button class="timelimit-btn active" data-value="all">All</button>
        <button class="timelimit-btn" data-value="15">15</button>
        <button class="timelimit-btn" data-value="30">30</button>
        <button class="timelimit-btn" data-value="45">45</button>
        <button class="timelimit-btn" data-value="60">60</button>
        <button class="timelimit-btn" data-value="120">120</button>
        <button class="timelimit-btn" data-value="180">180</button>
        <button class="timelimit-btn" data-value="240">240</button>
        <button class="timelimit-btn" data-value="360">360</button>
      </div>
    </div>
    <div class="filter-modal-section">
      <div class="filter-modal-subtitle">Country/region</div>
      <input type="text" class="filter-modal-input" placeholder="Search country/region...">
    </div>
    <div class="filter-modal-footer">
      <button class="filter-modal-reset" id="resetFilterModal">Reset</button>
      <button class="filter-modal-apply" id="applyFilterModal">Apply</button>
    </div>
  </div>
</div>

</body>
<?php include "footer.php";?>
</html>

<script>
var isLoggedIn = <?php echo json_encode($isLoggedIn); ?>;
</script>

<!-- Add the login popup HTML right before the closing body tag -->
<div class="custom-popup-bg" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 9999; justify-content: center; align-items: center;">
    <div class="custom-popup" style="display: none; background: #23262F; padding: 30px; border-radius: 12px; text-align: center; color: #fff; max-width: 400px; width: 90%; box-shadow: 0 4px 24px rgba(0,0,0,0.25);">
        <h2 style="margin: 0 0 15px 0; font-size: 1.5rem; color: #fff;">Login Required</h2>
        <p style="margin: 0 0 20px 0; color: #aaa; font-size: 1.1rem;">Please login to access the trading features.</p>
        <button onclick="window.location.href='new-login.php'" style="background: #F0B90B; color: #181A20; border: none; padding: 12px 32px; border-radius: 8px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: background 0.2s;">Login</button>
    </div>
</div>


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
