<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Binance Header Clone</title>
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
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: background-color 0.3s, border-color 0.3s;
    }
    .header1-logo {
      display: flex;
      align-items: center;
    }
    .header1-logo img {
      height: 28px;
      margin-right: 10px;
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
      .header1-nav .header1-header-actions {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
      }
      .header1-nav .header1-auth-buttons {
        flex-direction: column;
        width: 100%;
        gap: 10px;
        margin-bottom: 20px;
      }
      .header1-nav .header1-auth-buttons button {
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
  </style>
</head>
<body>
  <header class="header1-header">
  <div class="header1-logo">
  <a href="./en-IN.php"> <!-- ya "/" agar aap root URL dena chahte ho -->
    <img style="height: 70px;" src="./img/bin.png" alt="Binance Logo" id="header1-logo-img" />
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
              <!-- <a href="#" class="header1-dropdown-item">Trading Bots <span>Trade smarter with our various automated strategies</span></a> -->
              <a href="./copy-trade.php" class="header1-dropdown-item">Copy Trading <span>Follow the most popular traders</span></a>
              <!-- <a href="#" class="header1-dropdown-item">APIs <span>Unlimited opportunities with one key</span></a> -->
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
              <!-- <a href="#" class="header1-dropdown-item">Square <span>Stay informed with everything crypto</span></a> -->
              <!-- <a href="#" class="header1-dropdown-item">Academy (Learn & Earn) <span>Earn crypto by learning about blockchain</span></a> -->
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
              <!-- <a href="#" class="header1-dropdown-item">Launchpool <span>Discover and gain access to new token launches</span></a>
              <a href="#" class="header1-dropdown-item">Megadrop <span>Lock your BNB and complete Web3 quests for boosted airdrop rewards</span></a>
              <a href="#" class="header1-dropdown-item">Mining Pool <span>Mine more rewards by connecting to the pool</span></a>
              <a href="#" class="header1-dropdown-item">NFT <span>Explore NFTs from creators worldwide</span></a> -->
            </div>
            <div class="header1-dropdown-column">
              <h4>Services</h4>
              <a href="./pay.php" class="header1-dropdown-item">Pay <span>Send, receive and spend crypto</span></a>
              <a href="#" class="header1-dropdown-item">Fan Token <span>Discover an all-new fandom and unlock unlimited fan experiences</span></a>
              <a href="./wallet.php" class="header1-dropdown-item">Binance Wallet <span>Access and Navigate Web3 Effortlessly</span></a>
              <!-- <a href="#" class="header1-dropdown-item">BNB Chain <span>The most popular blockchain to build your own dApp</span></a>
              <a href="#" class="header1-dropdown-item">Charity <span>Blockchain empowers charity to be more transparent, efficient, and traceable</span></a>
              <a href="#" class="header1-dropdown-item">Travel Rule <span>Enhance transparency and combat financial crimes such as money laundering and terrorism financing</span></a> -->
            </div>
          </div>
        </div>

        <div id="mob" class="header1-dropdown">
          <button>Notification &#x25BE;</button>
          <div class="header1-dropdown-content header1-futures-dropdown">
            <div class="header1-dropdown-column" style="width: 100%">
              <!-- <h4>Square Features</h4> -->
              <a href="./message.php" class="header1-dropdown-item">Announcements <span>Binance will lunach USD</span></a>
              <a href="./Campaigon.php" class="header1-dropdown-item">Campaigon <span>No News to report</span></a>
              <a href="./assistant.php" class="header1-dropdown-item">Account Assistant <span>Login Attempted from new IP</span></a>
              <a href="./marketing.php" class="header1-dropdown-item">Marketing & Transactional <span>Start your trading Journey in Binanace</span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="header1-header-actions">
        <div class="header1-icon-group">
          <div class="header1-dropdown">
            <button class="header1-icon-btn">🔔</button>
            <div class="header1-dropdown-content">
              <div class="header1-dropdown-column" style="width: 100%">
                <h4>Notifications</h4>
                <a href="./message.php" class="header1-dropdown-item">Announcements <span>Binance will lunach USD</span></a>
              <a href="./Campaigon.php" class="header1-dropdown-item">Campaigon <span>No News to report</span></a>
              <a href="./assistant.php" class="header1-dropdown-item">Account Assistant <span>Login Attempted from new IP</span></a>
              <a href="./marketing.php" class="header1-dropdown-item">Marketing & Transactional <span>Start your trading Journey in Binanace</span></a>
              </div>
            </div>
          </div>
          
          <button class="header1-icon-btn header1-refresh-btn" title="Refresh page">🔄</button>
          <button class="header1-icon-btn">🌐</button>
          <!-- <button class="header1-icon-btn header1-theme-toggle">🌙</button> -->
        </div>
        <div class="header1-auth-buttons">
          <button class="header1-login-btn">Log In</button>
          <button class="header1-signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>

    <div class="header1-hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="header1-overlay"></div>
  </header>
  
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