// Define the resize handler function
let previousWidth = window.innerWidth; // Variable to store the previous width
let isHomePage = window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname === '/index.html'

function handleResize() {
  const currentWidth = window.innerWidth;
  const header = document.getElementById("header");

  // Only do anything if the window width changes
  if (previousWidth !== currentWidth) {
    previousWidth = currentWidth;
    
    // Add 'collapsed' and remove 'expanded' for small screens
    header.classList.add(isHomePage ? 'header-collapsed' : 'header-filter-collapsed');
    header.classList.remove('header-expanded');
    
    document.getElementById('navItems').style.opacity = 0;
    document.getElementById('openCloseIcon').src = './images/ic_twotone-menu.svg';
    document.getElementById('notifications').src= './icons/user.svg'
  }
}

// Attach the resize event listener
window.addEventListener('resize', handleResize);

// Define the expandCollapseNavbar function
function expandCollapseNavbar() {
  const header = document.getElementById("header");
  const navItems = document.getElementById('navItems');
  const openCloseIcon = document.getElementById('openCloseIcon');
  const notifications = document.getElementById('notifications');


  // Check if the header has the collapsed class
  if (header.classList.contains('header-collapsed') || header.classList.contains('header-filter-collapsed')) {
    // Expand the sidebar
    header.classList.remove(isHomePage ? 'header-collapsed' : 'header-filter-collapsed');
    header.classList.add('header-expanded');
    navItems.style.opacity = 1;
    openCloseIcon.src = './icons/material-symbols_close.svg';
    notifications.src= './icons/basil_notification-outline.svg'
  } else {
    // Collapse the sidebar
    header.classList.add(isHomePage ? 'header-collapsed' : 'header-filter-collapsed');
    header.classList.remove('header-expanded');
    navItems.style.opacity = 0;
    openCloseIcon.src = './images/ic_twotone-menu.svg';
    notifications.src= './icons/user.svg'
  }
}