// ---------- Дані та збереження ----------

const STORAGE_DISHES = 'ration.dishes.v1';
const STORAGE_WEEKS = 'ration.weeks.v1';

const CATEGORIES = ['Сніданок', 'Вечеря', 'Рідке', 'Десерт'];

// [назва, категорія, ккал, білок (г), залізо (мг), оцінка]
const SEED_DISHES = [
  ['Гречка + яловичина тушкована з перцем', 'Вечеря', '430', '40', '6.5', '10'],
  ['Сочевична юшка з томатами + хліб', 'Рідке', '330', '21', '5.5–6', '9'],
  ['Булгур + яловичий стейк + квашена капуста', 'Вечеря', '500', '40', '6.5', '10'],
  ['Кускус + яловичина тушкована + томати', 'Вечеря', '445', '38', '5.5', '9'],
  ['Гречка + куряча грудка + броколі', 'Вечеря', '350', '40', '3.6', '6'],
  ['Нут тушкований з яловичиною в томатному соусі', 'Рідке', '540', '45', '9.2', '10'],
  ['Кіноа + індичка гриль + броколі й ківі', 'Вечеря', '455', '40', '5.4', '8'],
  ['Батат печений + печеня з яловичини + квашена капуста', 'Вечеря', '440', '38', '6', '9'],
  ['Сочевиця з куркою (легке каррі)', 'Рідке', '350', '28', '5.7', '9'],
  ['Гречка + яловичі котлети + перець', 'Вечеря', '450', '35', '6.1', '9'],
  ['Сочевичний суп з яловичиною і зеленню', 'Рідке', '350', '30', '8', '10'],
  ['Плов (яловичина/баранина, бурий рис, курага) + салат з томатів і лимоном', 'Вечеря', '580', '35', '6.5', '9'],
  ['Нут з яловичиною, рагу з томатами', 'Рідке', '540', '45', '9.2', '10'],
  ['Кускус + індичка + перець', 'Вечеря', '415', '35', '3', '6'],
  ['Лосось запечений + броколі й лимон', 'Вечеря', '315', '38', '1.5', '4'],
  ['Куряче стегно на грилі + салат з томатів і петрушки', 'Вечеря', '310', '32', '2', '5'],
  ['Індичка запечена + свіжий перець', 'Вечеря', '240', '35', '2.3', '5'],
  ['Курка гриль + салат зі шпинатом і апельсином', 'Вечеря', '280', '38', '3.8', '6'],
  ['Скумбрія запечена + свіжі томати', 'Вечеря', '330', '35', '2.7', '6'],
  ['Індичка запечена + шпинат, полуниця, лимон', 'Вечеря', '290', '35', '4.7', '7'],
  ['Курка + легкий салат', 'Вечеря', '230', '32', '1.4', '4'],
  ['Курка гриль + томати й цибуля', 'Вечеря', '230', '32', '1.4', '4'],
  ['Тунець-стейк + запечена брюссельська капуста', 'Вечеря', '300', '42', '2.9', '6'],
  ['Індичка запечена + шпинат', 'Вечеря', '290', '35', '4.7', '7'],
  ['Курка + капуста/броколі', 'Вечеря', '235', '33', '1.8', '4'],
  ['Сардини на тості + свіжий перець', 'Сніданок', '310', '28', '3.2', '7'],
  ['Індичка запечена + броколі й лимон', 'Вечеря', '255', '35', '2.7', '6'],
  ['Курка гриль + шпинат і апельсин', 'Вечеря', '280', '38', '3.8', '6'],
  ['Варені яйця + свіжий перець/огірок', 'Сніданок', '175', '13', '2.6', '6'],
  ['Тост з консервованим лососем + лимон', 'Сніданок', '260', '22', '1', '3'],
  ['Легкий омлет з томатами і зеленню', 'Сніданок', '200', '14', '2.7', '6'],
  ['Гарбузове насіння + ківі', 'Десерт', '215', '9', '2.6', '6'],
  ['Тост з консервованим лососем + помідор', 'Сніданок', '260', '22', '1.2', '3'],
  ['Варені яйця + перець', 'Сніданок', '175', '13', '2.7', '6'],
  ['Копчена курка (невелика порція) в салаті з огірком', 'Вечеря', '170', '22', '1.2', '3'],
  ['Гарбузове насіння + апельсин', 'Десерт', '215', '9', '2.6', '6'],
  ['Тост з консервованим лососем + огірок', 'Сніданок', '250', '22', '1.1', '3'],
  ['Омлет з яєць + шпинат', 'Сніданок', '220', '16', '3.75', '6'],
  ['Хумус з нуту + овочі', 'Сніданок', '200', '8', '2.7', '6'],
  ['Гарячий бутерброд з ковбасою під сиром (бонус раз на 2 тижні)', 'Вечеря', '510', '22', '2.1', '2'],
  ['Варені яйця + свіжі овочі', 'Сніданок', '175', '13', '2.7', '6'],
  ['Смажена хамса (анчоуси) з часником, лимоном і петрушкою', 'Вечеря', '250', '28', '4.9', '9'],
  ['Оселедець малосольний з цибулею у салаті з білою квасолею і зеленню', 'Вечеря', '330', '28', '3.8', '7'],
  ["Риб'яча юшка з тріскою (чи хеком), нутом і томатами", 'Рідке', '350', '30', '5.1', '9'],
  ['Кальмари на грилі з квасолевим салатом і лимонним соком', 'Вечеря', '400', '35', '5.1', '9'],
  ['Котлети з яловичого фаршу зі шпинатом + нутове пюре', 'Вечеря', '460', '43', '7.8', '10'],
  ['Теплий салат з яловичиною, шпинатом і гарбузовим насінням', 'Вечеря', '340', '41', '6.6', '9'],
  ['Яловичі реберця запечені з квасолею в томатному соусі', 'Вечеря', '630', '46', '8.1', '10'],
  ['Яловичина на грилі, теплий салат з нутом, шпинатом і гранатом', 'Вечеря', '475', '51', '8.7', '10'],
  ['Яловичий гуляш з квасолею, морквою і паприкою', 'Вечеря', '535', '48', '7.3', '9'],
].map(([name, category, kcal, protein, iron, rating], i) => ({
  id: 'seed-' + i,
  name,
  category,
  recipe: '',
  kcal,
  protein,
  iron,
  rating,
}));

