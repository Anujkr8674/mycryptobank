<style>
  .sidebar-btn {
    display: flex;
    align-items: center;
    padding: 12px 24px;
    width: -webkit-fill-available;
    background: none;
    border: none;
    color: #fff;
    text-align: left;
    cursor: pointer;
    font-weight: normal;
    transition: background 0.2s;
    text-decoration: none;
  }
  .sidebar-btn:hover, .sidebar-btn.active {
    background: #32343a !important;
    color: #fff;
  }
  .sidebar-sub-btn {
    padding: 10px 36px;
    width: -webkit-fill-available;
    background: none;
    border: none;
    color: #a1a1aa;
    text-align: left;
    cursor: pointer;
    font-weight: normal;
    transition: background 0.2s;
    font-size: 15px;
    text-decoration: none;
    display: block;
  }
  .sidebar-sub-btn:hover, .sidebar-sub-btn.active {
    background: #32343a !important;
    color: #fff;
  }
  .sidebar-sub2-btn {
    padding: 8px 0 8px 24px;
    width: -webkit-fill-available;
    background: none;
    border: none;
    color: #a1a1aa;
    text-align: left;
    cursor: pointer;
    font-weight: normal;
    transition: background 0.2s;
    font-size: 15px;
    text-decoration: none;
    display: block;
  }
  .sidebar-sub2-btn:hover, .sidebar-sub2-btn.active {
    background: #32343a !important;
    color: #fff;
  }
  .sidebar-btn.active, .sidebar-sub-btn.active, .sidebar-sub2-btn.active {
    background: #32343a !important;
    color: #fff !important;
    font-weight: bold;
  }

  /* Mobile styles */
  .hamburger-menu {
    display: none;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background: #18181b;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .hamburger-icon {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition: 0.3s;
  }

  .sidebar-container {
    width: 250px;
    background: #18181b;
    color: #fff;
    min-height: 100vh;
    height: 100%;
    padding: 20px 0;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .hamburger-menu {
      display: block;
    }

    .sidebar-container {
      position: fixed;
      left: 0;
      top: 0;
      transform: translateX(-100%);
      z-index: 999;
    }

    .sidebar-container.active {
      transform: translateX(0);
    }

    .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 998;
    }

    .overlay.active {
      display: block;
    }
  }
</style>

<!-- Hamburger and overlay OUTSIDE sidebar -->
<button 
     class="hamburger-menu" id="hamburgerBtn">
  <span class="hamburger-icon"></span>
  <span class="hamburger-icon"></span>
  <span class="hamburger-icon"></span>
</button>
<div class="overlay" id="overlay"></div>

