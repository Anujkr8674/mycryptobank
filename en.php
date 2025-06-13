<!-- Mobile Section Start -->
<div class="mobile-section" style="background-color: #0B0E11; padding: 40px 20px; color: white; text-align: center; font-family: sans-serif;">
  
  <h2 style="font-size: 32px; font-weight: bold; margin-bottom: 30px;">Trade on the go. Anywhere, anytime.</h2>
  
  <div class="mobile-content" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 40px;">
    
    <!-- Phone Mockup Images -->
    <div class="mobile-mockup" id="appPreview" style="flex: 1 1 300px; max-width: 400px;">
      <img src="/mnt/data/1de5e168-f117-4af5-be42-3f6b3de8af91.png" alt="Lite Version" class="preview-image" data-version="lite" style="width: 100%; display: block;">
      <img src="./img/pro.svg" alt="Pro Version" class="preview-image" data-version="pro" style="width: 100%; display: none;">
      <img src="./img/window.png" alt="Windows Version" class="preview-image" data-version="windows" style="width: 100%; display: none;">
    </div>

    <!-- QR and Platform Details -->
    <div class="download-section" style="flex: 1 1 300px; max-width: 400px; text-align: center;">
      
      <div class="qr-section" style="margin-bottom: 30px;">
        <div class="qr-code" style="margin: 0 auto 10px; width: 150px; height: 150px;">
          <!-- QR SVG -->
          <svg width="150" height="150" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="180" fill="white"/>
            <path d="M40 40h20v20H40zM70 40h20v20H70zM100 40h20v20h-20zM40 70h20v20H40zM100 70h20v20h-20zM40 100h20v20H40zM70 100h20v20H70zM100 100h20v20h-20z" fill="black"/>
          </svg>
        </div>
        <p style="color: #808A9D; font-size: 14px;">Scan to Download App</p>
        <h3 style="font-size: 18px; font-weight: 600; margin-top: 5px;">iOS and Android</h3>
      </div>

      <div class="platform-list" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
        <!-- Platform Icons -->
        <div class="platform-item" style="display: flex; flex-direction: column; align-items: center;">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png" alt="MacOS" style="width: 30px; height: 30px;">
          <span style="font-size: 12px; margin-top: 5px;">MacOS</span>
        </div>
        <div class="platform-item" style="display: flex; flex-direction: column; align-items: center;">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/windows8.png" alt="Windows" style="width: 30px; height: 30px;">
          <span style="font-size: 12px; margin-top: 5px;">Windows</span>
        </div>
        <div class="platform-item" style="display: flex; flex-direction: column; align-items: center;">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linux.png" alt="Linux" style="width: 30px; height: 30px;">
          <span style="font-size: 12px; margin-top: 5px;">Linux</span>
        </div>
      </div>

      <a href="#" class="more-downloads" style="color: #808A9D; text-decoration: underline; font-size: 14px; display: inline-flex; align-items: center; gap: 5px;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12L3 7H13L8 12Z" fill="#808A9D"/>
        </svg>
        More Download Options
      </a>

    </div>

  </div>

  <!-- Version Selector Buttons -->
  <div class="version-selector" style="display: flex; justify-content: center; gap: 20px; margin-top: 40px;">
    <span class="version active" data-version="lite" style="cursor: pointer; padding-bottom: 5px; border-bottom: 2px solid #FFC107;">Lite</span>
    <span class="version" data-version="pro" style="cursor: pointer; padding-bottom: 5px;">Pro</span>
    <span class="version" data-version="windows" style="cursor: pointer; padding-bottom: 5px;">Windows</span>
  </div>

</div>
<!-- Mobile Section End -->

<!-- Responsive Styles -->
<style>
@media (max-width: 768px) {
  .mobile-content {
    flex-direction: column;
    align-items: center;
  }
  .mobile-mockup, .download-section {
    max-width: 100%;
  }
  .version-selector {
    margin-top: 20px;
  }
}
</style>

<!-- Image Switch Script -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const versions = document.querySelectorAll('.version');
    const images = document.querySelectorAll('.preview-image');

    function activateVersion(version) {
      images.forEach(img => {
        if (img.dataset.version === version) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });

      versions.forEach(btn => {
        if (btn.dataset.version === version) {
          btn.style.borderBottom = '2px solid #FFC107';
          btn.classList.add('active');
        } else {
          btn.style.borderBottom = '2px solid transparent';
          btn.classList.remove('active');
        }
      });
    }

    versions.forEach(btn => {
      btn.addEventListener('click', function() {
        const version = this.dataset.version;
        activateVersion(version);
      });
    });

    // By default activate 'lite'
    activateVersion('lite');
  });
</script>
<style>
    @media (max-width: 768px) {
  .mobile-content {
    flex-direction: column; /* Line by line hona chahiye */
    align-items: center; /* Center align karega */
    text-align: center; /* Saare text center me aayenge */
  }
  .mobile-mockup, .download-section {
    max-width: 100%; /* Full width on mobile */
  }
  .version-selector {
    margin-top: 20px;
  }
}

</style>