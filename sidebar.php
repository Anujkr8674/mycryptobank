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

  /* Mobile Dashboard Bar */
  .mobile-dashboard-bar {
    display: none;
    align-items: center;
    background: #18181b;
    color: #fff;
    padding: 16px 24px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1001;
  }
  .sidebar-container{
    width: 250px;
  }

  @media (max-width: 768px) {
    .mobile-dashboard-bar {
      display: flex;
      margin-top: 100px;
    }
    .sidebar-container {
      position: fixed;
      left: 0;
      top: 56px; /* height of .mobile-dashboard-bar */
      transform: translateX(-100%);
      z-index: 1000;
      transition: transform 0.3s ease;
      height: calc(100vh - 56px);
    }
    .sidebar-container.active {
      transform: translateX(0);
      height: 100vh;
      background-color: black;
      width: 100%;
      margin-top: 100px;
    }
    .sidebar-container{
     
      height: 100vh;
      background-color: black;
      width: 100%;
      margin-top: 100px;
    }
  }
</style>

<?php
function getPageTitle($file) {
  $map = [
    'crm-dashboard.php' => 'Dashboard',
    'crm-overview.php' => 'Overview',
    'crm-spot.php' => 'Spot',
    'crm-margin.php' => 'Margin',
    'crm-TR.php' => 'Binance TR',
    'crm-toko.php' => 'Tokocrypto',
    'crm-TH.php' => 'Binance TH',
    'crm-spot-order.php' => 'Spot Order',
    'crm-p2p-order.php' => 'P2P Order',
    'rewards-hub.php' => 'Rewards Hub',
    'referal.php' => 'Referral',
    'account-identification.php' => 'Identification',
    'account-payment.php' => 'Payment',
    'account-managment.php' => 'Account Statement',
    'account-financial.php' => 'Financial Reports',
    'account-subaccount.php' => 'Sub Accounts',
    // Add more as needed
  ];
  return $map[$file] ?? 'Dashboard';
}
$currentPage = basename($_SERVER['PHP_SELF']);
$pageTitle = getPageTitle($currentPage);
?>

<!-- Mobile Dashboard Bar (sidebar ke bahar, upar) -->
<div class="mobile-dashboard-bar" id="mobileDashboardBar">
  <span style="font-size: 1.5rem; margin-right: 10px;"> </span>
  <span style="font-size: 1.1rem;"><?php echo htmlspecialchars($pageTitle); ?></span>
  <span id="mobileDashboardArrow" style="margin-left: auto; color: #fff; transition: transform 0.2s;">&#9660;</span>
</div>

