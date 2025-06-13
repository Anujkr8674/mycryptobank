<?php
// At the top of the file, check for $currentTab variable
if (!isset($currentTab)) { $currentTab = 'p2p'; }
?>
<div class="p2p-topbar">
  <div class="p2p-topbar-left">
    <div class="toggle-switch-3">
      <a href="p2pexpress.php">
  <button id="toggleExpress" class="toggle3-btn <?php if($currentTab=='express') echo 'active'; ?>">Express</button>
  </a>
  <a href="p2222p.php">
  <button id="toggleP2P" class="toggle3-btn <?php if($currentTab=='p2p') echo 'active'; ?>">P2P</button>
  </a>
  <a href="p2pblock.php">
  <button id="toggleBlock" class="toggle3-btn <?php if($currentTab=='block') echo 'active'; ?>">Block</button>
  </a>
  <div class="toggle3-underline"></div>
</div>
  </div>
  <div id="window" class="p2p-topbar-right">
    <!-- P2P Help Center Dropdown -->
    <div class="p2p-menu-item" tabindex="0" id="helpCenterMenu">
      <i class="fa-solid fa-ticket" ></i>
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

  <!-- <div id="mob" class="icon-mobile">
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </div> -->


  <!-- Mobile Toggle Icon -->
<div id="mob1-menu-toggle" class="mob1-icon-mobile">
  <i class="fa-solid fa-ellipsis-vertical"></i>
</div>

<!-- Mobile Menu -->
<ul id="mob1-mobileMenu" class="mob1-mobile-menu">
<li><i class="fas fa-box"></i><span class="mob1-item-text"> Orders</span></li>
<li><i class="fas fa-comments"></i><span class="mob1-item-text"> Chat</span></li>
<li><i class="fas fa-user-friends"></i><span class="mob1-item-text"> User Center</span></li>
<li><i class="fas fa-credit-card"></i><span class="mob1-item-text"> Payment Methods</span></li>
<li><i class="fas fa-plus"></i><span class="mob1-item-text"> Post new Ad</span></li>
<li><i class="fas fa-ad"></i><span class="mob1-item-text"> My ads</span></li>


  <!-- Dropdown Toggle -->
  <li id="mob1-help-toggle" class="mob1-dropdown-toggle">
    <i class="fas fa-circle-question"></i> P2P Help Center
    <i class="fas fa-chevron-down mob1-arrow-icon"></i>
  </li>

  <!-- Dropdown Items -->
  <ul id="mob1-help-submenu" class="mob1-submenu">
  <li><i class="fas fa-sync-alt"></i><span class="mob1-item-text"> How to Buy/Sell</span></li>
<li><i class="fas fa-file-alt"></i><span class="mob1-item-text"> Placing an Order</span></li>
<li><i class="fas fa-play-circle"></i><span class="mob1-item-text"> Video tutorial</span></li>

  </ul>
</ul>



</div>
<script>
function updateUnderline() {
  const activeBtn = document.querySelector('.toggle3-btn.active');
  const underline = document.querySelector('.toggle3-underline');
  if (activeBtn && underline) {
    underline.style.width = activeBtn.offsetWidth + 'px';
    underline.style.left = activeBtn.offsetLeft + 'px';
  }
}
window.addEventListener('resize', updateUnderline);
window.addEventListener('DOMContentLoaded', updateUnderline);

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