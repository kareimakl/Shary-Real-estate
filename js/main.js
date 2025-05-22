// Image and text data
const slides = [
  {
    image: "/images/subtract-img1.svg",
    title: "DEJOYA 3",
    description: "Discover how we combine power, precision, technology."
  },
  {
    image: "/images/subtract-img2.svg",
    title: "DEJOYA 4", // Example different title
    description: "Experience the next level of performance and innovation." // Example different description
  }
];

let currentSlide = 0;

function changeImage(direction) {
  const image = document.getElementById('dejoyaImg');
  const textContainer = document.getElementById('imageText');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Fade out current content
  image.style.opacity = 0.2;
  textContainer.style.opacity = 0.2;

  setTimeout(function() {
    // Determine new slide index
    if (direction === 'next') {
      currentSlide = (currentSlide + 1) % slides.length;
    } else {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    // Update content
    image.src = slides[currentSlide].image;
    textContainer.innerHTML = `
      <p>${slides[currentSlide].title}</p>
      <p class="text-[10px] mt-1.5">${slides[currentSlide].description}</p>
    `;

    // Fade in new content
    image.onload = function() {
      image.style.opacity = 1;
      textContainer.style.opacity = 1;
    };

    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    
    // Update button styles
    prevBtn.classList.toggle('bg-[#FFFFFF5E]', prevBtn.disabled);
    prevBtn.classList.toggle('text-white', prevBtn.disabled);
    prevBtn.classList.toggle('bg-white', !prevBtn.disabled);
    prevBtn.classList.toggle('text-[#242323]', !prevBtn.disabled);
    
    nextBtn.classList.toggle('bg-[#FFFFFF5E]', nextBtn.disabled);
    nextBtn.classList.toggle('text-white', nextBtn.disabled);
    nextBtn.classList.toggle('bg-white', !nextBtn.disabled);
    nextBtn.classList.toggle('text-[#242323]', !nextBtn.disabled);
  }, 300);
}
// Toggle Filter
function toggleFilterBar (type) {
  const filterBar = document.getElementById('filterBar');
  if (type === 'open') {
    filterBar.style.height = '100dvh';
    filterBar.style.maxHeight = '100dvh';
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    filterBar.style.maxHeight = '0px';
    document.querySelector('body').style.overflow = 'auto';
  }
}

// Toggle Search Bar
function toggleSearchBar (type) {
  const searchBar = document.getElementById('searchBar');
  const searchBarClose = document.getElementById('searchBar_close')
  if (type === 'open') {
    searchBar.style.height = '100dvh';
    searchBar.style.maxHeight = '100dvh';
    searchBarClose.classList.replace('z-[-1]', 'z-[1]')
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    searchBar.style.maxHeight = '0px';
    searchBarClose.classList.replace('z-[1]', 'z-[-1]')
    document.querySelector('body').style.overflow = 'auto';
  }
}

// Toggle Dropdowns
document.addEventListener('click', event => {
  const allDropdowns = document.querySelectorAll('.dropdown-list')
  const dropdownBtns = document.querySelectorAll('.dropdown-btn')
  for (let i = 0; i < dropdownBtns.length; i++) {
    const element = dropdownBtns[i].nextElementSibling
    if ((!dropdownBtns[i].contains(event.target) && !allDropdowns[i].contains(event.target)) && !event.target.classList.contains('dropdown-btn-footer')) {
      allDropdowns[i].classList.add('invisible', 'opacity-0');
    }
    if (element && element.contains(event.target) && allDropdowns[i].contains(event.target) && element.classList.contains('invisible', 'opacity-0')) {
      if (event.target.tagName === 'IMG' || event.target.classList.contains('img-container')) {
        dropdownBtns[i].querySelector('img').src = event.target.src || event.target.querySelector('img').src
      } else {
        dropdownBtns[i].querySelector('p').innerHTML = event.target.innerHTML
      }
    }
  }
});
function openDropdownMenu (elementId) {
  const targetElement = document.getElementById(elementId)
  const allDropdowns = document.querySelectorAll('.dropdown-list')
  for (let i = 0; i < allDropdowns.length; i++) {
    if (allDropdowns[i] !== targetElement) {
      allDropdowns[i].classList.add('invisible', 'opacity-0');
    }
  }
  targetElement.classList.toggle('invisible');
  targetElement.classList.toggle('opacity-0');
}


// Animate Slider
let sliderIndexes = {}; // Object to hold currentIndex for each slider
function animateSlider (btnType, sliderName) {
  const sliderContainer = document.getElementById(`${sliderName}_slider`);
  const sliderItems = document.querySelectorAll(`.${sliderName}_item`);
  const itemWidth = sliderItems[0].clientWidth;
  const lang = localStorage.getItem('language') || 'en';

  // Initialize the index for this slider if it hasn't been initialized yet
  if (!sliderIndexes[sliderName]) {
    sliderIndexes[sliderName] = 0;
  }

  if (btnType === 'prev') {
    if (lang === 'ar') {
      if (sliderIndexes[sliderName] < sliderItems.length - 1) {
        sliderIndexes[sliderName]++;
      }
    } else {
      if (sliderIndexes[sliderName] > 0) {
        sliderIndexes[sliderName]--;
      }
    }
  }
  if (btnType === 'next') {
    if (lang === 'ar') {
      if (sliderIndexes[sliderName] > 0) {
        sliderIndexes[sliderName]--;
      }
    } else {
      if (sliderIndexes[sliderName] < sliderItems.length - 1) {
        sliderIndexes[sliderName]++;
      }
    }
  }

  // Calculate the scroll position dynamically
  const newScrollPosition = lang === 'ar'
    ? -itemWidth * sliderIndexes[sliderName] // For RTL, scroll negatively
    : itemWidth * sliderIndexes[sliderName]; // For LTR, scroll positively

  // Apply the new scroll position to the slider container
  sliderContainer.scrollLeft = newScrollPosition;
}

// Toggle More Less Text
function toggleMoreLessText(elementName) {
  content = document.getElementById(`${elementName}_content`)
  btnText = document.getElementById(`${elementName}_btnText`)
  btnIcon = document.getElementById(`${elementName}_btnIcon`)
  content.classList.toggle('hidden');
  btnText.innerHTML = content.classList.contains('hidden') ? 'Show More' : 'Show Less'
  btnIcon.innerHTML = content.classList.contains('hidden') ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
}

// Side Section
function openSideSection(elementId, overlayId) {
  const targetElement = document.getElementById(elementId)
  const sideFilterOverlay = document.getElementById(overlayId ? overlayId : 'sideFilterOverlay')
  targetElement.classList.toggle('invisible');
  targetElement.classList.toggle('opacity-0');
  sideFilterOverlay.classList.toggle('invisible');
  sideFilterOverlay.classList.toggle('opacity-0');
}

// Popup
function togglePopup(elementId, event) {
  const targetElement = document.getElementById(elementId)
  if (targetElement.classList.contains('invisible')) {
    targetElement.classList.add('transition-opacity', 'ease-in-out', 'duration-300');
  } else {
    targetElement.classList.remove('transition-opacity', 'ease-in-out', 'duration-300');
  }
  targetElement.classList.toggle('invisible');
  targetElement.classList.toggle('opacity-0');
  
  if (event) {
    perventParentEvent(event);
  }
}

// Compare Notification
function hideCompareNotification (elementId, event) {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.add('hidden');
  perventParentEvent(event);
}

// Play & Pause Video
function playPauseVideo(sectionName, type) { 
  let myVideo = document.getElementById(`${sectionName}_video`);
  let startBtn = document.getElementById(`${sectionName}_video_Btn`);
  if (type === 'play') {
    myVideo.play();
    myVideo.controls = true;
    startBtn.style.display = 'none'
  } else {
    myVideo.pause();
    myVideo.controls = false;
    startBtn.style.display = 'block'
  }
}

// Scroll To Section
function scrollToSection(sectionName) {
  const targetSection = document.getElementById(`${sectionName}_video_container`);
  const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: sectionPosition - 115,
    behavior: 'smooth'
  });
}

