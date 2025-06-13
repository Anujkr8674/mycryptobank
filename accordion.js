document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.vip-collapse-item');
    
    items.forEach(item => {
        // Create content div if not exists
        if (!item.querySelector('.content-area')) {
            const content = document.createElement('div');
            content.className = 'content-area';
            content.style.display = 'none';
            content.style.padding = '15px';
            content.innerHTML = '<div class="web-body3 text-t-primary">Content for this section</div>';
            item.appendChild(content);
        }
        
        const clickArea = item.querySelector('.bn-flex.w-full');
        clickArea.addEventListener('click', () => {
            const content = item.querySelector('.content-area');
            const isOpen = content.style.display === 'block';
            
            // Close all other items first
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector('.content-area');
                    const otherIcon = otherItem.querySelector('.bn-svg');
                    if (otherContent) {
                        otherContent.style.display = 'none';
                        otherIcon.innerHTML = '<path d="M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z" fill="currentColor"></path>';
                    }
                }
            });
            
            // Toggle current item
            if (!isOpen) {
                content.style.display = 'block';
                item.querySelector('.bn-svg').innerHTML = '<path d="M21 13.5H3v-3h18v3z" fill="currentColor"></path>';
            }
        });
    });
}); 