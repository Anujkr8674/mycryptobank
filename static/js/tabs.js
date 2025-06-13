document.addEventListener('DOMContentLoaded', function() {
    // Get all tab elements
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanes = document.querySelectorAll('[role="tabpanel"]');

    // Add click event listener to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            // Hide all tab panes
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                pane.style.display = 'none';
                pane.setAttribute('aria-hidden', 'true');
            });

            // Add active class to clicked tab
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Show corresponding tab pane
            const targetPaneId = this.getAttribute('aria-controls');
            const targetPane = document.getElementById(targetPaneId);
            if (targetPane) {
                targetPane.classList.add('active');
                targetPane.style.display = 'block';
                targetPane.setAttribute('aria-hidden', 'false');
            }
        });
    });

    // Set first tab as active by default
    if (tabs[0]) {
        tabs[0].click();
    }
}); 