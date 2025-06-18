/* Масив перекладів інформації */
const translations = {
    "title": {
        uk: "MoveUp",
        en: "MoveUp"
    },
    "nav-main": {
        uk: "Головне",
        en: "Main"
    },
    "nav-promotions": {
        uk: "Акції",
        en: "Promotions"
    },
    "nav-catalog": {
        uk: "Про товари",
        en: "About Products"
    },
    "nav-about-us": {
        uk: "Про нас",
        en: "About Us"
    },
    "nav-contacts": {
        uk: "Контакти",
        en: "Contacts"
    },
    "header-title": {
        uk: "Магазин MoveUp",
        en: "MoveUp Store"
    },
    "header-description": {
        uk: "Запрошує вас на урочисте відкриття!",
        en: "Invites you to the grand opening!"
    },
    "about-us-title": {
        uk: "Загальна інформація про магазин",
        en: "General Information About the Store"
    },
    "about-us-description-1": {
        uk: "MoveUp — це сучасний магазин спортивного одягу, який пропонує стильні та зручні речі для активного способу життя. У нашому асортименті ви знайдете одяг, взуття та аксесуари для чоловіків, жінок і дітей.",
        en: "MoveUp is a modern sportswear store that offers stylish and comfortable items for an active lifestyle. In our assortment you will find clothes, shoes and accessories for men, women and children."
    },
    "about-us-description-2": {
        uk: "Завітайте до MoveUp та скористайтеся вигідними пропозиціями, сезонними знижками та консультацією наших фахівців. Ми допоможемо вам рухатися до своїх цілей комфортно та стильно!",
        en: "Visit MoveUp and take advantage of great deals, seasonal discounts and advice from our experts. We will help you move towards your goals comfortably and stylishly!"
    },
    "about-us-description-3": {
        uk: "В день відкриття магазину на вас чекають унікальні пропозиції, знижки та особливі подарунки для випадкових клієнтів!",
        en: "On the opening day of the store, you will find unique offers, discounts and special gifts for random customers!"
    },
    "about-us-opening-title": {
        uk: "Дата та час відкриття:",
        en: "Opening date and time:"
    },
    "about-us-opening-info": {
        uk: "25 червня, 10:00",
        en: "June 25, 10:00 a.m."
    },
    "about-us-address-title": {
        uk: "Адреса:",
        en: "Address:"
    },
    "about-us-address": {
        uk: "м. Дніпро, проспект Дмитра Яворницького, 52 (ТЦ ЦУМ, 4 поверх)",
        en: "Dmytra Yavornytskoho Ave, 52, Dnipro (TSUM shopping center, 4th floor))"
    },
    "about-us-phone-title": {
        uk: "Номера телефону:",
        en: "Phone numbers:"
    },
    "about-us-schedule-title": {
        uk: "Подальший графік роботи:",
        en: "Further work schedule:"
    },
    "schedule-monday": {
        uk: "Понеділок",
        en: "Monday"
    },
    "schedule-tuesday": {
        uk: "Вівторок",
        en: "Tuesday"
    },
    "schedule-wednesday": {
        uk: "Середа",
        en: "Wednesday"
    },
    "schedule-thursday": {
        uk: "Четвер",
        en: "Thursday"
    },
    "schedule-friday": {
        uk: "П’ятниця",
        en: "Friday"
    },
    "schedule-saturday": {
        uk: "Субота",
        en: "Saturday"
    },
    "schedule-sunday": {
        uk: "Неділя",
        en: "Sunday"
    },
    "promotions-title": {
        uk: "Новинки та акції",
        en: "New products and promotions"
    },
    "catalog-title": {
        uk: "Асортимент",
        en: "Assortment"
    },
    "catalog-description-1": {
        uk: "В даному блоці знаходиться інформація про наявні в магазині категорії товарів та розмірну сітку відповідних товарів.",
        en: "This block contains information about the product categories available in the store and the size chart of the corresponding products."
    },
    "catalog-description-2": {
        uk: "Розміри можуть варіюватися залежно від бренду та моделі одягу, для уточнення інформації звертайтеся до адміністратора магазину!",
        en: "Sizes may vary depending on the brand and model of clothing, please contact the store administrator for more information!"
    },
    "catalog-filter-all": {
        uk: "Все",
        en: "All"
    },
    "catalog-filter-tops": {
        uk: "Верх",
        en: "Tops"
    },
    "catalog-filter-bottoms": {
        uk: "Низ",
        en: "Bottoms"
    },
    "catalog-filter-footwear": {
        uk: "Взуття",
        en: "Shoes"
    },
    "catalog-filter-accessories": {
        uk: "Аксесуари",
        en: "Accessories"
    },
    "brands-title": {
        uk: "Бренди",
        en: "Brands"
    },
    "brands-description-1": {
        uk: "Магазин MoveUp співпрацює з наступними відомими на всесвітньому та українському ринках брендами.",
        en: "The MoveUp store cooperates with the following well-known brands on the world and Ukrainian markets."
    },
    "brands-description-2": {
        uk: "Продукцію зазначених брендів ви можете знайти на поличках магазину.",
        en: "You can find the products of these brands on the shelves of the store."
    },
    "history-title": {
        uk: "Історія та мета компанії",
        en: "History and purpose of the company"
    },
    "history-content-1": {
        uk: "Ідея створення магазину спортивного одягу MoveUp зародилася у непростий для країни час. Її засновник, Андрій Мельник — людина, яка свідомо обрала шлях покращення життя на своїй батьківщині. Після тривалих років роботи, Андрій усвідомив, що справжня незалежність країни базується не лише на кордонах чи політиці — вона народжується у власному виробництві, у розвитку національного бізнесу, у створенні українських брендів, які можуть конкурувати на світовому рівні та будуть мати попит серед українців.",
        en: "The idea of creating the MoveUp sportswear store came about at a difficult time for the country. Its founder, Andriy Melnyk, is a man who consciously chose to improve life in his homeland. After many years of work, Andriy realized that the country's true independence is not only based on borders or politics - it is born in its own production, in the development of national business, in the creation of Ukrainian brands that can compete on a global level and will be in demand among Ukrainians."
    },
    "history-content-2": {
        uk: "Андрій мріяв бачити більше компаній, які залишаються та розвиваються саме в Україні. Він прагнув створити бізнес, що не буде шукати легких шляхів за кордоном, а працюватиме тут — підтримуючи економіку, створюючи робочі місця та надихаючи інших підприємців. У його переконанні спорт — це не лише про фізичну форму. Це про характер, витривалість і постійний рух вперед, навіть у найважчі часи.",
        en: "Andriy dreamed of seeing more companies staying and growing in Ukraine. He wanted to create a business that would not look for easy ways abroad, but would work here - supporting the economy, creating jobs and inspiring other entrepreneurs. He believes that sport is not just about physical fitness. It's about character, endurance, and continually moving forward, even in the most difficult times."
    },
    "history-content-3": {
        uk: "Саме ці цінності стали основою для створення магазину MoveUp. Це простір, де поєднуються якість, відповідальність та любов до себе, бо ви заслуговуєте на спортивний одяг найкращої якості. Весь асортимент ретельно обирається серед надійних виробників, з якими власник будує чесні та довготривалі партнерські стосунки. Не часто зустрінеш власника, котрий від серця зацікавлений у процвітанні свого бренду та своєї країни.",
        en: "These values became the basis for the creation of the MoveUp store. It is a space where quality, responsibility and self-love are combined, because you deserve the best quality sportswear. The entire assortment is carefully selected among reliable manufacturers with whom the owner builds honest and long-term partnerships. It's not often that you meet an owner who is genuinely interested in the prosperity of his brand and his country."
    },
    "history-content-4": {
        uk: "Мета магазину MoveUp — розвивати національний ринок спортивного одягу, підтримувати українських виробників та надихати людей рухатися вперед. Ми віримо, що спорт об'єднує, формує характер і допомагає будувати сильну, самодостатню Україну. MoveUp — це не просто магазин. Це внесок у майбутнє.",
        en: "The goal of the MoveUp store is to develop the national sportswear market, support Ukrainian manufacturers and inspire people to move forward. We believe that sport unites, builds character and helps build a strong, self-sufficient Ukraine. MoveUp is not just a store. It is an investment in the future."
    },
    "history-content-5": {
        uk: "Спорт — це ключ до здорового та повноцінного життя. Регулярна фізична активність зміцнює серце, покращує обмін речовин, підтримує імунітет і допомагає знизити рівень стресу. Заняття спортом підвищують енергію, покращують настрій та формують сильний характер, навчаючи дисципліни та витривалості. Активний спосіб життя — це крок до фізичного і психологічного благополуччя, яке кожен може досягти, рухаючись вперед разом із MoveUp!",
        en: "Sport is the key to a healthy and fulfilling life. Regular physical activity strengthens the heart, improves metabolism, supports the immune system and helps reduce stress. Sports increase energy, improve mood and build strong character by teaching discipline and endurance. An active lifestyle is a step towards physical and psychological well-being that everyone can achieve by moving forward with MoveUp!"
    },
    "advantages-title": {
        uk: "Переваги",
        en: "Advantages"
    },
    "advantage-affordable-title": {
        uk: "Доступні ціни",
        en: "Affordable prices"
    },
    "advantage-affordable-text": {
        uk: "Ми пропонуємо оптимальне співвідношення ціни та якості, щоб спортивний одяг був доступним для кожного. Регулярні акції та знижки дозволяють ще більше заощаджувати.",
        en: "We offer an optimal price-quality ratio to make sportswear affordable for everyone. Regular promotions and discounts allow you to save even more."
    },
    "advantage-quality-title": {
        uk: "Якість та надійність",
        en: "Quality and reliability"
    },
    "advantage-quality-text": {
        uk: "У нашому магазині представлений лише спортивний одяг з якісних і зносостійких матеріалів, що забезпечують комфорт під час тренувань. Ми співпрацюємо з перевіреними виробниками, щоб гарантувати довговічність кожної моделі.",
        en: "Our store offers only sportswear made of high-quality and durable materials that provide comfort during training. We cooperate with trusted manufacturers to guarantee the durability of each model."
    },
    "advantage-range-title": {
        uk: "Широкий асортимент товарів",
        en: "A wide range of products"
    },
    "advantage-range-text": {
        uk: "В наявності одяг для різних видів спорту, сезонів та вікових категорій – від базових футболок до спеціалізованої екіпіровки. Кожен знайде щось для себе, незалежно від стилю чи потреб.",
        en: "We have clothes for different sports, seasons and age groups - from basic T-shirts to specialized equipment. Everyone will find something for themselves, regardless of style or needs."
    },
    "advantage-customer-title": {
        uk: "Орієнтація на клієнта",
        en: "Customer focus"
    },
    "advantage-customer-text": {
        uk: "Ми уважно прислухаємося до відгуків наших покупців і постійно вдосконалюємо асортимент та сервіс. Ваші побажання допомагають нам ставати кращими щодня!",
        en: "We listen closely to our customers' feedback and constantly improve our product range and service. Your suggestions help us to become better every day!"
    },
    "contacts-title": {
        uk: "Виникли питання? Задайте їх нам!",
        en: "Do you have any questions? Ask us!"
    },
    "contacts-call": {
        uk: "Телефонуйте:",
        en: "Call:"
    },
    "footer-description": {
        uk: "По питанням співпраці звертайтеся на пошту",
        en: "For cooperation, please contact"
    },
    "footer-social-title": {
        uk: "Ми в соціальних мережах:",
        en: "We are on social media:"
    },
    // Переклади для категорій
    "category-tshirt-name": {
        uk: "Футболки",
        en: "T-shirts"
    },
    "category-tshirt-description": {
        uk: "Зручні та практичні футболки, які ідеально підходять для повсякденного носіння. Виготовлені з якісних матеріалів для комфортного використання в будь-яку пору року. Різноманітність кольорів і розмірів дозволяє підібрати оптимальний варіант.",
        en: "Comfortable and practical T-shirts that are ideal for everyday wear. Made of quality materials for comfortable use at any time of the year. A variety of colors and sizes allows you to choose the best option."
    },
    "category-tshirt-tags": {
        uk: "Наявність: кольори - білий, чорний, сірий, хакі, синій, жовтий; розміри - XS, S, M, L, XL, XXL",
        en: "Availability: colors - white, black, gray, khaki, blue, yellow; sizes - XS, S, M, L, XL, XXL"
    },
    "category-tanktop-name": {
        uk: "Майки",
        en: "Tank Tops"
    },
    "category-tanktop-description": {
        uk: "Легкі та дихаючі майки, створені для активного способу життя. Підходять для занять спортом та повсякденного використання в теплу пору року. Виготовлені з м’яких матеріалів для максимального комфорту.",
        en: "Lightweight and breathable T-shirts designed for an active lifestyle. Suitable for sports and everyday use in the warm season. Made of soft materials for maximum comfort."
    },
    "category-tanktop-tags": {
        uk: "Наявність: кольори - білий, чорний, сірий, хакі, синій, жовтий; розміри - XS, S, M, L, XL, XXL",
        en: "Availability: colors - white, black, gray, khaki, blue, yellow; sizes - XS, S, M, L, XL, XXL"
    },
    "category-hoodie-name": {
        uk: "Толстовки",
        en: "Hoodies"
    },
    "category-hoodie-description": {
        uk: "Теплі та зручні толстовки, ідеальні для тренувань і щоденного носіння. Виготовлені з м’якого матеріалу, що забезпечує комфорт і збереження тепла. Має стильний дизайн та широкий вибір кольорів.",
        en: "Warm and comfortable sweatshirts, ideal for training and everyday wear. They are made of soft material that provides comfort and heat retention. Stylish design and a wide range of colors."
    },
    "category-hoodie-tags": {
        uk: "Наявність: кольори - білий, чорний, синій, сірий, хакі; розміри - XS, S, M, L, XL, XXL",
        en: "Availability: colors - white, black, blue, gray, khaki; sizes - XS, S, M, L, XL, XXL"
    },
    "category-windbreaker-name": {
        uk: "Вітровки",
        en: "Windbreakers"
    },
    "category-windbreaker-description": {
        uk: "Легкі вітровки, які надійно захищають від вітру і негоди. Ідеальні для спортивних занять на свіжому повітрі. Матеріали забезпечують водовідштовхувальні властивості та хорошу вентиляцію.",
        en: "Lightweight windbreakers that reliably protect against wind and weather. Ideal for outdoor sports activities. Materials provide water-repellent properties and good ventilation."
    },
    "category-windbreaker-tags": {
        uk: "Наявність: кольори - білий, чорний, синій, сірий, хакі; розміри - XS, S, M, L, XL, XXL",
        en: "Availability: colors - white, black, blue, gray, khaki; sizes - XS, S, M, L, XL, XXL"
    },
    "category-tops-name": {
        uk: "Топи",
        en: "Tops"
    },
    "category-tops-description": {
        uk: "Стильні та зручні топи для активного способу життя і тренувань. Легкі і дихаючі матеріали забезпечують комфорт під час фізичних навантажень. Підходять для різних видів спорту і повсякденного носіння.",
        en: "Stylish and comfortable tops for an active lifestyle and training. Lightweight and breathable materials provide comfort during physical activity. Suitable for various sports and everyday wear."
    },
    "category-tops-tags": {
        uk: "Наявність: кольори - білий, чорний, рожевий, сірий, хакі; розміри - XS, S, M, L, XL",
        en: "Availability: colors - white, black, pink, gray, khaki; sizes - XS, S, M, L, XL"
    },
    "category-leggings-name": {
        uk: "Легінси",
        en: "Leggings"
    },
    "category-leggings-description": {
        uk: "Еластичні легінси, що підтримують рухи під час тренувань і фітнесу. Виготовлені з дихаючих та швидковисихаючих матеріалів. Забезпечують комфорт та свободу рухів у будь-якій активності.",
        en: "Stretchy leggings that support movement during training and fitness. Made of breathable and quick-drying materials. Provide comfort and freedom of movement in any activity."
    },
    "category-leggings-tags": {
        uk: "Наявність: кольори - білий, чорний, бордовий, сірий, хакі; розміри - XS, S, M, L, XL",
        en: "Availability: colors - white, black, burgundy, gray, khaki; sizes - XS, S, M, L, XL"
    },
    "category-shorts-name": {
        uk: "Шорти",
        en: "Shorts"
    },
    "category-shorts-description": {
        uk: "Зручні спортивні шорти для тренувань та активного відпочинку. Легкі і дихаючі, забезпечують свободу рухів. Підходять для різних видів спорту та повсякденного використання.",
        en: "Comfortable sports shorts for training and outdoor activities. Lightweight and breathable, provide freedom of movement. Suitable for various sports and everyday use."
    },
    "category-shorts-tags": {
        uk: "Наявність: кольори - чорний, сірий, синій, хакі; розміри - XS, S, M, L, XL, XXL",
        en: "Availability: colors - black, gray, blue, khaki; sizes - XS, S, M, L, XL, XXL"
    },
    "category-pants-name": {
        uk: "Штани",
        en: "Pants"
    },
    "category-pants-description": {
        uk: "Спортивні штани для комфортних тренувань і повсякденного носіння. Виготовлені з міцних та дихаючих матеріалів. Підходять для активного відпочинку і спортивних занять.",
        en: "Sports pants for comfortable training and everyday wear. Made of durable and breathable materials. Suitable for outdoor activities and sports."
    },
    "category-pants-tags": {
        uk: "Наявність: кольори - білий, чорний, темносиній, сірий; розміри - XS, S, M, L, XL, XXL",
        en: "Availability: colors - white, black, navy blue, gray; sizes - XS, S, M, L, XL, XXL"
    },
    "category-swimwear-name": {
        uk: "Купальна білизна",
        en: "Swimwear"
    },
    "category-swimwear-description": {
        uk: "Якісна купальна білизна для комфортного плавання і відпочинку на воді. Виготовлена з швидковисихаючих матеріалів. Пропонує стильний дизайн і гарне прилягання.",
        en: "High-quality swimwear for comfortable swimming and relaxation on the water. Made of quick-drying materials. Offers stylish design and good fit."
    },
    "category-swimwear-tags": {
        uk: "Наявність: кольори - білий, синій, чорний, бірюзовий; розміри - XS, S, M, L, XL",
        en: "Availability: colors - white, blue, black, turquoise; sizes - XS, S, M, L, XL"
    },
    "category-runningShoes-name": {
        uk: "Бігові кросівки",
        en: "Running shoes"
    },
    "category-runningShoes-description": {
        uk: "Легкі кросівки, що забезпечують максимальну підтримку і амортизацію під час бігу. Ідеальні для бігунів будь-якого рівня. Виготовлені з дихаючих матеріалів для комфорту стопи.",
        en: "Lightweight running shoes that provide maximum support and cushioning while running. Ideal for runners of all levels. Made of breathable materials for foot comfort."
    },
    "category-runningShoes-tags": {
        uk: "Наявність: розміри - 35–47",
        en: "Availability: sizes - 35–47"
    },
    "category-basketballShoes-name": {
        uk: "Баскетбольні кросівки",
        en: "Basketball sneakers"
    },
    "category-basketballShoes-description": {
        uk: "Спеціальні кросівки для баскетболістів, які забезпечують підтримку і амортизацію. Надійні під час активних рухів і стрибків. Має зручну фіксацію ноги.",
        en: "Special sneakers for basketball players that provide support and cushioning. Reliable during active movements and jumps. Has a comfortable foot fixation."
    },
    "category-basketballShoes-tags": {
        uk: "Наявність: розміри - 38–47",
        en: "Availability: sizes - 38–47"
    },
    "category-footballCleats-name": {
        uk: "Футбольні бутси",
        en: "Football boots"
    },
    "category-footballCleats-description": {
        uk: "Футбольні бутси з підвищеною зчіпкою для впевненості на полі. Забезпечують комфорт і підтримку під час гри. Виготовлені для тривалого використання у спортивних умовах.",
        en: "Football boots with increased grip for confidence on the field. Provide comfort and support during the game. Made for long-term use in sports conditions."
    },
    "category-footballCleats-tags": {
        uk: "Наявність: розміри - 35–47",
        en: "Availability: sizes - 35–47"
    },
    "category-trainingShoes-name": {
        uk: "Тренувальні кросівки",
        en: "Training sneakers"
    },
    "category-trainingShoes-description": {
        uk: "Універсальні кросівки для різних видів тренувань і активностей. Комфортні і міцні, з гарною амортизацією. Підходять для залу та вуличних занять спортом.",
        en: "Universal sneakers for various types of training and activities. Comfortable and durable, with good cushioning. Suitable for indoor and outdoor sports."
    },
    "category-trainingShoes-tags": {
        uk: "Наявність: кольори - сірий, білий, чорний; розміри - 36–46",
        en: "Availability: colors - gray, white, black; sizes - 36–46"
    },
    "category-slippers-name": {
        uk: "Спортивні капці",
        en: "Sports slippers"
    },
    "category-slippers-description": {
        uk: "Комфортні капці для дому і відпочинку після тренувань. Легкі і дихаючі, забезпечують зручність у використанні. Ідеальні для розслаблення та відновлення.",
        en: "Comfortable slippers for home and relaxation after training. Lightweight and breathable, they are comfortable to wear. Ideal for relaxation and recovery."
    },
    "category-slippers-tags": {
        uk: "Наявність: кольори - чорний, синій; розміри - 35–45",
        en: "Availability: colors - black, blue; sizes - 35–45"
    },
    "category-socks-name": {
        uk: "Шкарпетки",
        en: "Socks"
    },
    "category-socks-description": {
        uk: "Дихаючі і зручні шкарпетки для спортивних занять. Забезпечують комфорт і підтримку під час активності. Виготовлені з якісних матеріалів, що швидко сохнуть.",
        en: "Breathable and comfortable socks for sports activities. Provide comfort and support during activity. Made of quality materials that dry quickly."
    },
    "category-socks-tags": {
        uk: "Наявність: кольори - білий, чорний, сірий; розміри - 35–46",
        en: "Availability: colors - white, black, gray; sizes - 35–46"
    },
    "category-headbands-name": {
        uk: "Пов'язки на голову",
        en: "Headbands"
    },
    "category-headbands-description": {
        uk: "Пов'язки, що утримують волосся і забезпечують комфорт під час тренувань. Легкі і зручні, не заважають рухам. Доступні в кількох кольорах для вибору.",
        en: "Headbands that hold hair and provide comfort during training. Lightweight and comfortable, do not hinder movement. Available in several colors to choose from."
    },
    "category-headbands-tags": {
        uk: "Наявність: кольори - чорний, рожевий, сірий",
        en: "Availability: colors - black, pink, gray"
    },
    "category-wristbands-name": {
        uk: "Пов'язки на зап'ястя",
        en: "Wrist bands"
    },
    "category-wristbands-description": {
        uk: "Пов'язки для підтримки зап'ястя та вбирання поту під час активних занять. Забезпечують додатковий комфорт і захист. Легкі та міцні, доступні у різних кольорах.",
        en: "Wrist bands to support the wrist and absorb sweat during active activities. Provide additional comfort and protection. Lightweight and durable, available in different colors."
    },
    "category-wristbands-tags": {
        uk: "Наявність: кольори - чорний, білий, червоний",
        en: "Availability: colors - black, white, red"
    },
    "category-kneePads-name": {
        uk: "Наколінники",
        en: "Knee pads"
    },
    "category-kneePads-description": {
        uk: "Захисні наколінники для безпеки під час тренувань і ігор. Забезпечують комфорт і підтримку колінних суглобів. Виготовлені з міцних матеріалів для тривалого використання.",
        en: "Protective knee pads for safety during training and games. Provide comfort and support for the knee joints. Made of durable materials for long-lasting use."
    },
    "category-kneePads-tags": {
        uk: "Наявність: кольори - чорний, сірий; розміри - M, L, XL",
        en: "Availability: colors - black, gray; sizes - M, L, XL"
    },
    "category-elbowPads-name": {
        uk: "Налокітники",
        en: "Elbow pads"
    },
    "category-elbowPads-description": {
        uk: "Налокітники для підтримки і захисту під час фізичних навантажень. Комфортні і надійні, підходять для різних видів спорту. Забезпечують безпеку та свободу рухів.",
        en: "Elbow pads for support and protection during physical activity. Comfortable and reliable, suitable for a variety of sports. Ensure safety and freedom of movement."
    },
    "category-elbowPads-tags": {
        uk: "Наявність: кольори - чорний, синій; розміри - S, M, L",
        en: "Availability: colors - black, blue; sizes - S, M, L"
    },
    "category-weightliftingBelts-name": {
        uk: "Пояси для важкої атлетики",
        en: "Belts for weightlifting"
    },
    "category-weightliftingBelts-description": {
        uk: "Пояси для надійної підтримки спини під час важких підйомів. Виготовлені з міцних матеріалів, що забезпечують стабільність. Важливий аксесуар для спортсменів і шанувальників важкої атлетики.",
        en: "Belts for reliable back support during heavy lifting. Made of durable materials to ensure stability. An essential accessory for athletes and weightlifting fans."
    },
    "category-weightliftingBelts-tags": {
        uk: "Наявність: кольори - чорний, коричневий; розміри - M, L, XL",
        en: "Availability: colors - black, brown; sizes - M, L, XL"
    },
    "category-sportsBags-name": {
        uk: "Спортивні сумки",
        en: "Sports bags"
    },
    "category-sportsBags-description": {
        uk: "Просторі та міцні сумки для зберігання спортивного спорядження. Зручні для перенесення речей на тренування або в поїздки. Доступні в різних кольорах і об’ємах.",
        en: "Spacious and durable bags for storing sports equipment. Convenient for carrying things to training or on trips. Available in different colors and volumes."
    },
    "category-sportsBags-tags": {
        uk: "Наявність: кольори - чорний, сірий, червоний; об'єм - 30л, 40л, 50л",
        en: "Availability: colors - black, gray, red; volume - 30l, 40l, 50l"
    },
    "category-sportsBackpacks-name": {
        uk: "Спортивні рюкзаки",
        en: "Sports backpacks"
    },
    "category-sportsBackpacks-description": {
        uk: "Зручні рюкзаки для перенесення речей під час тренувань і походів. Ергономічний дизайн і міцні матеріали забезпечують комфорт і довговічність. Пропонуються в різних кольорах і об’ємах.",
        en: "Comfortable backpacks for carrying things during training and hiking. Ergonomic design and durable materials ensure comfort and durability. Available in different colors and volumes."
    },
    "category-sportsBackpacks-tags": {
        uk: "Наявність: кольори - чорний, синій, зелений; об'єм - 20л, 30л, 40л",
        en: "Availability: colors - black, blue, green; volume - 20l, 30l, 40l"
    },
    "category-fitnessMats-name": {
        uk: "Килимки для фітнесу",
        en: "Fitness mats"
    },
    "category-fitnessMats-description": {
        uk: "Килимки для комфортних вправ і розтяжок під час тренувань. Виготовлені з якісних матеріалів, що забезпечують зчеплення і амортизацію. Доступні у різних кольорах і розмірах.",
        en: "Mats for comfortable exercises and stretches during training. Made of quality materials that provide grip and cushioning. Available in different colors and sizes."
    },
    "category-fitnessMats-tags": {
        uk: "Наявність: кольори - синій, рожевий, сірий; розміри - 180x60 см, 200x70 см",
        en: "Availability: colors - blue, pink, gray; sizes - 180x60 cm, 200x70 cm"
    },
    "promo-1": {
        uk: "Акція 1",
        en: "Promotion 1"
    },
    "promo-2": {
        uk: "Акція 2",
        en: "Promotion 2"
    },
    "promo-3": {
        uk: "Акція 3",
        en: "Promotion 3"
    }
};