const SEED_BY_ID = Object.fromEntries(SEED_DISHES.map((d) => [d.id, d]));
const NUTRITION_FIELDS = ['kcal', 'protein', 'iron', 'rating'];

function normalizeDish(dish) {
  if (!CATEGORIES.includes(dish.category)) {
    dish.category = (SEED_BY_ID[dish.id] || {}).category || 'Вечеря';
  }
  NUTRITION_FIELDS.forEach((field) => {
    if (!dish[field]) {
      dish[field] = (SEED_BY_ID[dish.id] || {})[field] || '';
    }
  });
  return dish;
}

function loadDishes() {
  const raw = localStorage.getItem(STORAGE_DISHES);
  if (!raw) {
    saveDishes(SEED_DISHES);
    return SEED_DISHES.slice();
  }
  const parsed = JSON.parse(raw).map(normalizeDish);
  const knownIds = new Set(parsed.map((d) => d.id));
  const newSeedDishes = SEED_DISHES.filter((d) => !knownIds.has(d.id));
  const merged = parsed.concat(newSeedDishes);
  saveDishes(merged);
  return merged;
}

function saveDishes(dishes) {
  localStorage.setItem(STORAGE_DISHES, JSON.stringify(dishes));
}

function loadWeeks() {
  const raw = localStorage.getItem(STORAGE_WEEKS);
  return raw ? JSON.parse(raw) : {};
}

function saveWeeks(weeks) {
  localStorage.setItem(STORAGE_WEEKS, JSON.stringify(weeks));
}

let dishes = loadDishes();
let weeks = loadWeeks();

// Готовий план на перші два тижні — застосовується лише якщо тиждень ще порожній
const DEFAULT_WEEK_PLAN = {
  '2026-08-24': [
    ['Гречка + яловичина тушкована з перцем', 'Лосось запечений + броколі й лимон', 'Варені яйця + свіжий перець/огірок'],
    ['Сочевична юшка з томатами + хліб', 'Котлети з яловичого фаршу зі шпинатом + нутове пюре', 'Тост з консервованим лососем + лимон'],
    ['Булгур + яловичий стейк + квашена капуста', 'Індичка запечена + свіжий перець', 'Легкий омлет з томатами і зеленню'],
    ['Кускус + яловичина тушкована + томати', 'Курка гриль + шпинат і апельсин', 'Гарбузове насіння + ківі'],
    ['Гречка + куряча грудка + броколі', 'Скумбрія запечена + свіжі томати', 'Тост з консервованим лососем + помідор'],
    ['Нут тушкований з яловичиною в томатному соусі', 'Індичка запечена + шпинат, полуниця, лимон', 'Варені яйця + перець'],
    ['Кіноа + індичка гриль + броколі й ківі', 'Теплий салат з яловичиною, шпинатом і гарбузовим насінням', 'Копчена курка (невелика порція) в салаті з огірком'],
  ],
  '2026-08-31': [
    ['Батат печений + печеня з яловичини + квашена капуста', 'Яловичі реберця запечені з квасолею в томатному соусі', 'Гарбузове насіння + апельсин'],
    ['Сочевиця з куркою (легке каррі)', 'Тунець-стейк + запечена брюссельська капуста', 'Тост з консервованим лососем + огірок'],
    ['Гречка + яловичі котлети + перець', 'Індичка запечена + шпинат', 'Омлет з яєць + шпинат'],
    ['Сочевичний суп з яловичиною і зеленню', 'Яловичина на грилі, теплий салат з нутом, шпинатом і гранатом', 'Хумус з нуту + овочі'],
    ['Плов (яловичина/баранина, бурий рис, курага) + салат з томатів і лимоном', 'Сардини на тості + свіжий перець', 'Гарячий бутерброд з ковбасою під сиром (бонус раз на 2 тижні)'],
    ['Яловичий гуляш з квасолею, морквою і паприкою', 'Індичка запечена + броколі й лимон', 'Варені яйця + свіжі овочі'],
    ['Кускус + індичка + перець', 'Курка гриль + шпинат і апельсин', 'Тост з консервованим лососем + лимон'],
  ],
};

