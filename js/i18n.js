// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the current language from localStorage or default to English
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Set active class on the current language link
    document.querySelectorAll('.lang-switcher a').forEach(function(link) {
        if ((link.textContent === 'EN' && currentLang === 'en') || 
            (link.textContent === 'FR' && currentLang === 'fr') || 
            (link.textContent === 'ES' && currentLang === 'es')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add click event listeners to language links
    document.querySelectorAll('.lang-switcher a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            let lang = 'en';
            if (this.textContent === 'FR') {
                lang = 'fr';
            } else if (this.textContent === 'ES') {
                lang = 'es';
            }
            
            // Save selected language to localStorage
            localStorage.setItem('language', lang);
            
            // Reload the page to apply the language change
            window.location.reload();
        });
    });
    
    // Load translations based on selected language
    loadTranslations(currentLang);
});

// Function to load translations
function loadTranslations(lang) {
    fetch(`/locales/${lang}/translations.json`)
        .then(response => response.json())
        .then(translations => {
            // Apply translations to the page
            applyTranslations(translations);
        })
        .catch(error => {
            console.error('Error loading translations:', error);
        });
}

// Function to apply translations to the page
function applyTranslations(translations) {
    // Determine which page we're on
    const path = window.location.pathname;
    let page = 'home';
    
    if (path.includes('about')) {
        page = 'about';
    } else if (path.includes('operations')) {
        page = 'operations';
    } else if (path.includes('products')) {
        page = 'products';
    } else if (path.includes('global-presence')) {
        page = 'global';
    } else if (path.includes('contact')) {
        page = 'contact';
    }
    
    // Apply general translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const parts = key.split('.');
        
        let value = translations;
        for (const part of parts) {
            if (value && value[part]) {
                value = value[part];
            } else {
                value = null;
                break;
            }
        }
        
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    // Apply page-specific translations
    document.querySelectorAll(`[data-i18n-page="${page}"]`).forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (translations[page] && translations[page][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[page][key];
            } else {
                element.textContent = translations[page][key];
            }
        }
    });
    
    // Update navigation items
    if (translations.navigation) {
        const navItems = document.querySelectorAll('.navbar-nav .nav-link');
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href.includes('index.html') && translations.navigation.home) {
                item.textContent = translations.navigation.home;
            } else if (href.includes('about.html') && translations.navigation.about) {
                item.textContent = translations.navigation.about;
            } else if (href.includes('operations.html') && translations.navigation.operations) {
                item.textContent = translations.navigation.operations;
            } else if (href.includes('products.html') && translations.navigation.products) {
                item.textContent = translations.navigation.products;
            } else if (href.includes('global-presence.html') && translations.navigation.global_presence) {
                item.textContent = translations.navigation.global_presence;
            } else if (href.includes('contact.html') && translations.navigation.contact) {
                item.textContent = translations.navigation.contact;
            }
        });
    }
    
    // Update language switcher
    if (translations.languages) {
        const langSwitchers = document.querySelectorAll('.lang-switcher a');
        langSwitchers.forEach(switcher => {
            if (switcher.textContent === 'EN' && translations.languages.english) {
                switcher.setAttribute('title', translations.languages.english);
            } else if (switcher.textContent === 'FR' && translations.languages.french) {
                switcher.setAttribute('title', translations.languages.french);
            } else if (switcher.textContent === 'ES' && translations.languages.spanish) {
                switcher.setAttribute('title', translations.languages.spanish);
            }
        });
    }
    
    // Update footer content
    if (translations.footer) {
        const footerLinks = document.querySelectorAll('footer h5, footer a');
        footerLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text === 'Quick Links' && translations.footer.quick_links) {
                link.textContent = translations.footer.quick_links;
            } else if (text === 'Operations' && translations.footer.operations) {
                link.textContent = translations.footer.operations;
            } else if (text === 'Languages' && translations.footer.languages) {
                link.textContent = translations.footer.languages;
            } else if (text === 'Legal' && translations.footer.legal) {
                link.textContent = translations.footer.legal;
            } else if (text === 'Privacy Policy' && translations.footer.privacy_policy) {
                link.textContent = translations.footer.privacy_policy;
            } else if (text === 'Terms of Service' && translations.footer.terms_of_service) {
                link.textContent = translations.footer.terms_of_service;
            }
        });
        
        // Update copyright
        if (translations.general && translations.general.copyright) {
            const copyright = document.querySelector('.footer-bottom p');
            if (copyright) {
                copyright.textContent = translations.general.copyright;
            }
        }
    }
}
