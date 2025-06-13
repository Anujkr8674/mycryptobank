<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Popular Products</title>
  <style>
    body {
      background: #181A20;
      color: #fff;
      font-family: 'Inter', Arial, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 16px;
      position: relative;
    }
    .header {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      font-weight: 700;
      margin-bottom: clamp(24px, 5vw, 32px);
      padding-right: 200px;
    }
    .products-table {
      width: 100%;
      border-collapse: collapse;
      background: transparent;
      overflow-x: auto;
      display: block;
    }
    .products-table thead, .products-table tbody {
      display: table;
      width: 100%;
    }
    .products-table th, .products-table td {
      padding: clamp(12px, 2vw, 20px) 0;
      text-align: left;
      font-size: clamp(0.95rem, 2vw, 1.25rem);
      border-bottom: 1px solid #23262F;
      white-space: nowrap;
    }
    .products-table th {
      color: #B7BDC6;
      font-size: clamp(0.9rem, 1.8vw, 1.1rem);
      font-weight: 600;
    }
    .coin-row {
      display: flex;
      align-items: center;
      gap: clamp(8px, 2vw, 16px);
    }
    .coin-icon {
      width: clamp(32px, 5vw, 40px);
      height: clamp(32px, 5vw, 40px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(1.1rem, 2.5vw, 1.7rem);
      flex-shrink: 0;
    }
    .usdc { background: #295CFF; }
    .usdt { background: #26A17B; }
    .fdusd { background: #000; }
    .bnb { background: #F3BA2F; }
    .btc { background: #F7931A; }
    .eth { background: #627EEA; }
    .apr, .duration {
      color: #16E2A1;
      font-weight: 600;
      font-size: clamp(1rem, 2vw, 1.2rem);
    }
    .duration {
      color: #fff;
      font-weight: 400;
      font-size: clamp(0.9rem, 1.8vw, 1.1rem);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .dropdown-arrow {
      border: solid #B7BDC6;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      margin-left: 8px;
      margin-bottom: 2px;
    }
    .yield-arena {
      color: #FFD800;
      font-weight: 700;
      font-size: clamp(1rem, 2vw, 1.3rem);
      display: flex;
      align-items: center;
      gap: 8px;
      position: absolute;
      right: clamp(8px, 3vw, 32px);
      top: clamp(12px, 3vw, 40px);
    }
    .yield-arena-icon {
      font-size: clamp(1rem, 1.8vw, 1.2rem);
    }
    @media (max-width: 768px) {
      .header {
        padding-right: 0;
        text-align: center;
      }
      .yield-arena {
        position: static;
        justify-content: center;
        margin-bottom: 24px;
      }
      .products-table {
        margin-top: 16px;
      }
    }
    @media (max-width: 480px) {
      .container {
        padding: 16px 8px;
      }
      .coin-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      .products-table th, .products-table td {
        padding: 8px 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Popular Products</div>
    <div class="yield-arena">
      <span class="yield-arena-icon">&#128247;</span>
      Yield Arena
      <span style="font-size:1.2rem;">&#8594;</span>
    </div>
    <table class="products-table">
      <thead>
        <tr>
          <th>Coins</th>
          <th>Est. APR</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon usdc">&#36;</span>
              USDC
            </div>
          </td>
          <td class="apr">10.57%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon usdt">&#36;</span>
              USDT
            </div>
          </td>
          <td class="apr">6.72%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon fdusd">F</span>
              FDUSD
            </div>
          </td>
          <td class="apr">10.71%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon bnb">&#9679;</span>
              BNB
            </div>
          </td>
          <td class="apr">0.19%~104.21%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon btc">&#8383;</span>
              BTC
            </div>
          </td>
          <td class="apr">0.27%~86.16%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon eth">&#926;</span>
              ETH
            </div>
          </td>
          <td class="apr">2.54%~139.04%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon" style="background: linear-gradient(135deg, #9945FF 0%, #14F195 100%);">&#11044;</span>
              SOL
            </div>
          </td>
          <td class="apr">1.59%~121.17%</td>
          <td class="duration">Flexible/Locked <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon" style="background: #1A9DF6;">&#128230;</span>
              EUR
            </div>
          </td>
          <td class="apr">8.41% <span style='color:#B7BDC6;font-size:0.95rem;'>Max</span></td>
          <td class="duration">Flexible <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon" style="background: #2D2DFF;">&#127482;&#127480;</span>
              STRK
            </div>
          </td>
          <td class="apr">0.35%</td>
          <td class="duration">Flexible <span class="dropdown-arrow"></span></td>
        </tr>
        <tr>
          <td>
            <div class="coin-row">
              <span class="coin-icon" style="background: #B6FF00; color: #222;">&#11044;</span>
              REZ
            </div>
          </td>
          <td class="apr">30.36%</td>
          <td class="duration">Flexible <span class="dropdown-arrow"></span></td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