function seedDefaultWeeks() {
  const nameToId = {};
  dishes.forEach((d) => {
    nameToId[d.name] = d.id;
  });
  const isAlreadyConfigured = (weekKey) =>
    weeks[weekKey] && weeks[weekKey].days.some((day) => day.meals.some((m) => m !== null));

  let changed = false;
  Object.entries(DEFAULT_WEEK_PLAN).forEach(([weekKey, days]) => {
    if (isAlreadyConfigured(weekKey)) return;
    weeks[weekKey] = {
      days: days.map((meals) => ({
        mealsCount: meals.length,
        meals: meals.map((name) => nameToId[name] || null),
      })),
    };
    changed = true;
  });
  if (changed) saveWeeks(weeks);
}

seedDefaultWeeks();

function nextDishId() {
  return 'd-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

function findDish(id) {
  return dishes.find((d) => d.id === id) || null;
}

// ---------- Дати / тиждень ----------

const DAY_NAMES = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];
const DEFAULT_MEAL_COUNT = 3;

function pad2(n) { return String(n).padStart(2, '0'); }

function toISODate(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

function mondayOfWeekInput(weekValue) {
  // weekValue формату "2026-W35"
  const [yearStr, wStr] = weekValue.split('-W');
  const year = parseInt(yearStr, 10);
  const week = parseInt(wStr, 10);
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dow = simple.getDay();
  const monday = new Date(simple);
  if (dow <= 4) {
    monday.setDate(simple.getDate() - dow + 1);
  } else {
    monday.setDate(simple.getDate() + 8 - dow);
  }
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function isoWeekValueForDate(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  const weekNo = 1 + Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${pad2(weekNo)}`;
}

function currentMonday() {
  const today = new Date();
  return mondayOfWeekInput(isoWeekValueForDate(today));
}

function getWeekDays(monday) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push(d);
  }
  return days;
}

function ensureWeekData(weekKey) {
  if (!weeks[weekKey]) {
    weeks[weekKey] = {
      days: Array.from({ length: 7 }, () => ({
        mealsCount: DEFAULT_MEAL_COUNT,
        meals: Array.from({ length: DEFAULT_MEAL_COUNT }, () => null),
      })),
    };
  }
  const wd = weeks[weekKey];
  wd.days.forEach((day) => {
    while (day.meals.length < day.mealsCount) day.meals.push(null);
    while (day.meals.length > day.mealsCount) day.meals.pop();
  });
  return wd;
}

// ---------- Стан UI ----------

let currentMondayDate = currentMonday();
let dishSearchTerm = '';
const expandedRecipeKeys = new Set();

// ---------- Рендер: Меню ----------

const weekPicker = document.getElementById('week-picker');
const weekRangeEl = document.getElementById('week-range');
const daysContainer = document.getElementById('days-container');

function formatRange(monday) {
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const fmt = (d) => `${pad2(d.getDate())}.${pad2(d.getMonth() + 1)}.${d.getFullYear()}`;
  return `${fmt(monday)} — ${fmt(sunday)}`;
}

function ratingBadge(dish) {
  return dish && dish.rating ? `⭐${dish.rating}/10` : '⭐—';
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderComboOptionsHTML(term, selectedId) {
  const t = term.trim().toLowerCase();
  let html = `<div class="combo-option ${!selectedId ? 'selected' : ''}" data-id="">— не обрано —</div>`;
  let anyMatch = !t;
  CATEGORIES.forEach((cat) => {
    const inCat = dishes
      .filter((d) => d.category === cat && (!t || d.name.toLowerCase().includes(t)))
      .sort((a, b) => a.name.localeCompare(b.name, 'uk'));
    if (!inCat.length) return;
    anyMatch = true;
    html += `<div class="combo-group-label">${escapeHTML(cat)}</div>`;
    inCat.forEach((d) => {
      const sel = d.id === selectedId ? 'selected' : '';
      html += `<div class="combo-option ${sel}" data-id="${d.id}"><span class="combo-rating">${ratingBadge(d)}</span><span class="combo-name">${escapeHTML(d.name)}</span></div>`;
    });
  });
  if (!anyMatch) html += '<div class="combo-empty">Нічого не знайдено</div>';
  return html;
}

function attachMealCombobox(wrapper, dayData, mealIndex) {
  const display = wrapper.querySelector('.meal-combo-display');
  const input = wrapper.querySelector('.meal-combo-input');
  const dropdown = wrapper.querySelector('.meal-combo-dropdown');

  const currentDish = () => {
    const id = dayData.meals[mealIndex];
    return id ? findDish(id) : null;
  };

  const openDropdown = (term) => {
    dropdown.innerHTML = renderComboOptionsHTML(term, dayData.meals[mealIndex]);
    dropdown.hidden = false;
  };

  const startEditing = () => {
    const dish = currentDish();
    display.hidden = true;
    input.hidden = false;
    input.value = dish ? dish.name : '';
    input.focus();
  };

  display.addEventListener('click', startEditing);
  display.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      startEditing();
    }
  });

  input.addEventListener('focus', () => {
    input.select();
    openDropdown('');
  });

  input.addEventListener('input', () => {
    openDropdown(input.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') input.blur();
  });

  dropdown.addEventListener('mousedown', (e) => {
    const opt = e.target.closest('.combo-option');
    if (!opt) return;
    e.preventDefault();
    const id = opt.dataset.id || null;
    dayData.meals[mealIndex] = id;
    saveWeeks(weeks);
    dropdown.hidden = true;
    renderDays();
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.hidden = true;
      input.hidden = true;
      display.hidden = false;
    }, 100);
  });
}

function renderDays() {
  const weekKey = toISODate(currentMondayDate);
  const weekData = ensureWeekData(weekKey);
  const weekDates = getWeekDays(currentMondayDate);

  daysContainer.innerHTML = '';

  weekDates.forEach((date, dayIndex) => {
    const dayData = weekData.days[dayIndex];
    const card = document.createElement('div');
    card.className = 'day-card';

    const header = document.createElement('div');
    header.className = 'day-card-header';
    header.innerHTML = `
      <div>
        <span class="day-title">${DAY_NAMES[dayIndex]}</span>
        <span class="day-date">${pad2(date.getDate())}.${pad2(date.getMonth() + 1)}</span>
      </div>
      <div class="meal-count-control">
        <label for="meal-count-${dayIndex}">Прийомів їжі:</label>
        <input type="number" id="meal-count-${dayIndex}" min="1" max="8" value="${dayData.mealsCount}">
      </div>
    `;
    card.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'meals-grid';

    dayData.meals.forEach((dishId, mealIndex) => {
      const slot = document.createElement('div');
      slot.className = 'meal-slot';
      const dish = dishId ? findDish(dishId) : null;
      const recipeKey = `${weekKey}-${dayIndex}-${mealIndex}`;
      const isExpanded = expandedRecipeKeys.has(recipeKey);
      slot.innerHTML = `
        <label>Прийом ${mealIndex + 1}</label>
        <div class="meal-combobox">
          <div class="meal-combo-display ${dish ? '' : 'empty'}" tabindex="0">${dish ? escapeHTML(dish.name) : 'Пошук страви...'}</div>
          <input type="text" class="meal-combo-input" autocomplete="off" placeholder="Пошук страви..." value="${dish ? escapeHTML(dish.name) : ''}" hidden>
          <div class="meal-combo-dropdown" hidden></div>
        </div>
        ${dish ? `
          <button type="button" class="meal-recipe-toggle" aria-expanded="${isExpanded}">
            <span>Рецепт</span>
            <span class="meal-recipe-arrow">${isExpanded ? '▲' : '▼'}</span>
          </button>
          ${isExpanded ? `<div class="meal-recipe ${dish.recipe ? '' : 'empty'}">${dish.recipe ? escapeHTML(dish.recipe) : 'Рецепт не додано'}</div>` : ''}
        ` : ''}
      `;
      grid.appendChild(slot);
      attachMealCombobox(slot.querySelector('.meal-combobox'), dayData, mealIndex);

      const recipeToggle = slot.querySelector('.meal-recipe-toggle');
      if (recipeToggle) {
        recipeToggle.addEventListener('click', () => {
          if (expandedRecipeKeys.has(recipeKey)) expandedRecipeKeys.delete(recipeKey);
          else expandedRecipeKeys.add(recipeKey);
          renderDays();
        });
      }
    });

    card.appendChild(grid);
    daysContainer.appendChild(card);

    header.querySelector('input[type="number"]').addEventListener('change', (e) => {
      let val = parseInt(e.target.value, 10);
      if (Number.isNaN(val) || val < 1) val = 1;
      if (val > 8) val = 8;
      dayData.mealsCount = val;
      while (dayData.meals.length < val) dayData.meals.push(null);
      while (dayData.meals.length > val) dayData.meals.pop();
      saveWeeks(weeks);
      renderDays();
    });
  });

  weekRangeEl.textContent = formatRange(currentMondayDate);
  weekPicker.value = isoWeekValueForDate(currentMondayDate);
}

weekPicker.addEventListener('change', () => {
  if (!weekPicker.value) return;
  currentMondayDate = mondayOfWeekInput(weekPicker.value);
  renderDays();
});

document.getElementById('prev-week').addEventListener('click', () => {
  currentMondayDate.setDate(currentMondayDate.getDate() - 7);
  renderDays();
});

document.getElementById('next-week').addEventListener('click', () => {
  currentMondayDate.setDate(currentMondayDate.getDate() + 7);
  renderDays();
});

// ---------- Рендер: Страви ----------

const categoriesContainer = document.getElementById('categories-container');
const dishSearch = document.getElementById('dish-search');
const dishForm = document.getElementById('dish-form');
const dishCategorySelect = document.getElementById('dish-category');

dishCategorySelect.innerHTML = CATEGORIES.map((c) => `<option value="${c}">${c}</option>`).join('');

const expandedDishIds = new Set();

function deleteDish(dish) {
  if (!confirm(`Видалити страву "${dish.name}"?`)) return;
  dishes = dishes.filter((d) => d.id !== dish.id);
  saveDishes(dishes);
  expandedDishIds.delete(dish.id);
  // прибираємо посилання на видалену страву з усіх тижнів
  Object.values(weeks).forEach((w) => {
    w.days.forEach((day) => {
      day.meals = day.meals.map((id) => (id === dish.id ? null : id));
    });
  });
  saveWeeks(weeks);
  renderDishes();
  renderDays();
}

function moveDishToCategory(dish, category) {
  if (dish.category === category) return;
  dish.category = category;
  saveDishes(dishes);
  renderDishes();
  renderDays();
}

function renderDishRow(dish) {
  const row = document.createElement('div');
  row.className = 'dish-row';
  row.draggable = true;
  row.dataset.id = dish.id;

  const main = document.createElement('div');
  main.className = 'dish-row-main';
  main.innerHTML = `
    <span class="drag-handle">⠿</span>
    <button type="button" class="dish-row-name">${escapeHTML(dish.name)}</button>
    <select class="dish-move-select">
      ${CATEGORIES.map((c) => `<option value="${c}" ${c === dish.category ? 'selected' : ''}>${c}</option>`).join('')}
    </select>
    <button type="button" class="dish-row-delete" title="Видалити">✕</button>
  `;
  row.appendChild(main);

  const meta = document.createElement('div');
  meta.className = 'dish-row-meta';
  meta.innerHTML = `
    <span class="stat-chip" title="Калорійність">🔥 ${dish.kcal ? '~' + escapeHTML(dish.kcal) : '—'} ккал</span>
    <span class="stat-chip" title="Білок">🥩 ${dish.protein ? '~' + escapeHTML(dish.protein) : '—'} г</span>
    <span class="stat-chip" title="Залізо">🩸 ${dish.iron ? '~' + escapeHTML(dish.iron) : '—'} мг</span>
    <span class="stat-chip stat-chip-rating" title="Оцінка">⭐ ${dish.rating ? escapeHTML(dish.rating) + '/10' : '—'}</span>
  `;
  row.appendChild(meta);

  main.querySelector('.dish-row-name').addEventListener('click', () => {
    if (expandedDishIds.has(dish.id)) expandedDishIds.delete(dish.id);
    else expandedDishIds.add(dish.id);
    renderDishes();
  });

  main.querySelector('.dish-move-select').addEventListener('change', (e) => {
    moveDishToCategory(dish, e.target.value);
  });

  main.querySelector('.dish-row-delete').addEventListener('click', () => deleteDish(dish));

  if (expandedDishIds.has(dish.id)) {
    const expanded = document.createElement('div');
    expanded.className = 'dish-row-expanded';
    expanded.innerHTML = `
      <input type="text" class="dish-name-input" value="${escapeHTML(dish.name)}">
      <textarea class="dish-recipe-input" rows="3" placeholder="Рецепт приготування...">${escapeHTML(dish.recipe || '')}</textarea>
      <div class="dish-nutrition-inputs">
        <label>Ккал <input type="text" class="dish-kcal-input" value="${escapeHTML(dish.kcal || '')}" placeholder="напр. 350"></label>
        <label>Білок, г <input type="text" class="dish-protein-input" value="${escapeHTML(dish.protein || '')}" placeholder="напр. 30"></label>
        <label>Залізо, мг <input type="text" class="dish-iron-input" value="${escapeHTML(dish.iron || '')}" placeholder="напр. 5.5"></label>
        <label>Оцінка (1-10) <input type="text" class="dish-rating-input" value="${escapeHTML(dish.rating || '')}" placeholder="напр. 8"></label>
      </div>
    `;
    expanded.querySelector('.dish-name-input').addEventListener('change', (e) => {
      dish.name = e.target.value.trim() || dish.name;
      saveDishes(dishes);
      renderDishes();
      renderDays();
    });
    expanded.querySelector('.dish-recipe-input').addEventListener('change', (e) => {
      dish.recipe = e.target.value;
      saveDishes(dishes);
      renderDays();
    });
    expanded.querySelector('.dish-kcal-input').addEventListener('change', (e) => {
      dish.kcal = e.target.value.trim();
      saveDishes(dishes);
      renderDishes();
    });
    expanded.querySelector('.dish-protein-input').addEventListener('change', (e) => {
      dish.protein = e.target.value.trim();
      saveDishes(dishes);
      renderDishes();
    });
    expanded.querySelector('.dish-iron-input').addEventListener('change', (e) => {
      dish.iron = e.target.value.trim();
      saveDishes(dishes);
      renderDishes();
    });
    expanded.querySelector('.dish-rating-input').addEventListener('change', (e) => {
      dish.rating = e.target.value.trim();
      saveDishes(dishes);
      renderDishes();
    });
    row.appendChild(expanded);
  }

  row.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', dish.id);
    e.dataTransfer.effectAllowed = 'move';
    row.classList.add('dragging');
  });
  row.addEventListener('dragend', () => row.classList.remove('dragging'));

  return row;
}

function renderDishes() {
  const term = dishSearchTerm.trim().toLowerCase();
  const matches = (d) => !term || d.name.toLowerCase().includes(term) || (d.category || '').toLowerCase().includes(term);

  categoriesContainer.innerHTML = '';

  CATEGORIES.forEach((category) => {
    const inCat = dishes
      .filter((d) => d.category === category && matches(d))
      .sort((a, b) => a.name.localeCompare(b.name, 'uk'));

    const column = document.createElement('div');
    column.className = 'category-column';
    column.dataset.category = category;

    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `<h3>${escapeHTML(category)}</h3><span class="category-count">${inCat.length}</span>`;
    column.appendChild(header);

    const rows = document.createElement('div');
    rows.className = 'dish-rows';
    if (!inCat.length) {
      rows.innerHTML = '<div class="empty-hint">Немає страв</div>';
    } else {
      inCat.forEach((dish) => rows.appendChild(renderDishRow(dish)));
    }
    column.appendChild(rows);

    column.addEventListener('dragover', (e) => {
      e.preventDefault();
      column.classList.add('drag-over');
    });
    column.addEventListener('dragleave', () => column.classList.remove('drag-over'));
    column.addEventListener('drop', (e) => {
      e.preventDefault();
      column.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const dish = findDish(id);
      if (dish) moveDishToCategory(dish, category);
    });

    categoriesContainer.appendChild(column);
  });
}

dishSearch.addEventListener('input', (e) => {
  dishSearchTerm = e.target.value;
  renderDishes();
});

dishForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('dish-name');
  const recipeInput = document.getElementById('dish-recipe');
  const kcalInput = document.getElementById('dish-kcal');
  const proteinInput = document.getElementById('dish-protein');
  const ironInput = document.getElementById('dish-iron');
  const ratingInput = document.getElementById('dish-rating');

  const name = nameInput.value.trim();
  if (!name) return;

  dishes.push({
    id: nextDishId(),
    name,
    category: dishCategorySelect.value,
    recipe: recipeInput.value.trim(),
    kcal: kcalInput.value.trim(),
    protein: proteinInput.value.trim(),
    iron: ironInput.value.trim(),
    rating: ratingInput.value.trim(),
  });
  saveDishes(dishes);

  nameInput.value = '';
  recipeInput.value = '';
  kcalInput.value = '';
  proteinInput.value = '';
  ironInput.value = '';
  ratingInput.value = '';
  dishCategorySelect.value = CATEGORIES[0];

  renderDishes();
  renderDays();
});

// ---------- Топ-100 продуктів за вмістом заліза ----------

// [ранг, продукт, категорія, форма, залізо мг/100г]
const IRON_TOP100 = [
  [1, 'Чебрець сушений', 'Спеції та сушена зелень', 'сушений', 123.6],
  [2, 'Базилік сушений', 'Спеції та сушена зелень', 'сушений', 89.8],
  [3, 'М\'ята сушена', 'Спеції та сушена зелень', 'сушена', 87.5],
  [4, 'Майоран сушений', 'Спеції та сушена зелень', 'сушений', 82.7],
  [5, 'Кмин (зіра) мелений', 'Спеції та сушена зелень', 'мелений', 66.4],
  [6, 'Кріп сушений', 'Спеції та сушена зелень', 'сушений', 48.8],
  [7, 'Лавровий лист', 'Спеції та сушена зелень', 'сушений', 43.0],
  [8, 'Куркума мелена', 'Спеції та сушена зелень', 'мелена', 41.4],
  [9, 'Орегано сушений', 'Спеції та сушена зелень', 'сушений', 36.8],
  [10, 'Білі гриби сушені', 'Гриби та водорості', 'сушені', 35.0],
  [11, 'Каррі порошок', 'Спеції та сушена зелень', 'суміш спецій', 29.5],
  [12, 'Спіруліна суха', 'Гриби та водорості', 'порошок', 28.5],
  [13, 'Молюски (венус), консервовані', 'Морепродукти', 'консервовані', 28.0],
  [14, 'Серцевидки (кокли)', 'Морепродукти', 'варені', 24.0],
  [15, 'Петрушка сушена', 'Спеції та сушена зелень', 'сушена', 22.0],
  [16, 'Паприка мелена', 'Спеції та сушена зелень', 'мелена', 21.1],
  [17, 'Кров\'яна ковбаса', 'М\'ясо та субпродукти', 'готова', 20.0],
  [18, 'Свиняча печінка', 'Печінка та субпродукти', 'варена', 18.0],
  [19, 'Чилі порошок', 'Спеції та сушена зелень', 'мелений', 17.3],
  [20, 'Кунжут смажений', 'Горіхи та насіння', 'смажений', 14.8],
  [21, 'Какао-порошок несолодкий', 'Шоколад та какао', 'порошок', 13.9],
  [22, 'Гриби сморчки (зморшки)', 'Гриби та водорості', 'сирі', 12.2],
  [23, 'Гіркий шоколад 85-100%', 'Шоколад та какао', 'готовий', 11.9],
  [24, 'Норі сушені (водорості)', 'Гриби та водорості', 'сушені', 11.9],
  [25, 'Гвоздика мелена', 'Спеції та сушена зелень', 'мелена', 11.8],
  [26, 'Куряча печінка', 'Печінка та субпродукти', 'варена', 11.6],
  [27, 'Ліверна ковбаса (паштет)', 'М\'ясо та субпродукти', 'готова', 11.2],
  [28, 'Каракатиця', 'Морепродукти', 'варена', 10.8],
  [29, 'Пшеничні висівки', 'Зернові', 'сирі', 10.6],
  [30, 'Чорний перець мелений', 'Спеції та сушена зелень', 'мелений', 9.7],
  [31, 'Восьминіг', 'Морепродукти', 'варений', 9.5],
  [32, 'Устриці', 'Морепродукти', 'варені', 9.2],
  [33, 'Зародки пшениці', 'Зернові', 'підсмажені', 9.1],
  [34, 'Кориця мелена', 'Спеції та сушена зелень', 'мелена', 8.3],
  [35, 'Гарбузове насіння смажене', 'Горіхи та насіння', 'смажене', 8.1],
  [36, 'Яловичі нирки', 'Печінка та субпродукти', 'варені', 7.9],
  [37, 'Конопляне насіння', 'Горіхи та насіння', 'лущене', 7.9],
  [38, 'Насіння чіа', 'Горіхи та насіння', 'сире', 7.7],
  [39, 'Мідії', 'Морепродукти', 'варені', 6.7],
  [40, 'Кеш\'ю', 'Горіхи та насіння', 'сирий', 6.7],
  [41, 'Яловича печінка', 'Печінка та субпродукти', 'варена', 6.5],
  [42, 'Гіркий шоколад 70%', 'Шоколад та какао', 'готовий', 6.5],
  [43, 'Абрикоси сушені (дегідровані)', 'Сухофрукти', 'дегідровані', 6.3],
  [44, 'Насіння льону', 'Горіхи та насіння', 'сире', 5.7],
  [45, 'Кедрові горіхи', 'Горіхи та насіння', 'сирі', 5.5],
  [46, 'Тофу твердий (з кальцієм)', 'Соєві продукти', 'твердий', 5.4],
  [47, 'Соя варена', 'Бобові', 'варена', 5.1],
  [48, 'Морський равлик (whelk)', 'Морепродукти', 'сирий/варений', 5.0],
  [49, 'Шовковиця сушена', 'Сухофрукти', 'сушена', 5.0],
  [50, 'Соняшникове насіння', 'Горіхи та насіння', 'сире', 5.0],
  [51, 'Фундук', 'Горіхи та насіння', 'сирий', 4.7],
  [52, 'Чорна патока (блекстреп-меляса)', 'Інше', 'сироп', 4.7],
  [53, 'Кіноа', 'Зернові/псевдозлаки', 'сира', 4.6],
  [54, 'Арахіс смажений', 'Горіхи та насіння', 'смажений', 4.6],
  [55, 'Оленина (дичина)', 'М\'ясо', 'варена', 4.5],
  [56, 'Вівсяні пластівці сухі', 'Зернові', 'сухі', 4.3],
  [57, 'Персики сушені', 'Сухофрукти', 'сушені', 4.1],
  [58, 'Фісястки', 'Горіхи та насіння', 'сирі', 3.9],
  [59, 'Буйволятина (бізон)', 'М\'ясо', 'варена', 3.8],
  [60, 'Мигдаль', 'Горіхи та насіння', 'сирий', 3.7],
  [61, 'Гречка (сира крупа)', 'Зернові', 'сира', 3.7],
  [62, 'Квасоля біла варена', 'Бобові', 'варена', 3.7],
  [63, 'Шпинат', 'Овочі та зелень', 'варений', 3.6],
  [64, 'Сочевиця варена', 'Бобові', 'варена', 3.3],
  [65, 'Анчоуси (хамса)', 'Риба', 'солона/смажена', 3.2],
  [66, 'Козлятина', 'М\'ясо', 'варена', 3.2],
  [67, 'Волоські горіхи', 'Горіхи та насіння', 'сирі', 2.9],
  [68, 'Нут варений', 'Бобові', 'варений', 2.9],
  [69, 'Квасоля червона варена', 'Бобові', 'варена', 2.9],
  [70, 'Морська капуста', 'Овочі та зелень', 'варена', 2.9],
  [71, 'Сардини', 'Риба', 'консервовані', 2.9],
  [72, 'Яловичина (пісні відруби)', 'М\'ясо', 'варена', 2.9],
  [73, 'Качка', 'М\'ясо', 'варена', 2.7],
  [74, 'Абрикоси сушені (курага)', 'Сухофрукти', 'сушені', 2.7],
  [75, 'Шпинат сирий', 'Овочі та зелень', 'сирий', 2.7],
  [76, 'Буряковий гичка', 'Овочі та зелень', 'варена', 2.6],
  [77, 'Гусятина', 'М\'ясо', 'варена', 2.4],
  [78, 'Креветки', 'Морепродукти', 'варені', 2.4],
  [79, 'Темпе', 'Соєві продукти', 'готовий', 2.4],
  [80, 'Бразильський горіх', 'Горіхи та насіння', 'сирий', 2.4],
  [81, 'Квасоля лима варена', 'Бобові', 'варена', 2.4],
  [82, 'Індичка (темне м\'ясо)', 'М\'ясо', 'варена', 2.3],
  [83, 'Мангольд', 'Овочі та зелень', 'варений', 2.3],
  [84, 'Баранина', 'М\'ясо', 'варена', 2.3],
  [85, 'Квасоля чорна варена', 'Бобові', 'варена', 2.1],
  [86, 'Амарант варений', 'Зернові/псевдозлаки', 'варений', 2.1],
  [87, 'Теф варений', 'Зернові/псевдозлаки', 'варений', 2.0],
  [88, 'Інжир сушений', 'Сухофрукти', 'сушений', 2.0],
  [89, 'Картопля запечена зі шкіркою', 'Овочі та зелень', 'запечена', 1.9],
  [90, 'Родзинки', 'Сухофрукти', 'сушені', 1.9],
  [91, 'Яйце куряче', 'Яйця', 'варене', 1.8],
  [92, 'Скумбрія', 'Риба', 'запечена', 1.6],
  [93, 'Горошок зелений варений', 'Овочі та зелень', 'варений', 1.5],
  [94, 'Брюссельська капуста варена', 'Овочі та зелень', 'варена', 1.4],
  [95, 'Тунець', 'Риба', 'консервований', 1.3],
  [96, 'Курка (темне м\'ясо, стегно)', 'М\'ясо', 'варена', 1.3],
  [97, 'Артишок', 'Овочі та зелень', 'варений', 1.3],
  [98, 'Кальмари', 'Морепродукти', 'варені', 1.3],
  [99, 'Свинина (нежирна)', 'М\'ясо', 'варена', 1.2],
  [100, 'Оселедець', 'Риба', 'солоний/запечений', 1.1],
].map(([rank, name, category, form, iron]) => ({ rank, name, category, form, iron }));

const ironSearch = document.getElementById('iron-search');
const ironCategoryFilter = document.getElementById('iron-category-filter');
const ironList = document.getElementById('iron-list');
let ironSearchTerm = '';
let ironCategoryTerm = '';

const IRON_CATEGORIES = Array.from(new Set(IRON_TOP100.map((r) => r.category))).sort((a, b) =>
  a.localeCompare(b, 'uk')
);
ironCategoryFilter.innerHTML =
  '<option value="">Усі категорії</option>' +
  IRON_CATEGORIES.map((c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');

function renderIronTop() {
  const term = ironSearchTerm.trim().toLowerCase();
  const filtered = IRON_TOP100.filter(
    (r) => (!term || r.name.toLowerCase().includes(term)) && (!ironCategoryTerm || r.category === ironCategoryTerm)
  );

  ironList.innerHTML = '';

  if (!filtered.length) {
    ironList.innerHTML = '<div class="empty-hint">Нічого не знайдено</div>';
    return;
  }

  filtered.forEach((r) => {
    const row = document.createElement('div');
    row.className = 'iron-row';
    row.innerHTML = `
      <span class="iron-rank">#${r.rank}</span>
      <div class="iron-main">
        <div class="iron-name">${escapeHTML(r.name)}</div>
        <div class="iron-meta">
          <span class="iron-category-tag">${escapeHTML(r.category)}</span>
          <span class="iron-form">${escapeHTML(r.form)}</span>
        </div>
      </div>
      <span class="iron-value">🩸 ${r.iron} мг</span>
    `;
    ironList.appendChild(row);
  });
}

ironSearch.addEventListener('input', (e) => {
  ironSearchTerm = e.target.value;
  renderIronTop();
});

ironCategoryFilter.addEventListener('change', (e) => {
  ironCategoryTerm = e.target.value;
  renderIronTop();
});

// ---------- Таби ----------

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ---------- Ініціалізація ----------

renderDays();
renderDishes();
renderIronTop();

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