<!-- Sidebar with NO inline style, only class and id -->
<div class="sidebar-container" id="sidebar">
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
      <a href="./crm-overview.php" class="sidebar-sub-btn<?php if($currentPage == 'crm-overview.php') echo ' active'; ?>" style="  font-weight: bold;">Overview</a>
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
      <a href="./account-payment.php" class="sidebar-sub-btn<?php if($currentPage == 'account-payment.php') echo ' active'; ?>">Payment</a>
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
  // Function to check and open dropdowns containing active page
  function openActiveDropdowns() {
    const currentPage = '<?php echo basename($_SERVER['PHP_SELF']); ?>';
    
    // Helper function to check if href contains current page
    function isCurrentPage(href) {
      // Get just the filename from the href
      const hrefFile = href.split('/').pop();
      // Get just the filename from current page
      const currentFile = currentPage.split('/').pop();
      
      // Exact match check
      return hrefFile === currentFile || 
             hrefFile === currentFile.replace('.php', '') ||
             currentFile === hrefFile.replace('.php', '');
    }

    // Check Assets dropdown
    const assetsSubmenus = document.querySelectorAll('#assets-menu .sidebar-sub-btn, #assets-menu .sidebar-sub2-btn');
    assetsSubmenus.forEach(menu => {
      const href = menu.getAttribute('href');
      if (href && isCurrentPage(href)) {
        document.getElementById('assets-menu').style.display = 'block';
        document.getElementById('assets-arrow').style.transform = 'rotate(180deg)';
      }
    });

    // Check TPW dropdown
    const tpwSubmenus = document.querySelectorAll('#tpw-menu .sidebar-sub2-btn');
    tpwSubmenus.forEach(menu => {
      const href = menu.getAttribute('href');
      if (href && isCurrentPage(href)) {
        document.getElementById('tpw-menu').style.display = 'block';
        document.getElementById('tpw-arrow').style.transform = 'rotate(180deg)';
        document.getElementById('assets-menu').style.display = 'block';
        document.getElementById('assets-arrow').style.transform = 'rotate(180deg)';
      }
    });

    // Check Orders dropdown
    const ordersSubmenus = document.querySelectorAll('#orders-menu .sidebar-sub-btn');
    ordersSubmenus.forEach(menu => {
      const href = menu.getAttribute('href');
      if (href && isCurrentPage(href)) {
        document.getElementById('orders-menu').style.display = 'block';
        document.getElementById('orders-arrow').style.transform = 'rotate(180deg)';
      }
    });

    // Check Account dropdown
    const accountSubmenus = document.querySelectorAll('#account-menu .sidebar-sub-btn');
    accountSubmenus.forEach(menu => {
      const href = menu.getAttribute('href');
      if (href && isCurrentPage(href)) {
        document.getElementById('account-menu').style.display = 'block';
        document.getElementById('account-arrow').style.transform = 'rotate(180deg)';
      }
    });
  }

  // Call the function when page loads
  document.addEventListener('DOMContentLoaded', openActiveDropdowns);

  // Mobile Dashboard Bar toggle for sidebar
  const mobileDashboardBar = document.getElementById("mobileDashboardBar");
  const sidebar = document.getElementById("sidebar");
  const mobileDashboardArrow = document.getElementById("mobileDashboardArrow");

  mobileDashboardBar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    // Arrow rotate
    if (sidebar.classList.contains("active")) {
      mobileDashboardArrow.style.transform = "rotate(180deg)";
    } else {
      mobileDashboardArrow.style.transform = "rotate(0deg)";
    }
  });

  // Optional: Jab window resize ho to sidebar band ho jaye
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("active");
      mobileDashboardArrow.style.transform = "rotate(0deg)";
    }
  });

  // Toggle Assets submenu
  const assetsToggle = document.getElementById("assets-toggle");
  const assetsMenu = document.getElementById("assets-menu");
  const assetsArrow = document.getElementById("assets-arrow");

  assetsToggle.addEventListener("click", () => {
    const isVisible = assetsMenu.style.display === "block";
    assetsMenu.style.display = isVisible ? "none" : "block";
    assetsArrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Toggle TPW submenu
  const tpwToggle = document.getElementById("tpw-toggle");
  const tpwMenu = document.getElementById("tpw-menu");
  const tpwArrow = document.getElementById("tpw-arrow");

  tpwToggle.addEventListener("click", () => {
    const isVisible = tpwMenu.style.display === "block";
    tpwMenu.style.display = isVisible ? "none" : "block";
    tpwArrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Toggle Orders submenu
  const ordersToggle = document.getElementById("orders-toggle");
  const ordersMenu = document.getElementById("orders-menu");
  const ordersArrow = document.getElementById("orders-arrow");

  ordersToggle.addEventListener("click", () => {
    const isVisible = ordersMenu.style.display === "block";
    ordersMenu.style.display = isVisible ? "none" : "block";
    ordersArrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Toggle Account submenu
  const accountToggle = document.getElementById("account-toggle");
  const accountMenu = document.getElementById("account-menu");
  const accountArrow = document.getElementById("account-arrow");

  accountToggle.addEventListener("click", () => {
    const isVisible = accountMenu.style.display === "block";
    accountMenu.style.display = isVisible ? "none" : "block";
    accountArrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  });
</script>