<!-- Sidebar with NO inline style, only class and id -->
<div class="sidebar-container" id="sidebar">
  <!-- <div style="font-size: 2rem; font-weight: bold; margin-left: 24px; margin-bottom: 32px;">Dashboard</div> -->
  <?php $currentPage = basename($_SERVER['PHP_SELF']); ?>
  <a href="./crm-dashboard.php" class="sidebar-btn<?php if($currentPage == 'crm-dashboard.php') echo ' active'; ?>">
    <span style="font-size: 1.5rem; margin-right: 16px;">🏠</span>
    <span style="font-size: 1.1rem;">Dashboard</span>
  </a>
  <div style="padding: 0;">
    <button id="assets-toggle" class="sidebar-btn">
      <span style="font-size: 1.5rem; margin-right: 16px;">💼</span>
      <span style="font-size: 1.1rem;">Assets</span>
      <span id="assets-arrow" style="margin-left: auto; color: #fff; transition: transform 0.2s;">&#9660;</span>
    </button>
    <div id="assets-menu" style="background: #232328; display: none;">
      <a href="./crm-overview.php" class="sidebar-sub-btn<?php if($currentPage == 'crm-overview.php') echo ' active'; ?>" style="background: #262a31; color: #fff; font-weight: bold;">Overview</a>
      <a href="./crm-spot.php" class="sidebar-sub-btn<?php if($currentPage == 'crm-spot.php') echo ' active'; ?>">Spot</a>
      <a href="./crm-margin.php" class="sidebar-sub-btn<?php if($currentPage == 'crm-margin.php') echo ' active'; ?>">Margin</a>
      <button id="tpw-toggle" class="sidebar-sub-btn" style="display: flex; align-items: center; justify-content: space-between;">
        <span>Third-Party Wallet</span>
        <span id="tpw-arrow" style="font-size: 0.9rem; transition: transform 0.2s; color: #a1a1aa;">&#9660;</span>
      </button>
      <div id="tpw-menu" style="padding-left: 36px; display: none;">
        <a href="./crm-TR.php" class="sidebar-sub2-btn">Binance TR</a>
        <a href="./crm-toko.php" class="sidebar-sub2-btn">Tokocrypto</a>
        <a href="./crm-TH.php" class="sidebar-sub2-btn">Binance TH</a>
      </div>
    </div>
  </div>
  <div style="padding: 0;">
    <button id="orders-toggle" class="sidebar-btn">
      <span style="font-size: 1.5rem; margin-right: 16px;">📄</span>
      <span style="font-size: 1.1rem;">Orders</span>
      <span id="orders-arrow" style="margin-left: auto; color: #fff; transition: transform 0.2s;">&#9660;</span>
    </button>
    <div id="orders-menu" style="background: #232328; display: none;">
      <a href="./crm-spot-order.php" class="sidebar-sub-btn<?php if($currentPage == 'crm-spot-order.php') echo ' active'; ?>">Spot Order</a>
      <a href="./crm-p2p-order.php" class="sidebar-sub-btn<?php if($currentPage == 'crm-p2p-order.php') echo ' active'; ?>">P2P Order</a>
      <!-- <a href="./crm-transaction-history.php" class="sidebar-sub-btn">Transaction History</a> -->
    </div>
  </div>
  <a href="./rewards-hub.php" class="sidebar-btn<?php if($currentPage == 'rewards-hub.php') echo ' active'; ?>">
    <span style="font-size: 1.5rem; margin-right: 16px;">🎁</span>
    <span style="font-size: 1.1rem;">Rewards Hub</span>
  </a>
  <a href="./referal.php" class="sidebar-btn<?php if($currentPage == 'referal.php') echo ' active'; ?>">
    <span style="font-size: 1.5rem; margin-right: 16px;">➕</span>
    <span style="font-size: 1.1rem;">Referral</span>
  </a>
  <div style="padding: 0;">
    <button id="account-toggle" class="sidebar-btn">
      <span style="font-size: 1.5rem; margin-right: 16px;">👤</span>
      <span style="font-size: 1.1rem;">Account</span>
      <span id="account-arrow" style="margin-left: auto; color: #fff; transition: transform 0.2s;">&#9660;</span>
    </button>
    <div id="account-menu" style="background: #232328; display: none;">
      <a href="./account-identification.php" class="sidebar-sub-btn<?php if($currentPage == 'account-identification.php') echo ' active'; ?>">Identification</a>
      <!-- <a href="./account-security.php" class="sidebar-sub-btn">Security</a> -->
      <a href="./account-payment.php" class="sidebar-sub-btn<?php if($currentPage == 'account-payment.php') echo ' active'; ?>">Payment</a>
      <!-- <a href="api-management.php" class="sidebar-sub-btn">API Management</a> -->
      <a href="./account-managment.php" class="sidebar-sub-btn<?php if($currentPage == 'account-managment.php') echo ' active'; ?>">Account Statement</a>
      <a href="./account-financial.php" class="sidebar-sub-btn<?php if($currentPage == 'account-financial.php') echo ' active'; ?>">Financial Reports</a>
    </div>
  </div>
  <a href="./account-subaccount.php" class="sidebar-btn<?php if($currentPage == 'account-subaccounts.php') echo ' active'; ?>" style="background: #18181b;">
    <span style="font-size: 1.5rem; margin-right: 16px;">👥</span>
    <span style="font-size: 1.1rem;">Sub Accounts</span>
  </a>
</div>