// Scroll To Jobs
function scrollToJobs(sectionName) {
  const targetSection = document.getElementById(`${sectionName}`);
  const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: sectionPosition - 120,
    behavior: 'smooth'
  });
}

// Expand and Collapse
function expandCollapsePlan(plan) {
  let icon = document.getElementById(`${plan}_icon`);
  let image = document.getElementById(`${plan}_img`);
  if (icon.classList.contains('rotate-90')) {
    icon.classList.replace('rotate-90','-rotate-90')
    image.classList.toggle('hidden')
  } else {
    icon.classList.replace('-rotate-90','rotate-90')
    image.classList.toggle('hidden')
  }
}

// 360 deg
const panolensSection = document.getElementById("panolensSection");
if (panolensSection) {
  const panoramaImage = new PANOLENS.ImagePanorama("../images/panorama.jpeg");
  const imageContainer = document.querySelector(".panorama-image-container");
  const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    controlBar: false,
  });

  viewer.add(panoramaImage);
}

// Shary Card
function changeSharyCard() {
  const image = document.getElementById("sharyCard");
  const cardData = document.getElementById("cardData")
  // Check the current source and toggle it
  if (image.src.includes("shary-card-float.svg")) {
    image.src = "../images/shary-card.svg"; // New image path
    image.onload = function() {
      cardData.classList.replace('hidden', 'flex');
    };
  } else {
    image.src = "../images/shary-card-float.svg"; // Original image path
    cardData.classList.replace('flex', 'hidden');
    image.onload = function() {
      cardData.classList.replace('flex', 'hidden');
    };
  }
}

