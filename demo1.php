<?php include "header.php";?>
<style>
/* Consolidated styles for side-by-side layout and content sections */
.side-by-side-container {
    display: grid;
    grid-template-columns: 300px 1fr; /* Adjust sidebar width as needed */
    gap: 20px; /* Space between sections */
    padding: 20px 5%; /* Add some padding */
    box-sizing: border-box; /* Include padding in the element's total width */
}

/* Styles for the rankings section (sidebar) */
#div11 {
    display: block; /* Ensure it behaves as a grid item */
    /* Add any other necessary styles for the rankings section here */
}

/* Styles for the VPS section (main content) */
#dr {
    /* Add any necessary styles for the VPS section here */
}

/* Existing pagination styles */
.pagination {
    margin-top: 20px;
    text-align: center;
}
.pagination a {
    padding: 8px 12px;
    margin: 0 3px;
    background: #eee;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
}
.pagination a.active {
    background: #007bff;
    color: #fff;
    font-weight: bold;
}
.pagination a:hover {
    background: #0056b3;
    color: white;
}

/* Existing VPS section styles */
.vps-section {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 20px;
    gap: 15px;
    background: #f9f9f9;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.vps-section::-webkit-scrollbar {
    display: none;
}

.vps-card {
    flex: 0 0 auto;
    width: 150px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    padding: 16px;
    text-align: left;
    position: relative;
    font-family: Arial, sans-serif;
}

.vps-tag {
    position: absolute;
    top: 10px;
    left: 40px;margin-right:30px;
    background: #d9b96e;
    color: #fff;
    font-size: 11px;
    padding: 3px 8px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    font-weight: bold;
}

.vps-star {
    position: absolute;
    top: -18px;
    right: 10px;
    width: 27px;
    color: #007bff;
    font-size: 40;
}

.vps-title {
    font-weight: bold;
    font-size: 15px;
    margin: 40px 0 6px;
}

.vps-specs {
    color: #555;
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 12px;
}

.btn-vps {
    background-color: #2e6be6;
    color: white;
    text-align: center;
    padding: 8px 0;
    border-radius: 6px;
    text-decoration: none;
    font-size: 13px;
    display: block;
    transition: background 0.2s;
}

.btn-vps:hover {
    background-color: #1a4fbf;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
    .side-by-side-container {
        grid-template-columns: 1fr; /* Stack columns on smaller screens */
        gap: 10px; /* Adjust gap for stacked view */
        padding: 10px; /* Adjust padding */
    }

    #div11, #dr {
        width: 100%; /* Ensure sections take full width when stacked */
    }

    /* Ensure broker list items take full width when stacked */
    #div11 .rankings-lists .broker-item {
        width: 100%;
        box-sizing: border-box; /* Include padding and border in the element's total width */
    }
}

/* Existing media query for vps-card */
@media (max-width: 480px) {
    .vps-card {
        width: 130px;
        padding: 12px;
    }

    .vps-title {
        font-size: 14px;
    }

    .btn-vps {
        font-size: 12px;
        padding: 6px 0;
    }
}

</style>

<div class="side-by-side-container">
  <!-- Rankings Content -->
  <div id="div11" class="content-sections active">
    <div class="rankings-lists">
      <?php
include "config.php";

$image_base_url = "https://eimgjys.fxeyee.com/logo/";

// Pagination settings
$limit = 10;
$page = isset($_GET['page']) && is_numeric($_GET['page']) ? (int) $_GET['page'] : 1;
$offset = ($page - 1) * $limit;

// Count total brokers
$total_sql = "SELECT COUNT(*) FROM brokers";
$total_stmt = $dbh->prepare($total_sql);
$total_stmt->execute();
$total_brokers = $total_stmt->fetchColumn();
$total_pages = ceil($total_brokers / $limit);

// Fetch brokers for current page
$sql = "SELECT * FROM brokers ORDER BY score DESC LIMIT :limit OFFSET :offset";
$stmt = $dbh->prepare($sql);
$stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$brokers = $stmt->fetchAll(PDO::FETCH_ASSOC);

$rank = $offset + 1;

if ($brokers && count($brokers) > 0) {
    echo '<div class="brokers-container">';

    foreach ($brokers as $row) {
        $logo_url = $image_base_url . $row['logo'];
        $asset = $row['commodity'] ? 'Oil' : ($row['currency'] ? 'Currency' : 'Asset');
        $years_in_business = !empty($row['experience_years']) ? $row['experience_years'] . ' years' : 'N/A';
        $broker_page = "avatrade.php?name=" . urlencode(strtolower($row['name']));

        echo '
        <div class="broker-item">
            <a href="' . $broker_page . '" class="broker-item-link">
                <div class="broker-contents">
                    <div class="broker-logo-wrapper">
                        <span class="regulated-badge">' . htmlspecialchars($row['broker_type']) . '</span>
                        <img alt="' . htmlspecialchars($row['name']) . '" src="' . htmlspecialchars($logo_url) . '" loading="lazy" class="com-img" style="height:100%;">
                    </div>
                    <div class="broker-info">
                        <h2 class="broker-name">' . htmlspecialchars($row['name']) . '</h2>
                        <div class="score">' . number_format($row['score'], 2) . '</div>
                        <span class="broker-years">' . $asset . ' • ' . $years_in_business . '</span>
                    </div>
                    <span class="rank-number">' . ($row['rank'] ?? $rank++) . '</span>
                </div>
            </a>
        </div>';
    }

    echo '</div>'; // End .brokers-container

    // Pagination links
    if ($total_pages > 1) {
        echo '<div class="pagination">';

        if ($page > 1) {
            echo '<a href="?page=' . ($page - 1) . '">&laquo; Prev</a>';
        }

        for ($i = 1; $i <= $total_pages; $i++) {
            $active = ($i == $page) ? 'active' : '';
            echo '<a class="' . $active . '" href="?page=' . $i . '">' . $i . '</a>';
        }

        if ($page < $total_pages) {
            echo '<a href="?page=' . ($page + 1) . '">Next &raquo;</a>';
        }

        echo '</div>';
    }

} else {
    echo "<p>No brokers found. Please check your database.</p>";
}
?>
    </div> <!-- End .rankings-lists -->
  </div> <!-- End #div11 -->

  <!-- Main Content -->
  <div id="dr">
    <div class="main-content" >
      <div class="vps-section">
        <?php include "config.php";?>
        <?php