<script>
  // Helper to close all dropdowns
  function closeAllDropdowns(except) {
    const dropdowns = [
      {menu: assetsMenu, arrow: assetsArrow},
      {menu: ordersMenu, arrow: ordersArrow},
      {menu: accountMenu, arrow: accountArrow}
    ];
    dropdowns.forEach(d => {
      if (except && (d.menu === except.menu)) return;
      d.menu.style.display = 'none';
      d.arrow.style.transform = 'rotate(0deg)';
    });
  }

  // Function to check if a menu contains active items
  function hasActiveItems(menu) {
    return menu.querySelector('.active') !== null;
  }

  // Function to check if a submenu contains active items
  function hasActiveSubItems(menu) {
    return menu.querySelector('.sidebar-sub2-btn.active') !== null;
  }

  // Assets dropdown
  const assetsToggle = document.getElementById('assets-toggle');
  const assetsMenu = document.getElementById('assets-menu');
  const assetsArrow = document.getElementById('assets-arrow');
  assetsToggle.onclick = function() {
    if (assetsMenu.style.display === 'none') {
      closeAllDropdowns({menu: assetsMenu, arrow: assetsArrow});
      assetsMenu.style.display = 'block';
      assetsArrow.style.transform = 'rotate(180deg)';
    } else {
      assetsMenu.style.display = 'none';
      assetsArrow.style.transform = 'rotate(0deg)';
    }
  }

  // Third-Party Wallet dropdown
  const tpwToggle = document.getElementById('tpw-toggle');
  const tpwMenu = document.getElementById('tpw-menu');
  const tpwArrow = document.getElementById('tpw-arrow');
  tpwToggle.onclick = function(event) {
    event.stopPropagation(); // Prevents parent dropdown from toggling
    if (tpwMenu.style.display === 'none') {
      tpwMenu.style.display = 'block';
      tpwArrow.style.transform = 'rotate(180deg)';
    } else {
      tpwMenu.style.display = 'none';
      tpwArrow.style.transform = 'rotate(0deg)';
    }
  }

  // Orders dropdown
  const ordersToggle = document.getElementById('orders-toggle');
  const ordersMenu = document.getElementById('orders-menu');
  const ordersArrow = document.getElementById('orders-arrow');
  ordersToggle.onclick = function() {
    if (ordersMenu.style.display === 'none') {
      closeAllDropdowns({menu: ordersMenu, arrow: ordersArrow});
      ordersMenu.style.display = 'block';
      ordersArrow.style.transform = 'rotate(180deg)';
    } else {
      ordersMenu.style.display = 'none';
      ordersArrow.style.transform = 'rotate(0deg)';
    }
  }

  // Account dropdown
  const accountToggle = document.getElementById('account-toggle');
  const accountMenu = document.getElementById('account-menu');
  const accountArrow = document.getElementById('account-arrow');
  accountToggle.onclick = function() {
    if (accountMenu.style.display === 'none') {
      closeAllDropdowns({menu: accountMenu, arrow: accountArrow});
      accountMenu.style.display = 'block';
      accountArrow.style.transform = 'rotate(180deg)';
    } else {
      accountMenu.style.display = 'none';
      accountArrow.style.transform = 'rotate(0deg)';
    }
  }

  // On page load, check and open relevant dropdowns
  document.addEventListener('DOMContentLoaded', function() {
    // Check Assets menu
    if (hasActiveItems(assetsMenu)) {
      assetsMenu.style.display = 'block';
      assetsArrow.style.transform = 'rotate(180deg)';
      
      // Check Third-Party Wallet submenu
      if (hasActiveSubItems(tpwMenu)) {
        tpwMenu.style.display = 'block';
        tpwArrow.style.transform = 'rotate(180deg)';
      }
    }
    
    // Check Orders menu
    if (hasActiveItems(ordersMenu)) {
      ordersMenu.style.display = 'block';
      ordersArrow.style.transform = 'rotate(180deg)';
    }
    
    // Check Account menu
    if (hasActiveItems(accountMenu)) {
      accountMenu.style.display = 'block';
      accountArrow.style.transform = 'rotate(180deg)';
    }
  });

  // Mobile menu functionality
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  hamburgerBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
</script>
