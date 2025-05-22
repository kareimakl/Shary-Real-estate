// Function to update content based on selected language
function updateContent(langData, lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = langData[key];
  });

  // Update text direction based on the language
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');  // Set the direction to RTL
  } else {
    document.documentElement.setAttribute('dir', 'ltr');  // Set the direction to LTR
  }
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`languages/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);
  
  const langData = await fetchLanguageData(lang);
  updateContent(langData, lang);
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'en';
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData, userPreferredLanguage);
});