$stmt = $dbh->prepare("SELECT * FROM brokers LIMIT 5");
$stmt->execute();
$brokers = $stmt->fetchAll(PDO::FETCH_ASSOC);
$index = 0;

foreach ($brokers as $broker):
    // Determine button label and class
    if ($index === 0) {
        $btnText = 'Open for free';
        $btnClass = 'btn-vps';
    } else {
        $btnText = $index % 2 === 0 ? 'VPS Ultra' : 'VPS Pro';
        $btnClass = 'btn-vps no-bg';
    }
?>
          <div class="vps-card">
            <div class="vps-tag"><?= $index === 0 ? 'EA VPS' : 'Free' ?></div>
            <div class="vps-star">★</div>
            <div class="vps-title"><?= htmlspecialchars($broker['name']) ?> VPS</div>
            <div class="vps-specs">
              <?= htmlspecialchars($broker['software']) ?>*CPU /
              <?= htmlspecialchars($broker['license']) ?>*RAM /
              <?= htmlspecialchars($broker['average_transaction']) ?>*HDD /
              1M*ADSL
            </div>
            <a href="avatrade.php?name=<?= urlencode(strtolower($broker['name'])) ?>" class="<?= $btnClass ?>" target="_blank">
              <?= $btnText ?>
            </a>
          </div>
          <?php
$index++;
endforeach;
?>
      </div> <!-- End .vps-section -->
    </div> <!-- End .main-content -->
  </div> <!-- End #dr -->
</div> <!-- End .side-by-side-container -->

<!-- Remaining content below the side-by-side layout -->
      <!-- Navigation -->
    <?php
include "config.php";
$category = $_GET['category'] ?? 'Latest';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Articles</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      background: #f4f6f8;
      margin: 0;
      padding: 30px 5%;
      color: #2c3e50;
    }
    h2 { margin: 0; }

    .nav-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 30px;
    }

    .nav-tabs a {
      padding: 10px 20px;
      background-color: white;
      border: 1px solid #d0d7de;
      border-radius: 30px;
      text-decoration: none;
      color: #34495e;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .nav-tabs a:hover {
      background-color: #1a73e8;
      color: white;
    }

    .nav-tabs a.active {
      background-color: #1a73e8;
      color: white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
#articleList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  align-items: start;
}
   
    .home-list {
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .home-list:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 25px rgba(26, 115, 232, 0.15);
    }

    .r-img {
      width: 100%;
      height: 180px;
      background-color: #ecf0f1;
      overflow: hidden;
    }

    .r-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }

    .home-list:hover .r-img img {
      transform: scale(1.05);
    }

    .home-list h2 {
      font-size: 1.15rem;
      padding: 15px 20px 5px;
      color: #1a1a1a;
    }

    .home-list p {
      font-size: 0.95rem;
      color: #555;
      padding: 0 20px 15px;
      flex-grow: 1;
    }

    .home-list small {
      padding: 15px 20px;
      font-size: 0.85rem;
      color: #7f8c8d;
      background-color: #f9f9f9;
      border-top: 1px solid #eee;
    }

    .home-list small strong {
      color: #1a73e8;
    }
@media (max-width: 768px) {
  body {
    padding: 20px 10px;
  }

  .home-list h2 {
    font-size: 1rem;
  }

  .home-list p {
    font-size: 0.9rem;
  }

  .r-img {
    height: 130px; /* Decreased from 180px */
  }
}

    @media (max-width: 480px) {
      body { padding: 20px 10px; }
      .home-list h2 { font-size: 1rem; }
      .home-list p { font-size: 0.9rem; }
    }
  </style>
</head>
<body>

<nav class="nav-tabs">
  <?php
  $categories = ['Latest', 'Original', 'Industry', 'Broker', 'Exposure', 'WikiFX Survey'];
  foreach ($categories as $cat) {
    $active = $category === $cat ? 'active' : '';
    echo "<a href=\"#\" data-category=\"" . htmlspecialchars($cat) . "\" class=\"$active\">$cat</a>";
  }
  ?>
</nav>

<div id="articleList">
  <!-- Content will be loaded dynamically -->
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const loadArticles = (category) => {
    fetch('fetch_articles.php?category=' + encodeURIComponent(category))
      .then(response => response.text())
      .then(html => {
        document.getElementById('articleList').innerHTML = html;
      })
      .catch(err => console.error("Error loading articles:", err));
  };

  // Initially load default category
  const defaultActive = document.querySelector('.nav-tabs a.active');
  if (defaultActive) {
    loadArticles(defaultActive.getAttribute('data-category'));
  }

  document.querySelectorAll('.nav-tabs a').forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class and set new one
      document.querySelectorAll('.nav-tabs a').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-category');
      loadArticles(category);
    });
  });
});
</script>

</body>
</html>


      <!-- News Section -->

      <!-- Gold Rush Article -->


      <!-- News Section -->
     <br>

<!-- Closing divs that might be misplaced - review and adjust if necessary -->
</div>
    </div>
    

</code_block_to_apply_changes_from>