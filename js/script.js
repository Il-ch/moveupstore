
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const langToggle = document.getElementById('lang');
    if (!langToggle) {
        console.warn('Language toggle #lang not found');
        renderCategories('all');
        return;
    }

    updateLanguage(langToggle.checked);
    langToggle.addEventListener('change', () => updateLanguage(langToggle.checked));

    const filterButtons = document.querySelectorAll('.catalog-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const selectedCategory = button.getAttribute('data-category');
            renderCategories(selectedCategory);
        });
    });

    /* Слайдер акцій */
    const sliderInputs = document.querySelectorAll('input[name="slider_promotions"]');
    let currentIndex = 0;
    setInterval(() => {
        sliderInputs.forEach(input => input.checked = false);
        sliderInputs[currentIndex].checked = true;
        currentIndex = (currentIndex + 1) % sliderInputs.length;
    }, 5000);

    /* Логіка прокрутки логотипів */
    const track = document.getElementById('brandsTrack');
    if (track) {
        const logos = Array.from(track.children);
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });

        const logoWidth = logos[0].offsetWidth;
        const gap = 40;
        const step = logoWidth + gap;
        let currentX = 0;

        /* Прокрутка логотипів */
        function scrollNext() {
            currentX -= step;
            track.style.transition = 'transform 0.3s ease';
            track.style.transform = `translateX(${currentX}px)`;

            if (Math.abs(currentX) >= track.scrollWidth / 2) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentX = 0;
                    track.style.transform = `translateX(0px)`;
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            setTimeout(scrollNext, 500);
                        });
                    });
                }, 300);
            } else {
                setTimeout(scrollNext, 500);
            }
        }

        setTimeout(scrollNext, 1000);
    }

    /* Активне меню при кліку */
    const menuHeight = document.querySelector(".header-top")?.clientHeight || 0;
    /* Обробка видимості секцій */
    document.querySelectorAll(".menu-element__link").forEach(element => {
        element.addEventListener("click", function(e) {
            e.preventDefault();
            if (this.classList.contains('active')) return;

            const linkHref = this.getAttribute("href");
            const hrefElement = document.getElementById(linkHref.replace("#", ""));
            if (!hrefElement) return;

            const offset = window.matchMedia("(max-width: 768px)").matches ? 10 : menuHeight;
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: hrefElement.offsetTop - offset
            });

            changeActiveMenuElement(this);
        });
    });

    /* Зміна активного пункту меню */
    const options = { threshold: 0.3 };
    const callback = function(entries) {
        entries.forEach(entry => {
            const sectionMenuLink = document.querySelector(`.menu-element__link[href='#${entry.target.id}']`);
            if (entry.isIntersecting && sectionMenuLink && !sectionMenuLink.classList.contains('active')) {
                changeActiveMenuElement(sectionMenuLink);
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(".observer-section").forEach(element => observer.observe(element));
});

function changeActiveMenuElement(element) {
    const activeLink = document.querySelector(".menu-element__link.active");
    if (activeLink) activeLink.classList.remove('active');
    element.classList.add('active');
}

/* Масив категорій */
const categories = [
    { name: 'Футболки', image: 'resources/categories/tshirt.webp', category: 'tops', itemKey: 'tshirt' },
    { name: 'Майки', image: 'resources/categories/tanktop.webp', category: 'tops', itemKey: 'tanktop' },
    { name: 'Толстовки', image: 'resources/categories/hoodie.webp', category: 'tops', itemKey: 'hoodie' },
    { name: 'Вітровки', image: 'resources/categories/windbreaker2.webp', category: 'tops', itemKey: 'windbreaker' },
    { name: 'Топи', image: 'resources/categories/tops.webp', category: 'tops', itemKey: 'tops' },
    { name: 'Легінси', image: 'resources/categories/leggings.webp', category: 'bottoms', itemKey: 'leggings' },
    { name: 'Шорти', image: 'resources/categories/shorts.webp', category: 'bottoms', itemKey: 'shorts' },
    { name: 'Штани', image: 'resources/categories/pants.webp', category: 'bottoms', itemKey: 'pants' },
    { name: 'Купальна білизна', image: 'resources/categories/swimwear.webp', category: 'bottoms', itemKey: 'swimwear' },
    { name: 'Бігові кросівки', image: 'resources/categories/runningShoes.webp', category: 'footwear', itemKey: 'runningShoes' },
    { name: 'Баскетбольні кросівки', image: 'resources/categories/basketballShoes.webp', category: 'footwear', itemKey: 'basketballShoes' },
    { name: 'Футбольні бутси', image: 'resources/categories/footballCleats.webp', category: 'footwear', itemKey: 'footballCleats' },
    { name: 'Тренувальні кросівки', image: 'resources/categories/trainingShoes.webp', category: 'footwear', itemKey: 'trainingShoes' },
    { name: 'Спортивні капці', image: 'resources/categories/slippers.webp', category: 'footwear', itemKey: 'slippers' },
    { name: 'Шкарпетки', image: 'resources/categories/socks.webp', category: 'accessories', itemKey: 'socks' },
    { name: 'Пов\'язки на голову', image: 'resources/categories/headbands.webp', category: 'accessories', itemKey: 'headbands' },
    { name: 'Пов\'язки на зап\'ястя', image: 'resources/categories/wristbands.webp', category: 'accessories', itemKey: 'wristbands' },
    { name: 'Наколінники', image: 'resources/categories/kneePads.webp', category: 'accessories', itemKey: 'kneePads' },
    { name: 'Налокітники', image: 'resources/categories/elbowPads.webp', category: 'accessories', itemKey: 'elbowPads' },
    { name: 'Пояси для важкої атлетики', image: 'resources/categories/weightliftingBelts.webp', category: 'accessories', itemKey: 'weightliftingBelts' },
    { name: 'Спортивні сумки', image: 'resources/categories/sportsBags.webp', category: 'accessories', itemKey: 'sportsBags' },
    { name: 'Спортивні рюкзаки', image: 'resources/categories/sportsBackpacks.webp', category: 'accessories', itemKey: 'sportsBackpacks' },
    { name: 'Килимки для фітнесу', image: 'resources/categories/fitnessMats.webp', category: 'accessories', itemKey: 'fitnessMats' }
];

/* Рендеринг категорій */
function renderCategories(selectedCategory) {
    console.log('Rendering categories for:', selectedCategory);
    const container = document.querySelector('.categories-list');
    if (!container) {
        console.error('Container .categories-list not found');
        return;
    }

    container.innerHTML = '';
    const isMobile = window.innerWidth <= 768;
    const itemsPerRow = isMobile ? 1 : 3;
    const lang = document.getElementById('lang')?.checked ? 'uk' : 'en';

    const filtered = selectedCategory === 'all' 
        ? categories 
        : categories.filter(item => item.category === selectedCategory);

    if (!filtered || filtered.length === 0) {
        console.warn('No categories to render');
        container.innerHTML = '<p>No categories available</p>';
        return;
    }

    for (let i = 0; i < filtered.length; i += itemsPerRow) {
        const rowItems = filtered.slice(i, i + itemsPerRow);
        const row = document.createElement('div');
        row.classList.add('category-list__row');

        rowItems.forEach(item => {
            console.log('Processing item:', item);
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('categories-list__element');
            categoryElement.setAttribute('data-category', item.category);
            categoryElement.setAttribute('data-item', item.itemKey);
            categoryElement.setAttribute('tabindex', '0');

            const itemData = itemsData[item.itemKey];
            const nameTranslation = translations[`category-${item.itemKey}-name`];
            if (!itemData || !nameTranslation) {
                console.warn(`Missing data or translation for ${item.itemKey}`);
                return;
            }

            let html = `
                <img src="${item.image}" alt="${nameTranslation[lang]}" class="category-list__image">
                <span class="categories-list__title" data-i18n-key="category-${item.itemKey}-name">${nameTranslation[lang]}</span>
            `;


            if (isMobile) {
                const descTranslation = translations[`category-${item.itemKey}-description`];
                const tagsTranslation = translations[`category-${item.itemKey}-tags`];
                if (!descTranslation || !tagsTranslation) {
                    console.warn(`Missing translations for ${item.itemKey}`);
                    return;
                }

                const placeholderWebP = 'resources/sizes/placeholder.webp';

                html = `
                    <div class="category-main">
                        <img src="${item.image}" alt="${nameTranslation[lang]}" class="category-list__image">
                        <span class="categories-list__title" data-i18n-key="category-${item.itemKey}-name">${nameTranslation[lang]}</span>
                    </div>
                    <div class="category-details">
                        <div class="category-details__content">
                            <img src="${itemData.image}" alt="${nameTranslation[lang]}" class="category-details__image">
                            <span class="category-details__name" data-i18n-key="category-${item.itemKey}-name">${nameTranslation[lang]}</span>
                            <span class="category-details__info" data-i18n-key="category-${item.itemKey}-description">${descTranslation[lang]}</span>
                            <span class="category-details__tags" data-i18n-key="category-${item.itemKey}-tags">${tagsTranslation[lang]}</span>
                            <img 
                                src="${itemData.sizesImage ? itemData.sizesImage : placeholderWebP}" 
                                alt="" 
                                class="category-details__sizes${!itemData.sizesImage ? ' placeholder' : ''}"
                                >
                        </div>
                    </div>
                `;
            }

            categoryElement.innerHTML = html;
            row.appendChild(categoryElement);
        });

        container.appendChild(row);
    }

    addCategoryElementListeners();

    if (!isMobile && filtered.length > 0) {
        const firstItemElement = document.querySelector(`.categories-list__element[data-item="${filtered[0].itemKey}"]`);
        if (firstItemElement && !document.querySelector('.categories-list__element.active')) {
            firstItemElement.classList.add('active');
            updateCategoryCard(filtered[0].itemKey, lang, isMobile);
        }
    }
}

/* Оновлення картки категорії */
function updateCategoryCard(itemKey, lang, isMobile) {
    if (isMobile) {
        return;
    }

    const placeholderWebP = 'resources/sizes/placeholder.webp';


    const cardElements = {
        image: document.querySelector('.category-card__image'),
        name: document.querySelector('.category-card__name'),
        description: document.querySelector('.category-card__info'),
        tags: document.querySelector('.category-card__tags'),
        sizes: document.querySelector('.category-card__sizes')
    };

    if (Object.values(cardElements).some(el => !el)) {
        console.warn('Some category card elements not found');
        return;
    }

    const item = itemsData[itemKey];
    const nameTranslation = translations[`category-${itemKey}-name`];
    const descTranslation = translations[`category-${itemKey}-description`];
    const tagsTranslation = translations[`category-${itemKey}-tags`];

    if (!item || !nameTranslation || !descTranslation || !tagsTranslation) {
        console.warn(`Missing data or translations for ${itemKey}`);
        return;
    }

    cardElements.image.src = item.image;
    cardElements.name.textContent = nameTranslation[lang];
    cardElements.description.textContent = descTranslation[lang];
    cardElements.tags.textContent = tagsTranslation[lang];

    if (!item.sizesImage) {
        cardElements.sizes.src = placeholderWebP;
        cardElements.sizes.classList.add('placeholder');
    } else {
        cardElements.sizes.src = item.sizesImage;
        cardElements.sizes.classList.remove('placeholder');
    }
}

/* Додавання слухачів для елементів категорій */
function addCategoryElementListeners() {
    console.log('Adding category element listeners');
    const categoryElements = document.querySelectorAll('.categories-list__element');
    const isMobile = window.innerWidth <= 768;
    const lang = document.getElementById('lang')?.checked ? 'uk' : 'en';

    if (isMobile) {
        categoryElements.forEach(element => {
            const details = element.querySelector('.category-details');
            if (!details) return;

            element.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isOpen = details.classList.contains('open');
                
                document.querySelectorAll('.category-details.open').forEach(openDetails => {
                    openDetails.classList.remove('open');
                    openDetails.parentElement.classList.remove('open');
                    openDetails.parentElement.classList.remove('active');
                    openDetails.style.maxHeight = '0';
                });

                if (!isOpen) {
                    details.classList.add('open');
                    element.classList.add('open');
                    element.classList.add('active');
                    details.style.maxHeight = details.scrollHeight + 'px';
                }
            });

            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
    } else {
        categoryElements.forEach(element => {
            element.addEventListener('click', () => {
                categoryElements.forEach(el => el.classList.remove('active'));
                element.classList.add('active');

                const itemKey = element.getAttribute('data-item');
                updateCategoryCard(itemKey, lang, isMobile);
            });

            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const langToggle = document.getElementById('lang');
    if (!langToggle) {
        console.warn('Language toggle #lang not found');
        renderCategories('all');
        return;
    }

    updateLanguage(langToggle.checked);
    langToggle.addEventListener('change', () => updateLanguage(langToggle.checked));

    const filterButtons = document.querySelectorAll('.catalog-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const selectedCategory = button.getAttribute('data-category');
            renderCategories(selectedCategory);
        });
    });

    /* Встановлення фільтра "все" за замовчуванням */
    const allButton = document.querySelector('.catalog-filter[data-category="all"]');
    if (allButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        renderCategories('all');
    }
});

/* Оновлення мови інтерфейсу */
function updateLanguage(isUkrainian) {
    console.log('Updating language to:', isUkrainian ? 'uk' : 'en');
    const lang = isUkrainian ? 'uk' : 'en';
    const translatableElements = document.querySelectorAll('[data-i18n-key]');
    const scheduleLists = document.querySelectorAll('.about-us__working-hours');

    translatableElements.forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (!translations[key]) {
            console.warn(`Translation key ${key} not found in translations`);
            return;
        }

        if (element.tagName === 'IMG') {
            const imgUk = element.getAttribute('data-i18n-img-uk');
            const imgEn = element.getAttribute('data-i18n-img-en');
            if (imgUk && imgEn) {
                const newSrc = lang === 'uk' ? imgUk : imgEn;
                console.log(`Updating image ${key}: src=${newSrc}, alt=${translations[key][lang]}`);
                element.src = newSrc;
                element.alt = translations[key][lang];
            } else {
                console.warn(`Missing data-i18n-img-uk or data-i18n-img-en for ${key}`);
            }
        } else {
            element.textContent = translations[key][lang];
        }
    });

    const titleElement = document.querySelector('title');
    const titleKey = titleElement.getAttribute('data-i18n-key');
    if (titleKey && translations[titleKey]) {
        titleElement.textContent = translations[titleKey][lang];
    }

    scheduleLists.forEach(list => {
        list.style.display = list.getAttribute('data-lang') === lang ? 'block' : 'none';
    });

    const filterButtons = document.querySelectorAll('.catalog-filter');
    const allButton = document.querySelector('.catalog-filter[data-category="all"]');
    if (allButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        renderCategories('all');
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            updateCategoryCard('tshirt', lang);
        }
    }
}
