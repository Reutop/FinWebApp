const fallbackData = {
    categories: ["Свежие яблоки"],
    promotions: [
        { id: 1, title: "Скидка 20% на новый урожай", image: "images/photo-1569529465841-dfecdab7503b.jpg" },
        { id: 2, title: "Акция 3+1 на все яблоки", image: "images/photo-1570913149827-d2ac84ab3f9a.jpg" },
        { id: 3, title: "Промокод за игру!", image: "images/photo-1647221598398-934ed5cb0e4f.avif" }
    ],
    products: [
        {
            id: 1, name: "Яблоки Голден Зеленое S", category: "Свежие яблоки", price: 150, popularity: 100, rating: 4.5,
            image: "images/photo-1606604830262-2e0732b12acc.avif", description: "Сладкие, десертные желто-зеленые яблоки с тонкой кожицей.",
            reviews: [
                { author: "Иван К.", text: "Очень сочные и вкусные яблоки! Рекомендую к покупке.", rating: 5, date: "12.05.2026" },
                { author: "Ольга С.", text: "Хорошие яблоки, крепкие. Немного кисловаты.", rating: 4, date: "24.05.2026" },
                { author: "Дмитрий В.", text: "Свежие, хрустящие, идеальный размер для перекуса.", rating: 5, date: "02.06.2026" },
                { author: "Елена М.", text: "Сладкие, кожица тонкая. Дети едят с удовольствием.", rating: 5, date: "10.06.2026" }
            ]
        },
        {
            id: 2, name: "Яблоки Гренни Смит Зеленое M", category: "Свежие яблоки", price: 180, popularity: 90, rating: 4.8,
            image: "images/photo-1567306226416-28f0efdc88ce.jpg", description: "Кислые, плотные и очень сочные зеленые яблоки.",
            reviews: [
                { author: "Елена В.", text: "Самый любимый сорт! Отличная кислинка и хруст.", rating: 5, date: "15.06.2026" },
                { author: "Алексей П.", text: "Идеально подходят для запекания и пирогов.", rating: 5, date: "16.06.2026" },
                { author: "Ирина К.", text: "Очень сочные, но для меня слишком кислые.", rating: 4, date: "17.06.2026" },
                { author: "Сергей М.", text: "Твердые, долго хранятся в холодильнике. Классика.", rating: 5, date: "18.06.2026" }
            ]
        },
        {
            id: 3, name: "Яблоки Гала Красное S", category: "Свежие яблоки", price: 160, popularity: 80, rating: 4.6,
            image: "images/photo-1512578659172-63a4634c05ec.avif", description: "Сладкие ароматные яблоки с приятным красным румянцем.",
            reviews: [
                { author: "Дмитрий Т.", text: "Ароматные и сочные яблоки. Не слишком твердые.", rating: 4, date: "18.06.2026" },
                { author: "Светлана Р.", text: "Приятный медовый вкус! Дети в восторге.", rating: 5, date: "19.06.2026" },
                { author: "Андрей К.", text: "Хорошие яблоки на каждый день, свежие.", rating: 4, date: "20.06.2026" },
                { author: "Татьяна Н.", text: "Очень нежная мякоть. Идеально для пюре.", rating: 5, date: "21.06.2026" }
            ]
        },
        {
            id: 4, name: "Яблоки Фуджи Красное M", category: "Свежие яблоки", price: 195, popularity: 75, rating: 4.9,
            image: "images/photo-1560806887-1e4cd0b6cbd6.jpg", description: "Хрустящие, плотные и очень сладкие яблоки с медовым послевкусием.",
            reviews: [
                { author: "Михаил Ю.", text: "Очень сладкие, сочные и хрустящие. Лучший сорт!", rating: 5, date: "11.06.2026" },
                { author: "Анна Ф.", text: "Привезли крупные, без повреждений. Очень довольна.", rating: 5, date: "12.06.2026" },
                { author: "Олег Д.", text: "Яблоки отличные, мякоть очень плотная.", rating: 5, date: "13.06.2026" },
                { author: "Кристина З.", text: "Сладкие, сока очень много. Буду заказывать еще.", rating: 5, date: "14.06.2026" }
            ]
        },
        {
            id: 5, name: "Яблоки Ред Делишес Красное L", category: "Свежие яблоки", price: 210, popularity: 70, rating: 4.4,
            image: "images/photo-1669295456118-e5982337c8d4.avif", description: "Крупные яблоки насыщенного темно-красного цвета с плотной мякотью.",
            reviews: [
                { author: "Мария А.", text: "Выглядят шикарно, глянцевые и крупные.", rating: 4, date: "20.06.2026" },
                { author: "Роман Л.", text: "Сладкие, но мякоть показалась немного рыхлой.", rating: 4, date: "21.06.2026" },
                { author: "Юлия Б.", text: "Кожица плотная, внутри сладкие, сочные.", rating: 5, date: "22.06.2026" },
                { author: "Виктор С.", text: "Красивые яблоки, отлично подходят для фруктовой тарелки.", rating: 5, date: "23.06.2026" }
            ]
        },
        {
            id: 6, name: "Яблоки Хани Крисп Желтое L", category: "Свежие яблоки", price: 250, popularity: 85, rating: 5.0,
            image: "images/premium_photo-1666353532984-89e22c4edc9b.avif", description: "Уникальный сорт с хрустящей, тающей во рту кисло-сладкой мякотью.",
            reviews: [
                { author: "Алина Г.", text: "Хруст невероятный! Действительно медовые яблоки.", rating: 5, date: "05.06.2026" },
                { author: "Денис К.", text: "Самые сочные яблоки из всех, что пробовал.", rating: 5, date: "06.06.2026" },
                { author: "Екатерина В.", text: "Дорогие, но полностью оправдывают свою цену.", rating: 5, date: "07.06.2026" },
                { author: "Владислав О.", text: "Очень сочные, с легкой кислинкой. Супер.", rating: 5, date: "08.06.2026" }
            ]
        },
        {
            id: 7, name: "Яблоки Пинк Леди Красное M", category: "Свежие яблоки", price: 220, popularity: 65, rating: 4.7,
            image: "images/photo-1569870499705-504209102861.jpg", description: "Изысканный сорт розово-красного цвета с пикантным кисло-сладким вкусом.",
            reviews: [
                { author: "Яна В.", text: "Очень красивый розовый оттенок и приятный свежий вкус.", rating: 5, date: "01.06.2026" },
                { author: "Павел Н.", text: "Кисло-сладкие, мякоть сочная и твердая.", rating: 5, date: "02.06.2026" },
                { author: "Оксана Л.", text: "Качественные яблоки, всегда свежие и хрустящие.", rating: 4, date: "03.06.2026" },
                { author: "Григорий Р.", text: "Отличный сорт, не приторный вкус.", rating: 5, date: "04.06.2026" }
            ]
        },
        {
            id: 8, name: "Яблоки Антоновка Зеленое L", category: "Свежие яблоки", price: 140, popularity: 60, rating: 4.5,
            image: "images/photo-1567306226416-28f0efdc88ce.jpg", description: "Традиционный русский сорт с сильным ароматом и выраженной кислинкой.",
            reviews: [
                { author: "Валерия К.", text: "Неповторимый аромат! Идеально для шарлотки.", rating: 5, date: "25.05.2026" },
                { author: "Тимур М.", text: "Кислые, душистые яблоки из детства.", rating: 5, date: "26.05.2026" },
                { author: "Наталья С.", text: "Для запекания с медом лучше сорта просто не найти.", rating: 5, date: "27.05.2026" },
                { author: "Артем Г.", text: "Свежие, ароматные, с легким восковым налетом.", rating: 4, date: "28.05.2026" }
            ]
        },
        {
            id: 9, name: "Яблоки Джонаголд Желтое M", category: "Свежие яблоки", price: 170, popularity: 55, rating: 4.3,
            image: "images/photo-1560806887-1e4cd0b6cbd6.jpg", description: "Крупные плоды с желто-оранжевой кожицей и сочной сладкой мякотью.",
            reviews: [
                { author: "Вероника Б.", text: "Приятный, слегка пряный вкус. Сочные.", rating: 5, date: "15.05.2026" },
                { author: "Артур Х.", text: "Сладкие яблоки, мякоть умеренно плотная.", rating: 4, date: "16.05.2026" },
                { author: "Ольга Ж.", text: "Хорошие яблоки, кожица тонкая.", rating: 4, date: "17.05.2026" },
                { author: "Леонид Т.", text: "Отличный сорт на каждый день.", rating: 5, date: "18.05.2026" }
            ]
        },
        {
            id: 10, name: "Яблоки Макинтош Красное S", category: "Свежие яблоки", price: 165, popularity: 50, rating: 4.5,
            image: "images/photo-1569870499705-504209102861.jpg", description: "Классический сорт с белоснежной сочной мякотью и конфетным ароматом.",
            reviews: [
                { author: "Дарья Н.", text: "Очень ароматные, с нежной белой мякотью.", rating: 5, date: "10.05.2026" },
                { author: "Егор Ф.", text: "Сладкие, с легкой кислинкой. Кожица жуется легко.", rating: 5, date: "11.05.2026" },
                { author: "Маргарита Ш.", text: "Мягкие и сочные яблоки, очень ароматные.", rating: 4, date: "12.05.2026" },
                { author: "Вячеслав Д.", text: "Идеальны для перекуса, небольшие и сладкие.", rating: 5, date: "13.05.2026" }
            ]
        }
    ]
};

