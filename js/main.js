// Start Change Mode

let darkMode = localStorage.getItem('darkMode');
const toggleMode = document.querySelector('#toggle-mode');
const toggleModeI = document.querySelector('#toggle-mode-icon');
const darkLink = document.createElement('link');

darkLink.rel = 'stylesheet';
darkLink.href = 'css/dark.css';

const darkModeEnabled = () => {
	document.head.appendChild(darkLink);
	toggleModeI.classList.remove('fa-moon');
	toggleModeI.classList.add('fa-sun');
	localStorage.setItem('darkMode', 'enabled');
}

const darkModeDisabled = () => {
	document.head.removeChild(darkLink);
	toggleModeI.classList.remove('fa-sun');
	toggleModeI.classList.add('fa-moon');
	localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
	darkModeEnabled();
}

toggleMode.addEventListener('click', _ => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		darkModeEnabled();
	} else {
		darkModeDisabled();
	}
});

// End Change Mode
// Start Sidebar

const btnLeftSidebar = document.querySelector('.btn-left');
const btnRightSidebar = document.querySelector('.btn-right');

const firstSidebar = document.querySelector('#first-sidebar');
const secondSidebar = document.querySelector('#second-sidebar');

const mainContent = document.querySelector('.main-content');

let firstSidebarOpen = false;
let secondSidebarOpen = false;

btnLeftSidebar.addEventListener('click', _ => {
	if (!firstSidebarOpen) {
		mainContent.style.transform = `translateX(18.7rem)`;
		firstSidebar.classList.add('show');
		btnLeftSidebar.classList.add('show');
		firstSidebarOpen = true;
		if (secondSidebarOpen) {
			secondSidebar.classList.remove('show');
			btnRightSidebar.classList.remove('show');
			secondSidebarOpen = false;
		}
	} else {
		mainContent.style.transform = `translateX(0)`;
		firstSidebar.classList.remove('show');
		btnLeftSidebar.classList.remove('show');
		firstSidebarOpen = false;
	}
});

btnRightSidebar.addEventListener('click', _ => {
	if (!secondSidebarOpen) {
		mainContent.style.transform = `translateX(-18.7rem)`;
		secondSidebar.classList.add('show');
		btnRightSidebar.classList.add('show');
		secondSidebarOpen = true;
		if (firstSidebarOpen) {
			firstSidebar.classList.remove('show');
			btnLeftSidebar.classList.remove('show');
			firstSidebarOpen = false;
		}
	} else {
		mainContent.style.transform = `translateX(0)`;
		secondSidebar.classList.remove('show');
		btnRightSidebar.classList.remove('show');
		secondSidebarOpen = false;
	}
});

window.addEventListener('resize', _ => {
	if (window.innerWidth >= 1100) {
		mainContent.style.transform = 'translateX(0)';
		firstSidebar.classList.remove('show');
		btnLeftSidebar.classList.remove('show');
		firstSidebarOpen = false;

		secondSidebar.classList.remove('show');
		btnRightSidebar.classList.remove('show');
		secondSidebarOpen = false;
	}
});

// End Sidebar
// Start Random Images

const randomImg = document.getElementById('randomImage');

const imgArr = [
	'url(img/header/01.jpg)',
	'url(img/header/02.webp)',
	'url(img/header/03.jpg)',
	'url(img/header/04.jpg)',
	'url(img/header/05.jpg)',
]

window.addEventListener('load', _ =>  {
	randomImg.style.backgroundImage = imgArr[Math.floor(Math.random() * 5)];
});

setInterval(function () {
	randomImg.style.backgroundImage = imgArr[Math.floor(Math.random() * 5)];
}, 3000)

// End Random Images