// Fav Filter
function toggleFavFilter(id) {
  element = document.getElementById(id);
  element.classList.toggle('opacity-0');
  element.classList.toggle('z-[-1]');
}

// Roll Down With Overlay
function toggleRollDown(elementId, overlayId) {
  const targetElement = document.getElementById(elementId)
  const navSearchOverlay = document.getElementById(overlayId)
  targetElement.classList.toggle('invisible');
  targetElement.classList.toggle('opacity-0');
  navSearchOverlay.classList.toggle('invisible');
  navSearchOverlay.classList.toggle('opacity-0');
}

// Shary AI
function toggleSharyAI(type) {
  openSharyAI = document.getElementById('openSharyAI');
  closeSharyAI = document.getElementById('closeSharyAI');
  sharyAiChat = document.getElementById('sharyAiChat')

  openSharyAI.classList.toggle('opacity-0');
  openSharyAI.classList.toggle('z-[-1]');
  closeSharyAI.classList.toggle('opacity-0');
  closeSharyAI.classList.toggle('z-[-1]');

  sharyAiChat.classList.toggle('opacity-0');
  if (type === 'open') {
    sharyAiChat.classList.replace('z-[-1]', 'z-30');
  }
  if (type === 'close') {
    sharyAiChat.classList.replace('z-30', 'z-[-1]'); 
  }
}

