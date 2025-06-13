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
        <div id="binance-th-content" class="content-section">
            <div style="max-width: 520px; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 32px 32px; border: 1.5px solid #23262F;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Transfer to MyCryptoBank TH</div>
                <div style="color: #aaa; font-size: 1.05rem; margin-bottom: 28px;">Trade with Thai Baht. Deposit and withdraw instantly with direct bank transfer.</div>
                <div style="margin-bottom: 18px; position: relative;">
                    <div style="color: #aaa; font-size: 1.01rem; margin-bottom: 6px; font-weight: 500;">Coin</div>
                    <div id="binanceThCoinDropdownSelected" onclick="toggleBinanceThCoinDropdown()" style="display: flex; align-items: center; background: #23262F; border-radius: 10px; padding: 14px 18px; min-height: 36px; min-width: 100%; width: 52px; cursor: pointer; position: relative;">
                        <img id="binanceThSelectedCoinIcon" src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 36px; height: 36px; border-radius: 50%; margin-right: 14px;">
                        <span style="font-size: 1.18rem; font-weight: 700; color: #fff; margin-right: 8px;" id="binanceThSelectedCoinSymbol">1000CAT</span>
                        <span style="color: #aaa; font-size: 1.08rem;" id="binanceThSelectedCoinName">1000*Simons Cat</span>
                        <svg style="margin-left: auto; color: #aaa; width: 22px; height: 22px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    <div id="binanceThCoinDropdownList" style="display: none; position: absolute; top: 60px; left: 0; right: 0; background: #181A20; border-radius: 12px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); z-index: 10; padding: 0 0 8px 0; border: 1.5px solid #23262F;">
                        <div style="padding: 12px 18px 8px 18px;">
                            <input id="binanceThCoinSearchInput" type="text" placeholder="Search" style="width: 100%; background: #23262F; border: none; border-radius: 6px; color: #fff; padding: 8px 12px; font-size: 1.08rem; outline: none;">
                        </div>
                        <div id="binanceThCoinOptions" style="max-height: 320px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #35363b #181A20;">
                            <div class="coin-option" data-symbol="1000CAT" data-name="1000*Simons Cat" data-icon="https://i.ibb.co/6bQ7QpK/cat.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
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
                            <div class="coin-option" data-symbol="1000CHEEMS" data-name="1000*cheems.pet" data-icon="https://cryptologos.cc/logos/cheems-inu-cheems-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <img src="https://cryptologos.cc/logos/cheems-inu-cheems-logo.png" alt="1000CHEEMS" style="width: 32px; height: 32px; border-radius: 50%;">
                                    <div>
                                        <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000CHEEMS</div>
                                        <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*cheems.pet</div>
                                    </div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                                    <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                                    <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                                </div>
                            </div>
                            <div class="coin-option" data-symbol="1000SATS" data-name="1000*SATS (Ordinals)" data-icon="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
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
                            <div class="coin-option" data-symbol="1INCH" data-name="1inch" data-icon="https://cryptologos.cc/logos/1inch-1inch-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <img src="https://cryptologos.cc/logos/1inch-1inch-logo.png" alt="1INCH" style="width: 32px; height: 32px; border-radius: 50%;">
                                    <div>
                                        <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1INCH</div>
                                        <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1inch</div>
                                    </div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                                    <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                                    <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
                                </div>
                            </div>
                            <div class="coin-option" data-symbol="1MBABYDOGE" data-name="1M x BABYDOGE" data-icon="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
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
                            <div class="coin-option" data-symbol="AAVE" data-name="Aave" data-icon="https://cryptologos.cc/logos/aave-aave-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
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
                        </div>
                        <style>
                            #binanceThCoinOptions::-webkit-scrollbar {
                                width: 7px;
                            }
                            #binanceThCoinOptions::-webkit-scrollbar-thumb {
                                background: #35363b;
                                border-radius: 8px;
                            }
                            #binanceThCoinOptions::-webkit-scrollbar-track {
                                background: #181A20;
                            }
                        </style>
                        <script>
                            function toggleBinanceThCoinDropdown() {
                                var dropdown = document.getElementById('binanceThCoinDropdownList');
                                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                                document.getElementById('binanceThCoinSearchInput').value = '';
                                filterBinanceThCoinOptions();
                            }
                            function selectBinanceThCoin(el) {
                                var icon = el.getAttribute('data-icon');
                                var symbol = el.getAttribute('data-symbol');
                                var name = el.getAttribute('data-name');
                                document.getElementById('binanceThSelectedCoinIcon').src = icon;
                                document.getElementById('binanceThSelectedCoinSymbol').innerText = symbol;
                                document.getElementById('binanceThSelectedCoinName').innerText = name;
                                document.getElementById('binanceThCoinDropdownList').style.display = 'none';
                            }
                            function filterBinanceThCoinOptions() {
                                var input = document.getElementById('binanceThCoinSearchInput').value.toLowerCase();
                                var options = document.querySelectorAll('#binanceThCoinOptions .coin-option');
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
                                var dropdown = document.getElementById('binanceThCoinDropdownList');
                                var selected = document.getElementById('binanceThCoinDropdownSelected');
                                if(dropdown.style.display === 'block' && !selected.contains(e.target) && !dropdown.contains(e.target)) {
                                    dropdown.style.display = 'none';
                                }
                            });
                            document.getElementById('binanceThCoinSearchInput') && document.getElementById('binanceThCoinSearchInput').addEventListener('input', filterBinanceThCoinOptions);
                        </script>
                    </div>
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
                <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">24h Withdraw Limit: <span style="color: #fff;">0 USDT</span> / 0 USDT</div>
                <div style="display: flex; gap: 10px; margin-bottom: 28px;">
                    <button type="button" class="binance-th-percent-btn" data-percent="25" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">25%</button>
                    <button type="button" class="binance-th-percent-btn" data-percent="50" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">50%</button>
                    <button type="button" class="binance-th-percent-btn" data-percent="75" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">75%</button>
                    <button type="button" class="binance-th-percent-btn" data-percent="100" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">100%</button>
                </div>
                <div id="binanceThAmountError" style="color: #f0b90b; font-size: 1.01rem; font-weight: 600; margin-bottom: 12px; display: none;"></div>
                <button style="width: 100%; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 16px 0; font-weight: 700; font-size: 1.15rem; cursor: pointer;">Connect MyCryptoBank TH</button>
            </div>
        </div>
    </div>
</body>
</html>