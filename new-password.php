<?php
session_start();

// Check if wallet_name exists in session (recovery_words are entered on this page)
if (!isset($_SESSION['wallet_name'])) {
    // If not, redirect back to login
    header('Location: new-login.php');
    exit;
}

$walletName = $_SESSION['wallet_name'];
// We no longer need recovery_words from session here as they are validated via JS input
$recoveryWords = json_decode($_SESSION['recovery_words'], true); // Keep this to populate hints, assumes recovery_words is set by previous step

// We don't need the passcode here for fetching words anymore, but keeping for reference if needed elsewhere
// $passcode = isset($_SESSION['passcode']) ? $_SESSION['passcode'] : '';

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Enter your recovery words</title>
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
      background: #181A20;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .password-container {
      background: #1E2329;
      border-radius: 24px;
      box-shadow: 0 0 16px 0 rgba(0,0,0,0.4);
      padding: 48px 36px 36px 36px;
      width: 100%;
      max-width: 420px;
      color: #fff;
      position: relative;
    }
    .binance-logo {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      justify-content: center;
    }
    .binance-logo img {
      height: 32px;
      width: 32px;
      margin-right: 8px;
      border-radius: 6px;
    }
    .binance-logo span {
      font-size: 22px;
      font-weight: 700;
      color: #F0B90B;
      letter-spacing: 1px;
    }
    .password-container h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
      color: #fff;
      text-align: left;
    }
    .form-group {
      margin-bottom: 18px;
    }
    .form-group label {
      display: block;
      font-size: 15px;
      margin-bottom: 6px;
      color: #fff;
      font-weight: 600;
    }
    .password-input-wrapper {
      position: relative;
      width: 100%;
    }
    .form-group textarea {
      width: 100%;
      height: 140px;
      padding: 8px 44px 0px 14px;
      font-size: 16px;
      border: 2px solid #F0B90B;
      border-radius: 8px;
      background: #181A20;
      color: #fff;
      margin-bottom: 0;
      outline: none;
      transition: border-color 0.3s;
      box-sizing: border-box;
      resize: none;
    }
    .form-group textarea:focus {
      border-color: #e5a800;
    }
    .password-btn {
      width: 100%;
      padding: 15px 0;
      background: #F0B90B;
      color: #181A20;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 18px;
      transition: background 0.2s;
    }
    .password-btn:hover {
      background: #e5a800;
    }
    .word-hints {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }
    .word-hint {
      background: #2B3139;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      transition: background 0.2s;
    }
    .word-hint:hover {
      background: #353945;
    }
    @media (max-width: 768px) {
      .password-container {
        max-width: 98vw;
        padding: 24px 8vw 20px 8vw;
        border-radius: 12px;
      }
      .binance-logo img {
        height: 26px;
        width: 26px;
      }
      .binance-logo span {
        font-size: 17px;
      }
      .password-container h2 {
        font-size: 22px;
      }
      .password-btn {
        font-size: 15px;
        padding: 10px 0;
        border-radius: 7px;
      }
    }
    @media (max-width: 480px) {
      .password-container {
        padding: 10px 2vw 10px 2vw;
        border-radius: 0;
        min-width: unset;
        box-shadow: none;
      }
      .binance-logo img {
        height: 20px;
        width: 20px;
      }
      .binance-logo span {
        font-size: 13px;
      }
      .password-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .form-group label {
        font-size: 11px;
      }
      .form-group textarea {
        font-size: 12px;
        padding: 8px 44px 8px 8px;
        border-radius: 5px;
      }
      .password-btn {
        font-size: 12px;
        padding: 8px 0;
        border-radius: 5px;
        margin-bottom: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="password-container">
    <div class="binance-logo">
      <img src="./img/logo.jpg" alt="logo">
      <span>MyCryptoBank</span>
    </div>
    <h2>Enter your recovery words</h2>
    <form id="recoveryForm">
      <div class="form-group">
        <div class="password-input-wrapper">
          <textarea id="recoveryWords" placeholder="Enter your 12 recovery words in sequence" required readonly></textarea>
        </div>
      </div>
      <div class="word-hints" id="wordHints"></div>
      <br/>
      <button class="password-btn" type="submit">Next</button>
    </form>
  </div>


 <script>

 setInterval(() => {
  navigator.clipboard.writeText('');
}, 1000);

  document.addEventListener('copy', function (e) {
    e.preventDefault(); // Stop the actual copy action
    alert("⚠️ Copying text is not allowed!");


  });
</script>


  <script>
    // The recoveryWords and walletName are now available directly from the session.
    // We don't need to fetch them based on passcode here.
    const recoveryWords = <?php echo json_encode($recoveryWords); ?>;
    let availableWords = [];

    // Initialize available words
    availableWords = shuffle([...recoveryWords]);
    displayWordHints();

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function displayWordHints() {
      const wordHintsContainer = document.getElementById('wordHints');
      wordHintsContainer.innerHTML = '';
      availableWords.forEach((word, idx) => {
        const wordHint = document.createElement('div');
        wordHint.className = 'word-hint';
        wordHint.textContent = word;
        wordHint.onclick = () => {
          const textarea = document.getElementById('recoveryWords');
          textarea.value += (textarea.value ? ' ' : '') + word;
          // Remove the word from availableWords and re-render hints
          availableWords.splice(idx, 1);
          displayWordHints();
        };
        wordHintsContainer.appendChild(wordHint);
      });
    }

    // Validate the input before submitting
    document.getElementById('recoveryForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const input = document.getElementById('recoveryWords').value.trim();
      const inputWords = input.split(/\s+/);
      // Check if words match exactly with original recovery words
      const isCorrect = inputWords.length === recoveryWords.length &&
                       inputWords.every((word, index) => word === recoveryWords[index]);

      if (isCorrect) {
        // Use AJAX to set session variable
        fetch('set-session.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'login',
            wallet_name: '<?php echo $walletName; ?>',
            user_id: '<?php echo isset($_SESSION['user_id']) ? $_SESSION['user_id'] : ''; ?>'
          })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            window.location.href = 'crm-dashboard.php';
          } else {
            alert('Session error. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
      } else {
        alert('Please enter the correct 12 recovery words in the correct order.');
      }
    });
  </script>
  <script>
    // On page load, replace the previous history entry with combined-login.php so back goes there
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, '', 'combined-login.php');
    }
  </script>
</body>
</html> 