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
        }
        #main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }
        @media (max-width: 768px) {
          #main-content {
            margin-top: 100px;
          }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="main-content">
        <div id="binance-tr-content" class="content-section">
            <div style="max-width: 520px; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 32px 32px; border: 1.5px solid #23262F;">
              <div style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Transfer to MyCryptoBank TR</div>
              <div style="color: #aaa; font-size: 1.05rem; margin-bottom: 28px;">Trade with Turkish Lira. Deposit and withdraw instantly with direct bank transfer.</div>
              <div style="margin-bottom: 18px; position: relative;">
                <div style="color: #aaa; font-size: 1.01rem; margin-bottom: 6px; font-weight: 500;">Coin</div>
                <div id="coinDropdownSelected" onclick="toggleCoinDropdown()" style="display: flex; align-items: center; background: #23262F; border-radius: 10px; padding: 14px 18px; cursor: pointer; position: relative;">
                  <img id="selectedCoinIcon" src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 36px; height: 36px; border-radius: 50%; margin-right: 14px;">
                  <span style="font-size: 1.18rem; font-weight: 700; color: #fff; margin-right: 8px;" id="selectedCoinSymbol">1000CAT</span>
                  <span style="color: #aaa; font-size: 1.08rem;" id="selectedCoinName">1000*Simons Cat</span>
                  <svg style="margin-left: auto; color: #aaa; width: 22px; height: 22px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                </div>
                <div id="coinDropdownList" style="display: none; position: absolute; top: 60px; left: 0; right: 0; background: #181A20; border-radius: 12px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); z-index: 10; padding: 0 0 8px 0; border: 1.5px solid #23262F;">
                  <div style="padding: 12px 18px 8px 18px;">
                    <input id="coinSearchInput" type="text" placeholder="Search" style="width: 100%; background: #23262F; border: none; border-radius: 6px; color: #fff; padding: 8px 12px; font-size: 1.08rem; outline: none;">
                  </div>
                  <div id="coinOptions" style="max-height: 320px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #35363b #181A20;">
                    <div class="coin-option" data-symbol="1000CAT" data-name="1000*Simons Cat" data-icon="https://i.ibb.co/6bQ7QpK/cat.png" onclick="selectCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000CAT</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*Simons Cat</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="1000SATS" data-name="1000*SATS (Ordinals)" data-icon="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" onclick="selectCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" alt="1000SATS" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000SATS</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*SATS (Ordinals)</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="1MBABYDOGE" data-name="1M x BABYDOGE" data-icon="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" onclick="selectCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" alt="1MBABYDOGE" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1MBABYDOGE</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1M x BABYDOGE</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="AAVE" data-name="Aave" data-icon="https://cryptologos.cc/logos/aave-aave-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="AAVE" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">AAVE</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Aave</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="ACA" data-name="Acala Token" data-icon="https://cryptologos.cc/logos/acala-aca-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/acala-aca-logo.png" alt="ACA" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACA</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Acala Token</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="ACE" data-name="Fusionist" data-icon="https://cryptologos.cc/logos/fusionist-ace-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/fusionist-ace-logo.png" alt="ACE" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACE</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Fusionist</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="ACH" data-name="Alchemy Pay" data-icon="https://cryptologos.cc/logos/alchemy-pay-ach-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/alchemy-pay-ach-logo.png" alt="ACH" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACH</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Alchemy Pay</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="ACM" data-name="AC Milan Fan Token" data-icon="https://cryptologos.cc/logos/ac-milan-fan-token-acm-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/ac-milan-fan-token-acm-logo.png" alt="ACM" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACM</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">AC Milan Fan Token</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                    <div class="coin-option" data-symbol="ACT" data-name="Act I : The AI Prophecy" data-icon="https://cryptologos.cc/logos/act-1-the-ai-prophecy-act-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://cryptologos.cc/logos/act-1-the-ai-prophecy-act-logo.png" alt="ACT" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                          <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACT</div>
                          <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Act I : The AI Prophecy</div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                        <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                        <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <style>
                  #coinOptions::-webkit-scrollbar {
                    width: 7px;
                  }
                  #coinOptions::-webkit-scrollbar-thumb {
                    background: #35363b;
                    border-radius: 8px;
                  }
                  #coinOptions::-webkit-scrollbar-track {
                    background: #181A20;
                  }
                </style>
              </div>
              <div style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                <div style="color: #aaa; font-size: 1.01rem; font-weight: 500;">Amount</div>
                <div style="color: #fff; font-size: 1.01rem; font-weight: 500;">Available: <span style="color: #aaa;">0 <span id='selectedCoinSymbol2'>1000CAT</span></span></div>
              </div>
              <div style="display: flex; align-items: center; background: #23262F; border-radius: 8px; padding: 10px 16px; margin-bottom: 6px;">
                <input type="number" value="0" min="0" style="background: transparent; border: none; color: #fff; font-size: 1.2rem; width: 100%; outline: none; font-weight: 600;" />
                <span style="color: #fff; font-size: 1.1rem; font-weight: 600; margin-left: 8px;" id='selectedCoinSymbol3'>1000CAT</span>
                <span style="color: #f0b90b; font-weight: 700; margin-left: 12px; cursor: pointer;">MAX</span>
              </div>
              <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">24h Withdraw Limit: <span style="color: #fff;">0 USDT</span> / 30000 USDT</div>
              <div style="display: flex; gap: 10px; margin-bottom: 28px;">
                <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">25%</button>
                <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">50%</button>
                <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">75%</button>
                <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">100%</button>
              </div>
              <button style="width: 100%; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 16px 0; font-weight: 700; font-size: 1.15rem; cursor: pointer;">Connect MyCryptoBank TR</button>
            </div>
            <script>
              function toggleCoinDropdown() {
                var dropdown = document.getElementById('coinDropdownList');
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                document.getElementById('coinSearchInput').value = '';
                filterCoinOptions();
              }
              function selectCoin(el) {
                var symbol = el.getAttribute('data-symbol');
                var name = el.getAttribute('data-name');
                var icon = el.getAttribute('data-icon');
                document.getElementById('selectedCoinSymbol').innerText = symbol;
                document.getElementById('selectedCoinName').innerText = name;
                document.getElementById('selectedCoinIcon').src = icon;
                document.getElementById('selectedCoinSymbol2').innerText = symbol;
                document.getElementById('selectedCoinSymbol3').innerText = symbol;
                document.getElementById('coinDropdownList').style.display = 'none';
              }
              function filterCoinOptions() {
                var input = document.getElementById('coinSearchInput').value.toLowerCase();
                var options = document.querySelectorAll('#coinOptions .coin-option');
                options.forEach(function(opt) {
                  var symbol = opt.getAttribute('data-symbol').toLowerCase();
                  var name = opt.getAttribute('data-name').toLowerCase();
                  if(symbol.includes(input) || name.includes(input)) {
                    opt.style.display = 'flex';
                  } else {
                    opt.style.display = 'none';
                  }
                });
              }
              document.addEventListener('click', function(e) {
                var dropdown = document.getElementById('coinDropdownList');
                var selected = document.getElementById('coinDropdownSelected');
                if(dropdown.style.display === 'block' && !selected.contains(e.target) && !dropdown.contains(e.target)) {
                  dropdown.style.display = 'none';
                }
              });
              document.getElementById('coinSearchInput') && document.getElementById('coinSearchInput').addEventListener('input', filterCoinOptions);
            </script>
        </div>
    </div>
</body>
</html>