const state = {
    user: null,
    cart: [],
    favorites: [],
    products: [],
    categories: [],
    promotions: [],
    recent: JSON.parse(localStorage.getItem('recent')) || [],
    theme: localStorage.getItem('theme') || 'light',
    access: JSON.parse(localStorage.getItem('access')) || { mode: null, fontSize: 'normal', noImages: false, noAnim: false },
    currentSlide: 0,
    isAuthMode: 'login',
    view: 'grid',
    limit: 10,
    appliedPromo: false,
    currentPage: 1,
    itemsPerPage: 9,
    filters: { category: 'all', priceMin: 0, price: 1000, search: '', sort: 'popular' },
    favSort: 'popular'
};

window.accessibilityModule = {
    apply() {
        const html = document.documentElement;
        html.removeAttribute('data-access');
        html.removeAttribute('data-font-size');
        html.removeAttribute('data-no-img');
        html.removeAttribute('data-no-anim');

        const a = state.access;
        if (a.mode) {
            html.setAttribute('data-access', a.mode);
        }
        if (a.fontSize !== 'normal') {
            html.setAttribute('data-font-size', a.fontSize);
        }
        if (a.noImages) {
            html.setAttribute('data-no-img', 'true');
        }
        if (a.noAnim) {
            html.setAttribute('data-no-anim', 'true');
        }
        localStorage.setItem('access', JSON.stringify(a));
        this.updateUI();
    },
    toggle() {
        if (state.access.mode) {
            state.access = { mode: null, fontSize: 'normal', noImages: false, noAnim: false };
        } else {
            state.access = { mode: 'bw', fontSize: 'large', noImages: false, noAnim: true };
        }
        this.apply();
    },
    setMode(mode) {
        state.access.mode = mode;
        this.apply();
    },
    setFontSize(size) {
        state.access.fontSize = size;
        this.apply();
    },
    toggleImages() {
        state.access.noImages = !state.access.noImages;
        this.apply();
    },
    toggleAnim() {
        state.access.noAnim = !state.access.noAnim;
        this.apply();
    },
    isActive() {
        return state.access.mode !== null;
    },
    updateUI() {
        const btn = document.getElementById('visionToggle');
        if (btn) {
            btn.textContent = this.isActive() ? '\u{1F532}' : '\u{1F441}';
            btn.title = this.isActive() ? 'Отключить режим для слабовидящих' : 'Версия для слабовидящих';
        }
        const panel = document.getElementById('accessPanel');
        if (!panel) return;
        const a = state.access;
        panel.querySelectorAll('[data-access-mode]').forEach(b => {
            b.classList.toggle('active', b.dataset.accessMode === (a.mode || ''));
        });
        panel.querySelectorAll('[data-font-opt]').forEach(b => {
            b.classList.toggle('active', b.dataset.fontOpt === a.fontSize);
        });
        const imgChk = panel.querySelector('#accessNoImg');
        if (imgChk) imgChk.checked = a.noImages;
        const animChk = panel.querySelector('#accessNoAnim');
        if (animChk) animChk.checked = a.noAnim;
    },
    togglePanel() {
        const panel = document.getElementById('accessPanel');
        if (panel) {
            panel.classList.toggle('open');
            if (panel.classList.contains('open')) this.updateUI();
        }
    }
};

const parseColor = (name) => {
    if (name.includes("Зеленое")) return "Зеленое";
    if (name.includes("Красное")) return "Красное";
    if (name.includes("Желтое")) return "Желтое";
    return "Натуральный";
};

const parseSize = (name) => {
    if (name.endsWith(" S") || name.includes(" S ")) return "Small";
    if (name.endsWith(" M") || name.includes(" M ")) return "Medium";
    if (name.endsWith(" L") || name.includes(" L ")) return "Large";
    if (name.endsWith(" Box") || name.includes(" Box ")) return "X-Large";
    return "Medium";
};

const isCartPage = () => window.location.pathname.includes('cart.html');

function updateRangeFill() {
    const fill = document.getElementById('rangeFill');
    const minInp = document.getElementById('filterPriceMin');
    const maxInp = document.getElementById('filterPrice');
    if (!fill || !minInp || !maxInp) return;
    const min = parseInt(minInp.value);
    const max = parseInt(maxInp.value);
    const total = parseInt(maxInp.max) - parseInt(maxInp.min);
    const leftPct = ((min - parseInt(maxInp.min)) / total) * 100;
    const rightPct = ((parseInt(maxInp.max) - max) / total) * 100;
    fill.style.left = leftPct + '%';
    fill.style.right = rightPct + '%';
}

function saveUserToDb() {
    if (!state.user) return;
    let db = JSON.parse(localStorage.getItem('users_db')) || [];
    const idx = db.findIndex(u => u.email === state.user.email);
    if (idx > -1) {
        state.user.cart = state.cart;
        state.user.favorites = state.favorites;
        db[idx] = state.user;
        localStorage.setItem('users_db', JSON.stringify(db));
    }
}

function updateCartCounter() {
    const countEl = document.getElementById('cartCount');
    if (countEl) {
        countEl.innerText = state.cart.reduce((s, i) => s + i.quantity, 0);
    }
}

window.closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
};

window.navigate = (page) => {
    const catalog = document.querySelector('.catalog-container');
    const profile = document.getElementById('profile-section');
    const promo = document.getElementById('promo-section');
    const recent = document.querySelector('.recent-viewed');
    const searchBar = document.querySelector('.search-bar');
    const popular = document.querySelector('.popular-section');

    if (page === 'profile') {
        if (catalog) catalog.style.display = 'none';
        if (promo) promo.style.display = 'none';
        if (recent) recent.style.display = 'none';
        if (popular) popular.style.display = 'none';
        if (profile) profile.style.display = 'block';
        if (searchBar) searchBar.style.display = 'none';
    } else {
        if (catalog) catalog.style.display = 'flex';
        if (promo) promo.style.display = 'block';
        if (recent) recent.style.display = 'block';
        if (popular) popular.style.display = 'block';
        if (profile) profile.style.display = 'none';
        if (searchBar) searchBar.style.display = 'block';
        catalogModule.render();
    }
};

