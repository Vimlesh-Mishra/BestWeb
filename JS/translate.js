const translations = {};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`https://vimlesh-mishra.github.io/BestWeb/locales/${encodeURIComponent(lang)}.json`);
        if (!response.ok) {
            throw new Error(`Could not load ${lang}.json: ${response.statusText}`);
        }
        const data = await response.json();
        translations[lang] = data;
        applyTranslations(lang);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
        element.innerHTML = translations[lang][key]; // Use innerHTML for HTML content
    });
}

function setLanguage(lang) {
    if (!translations[lang]) {
        loadTranslations(lang);
    } else {
        applyTranslations(lang);
    }
}

// Set default language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
