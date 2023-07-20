const openIcon = document.getElementById('menu-open'),
      closeIcon = document.getElementById('menu-close'),
      navContainer = document.getElementById('nav-container');

const mediaQuery = window.matchMedia('(min-width: 796px)');

if (openIcon) {
    openIcon.addEventListener('click', () => {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navContainer.classList.add('active');
    })
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navContainer.classList.remove('active');
    })
}

function handleDeviceSizes(e) {
    if (mediaQuery.matches) {
        closeIcon.style.display = 'none';
        openIcon.style.display = 'none';
    }

    if (!mediaQuery.matches) {
        closeIcon.style.display = 'none';
        openIcon.style.display = 'block';
        navContainer.classList.remove('active');
    }
}

mediaQuery.addEventListener('change', handleDeviceSizes);