window.resetFilters = () => {
    state.filters = { category: 'all', priceMin: 0, price: 1000, search: '', sort: 'popular' };
    state.currentPage = 1;

    const searchInp = document.getElementById('globalSearch');
    if (searchInp) searchInp.value = '';

    const priceInp = document.getElementById('filterPrice');
    if (priceInp) {
        priceInp.value = 1000;
        const priceVal = document.getElementById('priceVal');
        if (priceVal) priceVal.innerText = '1000';
    }
    const priceMinInp = document.getElementById('filterPriceMin');
    if (priceMinInp) {
        priceMinInp.value = 0;
        const priceMinVal = document.getElementById('priceMinVal');
        if (priceMinVal) priceMinVal.innerText = '0';
    }
    updateRangeFill();

    document.querySelectorAll('.swatch, .pill, .category-list li').forEach(el => {
        el.classList.remove('active');
    });

    const defaultSort = document.querySelector('#sortList li:first-child');
    if (defaultSort) defaultSort.classList.add('active');

    const defaultSize = document.querySelector('.size-pills .pill:nth-child(2)');
    if (defaultSize) defaultSize.classList.add('active');

    catalogModule.render();
};

window.toggleFilterSection = (titleElement) => {
    const section = titleElement.closest('.filter-section');
    if (section) section.classList.toggle('collapsed');
};

