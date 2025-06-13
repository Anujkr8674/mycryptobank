<?php include "login-stay.php"; ?>
    <?php
  
// Fetch wallet name and user ID from DB
require_once 'config.php';
$walletName = 'Wallet User';
$userId = '';
if (isset($_SESSION['passcode'])) {
    $stmt = $conn->prepare("SELECT wallet_name, user_id FROM wallet_data WHERE passcode = ? ORDER BY id DESC LIMIT 1");
    $stmt->bind_param("s", $_SESSION['passcode']);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        $walletName = htmlspecialchars($row['wallet_name']);
        $userId = htmlspecialchars($row['user_id']);
    }
    $stmt->close();
}?>
<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            min-height: 100vh;
            background: #0f0f0f;
            padding-top: 100px;
            font-family: 'Inter', Arial, sans-serif;
        }
        #main-content {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
        }
        .pay-toggle-btn {
            background: none;
            color: #888c98;
            border: none;
            border-radius: 0;
            font-weight: 700;
            font-size: 1.35rem;
            padding: 0 32px 12px 0;
            margin: 0;
            border-bottom: 3px solid transparent;
            transition: color 0.2s, border-bottom 0.2s;
            cursor: pointer;
        }
        .pay-toggle-btn.active {
            color: #fff;
            border-bottom: 3px solid #f0b90b;
        }
        /* Responsive styles */
        @media (max-width: 1200px) {
            #main-content > div[style*="max-width: 1200px;"] {
                max-width: 100% !important;
                padding: 0 20px;
            }
        }
        @media (max-width: 992px) {
            body {
                padding-top: 80px;
            }
            #main-content {
                padding: 15px;
            }
            h1[style*="font-size: 2.6rem;"] {
                font-size: 2rem !important;
            }
            .pay-toggle-btn {
                font-size: 1.15rem !important;
                padding-right: 20px !important;
            }
            div[style*="font-size: 1.18rem;"] {
                font-size: 1rem !important;
            }
            div[style*="font-size: 1.35rem;"] {
                font-size: 1.1rem !important;
            }
        }
        @media (max-width: 768px) {
            body {
                padding-top: 60px;
            }
            #main-content {
                padding: 10px;
                padding-top: 80px;
                margin-top: 50px;
            }
            #main-content > div[style*="max-width: 1200px;"] {
                padding: 0 8px;
            }
            h1[style*="font-size: 2.6rem;"] {
                font-size: 1.5rem !important;
            }
            .pay-toggle-btn {
                font-size: 1rem !important;
                padding-right: 10px !important;
                padding-bottom: 8px !important;
            }
            div[style*="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px;"] {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 18px !important;
            }
            div[style*="font-size: 1.18rem;"] {
                font-size: 0.98rem !important;
                max-width: 100% !important;
            }
            button[style*="padding: 14px 28px;"] {
                width: 100% !important;
                padding: 12px 0 !important;
                font-size: 1rem !important;
            }
            div[style*="min-height: 320px;"] img,
            div[style*="min-height: 220px;"] img {
                width: 60px !important;
                margin-bottom: 16px !important;
            }
            div[style*="font-size: 1.35rem;"] {
                font-size: 1rem !important;
            }
        }
        @media (max-width: 480px) {
            body {
                padding-top: 40px;
            }
            #main-content {
                padding: 25px;
                padding-top: 80px;
            }
            #main-content > div[style*="max-width: 1200px;"] {
                padding: 0 2px;
            }
            h1[style*="font-size: 2.6rem;"] {
                font-size: 1.1rem !important;
                margin-bottom: 10px !important;
            }
            .pay-toggle-btn {
                font-size: 0.95rem !important;
                padding-right: 6px !important;
                padding-bottom: 6px !important;
            }
            div[style*="font-size: 1.18rem;"] {
                font-size: 0.9rem !important;
            }
            div[style*="font-size: 1.35rem;"] {
                font-size: 0.95rem !important;
            }
            button[style*="padding: 14px 28px;"] {
                font-size: 0.95rem !important;
                padding: 10px 0 !important;
            }
            div[style*="min-height: 320px;"] img,
            div[style*="min-height: 220px;"] img {
                width: 40px !important;
                margin-bottom: 10px !important;
            }
        }
        /* Modal responsive styles */
        @media (max-width: 600px) {
            #identityModal > div[style*="max-width:410px;"] {
                max-width: 98vw !important;
                padding: 18px 6px 18px 6px !important;
            }
            #identityModal button[style*="padding:14px 0;"] {
                padding: 10px 0 !important;
                font-size: 1rem !important;
            }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="main-content">
        <div id="payment-content" class="content-section">
            <div style="max-width: 1200px; margin: 0 auto;">
              <h1 style="color: #fff; font-size: 2.6rem; font-weight: 700; margin-bottom: 18px;">Payment</h1><br/>
              <div style="display: flex; align-items: center; gap: 0; border-bottom: 1.5px solid #23262F; margin-bottom: 0; gap: 50px;">
                <button id="p2pToggleBtn" class="pay-toggle-btn" onclick="showPaymentTab('p2p')" style="border: none; background: none; color: #888c98; font-size: 1.35rem; font-weight: 700; padding: 0 32px 12px 0; margin: 0; border-bottom: 3px solid transparent;">P2P</button>
                <button id="cryptoToggleBtn" class="pay-toggle-btn" onclick="showPaymentTab('crypto')" style="border: none; background: none; color: #fff; font-size: 1.35rem; font-weight: 700; padding: 0 32px 12px 0; margin: 0; border-bottom: 3px solid #f0b90b;">Buy Crypto</button>
              </div>
              <div id="payment-p2p-section" style="margin-top: 32px; display: none;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px;">
                  <div style="color: #bfc2c7; font-size: 1.18rem; max-width: 70%;">
                    P2P payment methods: When you sell cryptocurrencies, the payment method added will be displayed to buyer as options to accept payment, please ensure that the account owner's name is consistent with your verified name on MyCryptoBank . You can add up to 20 payment methods.
                  </div>
                  <button id="addPaymentMethodBtn" style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 14px 28px; font-weight: 700; font-size: 1.18rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.5rem; font-weight: 700;">+</span> Add a payment method
                  </button>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 320px; margin-top: 48px;">
                  <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 88px; opacity: 0.35; margin-bottom: 24px;">
                  <div style="color: #bfc2c7; font-size: 1.35rem; text-align: center;">You have not added any payment methods</div>
                </div>
              </div>
              <div id="payment-crypto-section" style="margin-top: 32px;">
                <div style="color: #bfc2c7; font-size: 1.18rem; margin-bottom: 48px;">Manage the payment method of your credit and debit card on the buy crypto page</div>
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 220px; margin-top: 48px;">
                  <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 88px; opacity: 0.35; margin-bottom: 24px;">
                  <div style="color: #bfc2c7; font-size: 1.35rem; text-align: center;">You don't have any cards</div>
                </div>
              </div>
            </div>
            <!-- Modal Popup for Identity Verification -->
            <div id="identityModalOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.55); z-index:2000;"></div>
            <div id="identityModal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:2100; align-items:center; justify-content:center;">
              <div style="background:#181A20; border-radius:18px; max-width:410px; width:95vw; margin:auto; box-shadow:0 2px 24px 0 rgba(0,0,0,0.28); padding:38px 32px 28px 32px; position:relative; display:flex; flex-direction:column; align-items:center;">
                <button onclick="closeIdentityModal()" style="position:absolute; top:18px; right:18px; background:none; border:none; color:#bfc2c7; font-size:2rem; font-weight:700; cursor:pointer;">&times;</button>
                <div style="background:#f0b90b; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; margin-bottom:24px;">
                  <span style="color:#181A20; font-size:2.8rem; font-weight:700;">!</span>
                </div>
                <div style="color:#fff; font-size:1.35rem; font-weight:700; text-align:center; margin-bottom:18px;">You haven't completed identity verification</div>
                <div style="color:#bfc2c7; font-size:1.08rem; text-align:center; margin-bottom:32px;">For the security of your account and that of your counterparty, please complete the verification first<br><span style='color:#888c98;'>(It is recommended to complete your SMS authentication)</span></div>
                <div style="display:flex; gap:18px; width:100%; justify-content:center;">
                  <button onclick="closeIdentityModal()" style="flex:1; background:#23262F; color:#fff; border:none; border-radius:8px; padding:14px 0; font-weight:700; font-size:1.13rem; cursor:pointer;">Not now</button>
                  <button onclick="window.location.href='get-verify.php'" style="flex:1; background:#f0b90b; color:#181A20; border:none; border-radius:8px; padding:14px 0; font-weight:700; font-size:1.13rem; cursor:pointer;">Verify</button>
                </div>
              </div>
            </div>
        </div>
    </div>
    <script>
        function showPaymentTab(tab) {
            var p2pBtn = document.getElementById('p2pToggleBtn');
            var cryptoBtn = document.getElementById('cryptoToggleBtn');
            var p2pSection = document.getElementById('payment-p2p-section');
            var cryptoSection = document.getElementById('payment-crypto-section');
            if(tab === 'p2p') {
                p2pBtn.classList.add('active');
                cryptoBtn.classList.remove('active');
                p2pBtn.style.color = '#fff';
                p2pBtn.style.borderBottom = '3px solid #f0b90b';
                cryptoBtn.style.color = '#888c98';
                cryptoBtn.style.borderBottom = '3px solid transparent';
                p2pSection.style.display = '';
                cryptoSection.style.display = 'none';
            } else {
                cryptoBtn.classList.add('active');
                p2pBtn.classList.remove('active');
                cryptoBtn.style.color = '#fff';
                cryptoBtn.style.borderBottom = '3px solid #f0b90b';
                p2pBtn.style.color = '#888c98';
                p2pBtn.style.borderBottom = '3px solid transparent';
                p2pSection.style.display = 'none';
                cryptoSection.style.display = '';
            }
        }
        // Modal logic
        document.addEventListener('DOMContentLoaded', function() {
            // Set default tab to P2P
            showPaymentTab('p2p');
            var addBtn = document.getElementById('addPaymentMethodBtn');
            if(addBtn) {
                addBtn.onclick = function() {
                    document.getElementById('identityModal').style.display = 'flex';
                    document.getElementById('identityModalOverlay').style.display = 'block';
                };
            }
        });
        function closeIdentityModal() {
            document.getElementById('identityModal').style.display = 'none';
            document.getElementById('identityModalOverlay').style.display = 'none';
        }
    </script>
</body>
</html>