// Range Slider
function initializeRangeSliders(defaultLow = 0, defaultHigh = 100) {
  const sliders = document.querySelectorAll('.range-slider');
  sliders.forEach(slider => {
    const containerName = slider.id.replace('range_', '').replace('_slider', '');
    const rangeLow = document.getElementById(`range_${containerName}_low`);
    const rangeHigh = document.getElementById(`range_${containerName}_high`);
    if (rangeLow.value === "") rangeLow.value = defaultLow;
    if (rangeHigh.value === "") rangeHigh.value = defaultHigh;
    updateRangeSlider(containerName);
    rangeLow.addEventListener('input', () => updateRangeSlider(containerName));
    rangeHigh.addEventListener('input', () => updateRangeSlider(containerName));
  });
}
function updateRangeSlider(containerName) {
  const rangeLow = document.getElementById(`range_${containerName}_low`);
  const rangeHigh = document.getElementById(`range_${containerName}_high`);
  const rangeSlider = document.getElementById(`range_${containerName}_slider`);
  let lowValue = parseInt(rangeLow.value);
  let highValue = parseInt(rangeHigh.value);
  if (lowValue > highValue) {
    lowValue = highValue; 
    rangeLow.value = lowValue; 
  }
  const lowPercent = (lowValue / rangeLow.max) * 100;
  const highPercent = (highValue / rangeHigh.max) * 100;
  const beforeElement = rangeSlider.querySelector('.range-slider-before') || document.createElement('div');
  beforeElement.className = 'range-slider-before';
  Object.assign(beforeElement.style, {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: '100%',
    height: 'var(--range-slider-track-height)',
    marginTop: 'calc(var(--range-slider-track-height) / -2)',
    borderRadius: '9999999px',
    backgroundImage: `linear-gradient(to ${localStorage.getItem('language') === 'en' ? 'right' : 'left'}, transparent ${lowPercent}%, var(--range-slider-active-color) ${lowPercent}%, var(--range-slider-active-color) ${highPercent}%, transparent ${highPercent}%)`,
    pointerEvents: 'none'
  });
  if (!rangeSlider.contains(beforeElement)) rangeSlider.appendChild(beforeElement);
  const currentResult = document.querySelector(`.current-${containerName}-range`);
  const unit = currentResult.getAttribute('data-unit') || 'EGP';
  if (currentResult) currentResult.textContent = `${lowValue.toLocaleString()} ${unit} - ${highValue.toLocaleString()} ${unit}`;
}
function resetButton(containerName) {
  const rangeLow = document.getElementById(`range_${containerName}_low`);
  const min = rangeLow.getAttribute('min')
  const max = rangeLow.getAttribute('max')
  const rangeHigh = document.getElementById(`range_${containerName}_high`);
  rangeLow.value = min;
  rangeHigh.value = max;
  rangeLow.dispatchEvent(new Event('change'));
  rangeHigh.dispatchEvent(new Event('change'));
  updateRangeSlider(containerName);
}
window.addEventListener('load', () => {
  initializeRangeSliders(0, 10000);
});

// Scroll Horizontally By Mouse
document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll(".hide-scroll");  // Select all elements with the class
  sliders.forEach(slider => {  // Loop over each element
    let isDown = false;
    let isMoved = false;
    let startX, scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      isMoved = false;
      startX = e.pageX - slider.offsetLeft; 
      scrollLeft = slider.scrollLeft; 
      slider.style.cursor = 'grabbing';
      slider.style.scrollBehavior = 'auto';
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.style.cursor = 'grab'; 
    });

    slider.addEventListener('mouseup', (e) => {
      isDown = false;
      slider.style.cursor = 'grab'; 
      slider.style.scrollBehavior = 'smooth';
      if (isMoved) {
        e.preventDefault(); 
      }
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return; 
      const x = e.pageX - slider.offsetLeft; 
      const walk = (x - startX) * 2;
      isMoved = true
      slider.scrollLeft = scrollLeft - walk; 
    });

    Array.from(slider.children).forEach(item => {
      item.addEventListener('click', (e) => {
        if (isMoved) {
          e.preventDefault();  // Prevent the click event if the slider has been moved
        }
      });
    });
  });
});

// Switch Tab
function switchTab(elementId, inactiveElementId) {
  const activeTab = document.getElementById(elementId);
  const inactiveTab = document.getElementById(inactiveElementId);

  activeTab.classList.add('md:border-b-2', 'border-b', 'border-solid', 'border-[#1D4265]', 'text-[#1D4265]')
  activeTab.classList.remove('text-[#A2A2A2]')

  inactiveTab.classList.add('text-[#A2A2A2]')
  inactiveTab.classList.remove('md:border-b-2', 'border-b', 'border-solid', 'border-[#1D4265]', 'text-[#1D4265]')

  console.log(activeTab);
  
  if (activeTab.id === 'compoundsTab') {
    document.querySelectorAll('.compoundsElement').forEach(element => {
      element.classList.remove('hidden');
    });
    document.querySelectorAll('.propertiesElement').forEach(element => {
      element.classList.add('hidden');
    });
  } else {
    document.querySelectorAll('.compoundsElement').forEach(element => {
      element.classList.add('hidden');
    });
    document.querySelectorAll('.propertiesElement').forEach(element => {
      element.classList.remove('hidden');
    });
  }
}

// Pervent Parent Event
function perventParentEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}