window.setFilterValue = (key, value, element) => {
    state.filters[key] = value;
    state.currentPage = 1;
    if (element) {
        const parent = element.parentElement;
        parent.querySelectorAll('.pill, li, .swatch').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
};

window.setSortValue = (value, element) => {
    state.filters.sort = value;
    state.currentPage = 1;
    if (element) {
        const parent = element.parentElement;
        parent.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    catalogModule.render();
};

window.toggleFavFromDetail = (id) => {
    catalogModule.toggleFav(id);
    showProductDetails(id);
};

function renderRecent() {
    const rec = document.getElementById('recentGrid');
    if (rec) rec.innerHTML = state.recent.map(p => `
        <div class="product-card" onclick="showProductDetails(${p.id})">
            <img src="${p.image}" style="height:80px">
            <p>${p.name}</p>
        </div>`).join('');
}

window.authModule = {
    renderForm() {
        const container = document.getElementById('authForms');
        const isLogin = state.isAuthMode === 'login';
        container.innerHTML = `
            <h2>${isLogin ? 'Вход' : 'Регистрация'}</h2>
            <div class="auth-form" style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
                ${!isLogin ? '<input type="text" id="authName" placeholder="Имя">' : ''}
                <input type="email" id="authEmail" placeholder="Email" value="liubovsheyda@gmail.com">
                <input type="password" id="authPass" placeholder="Пароль" value="Teacher_2026">
                <button class="btn-primary" onclick="authModule.submit()">${isLogin ? 'Войти' : 'Создать аккаунт'}</button>
            </div>
            <p class="auth-toggle" style="cursor:pointer; color:var(--accent-color); margin-top:10px" onclick="authModule.toggleMode()">
                ${isLogin ? 'Нет аккаунта? Регистрация' : 'Уже есть аккаунт? Войти'}
            </p>
        `;
    },
    toggleMode() {
        state.isAuthMode = state.isAuthMode === 'login' ? 'register' : 'login';
        this.renderForm();
    },
    submit() {
        const email = document.getElementById('authEmail').value.trim();
        const pass = document.getElementById('authPass').value;
        const isLogin = state.isAuthMode === 'login';

        if (!email || !pass) {
            alert("Заполните все поля!");
            return;
        }

        let db = JSON.parse(localStorage.getItem('users_db')) || [];

        if (isLogin) {
            const user = db.find(u => u.email === email && u.password === pass);
            if (user) {
                // Создаем новый токен и привязываем к сессии
                const token = generateToken(email);
                user.token = token;

                localStorage.setItem('authToken', token);
                localStorage.setItem('activeUserEmail', email);
                localStorage.setItem('users_db', JSON.stringify(db));
                location.reload();
            } else {
                alert("Неверный email или пароль!");
            }
        } else {
            const name = document.getElementById('authName')?.value.trim() || 'Пользователь';
            const userExists = db.some(u => u.email === email);
            if (userExists) {
                alert("Пользователь с таким email уже зарегистрирован!");
                return;
            }

            // Создаем токен при регистрации
            const token = generateToken(email);
            const newUser = {
                email: email,
                name: name,
                password: pass,
                description: 'Любитель яблок',
                cart: [],
                favorites: [],
                promocodes: [],
                token: token
            };

            db.push(newUser);
            localStorage.setItem('users_db', JSON.stringify(db));
            localStorage.setItem('authToken', token);
            localStorage.setItem('activeUserEmail', email);
            location.reload();
        }
    },
    logout() {
        localStorage.removeItem('activeUserEmail');
        localStorage.removeItem('authToken'); // Удаляем токен при логауте
        location.reload();
    }
};


window.cartModule = {
    add(id) {
        const p = state.products.find(x => x.id === id);
        const inCart = state.cart.find(x => x.id === id);
        if (inCart) inCart.quantity++;
        else state.cart.push({ ...p, quantity: 1 });
        this.update();
        alert("Добавлено в корзину!");
    },
    remove(id) {
        state.cart = state.cart.filter(x => x.id !== id);
        this.update();
    },
    changeQuantity(id, delta) {
        const item = state.cart.find(x => x.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity < 1) item.quantity = 1;
            this.update();
        }
    },
    update() {
        saveUserToDb();
        const countEl = document.getElementById('cartCount');
        if (countEl) countEl.innerText = state.cart.reduce((s, i) => s + i.quantity, 0);
        this.render();
    },
    applyPromo() {
        const input = document.getElementById('promoInput');
        if (input && input.value.toUpperCase() === "APPLE2026") {
            state.appliedPromo = true;
            alert("Promo code applied! 20% discount.");
            this.update();
        } else {
            alert("Invalid promo code");
        }
    },
    render() {
        const list = document.getElementById('cartList');
        if (list) {
            const total = state.cart.reduce((s, i) => s + i.price * i.quantity, 0);
            list.innerHTML = state.cart.map(i => `
                <div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:10px; align-items:center;">
                    <span>${i.name} x${i.quantity}</span>
                    <span>${i.price * i.quantity}₽</span>
                    <button onclick="cartModule.remove(${i.id})" style="background:none; border:none; cursor:pointer;">❌</button>
                </div>`).join('') || 'Корзина пуста';

            const totalPriceEl = document.getElementById('totalPrice');
            if (totalPriceEl) totalPriceEl.innerText = total;
        }

        const fullList = document.getElementById('fullCartList');
        if (fullList) {
            const subtotal = state.cart.reduce((s, i) => s + i.price * i.quantity, 0);
            const discount = state.appliedPromo ? subtotal * 0.2 : 0;
            const delivery = subtotal > 0 ? 15 : 0;
            const total = subtotal - discount + delivery;

            fullList.innerHTML = state.cart.map(i => `
                <div class="cart-item-card">
                    <img src="${i.image}" alt="${i.name}">
                    <div class="cart-item-info">
                        <div>
                            <h3>${i.name}</h3>
                            <p class="details" style="margin-top: 4px;">Size: <span style="color: #1a1a1a; font-weight: 500;">${parseSize(i.name)}</span></p>
                            <p class="details" style="margin-top: 2px;">Color: <span style="color: #1a1a1a; font-weight: 500;">${parseColor(i.name)}</span></p>
                        </div>
                        <p class="price" style="margin-top: 8px;">$${i.price}</p>
                    </div>
                    <button class="btn-remove" onclick="cartModule.remove(${i.id})">X</button>
                    <div class="quantity-control">
                        <button onclick="cartModule.changeQuantity(${i.id}, -1)">-</button>
                        <span>${i.quantity}</span>
                        <button onclick="cartModule.changeQuantity(${i.id}, 1)">+</button>
                    </div>
                </div>
            `).join('') || '<h2>Ваша корзина пуста</h2>';

            const subtotalPriceEl = document.getElementById('subtotalPrice');
            if (subtotalPriceEl) subtotalPriceEl.innerText = `$${subtotal}`;

            const discountPriceEl = document.getElementById('discountPrice');
            if (discountPriceEl) discountPriceEl.innerText = `-$${Math.round(discount)}`;

            const deliveryFeeEl = document.getElementById('deliveryFee');
            if (deliveryFeeEl) deliveryFeeEl.innerText = `$${delivery}`;

            const finalTotalPriceEl = document.getElementById('finalTotalPrice');
            if (finalTotalPriceEl) finalTotalPriceEl.innerText = `$${Math.round(total)}`;
        }
    },
    checkout() {
        // Безопасная проверка: сессия должна иметь валидный токен
        if (!state.user || !localStorage.getItem('authToken')) {
            return alert("Вы не авторизованы или срок действия сессии истек! Пожалуйста, войдите в профиль.");
        }
        if (state.cart.length === 0) return alert("Корзина пуста");

        // Расчет стоимости заказа
        const subtotal = state.cart.reduce((s, i) => s + i.price * i.quantity, 0);
        const discount = state.appliedPromo ? subtotal * 0.2 : 0;
        const delivery = subtotal > 0 ? 15 : 0;
        const total = subtotal - discount + delivery;

        // Формируем объект лога заказа
        const newOrder = {
            id: Math.floor(Math.random() * 900000) + 100000,
            date: new Date().toLocaleDateString('ru-RU'),
            items: state.cart.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
            totalPrice: Math.round(total),
            status: 'Оформлен'
        };

        if (!state.user.orders) state.user.orders = [];
        state.user.orders.push(newOrder);

        state.appliedPromo = false;
        saveUserToDb();

        alert("Заказ оформлен!");
        state.cart = [];
        this.update();

        if (document.getElementById('cartModal')) {
            closeModal('cartModal');
        }
    }

};

window.profileModule = {
    editingIndex: null, // Индекс редактируемого отзыва

    saveInfo() {
        const login = document.getElementById('profileLogin').value.trim();
        const pass = document.getElementById('profilePassword').value;
        const desc = document.getElementById('profileDesc').value;

        if (!login) {
            alert("Логин не может быть пустым!");
            return;
        }

        const oldEmail = localStorage.getItem('activeUserEmail');
        let db = JSON.parse(localStorage.getItem('users_db')) || [];

        if (login !== oldEmail && db.some(u => u.email === login)) {
            alert("Пользователь с таким логином/email уже существует!");
            return;
        }

        state.user.email = login;
        state.user.name = login;
        state.user.password = pass;
        state.user.description = desc;

        const idx = db.findIndex(u => u.email === oldEmail);
        if (idx > -1) {
            db[idx] = state.user;
            localStorage.setItem('users_db', JSON.stringify(db));
            localStorage.setItem('activeUserEmail', login);
        }

        const authBtn = document.getElementById('authBtn');
        if (authBtn) {
            authBtn.innerText = `Профиль (${login})`;
        }

        alert("Данные успешно сохранены в базе данных!");
    },

    switchTab(tab) {
        const content = document.getElementById('profileTabContent');
        if (!content) return;
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('onclick').includes(`'${tab}'`)) btn.classList.add('active');
        });

        if (tab === 'info') {
            const u = state.user;
            const loginVal = u.login || u.name || 'Преподаватель';
            const passwordVal = u.password || 'Teacher_2026';
            const descVal = u.description || 'Любитель яблок';

            content.innerHTML = `
                <h3>Мои данные</h3>
                <div class="profile-info-form" style="display:flex; flex-direction:column; gap:15px; margin-top:20px; max-width:400px;">
                    <div style="display:flex; flex-direction:column; gap:5px;">
                        <label style="font-weight:600; font-size:14px;">Логин:</label>
                        <input type="text" id="profileLogin" value="${loginVal}" style="padding:10px; border-radius:8px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--text-color); outline:none;">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:5px;">
                        <label style="font-weight:600; font-size:14px;">Пароль:</label>
                        <input type="password" id="profilePassword" value="${passwordVal}" style="padding:10px; border-radius:8px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--text-color); outline:none;">
                    </div>
                    <div style="display:flex; flex-direction:column; gap:5px;">
                        <label style="font-weight:600; font-size:14px;">Описание:</label>
                        <textarea id="profileDesc" rows="4" style="padding:10px; border-radius:8px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--text-color); resize:none; outline:none;">${descVal}</textarea>
                    </div>
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        <button class="btn-primary" onclick="profileModule.saveInfo()" style="width:auto; padding:10px 20px;">Сохранить</button>
                        <button class="btn-reset" onclick="authModule.logout()" style="width:auto; padding:10px 20px; margin:0;">Выйти</button>
                    </div>
                </div>
            `;
        } else if (tab === 'favs') {
            this.renderFavs();
        } else if (tab === 'orders') {
            const orders = state.user.orders || [];
            content.innerHTML = `
                <h3>Мои заказы</h3>
                <div style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
                    ${orders.length > 0 ? orders.map(o => `
                        <div style="background:var(--header-bg); border:1px solid var(--border-color); padding:15px; border-radius:12px; display:flex; flex-direction:column; gap:8px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:5px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
                                <span style="font-weight:700; font-size:14px; color:var(--text-color);">Заказ #${o.id}</span>
                                <span style="font-size:12px; color:#888;">${o.date}</span>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:5px; font-size:14px; margin:5px 0;">
                                ${o.items.map(item => `
                                    <div style="display:flex; justify-content:space-between; color:var(--text-color);">
                                        <span>${item.name} x${item.quantity}</span>
                                        <span style="font-weight:600;">$${item.price * item.quantity}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:8px; font-size:14px; margin-top:5px;">
                                <span style="font-weight:600; color:#2ecc71;">Статус: ${o.status}</span>
                                <span style="font-weight:800; font-size:16px; color:var(--text-color);">Итого: $${o.totalPrice}</span>
                            </div>
                        </div>
                    `).join('') : '<p style="color:#888;">История заказов пуста.</p>'}
                </div>
            `;
        } else if (tab === 'reviews') {
            const userReviews = state.user.reviews || [];
            content.innerHTML = `
                <h3>Мои отзывы</h3>
                <div style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
                    ${userReviews.length > 0 ? userReviews.map((r, idx) => {
                // Если данный отзыв сейчас редактируется, рендерим форму изменения
                if (this.editingIndex === idx) {
                    return `
                                <div style="background:var(--header-bg); border:1px solid var(--accent-color); padding:15px; border-radius:12px; display:flex; flex-direction:column; gap:10px;">
                                    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
                                        <span style="font-weight:700; font-size:14px; color:var(--text-color);">${r.productName || 'Товар'}</span>
                                        <span style="font-size:12px; color:#888;">${r.date}</span>
                                    </div>
                                    <div style="display:flex; align-items:center; gap:8px; font-size:14px;">
                                        <span>Ваша оценка:</span>
                                        <select id="editRatingSelect" style="padding:4px 8px; border-radius:8px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--text-color); outline:none; font-size:13px; cursor:pointer;">
                                            <option value="1" ${r.rating === 1 ? 'selected' : ''}>★☆☆☆☆ (1)</option>
                                            <option value="2" ${r.rating === 2 ? 'selected' : ''}>★★☆☆☆ (2)</option>
                                            <option value="3" ${r.rating === 3 ? 'selected' : ''}>★★★☆☆ (3)</option>
                                            <option value="4" ${r.rating === 4 ? 'selected' : ''}>★★★★☆ (4)</option>
                                            <option value="5" ${r.rating === 5 ? 'selected' : ''}>★★★★★ (5)</option>
                                        </select>
                                    </div>
                                    <textarea id="editReviewText" rows="2" style="padding:8px 12px; border-radius:8px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--text-color); resize:none; outline:none; font-size:13px; width:100%;">${r.text}</textarea>
                                    <div style="display:flex; gap:8px;">
                                        <button class="btn-primary" onclick="profileModule.saveReview(${idx})" style="width:auto; padding:6px 15px; font-size:12px;">Сохранить</button>
                                        <button class="btn-reset" onclick="profileModule.cancelEdit()" style="width:auto; padding:6px 15px; font-size:12px; margin:0;">Отмена</button>
                                    </div>
                                </div>
                            `;
                }
                // Обычный вид карточки отзыва в ЛК
                return `
                            <div style="background:var(--header-bg); border:1px solid var(--border-color); padding:15px; border-radius:12px; display:flex; flex-direction:column; gap:8px;">
                                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:5px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
                                    <span style="font-weight:700; font-size:14px; color:var(--text-color);">${r.productName || 'Товар'}</span>
                                    <span style="font-size:12px; color:#888;">${r.date}</span>
                                </div>
                                <div style="color:#f1c40f; font-size:14px;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                                <p style="font-size:14px; color:var(--text-color); margin:0; line-height:1.5;">${r.text}</p>
                                <div style="display:flex; gap:10px; margin-top:5px; border-top:1px solid var(--border-color); padding-top:8px;">
                                    <span style="font-size:12px; color:var(--accent-color); cursor:pointer; font-weight:600;" onclick="profileModule.editReview(${idx})">Редактировать</span>
                                    <span style="font-size:12px; color:#ff3333; cursor:pointer; font-weight:600;" onclick="profileModule.deleteReview(${idx})">Удалить</span>
                                </div>
                            </div>
                        `;
            }).join('') : '<p style="color:#888;">Вы еще не оставляли отзывов.</p>'}
        </div>
    `;
        } else if (tab === 'promos') {
            const promocodes = state.user.promocodes || [];
            content.innerHTML = `
                <h3>Ваши акции</h3>
                <div style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
                    ${promocodes.length > 0 ? promocodes.map(code => `
                        <div style="background:var(--header-bg); border:1px dashed var(--accent-color); padding:20px; border-radius:12px; display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <span style="font-weight:800; font-size:18px; color:var(--accent-color); letter-spacing:1px;">${code}</span>
                                <p style="margin:5px 0 0 0; font-size:13px; color:var(--text-color); opacity:0.7;">Промокод на скидку 20% на весь ассортимент яблок!</p>
                            </div>
                            <button onclick="navigator.clipboard.writeText('${code}'); alert('Промокод скопирован!');" style="background:var(--accent-color); color:#fff; border:none; padding:8px 16px; border-radius:20px; font-size:12px; font-weight:600; cursor:pointer;">Копировать</button>
                        </div>
                    `).join('') : '<p style="color:#888;">У вас пока нет активных промокодов. Сыграйте в мини-игру, чтобы выиграть скидку!</p>'}
                </div>
            `;
        } else if (tab === 'game') {
            content.innerHTML = `<h3>Мини-игра</h3><div id="gameStat">Собрано: 0</div><canvas id="gameCanvas" width="300" height="200" style="background:transparent; border-radius:10px; margin-top:10px; border:1px solid var(--border-color)"></canvas>`;
            gameModule.init();
        }
    },

    // Включает режим редактирования для отзыва
    editReview(idx) {
        this.editingIndex = idx;
        this.switchTab('reviews');
    },

    // Выход из режима редактирования
    cancelEdit() {
        this.editingIndex = null;
        this.switchTab('reviews');
    },

    // Сохраняет отредактированный отзыв в ЛК и в массиве товара
    saveReview(idx) {
        const userReviews = state.user.reviews || [];
        const r = userReviews[idx];
        if (!r) return;

        const newText = document.getElementById('editReviewText').value.trim();
        const newRating = parseInt(document.getElementById('editRatingSelect').value);

        if (!newText) {
            alert("Текст отзыва не может быть пустым!");
            return;
        }

        // 1. Обновляем отзыв в базе данных товаров (products_db)
        const p = state.products.find(x => x.id === r.productId);
        if (p && p.reviews) {
            // Находим исходный отзыв по автору и старому тексту
            const prodReview = p.reviews.find(rev => rev.author === state.user.name && rev.text === r.text);
            if (prodReview) {
                prodReview.text = newText;
                prodReview.rating = newRating;
                localStorage.setItem('products_db', JSON.stringify(state.products));
            }
        }

        // 2. Обновляем отзыв в личном кабинете пользователя (users_db)
        r.text = newText;
        r.rating = newRating;
        saveUserToDb();

        this.editingIndex = null;
        alert("Отзыв успешно изменен!");
        this.switchTab('reviews');
    },

    // Удаляет отзыв из ЛК и из базы данных товара
    deleteReview(idx) {
        const userReviews = state.user.reviews || [];
        const r = userReviews[idx];
        if (!r) return;

        if (confirm("Вы действительно хотите удалить этот отзыв?")) {
            // 1. Удаляем из отзывов товара в products_db
            const p = state.products.find(x => x.id === r.productId);
            if (p && p.reviews) {
                p.reviews = p.reviews.filter(rev => !(rev.author === state.user.name && rev.text === r.text));
                localStorage.setItem('products_db', JSON.stringify(state.products));
            }

            // 2. Удаляем из личного кабинета в users_db
            state.user.reviews.splice(idx, 1);
            saveUserToDb();

            alert("Отзыв успешно удален!");
            this.switchTab('reviews');
        }
    },

    changeFavSort(val) {
        state.favSort = val;
        this.renderFavs();
    },

    renderFavs() {
        const content = document.getElementById('profileTabContent');
        if (!content) return;

        let sortedFavs = [...state.favorites];
        const sortVal = state.favSort || 'popular';

        sortedFavs.sort((a, b) => {
            switch (sortVal) {
                case 'lowPrice': return a.price - b.price;
                case 'highPrice': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'popular':
                default: return b.popularity - a.popularity;
            }
        });

        content.innerHTML = `
            <div class="favs-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap: wrap; gap: 15px;">
                <h3 style="margin:0;">Избранные товары</h3>
                <div class="favs-sort" style="display:flex; align-items:center; gap:10px;">
                    <label for="favSortSelect" style="font-size:14px; font-weight:600; color:var(--text-color);">Сортировка:</label>
                    <select id="favSortSelect" onchange="profileModule.changeFavSort(this.value)" style="padding:8px 12px; border-radius:20px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--text-color); outline:none; font-size:14px; cursor:pointer;">
                        <option value="popular" ${sortVal === 'popular' ? 'selected' : ''}>Most Popular</option>
                        <option value="lowPrice" ${sortVal === 'lowPrice' ? 'selected' : ''}>Price: Low to High</option>
                        <option value="highPrice" ${sortVal === 'highPrice' ? 'selected' : ''}>Price: High to Low</option>
                        <option value="rating" ${sortVal === 'rating' ? 'selected' : ''}>Customer Rating</option>
                    </select>
                </div>
            </div>
            <div class="grid">
                ${sortedFavs.map(p => catalogModule.createCard(p)).join('') || '<p style="grid-column:1/-1; text-align:center; color:#888; padding: 20px 0;">Ваш список избранного пуст.</p>'}
            </div>
        `;
    }
};


const gameModule = {
    init() {
        const canvas = document.getElementById('gameCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let apple = { x: 150, y: 0, score: 0 };

        const loop = () => {
            if (!document.getElementById('gameCanvas')) return;
            ctx.clearRect(0, 0, 300, 200);
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.arc(apple.x, apple.y, 15, 0, 7);
            ctx.fill();

            apple.y += 2.5;
            if (apple.y > 200) {
                apple.y = 0;
                apple.x = Math.random() * 270 + 15;
            }
            requestAnimationFrame(loop);
        };

        canvas.onclick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            const dx = clickX - apple.x;
            const dy = clickY - apple.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= 20) {
                apple.score++;
                const statEl = document.getElementById('gameStat');
                if (statEl) statEl.innerText = `Собрано: ${apple.score}`;
                apple.y = 0;
                apple.x = Math.random() * 270 + 15;

                if (apple.score === 5) {
                    if (state.user) {
                        if (!state.user.promocodes) state.user.promocodes = [];
                        if (!state.user.promocodes.includes("APPLE2026")) {
                            state.user.promocodes.push("APPLE2026");
                            saveUserToDb();
                        }
                        alert("Поздравляем! Вы выиграли промокод: APPLE2026. Он сохранен в разделе 'Ваши акции'!");
                    } else {
                        alert("Поздравляем! Ваш промокод: APPLE2026. Войдите в профиль перед игрой, чтобы купоны сохранялись в личном кабинете!");
                    }
                }
            }
        };

        loop();
    }
};

window.catalogModule = {
    render() {
        const grid = document.getElementById('productGrid');
        if (!grid) return;

        let filtered = state.products.filter(p => {
            const matchCategory = state.filters.category === 'all' || p.category === state.filters.category;
            const matchPrice = p.price >= state.filters.priceMin && p.price <= state.filters.price;
            const matchSearch = p.name.toLowerCase().includes(state.filters.search.toLowerCase());
            return matchCategory && matchPrice && matchSearch;
        });

        filtered.sort((a, b) => {
            switch (state.filters.sort) {
                case 'lowPrice': return a.price - b.price;
                case 'highPrice': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'popular':
                default: return b.popularity - a.popularity;
            }
        });

        const totalPages = Math.ceil(filtered.length / state.itemsPerPage);
        if (state.currentPage > totalPages) state.currentPage = totalPages || 1;

        const start = (state.currentPage - 1) * state.itemsPerPage;
        const end = start + state.itemsPerPage;
        const itemsToRender = filtered.slice(start, end);

        grid.className = state.view === 'grid' ? 'grid' : 'grid list-view';
        grid.innerHTML = itemsToRender.length
            ? itemsToRender.map(p => this.createCard(p)).join('')
            : '<p>Товары не найдены</p>';

        this.renderPagination(totalPages);
    },
    createCard(p) {
        const isFav = state.favorites.some(f => f.id === p.id);
        return `
            <div class="product-card">
                <img src="${p.image}" onclick="showProductDetails(${p.id})">
                <div class="card-info">
                    <h4>${p.name}</h4>
                    <p class="price">${p.price}₽</p>
                    <div class="card-btns">
                        <button class="btn-primary" onclick="cartModule.add(${p.id})">Купить</button>
                        <button class="btn-fav ${isFav ? 'active' : ''}" onclick="catalogModule.toggleFav(${p.id})">❤</button>
                    </div>
                </div>
            </div>`;
    },
    renderPagination(total) {
        const container = document.getElementById('pagination');
        if (!container || total <= 1) {
            if (container) container.innerHTML = '';
            return;
        }

        let html = `
            <button class="page-btn" ${state.currentPage === 1 ? 'disabled' : ''} onclick="catalogModule.setPage(${state.currentPage - 1})">
                ← Назад
            </button>
            <div class="pagination-numbers">
        `;

        const cur = state.currentPage;

        if (total <= 7) {
            for (let i = 1; i <= total; i++) html += this.pageNumHtml(i);
        } else {
            html += this.pageNumHtml(1);
            if (cur > 3) html += '<span class="pagination-dots">...</span>';
            let start = Math.max(2, cur - 1);
            let end = Math.min(total - 1, cur + 1);
            if (cur <= 3) end = 4;
            if (cur >= total - 2) start = total - 3;
            for (let i = start; i <= end; i++) html += this.pageNumHtml(i);
            if (cur < total - 2) html += '<span class="pagination-dots">...</span>';
            html += this.pageNumHtml(total);
        }

        html += `
            </div>
            <button class="page-btn" ${state.currentPage === total ? 'disabled' : ''} onclick="catalogModule.setPage(${state.currentPage + 1})">
                Вперёд →
            </button>
        `;

        container.innerHTML = html;
    },
    pageNumHtml(n) {
        return `<div class="page-num ${state.currentPage === n ? 'active' : ''}" onclick="catalogModule.setPage(${n})">${n}</div>`;
    },
    setPage(n) {
        state.currentPage = n;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleFav(id) {
        const index = state.favorites.findIndex(x => x.id === id);
        if (index > -1) state.favorites.splice(index, 1);
        else state.favorites.push(state.products.find(x => x.id === id));
        saveUserToDb();

        this.render();
        renderPopularSlider();

        if (document.getElementById('profile-section') && document.getElementById('profile-section').style.display === 'block') {
            const activeTabBtn = document.querySelector('.profile-nav .tab-btn.active');
            if (activeTabBtn && activeTabBtn.getAttribute('onclick').includes('favs')) {
                profileModule.switchTab('favs');
            }
        }
    }
};

function renderPopularSlider() {
    const popularTrack = document.getElementById('popularSliderTrack');
    if (!popularTrack || !state.products || state.products.length === 0) return;

    const popularProducts = [...state.products]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 8);

    popularTrack.innerHTML = popularProducts.map(p => `
        <div class="swiper-slide" style="width: 250px; height: auto; box-sizing: border-box;">
            ${catalogModule.createCard(p)}
        </div>
    `).join('');

    if (typeof Swiper !== 'undefined') {
        if (window.popularSwiperInstance) {
            window.popularSwiperInstance.update();
        } else {
            window.popularSwiperInstance = new Swiper('.popularSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                navigation: {
                    nextEl: '.popular-swiper-btn-next',
                    prevEl: '.popular-swiper-btn-prev',
                },
            });
        }
    }
}

window.showProductDetails = (id) => {
    const p = state.products.find(x => x.id === id);
    if (!p) return;

    // Секция "Вы недавно смотрели"
    if (!state.recent.find(r => r.id === id)) {
        state.recent.unshift(p);
        if (state.recent.length > 4) state.recent.pop();
        localStorage.setItem('recent', JSON.stringify(state.recent));
        renderRecent();
    }

    // Сбрасываем индекс галереи при открытии нового товара
    state.activeDetailImageIndex = 0;

    // Генерируем массив из 3 уникальных изображений яблок для слайдера на основе пула
    const pool = [
        "images/photo-1569870499705-504209102861.jpg", // Сорт Гала
        "images/photo-1669295456118-e5982337c8d4.avif", // Сорт Гренни
        "images/photo-1619546813926-a78fa6372cd2.jpg", // Сорт Ред Делишес
        "images/photo-1569870499705-504209102861.jpg", // Сорт Голден
        "images/photo-1567306226416-28f0efdc88ce.jpg"  // Сорт Фуджи
    ];
    const additional = pool.filter(url => url !== p.image).slice(0, 2);
    const images = [p.image, ...additional];

    const productReviews = p.reviews || [];
    const isFav = state.favorites.some(f => f.id === p.id);

    document.getElementById('productDetailContent').innerHTML = `
        <!-- Основной контейнер карты товара -->
        <div style="display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;">
            
            <!-- Левая колонка: Интерактивная галерея со стрелочками и точками -->
            <div class="detail-image-box" style="flex: 1 1 250px; max-width: 100%; position: relative; user-select: none;">
                <img id="detailMainImg" src="${images[state.activeDetailImageIndex]}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: opacity 0.15s ease;">
                
                <!-- Стрелочки поверх изображения -->
                <div onclick="switchDetailImage(-1, ${p.id})" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; z-index: 5;">❮</div>
                <div onclick="switchDetailImage(1, ${p.id})" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; z-index: 5;">❯</div>
                
                <!-- Точечные индикаторы слайдов -->
                <div id="detailImageDots" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 5;">
                    ${images.map((_, i) => `
                        <div style="width: 8px; height: 8px; border-radius: 50%; background: ${i === state.activeDetailImageIndex ? 'var(--accent-color)' : 'rgba(255,255,255,0.5)'}; transition: background 0.2s;"></div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Правая колонка: Свойства и кнопки -->
            <div style="flex: 1.2 1 300px; display: flex; flex-direction: column; gap: 15px;">
                <h2 style="font-size: 28px; font-weight: 800; margin: 0; line-height: 1.2;">${p.name}</h2>
                <p style="color: var(--text-color); opacity: 0.7; font-size: 14px; line-height: 1.5; margin: 0;">${p.description}</p>
                <p style="font-size: 26px; font-weight: 900; margin: 5px 0 0 0; color: var(--accent-color);">${p.price}₽</p>
                
                <div style="display: flex; gap: 10px; margin-top: 5px; align-items: center;">
                    <button class="btn-primary" style="flex: 1; padding: 12px 24px; font-weight: 600; border-radius: 30px; font-size: 15px; width: auto;" onclick="cartModule.add(${p.id})">В корзину</button>
                    <button class="btn-fav ${isFav ? 'active' : ''}" style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; font-size: 20px; border-radius: 50%; padding: 0;" onclick="toggleFavFromDetail(${p.id})">❤</button>
                </div>
            </div>
        </div>

        <!-- Слайдер отзывов Swiper.js -->
        <div class="detail-reviews-box" style="margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 15px; max-width: 100%; overflow: hidden; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="font-size: 18px; font-weight: 800; margin: 0;">Отзывы покупателей</h3>
                ${productReviews.length > 0 ? `
                <div style="display: flex; gap: 8px;">
                    <div class="swiper-btn-prev" style="background: var(--header-bg); border: 1px solid var(--border-color); color: var(--text-color); width: 28px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; transition: opacity 0.2s; user-select: none;">❮</div>
                    <div class="swiper-btn-next" style="background: var(--header-bg); border: 1px solid var(--border-color); color: var(--text-color); width: 28px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; transition: opacity 0.2s; user-select: none;">❯</div>
                </div>
                ` : ''}
            </div>
            
            <div class="swiper reviewsSwiper" style="width: 100%; overflow: hidden;">
                <div class="swiper-wrapper">
                    ${productReviews.length > 0 ? productReviews.map(r => `
                        <div class="swiper-slide" style="width: 280px; height: auto; box-sizing: border-box;">
                            <div class="review-slide-card" style="background: var(--header-bg); border: 1px solid var(--border-color); padding: 15px; border-radius: 12px; display: flex; flex-direction: column; gap: 6px; height: 100%; box-sizing: border-box;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <strong style="font-size: 13px; color: var(--text-color);">${r.author}</strong>
                                    <span style="font-size: 11px; color: #888;">${r.date}</span>
                                </div>
                                <div style="color: #f1c40f; font-size: 12px;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                                <p style="font-size: 12px; color: var(--text-color); margin: 0; line-height: 1.4; height: 54px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${r.text}</p>
                            </div>
                        </div>
                    `).join('') : '<p style="color: #888; font-size: 13px; margin: 0;">У этого товара пока нет отзывов.</p>'}
                </div>
            </div>
        </div>

        <!-- Блок "Написать отзыв" -->
        <div class="write-review-box" style="margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 15px;">
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 10px;">Оставить отзыв</h3>
            ${state.user ? `
                <div style="display: flex; flex-direction: column; gap: 10px; max-width: 500px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 14px; font-weight: 600;">Ваша оценка:</span>
                        <div class="star-rating" style="display: flex; gap: 4px; font-size: 24px; cursor: pointer; user-select: none;">
                            <span class="star" data-value="1" style="color: #ccc; transition: color 0.1s;">★</span>
                            <span class="star" data-value="2" style="color: #ccc; transition: color 0.1s;">★</span>
                            <span class="star" data-value="3" style="color: #ccc; transition: color 0.1s;">★</span>
                            <span class="star" data-value="4" style="color: #ccc; transition: color 0.1s;">★</span>
                            <span class="star" data-value="5" style="color: #ccc; transition: color 0.1s;">★</span>
                        </div>
                        <input type="hidden" id="selectedRatingInput" value="0">
                    </div>
                    <textarea id="newReviewText" placeholder="Напишите ваш отзыв здесь..." rows="2" style="padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); resize: none; outline: none; font-size: 13px; width: 100%;"></textarea>
                    <button class="btn-primary" style="width: auto; align-self: flex-start; padding: 8px 20px; font-size: 13px;" onclick="submitReview(${p.id})">Опубликовать отзыв</button>
                </div>
            ` : `
                <p style="color: #888; font-size: 13px;">Пожалуйста, <span style="text-decoration: underline; cursor: pointer; color: var(--accent-color);" onclick="closeModal('productModal'); authModule.renderForm(); document.getElementById('authModal').style.display = 'block';">войдите в профиль</span>, чтобы оставить отзыв.</p>
            `}
        </div>
    `;
    document.getElementById('productModal').style.display = 'block';

    const stars = document.querySelectorAll('.star-rating .star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.onmouseover = () => {
            const val = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                const sVal = parseInt(s.getAttribute('data-value'));
                s.style.color = sVal <= val ? '#f1c40f' : '#ccc';
            });
        };
        star.onmouseout = () => {
            stars.forEach(s => {
                const sVal = parseInt(s.getAttribute('data-value'));
                s.style.color = sVal <= selectedRating ? '#f1c40f' : '#ccc';
            });
        };
        star.onclick = () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            document.getElementById('selectedRatingInput').value = selectedRating;
            stars.forEach(s => {
                const sVal = parseInt(s.getAttribute('data-value'));
                s.style.color = sVal <= selectedRating ? '#f1c40f' : '#ccc';
            });
        };
    });

    if (productReviews.length > 0 && typeof Swiper !== 'undefined') {
        setTimeout(() => {
            new Swiper('.reviewsSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 15,
                navigation: {
                    nextEl: '.swiper-btn-next',
                    prevEl: '.swiper-btn-prev',
                },
            });
        }, 50);
    }
};

// Функция переключения изображений в детальной карточке
window.switchDetailImage = (direction, productId) => {
    const p = state.products.find(x => x.id === productId);
    if (!p) return;

    const pool = [
        "images/photo-1569870499705-504209102861.jpg", // Сорт Гала
        "images/photo-1669295456118-e5982337c8d4.avif", // Сорт Гренни
        "images/photo-1619546813926-a78fa6372cd2.jpg", // Сорт Ред Делишес
        "images/photo-1569870499705-504209102861.jpg", // Сорт Голден
        "images/photo-1567306226416-28f0efdc88ce.jpg" 
    ];
    const additional = pool.filter(url => url !== p.image).slice(0, 2);
    const images = [p.image, ...additional];

    // Вычисляем новый индекс слайда
    state.activeDetailImageIndex = (state.activeDetailImageIndex + direction + images.length) % images.length;

    // Плавно обновляем картинку
    const imgEl = document.getElementById('detailMainImg');
    if (imgEl) {
        imgEl.style.opacity = '0.4';
        setTimeout(() => {
            imgEl.src = images[state.activeDetailImageIndex];
            imgEl.style.opacity = '1';
        }, 150);
    }

    // Обновляем состояние точек под картинкой
    const dotsContainer = document.getElementById('detailImageDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = images.map((_, i) => `
            <div style="width: 8px; height: 8px; border-radius: 50%; background: ${i === state.activeDetailImageIndex ? 'var(--accent-color)' : 'rgba(255,255,255,0.5)'}; transition: background 0.2s;"></div>
        `).join('');
    }
};

window.submitReview = (productId) => {
    if (!state.user) return alert("Пожалуйста, войдите в профиль!");

    const rating = parseInt(document.getElementById('selectedRatingInput').value);
    const text = document.getElementById('newReviewText').value.trim();

    if (rating === 0) return alert("Пожалуйста, выберите оценку!");
    if (!text) return alert("Пожалуйста, напишите текст отзыва!");

    const p = state.products.find(x => x.id === productId);
    if (!p) return;

    const newReview = {
        author: state.user.name,
        text: text,
        rating: rating,
        date: new Date().toLocaleDateString('ru-RU')
    };

    p.reviews = p.reviews || [];
    p.reviews.push(newReview);
    localStorage.setItem('products_db', JSON.stringify(state.products));

    if (!state.user.reviews) state.user.reviews = [];
    state.user.reviews.push({
        productId: p.id,
        productName: p.name,
        text: text,
        rating: rating,
        date: newReview.date
    });
    saveUserToDb();

    alert("Отзыв успешно добавлен!");
    showProductDetails(p.id);
};

function setupGlobalEvents() {
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.onclick = () => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        };
    }
    document.documentElement.setAttribute('data-theme', state.theme);

    const visionBtn = document.getElementById('visionToggle');
    if (visionBtn) {
        visionBtn.onclick = (e) => {
            e.stopPropagation();
            accessibilityModule.toggle();
        };
    }
    accessibilityModule.apply();

    document.addEventListener('click', (e) => {
        const panel = document.getElementById('accessPanel');
        const btn = document.getElementById('visionToggle');
        if (panel && panel.classList.contains('open') &&
            !panel.contains(e.target) && !btn.contains(e.target)) {
            panel.classList.remove('open');
        }
    });

    const authBtn = document.getElementById('authBtn');
    if (authBtn) {
        if (state.user) authBtn.innerText = `Профиль (${state.user.name})`;
        authBtn.onclick = (e) => {
            if (isCartPage()) return;
            e.preventDefault();
            if (state.user) {
                navigate('profile');
                profileModule.switchTab('info');
            } else {
                authModule.renderForm();
                document.getElementById('authModal').style.display = 'block';
            }
        };
    }

    const favBtn = document.querySelector('a[href="#favorites"]');
    if (favBtn) {
        favBtn.onclick = (e) => {
            if (isCartPage()) return;
            e.preventDefault();
            if (state.user) {
                navigate('profile');
                profileModule.switchTab('favs');
            } else {
                alert("Пожалуйста, войдите в профиль, чтобы посмотреть избранные товары.");
                authModule.renderForm();
                const authModal = document.getElementById('authModal');
                if (authModal) authModal.style.display = 'block';
            }
        };
    }

    if (!isCartPage()) {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.cursor = 'pointer';
            logo.onclick = () => {
                navigate('catalog');
            };
        }
    }
}

function initMainPage() {
    const track = document.getElementById('sliderTrack');
    if (track && state.promotions && state.promotions.length > 0) {
        track.innerHTML = state.promotions.map(p => `
            <div class="slide">
                <img src="${p.image}">
                <div class="slide-info">
                    <h2>${p.title}</h2>
                </div>
            </div>
        `).join('');

        let currentSlide = 0;
        const totalSlides = state.promotions.length;

        const updateSlider = () => {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        };

        const nextBtn = document.getElementById('nextSlide');
        const prevBtn = document.getElementById('prevSlide');

        if (nextBtn) {
            nextBtn.onclick = () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            };
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            };
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    }

    const catSelect = document.getElementById('filterCategory');
    if (catSelect && state.categories) {
        catSelect.innerHTML = '<option value="all">Все категории</option>' +
            state.categories.map(c => `<option value="${c}">${c}</option>`).join('');
        catSelect.onchange = (e) => {
            state.filters.category = e.target.value;
            state.currentPage = 1;
            catalogModule.render();
        };
    }

    const priceInp = document.getElementById('filterPrice');
    if (priceInp) {
        priceInp.oninput = (e) => {
            let val = parseInt(e.target.value);
            const minVal = parseInt(document.getElementById('filterPriceMin').value);
            if (val < minVal) { val = minVal; e.target.value = val; }
            state.filters.price = val;
            document.getElementById('priceVal').innerText = val;
            state.currentPage = 1;
            updateRangeFill();
        };
    }
    const priceMinInp = document.getElementById('filterPriceMin');
    if (priceMinInp) {
        priceMinInp.oninput = (e) => {
            let val = parseInt(e.target.value);
            const maxVal = parseInt(document.getElementById('filterPrice').value);
            if (val > maxVal) { val = maxVal; e.target.value = val; }
            state.filters.priceMin = val;
            document.getElementById('priceMinVal').innerText = val;
            state.currentPage = 1;
            updateRangeFill();
        };
    }
    updateRangeFill();

    const searchInp = document.getElementById('globalSearch');
    if (searchInp) {
        searchInp.oninput = (e) => {
            state.filters.search = e.target.value;
            state.currentPage = 1;
            catalogModule.render();
        };
    }

    const closeAuth = document.getElementById('closeAuth');
    if (closeAuth) closeAuth.onclick = () => closeModal('authModal');

    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';

    catalogModule.render();
    renderRecent();
    renderPopularSlider();
}

async function init() {
    let db = JSON.parse(localStorage.getItem('users_db')) || [];
    const activeEmail = localStorage.getItem('activeUserEmail');
    const token = localStorage.getItem('authToken'); // Получаем токен из localStorage

    // Автоматически создаем учетную запись преподавателя, если её еще нет
    const defaultEmail = "liubovsheyda@gmail.com";
    const hasDefault = db.some(u => u.email === defaultEmail);
    if (!hasDefault) {
        const defaultUser = {
            email: defaultEmail,
            name: "Преподаватель",
            password: "Teacher_2026",
            description: "Профиль по умолчанию для проверки проекта.",
            cart: [],
            favorites: [],
            reviews: [],
            promocodes: ["APPLE2026"],
            token: "" // Будет сгенерирован при входе
        };
        db.push(defaultUser);
        localStorage.setItem('users_db', JSON.stringify(db));
    }

    // Авторизация по токену: сверяем email и токен с записью в базе данных
    if (activeEmail && token) {
        const currentUser = db.find(u => u.email === activeEmail && u.token === token);
        if (currentUser) {
            state.user = currentUser;
            state.cart = currentUser.cart || [];
            state.favorites = currentUser.favorites || [];
        } else {
            // Если токен недействителен, сбрасываем авторизацию
            localStorage.removeItem('activeUserEmail');
            localStorage.removeItem('authToken');
        }
    } else {
        state.user = null;
        state.cart = [];
        state.favorites = [];
    }

    try {
        let localProducts = JSON.parse(localStorage.getItem('products_db'));
        if (localProducts && localProducts.length > 0) {
            state.products = localProducts;
            const res = await fetch('data.json');
            const data = await res.json();
            state.promotions = data.promotions;
            state.categories = data.categories;
        } else {
            const res = await fetch('data.json');
            const data = await res.json();
            state.products = data.products;
            state.promotions = data.promotions;
            state.categories = data.categories;
            state.products.forEach(p => {
                const fallbackProduct = fallbackData.products.find(f => f.id === p.id);
                if (fallbackProduct && fallbackProduct.reviews) {
                    p.reviews = fallbackProduct.reviews;
                }
            });
            localStorage.setItem('products_db', JSON.stringify(state.products));
        }
    } catch (e) {
        let localProducts = JSON.parse(localStorage.getItem('products_db'));
        if (localProducts && localProducts.length > 0) {
            state.products = localProducts;
        } else {
            state.products = fallbackData.products;
            localStorage.setItem('products_db', JSON.stringify(state.products));
        }
        state.promotions = fallbackData.promotions;
        state.categories = fallbackData.categories;
    }

    setupGlobalEvents();
    updateCartCounter();

    if (isCartPage()) {
        cartModule.render();
    } else {
        initMainPage();
    }
}

function generateToken(email) {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = dbPayload = btoa(JSON.stringify({ email: email, exp: Date.now() + 3600000 }));
    const signature = btoa(email.split('').reverse().join('')); // Фейковая подпись
    return `${header}.${payload}.${signature}`;
}


window.onload = init;