// ---------- Дані та збереження ----------

const APP_VERSION = 'v17';

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
  ['Варені яйця + свіжий перець/огірок', 'Сніданок', '175', '13', '1.5', '4'],
  ['Тост з консервованим лососем + лимон', 'Сніданок', '260', '22', '1', '3'],
  ['Легкий омлет з томатами і зеленню', 'Сніданок', '200', '14', '2.1', '5'],
  ['Гарбузове насіння + ківі', 'Десерт', '215', '9', '2.6', '6'],
  ['Тост з консервованим лососем + помідор', 'Сніданок', '260', '22', '1.2', '3'],
  ['Варені яйця + перець', 'Сніданок', '175', '13', '1.6', '4'],
  ['Копчена курка (невелика порція) в салаті з огірком', 'Вечеря', '170', '22', '1.2', '3'],
  ['Гарбузове насіння + апельсин', 'Десерт', '215', '9', '2.6', '6'],
  ['Тост з консервованим лососем + огірок', 'Сніданок', '250', '22', '1.1', '3'],
  ['Омлет з яєць + шпинат', 'Сніданок', '220', '16', '3.7', '6'],
  ['Хумус з нуту + овочі', 'Сніданок', '200', '8', '2.7', '6'],
  ['Гарячий бутерброд з ковбасою під сиром (бонус раз на 2 тижні)', 'Вечеря', '510', '22', '2.1', '2'],
  ['Варені яйця + свіжі овочі', 'Сніданок', '175', '13', '1.6', '4'],
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

// Точкові виправлення раніше некоректних даних (застосовуються лише якщо
// значення в сховищі досі збігається зі старим — щоб не затерти власні
// правки користувача).
const NUTRITION_CORRECTIONS = {
  'seed-28': { from: { iron: '2.6', rating: '6' }, to: { iron: '1.5', rating: '4' } },
  'seed-33': { from: { iron: '2.7', rating: '6' }, to: { iron: '1.6', rating: '4' } },
  'seed-40': { from: { iron: '2.7', rating: '6' }, to: { iron: '1.6', rating: '4' } },
  'seed-30': { from: { iron: '2.7', rating: '6' }, to: { iron: '2.1', rating: '5' } },
  'seed-37': { from: { iron: '3.75', rating: '6' }, to: { iron: '3.7', rating: '6' } },
};

function normalizeDish(dish) {
  if (!CATEGORIES.includes(dish.category)) {
    dish.category = (SEED_BY_ID[dish.id] || {}).category || 'Вечеря';
  }
  NUTRITION_FIELDS.forEach((field) => {
    if (!dish[field]) {
      dish[field] = (SEED_BY_ID[dish.id] || {})[field] || '';
    }
  });
  const correction = NUTRITION_CORRECTIONS[dish.id];
  if (correction && dish.iron === correction.from.iron && dish.rating === correction.from.rating) {
    dish.iron = correction.to.iron;
    dish.rating = correction.to.rating;
  }
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
  [7, 'Лавровий лист', 'Спеції та сушена зелень', 'сушений', 43],
  [8, 'Куркума мелена', 'Спеції та сушена зелень', 'мелена', 41.4],
  [9, 'Орегано сушений', 'Спеції та сушена зелень', 'сушений', 36.8],
  [10, 'Білі гриби сушені', 'Гриби та водорості', 'сушені', 35],
  [11, 'Каррі порошок', 'Спеції та сушена зелень', 'суміш спецій', 29.5],
  [12, 'Спіруліна суха', 'Гриби та водорості', 'порошок', 28.5],
  [13, 'Молюски (венус), консервовані', 'Морепродукти', 'консервовані', 28],
  [14, 'Серцевидки (кокли)', 'Морепродукти', 'варені', 24],
  [15, 'Петрушка сушена', 'Спеції та сушена зелень', 'сушена', 22],
  [16, 'Паприка мелена', 'Спеції та сушена зелень', 'мелена', 21.1],
  [17, 'Кров\'яна ковбаса', 'М\'ясо та субпродукти', 'готова', 20],
  [18, 'Свиняча печінка', 'Печінка та субпродукти', 'варена', 18],
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
  [48, 'Морський равлик (whelk)', 'Морепродукти', 'сирий/варений', 5],
  [49, 'Шовковиця сушена', 'Сухофрукти', 'сушена', 5],
  [50, 'Соняшникове насіння', 'Горіхи та насіння', 'сире', 5],
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
  [87, 'Теф варений', 'Зернові/псевдозлаки', 'варений', 2],
  [88, 'Інжир сушений', 'Сухофрукти', 'сушений', 2],
  [89, 'Картопля запечена зі шкіркою', 'Овочі та зелень', 'запечена', 1.9],
  [90, 'Родзинки', 'Сухофрукти', 'сушені', 1.9],
  [91, 'Скумбрія', 'Риба', 'запечена', 1.6],
  [92, 'Горошок зелений варений', 'Овочі та зелень', 'варений', 1.5],
  [93, 'Брюссельська капуста варена', 'Овочі та зелень', 'варена', 1.4],
  [94, 'Тунець', 'Риба', 'консервований', 1.3],
  [95, 'Курка (темне м\'ясо, стегно)', 'М\'ясо', 'варена', 1.3],
  [96, 'Артишок', 'Овочі та зелень', 'варений', 1.3],
  [97, 'Кальмари', 'Морепродукти', 'варені', 1.3],
  [98, 'Яйце куряче', 'Яйця', 'варене', 1.2],
  [99, 'Свинина (нежирна)', 'М\'ясо', 'варена', 1.2],
  [100, 'Оселедець', 'Риба', 'солоний/запечений', 1.1],
].map(([rank, name, category, form, iron]) => ({ id: 'top100-' + rank, rank, name, category, form, iron }));

// Побутові продукти й типові варіанти готових страв, яких немає в топ-100
// (бо вони не рекордсмени за залізом), але їх треба знаходити в трекері:
// овочі, фрукти, хліб/крупи, м'ясо/риба, молочні продукти + кілька варіантів
// одного й того ж (плов з різним м'ясом, картопля в різних формах).
const COMMON_PRODUCTS = [
  ['Помідор свіжий', 'Овочі', 'сирий', 0.3],
  ['Огірок свіжий', 'Овочі', 'сирий', 0.3],
  ['Цибуля', 'Овочі', 'сира', 0.2],
  ['Часник', 'Овочі', 'сирий', 1.7],
  ['Морква', 'Овочі', 'сира', 0.3],
  ['Капуста біла', 'Овочі', 'сира', 0.5],
  ['Буряк сирий', 'Овочі', 'сирий', 0.8],
  ['Буряк варений', 'Овочі', 'варений', 0.6],
  ['Перець солодкий', 'Овочі', 'сирий', 0.4],
  ['Кабачок', 'Овочі', 'сирий', 0.4],
  ['Баклажан варений', 'Овочі', 'варений', 0.3],
  ['Гарбуз варений', 'Овочі', 'варений', 0.5],
  ['Редис', 'Овочі', 'сирий', 0.3],
  ['Салат листовий', 'Овочі', 'сирий', 0.9],
  ['Броколі сира', 'Овочі', 'сира', 0.7],
  ['Цвітна капуста варена', 'Овочі', 'варена', 0.4],
  ['Кукурудза варена', 'Овочі', 'варена', 0.5],
  ['Картопля варена', 'Овочі', 'варена', 0.3],
  ['Картопля смажена', 'Овочі', 'смажена', 0.7],
  ['Картопля тушена', 'Овочі', 'тушена', 0.5],
  ['Картопля печена (без шкірки)', 'Овочі', 'печена', 0.4],
  ['Картопляне пюре', 'Овочі', 'пюре', 0.3],
  ['Банан', 'Фрукти', 'сирий', 0.3],
  ['Яблуко', 'Фрукти', 'сире', 0.1],
  ['Апельсин', 'Фрукти', 'сирий', 0.1],
  ['Груша', 'Фрукти', 'сира', 0.2],
  ['Виноград', 'Фрукти', 'сирий', 0.4],
  ['Ківі', 'Фрукти', 'сире', 0.3],
  ['Полуниця', 'Фрукти', 'сира', 0.4],
  ['Лимон', 'Фрукти', 'сирий', 0.6],
  ['Авокадо', 'Фрукти', 'сире', 0.6],
  ['Гранат (зерна)', 'Фрукти', 'сирий', 0.3],
  ['Диня', 'Фрукти', 'сира', 0.2],
  ['Арбуз', 'Фрукти', 'сирий', 0.2],
  ['Хліб пшеничний', 'Зернові', 'готовий', 1.2],
  ['Хліб житній', 'Зернові', 'готовий', 2.8],
  ['Рис білий варений', 'Зернові', 'варений', 0.2],
  ['Рис бурий варений', 'Зернові', 'варений', 0.5],
  ['Гречка варена', 'Зернові', 'варена', 1.3],
  ['Булгур варений', 'Зернові', 'варений', 1.0],
  ['Овсяна каша варена', 'Зернові', 'варена', 0.9],
  ['Макарони варені', 'Зернові', 'варені', 1.0],
  ['Мамалига (кукурудзяна каша)', 'Зернові', 'варена', 0.5],
  ['Плов з куркою', 'Готові страви', 'готовий', 1.3],
  ['Плов зі свининою', 'Готові страви', 'готовий', 1.4],
  ['Плов з бараниною', 'Готові страви', 'готовий', 1.9],
  ['Плов з яловичиною', 'Готові страви', 'готовий', 2.0],
  ['Куряче філе (грудка) варене', "М'ясо", 'варене', 0.7],
  ['Куряче філе (грудка) смажене', "М'ясо", 'смажене', 0.8],
  ['Курячі котлети домашні', "М'ясо", 'смажені', 1.0],
  ['Яловичі котлети/біфштекс', "М'ясо", 'смажені', 2.5],
  ['Свинина смажена', "М'ясо", 'смажена', 1.1],
  ['Індичка (філе) смажена', "М'ясо", 'смажена', 0.9],
  ['Тріска/хек варена', 'Риба', 'варена', 0.4],
  ['Лосось смажений/запечений', 'Риба', 'смажений', 0.5],
  ['Яйце смажене (яєчня)', 'Яйця', 'смажене', 1.3],
  ['Молоко', 'Молочні продукти', 'рідке', 0.05],
  ['Кефір', 'Молочні продукти', 'рідкий', 0.1],
  ['Йогурт натуральний', 'Молочні продукти', 'готовий', 0.1],
  ['Сир твердий (гауда/чедер)', 'Молочні продукти', 'готовий', 0.5],
  ['Творог (сир кисломолочний)', 'Молочні продукти', 'готовий', 0.2],
  ['Сметана', 'Молочні продукти', 'готова', 0.1],
  ['Борщ (з м\'ясом)', 'Супи', 'готовий', 1.0],
  ['Борщ вегетаріанський', 'Супи', 'готовий', 0.6],
  ['Суп овочевий', 'Супи', 'готовий', 0.5],
  ['Суп гороховий', 'Супи', 'готовий', 1.2],
  ['Солянка (з м\'ясом і ковбасою)', 'Супи', 'готова', 1.5],
  ['Розсольник', 'Супи', 'готовий', 1.0],
  ['Суп-пюре з броколі', 'Супи', 'готовий', 0.5],
  ['Курячий суп з овочами', 'Супи', 'готовий', 0.6],
  ['Грибний суп', 'Супи', 'готовий', 0.6],
  ['Харчо', 'Супи', 'готовий', 1.2],
  ['Риба хек (варена/запечена)', 'Риба', 'варена', 0.4],
  ['Сирники', 'Готові страви', 'смажені', 0.4],
  ['Перець солодкий червоний', 'Овочі', 'сирий', 0.4],
  ['Бульйон з курки', 'Супи', 'готовий', 0.2],
  ['Шпроти в олії (консервовані)', 'Риба', 'консервовані', 2.9],
  ['Зелена цибуля', 'Овочі', 'сира', 1.5],
].map(([name, category, form, iron], i) => ({ id: 'common-' + i, name, category, form, iron }));

// Спільний пул для пошуку/розпізнавання в трекері (топ-100 + побутові продукти).
// Вкладка "Топ-100 заліза" й далі показує лише IRON_TOP100 — без змін.
const PRODUCT_LIBRARY = IRON_TOP100.concat(COMMON_PRODUCTS);

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

// ---------- Трекер заліза за день ----------

const STORAGE_IRON_LOG = 'ration.ironLog.v1';

function loadIronLog() {
  const raw = localStorage.getItem(STORAGE_IRON_LOG);
  return raw ? JSON.parse(raw) : {};
}

function saveIronLog(log) {
  localStorage.setItem(STORAGE_IRON_LOG, JSON.stringify(log));
}

let ironLog = loadIronLog();
let trackerDate = new Date();
trackerDate.setHours(0, 0, 0, 0);

const trackerDateInput = document.getElementById('tracker-date');
const trackerTotalValue = document.getElementById('tracker-total-value');
const trackerSearchInput = document.getElementById('tracker-search-input');
const trackerDropdown = document.getElementById('tracker-dropdown');
const trackerLogEl = document.getElementById('tracker-log');

function formatMg(n) {
  const rounded = Math.round(n * 10) / 10;
  return (rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)) + ' мг';
}

function trackerEntries() {
  const key = toISODate(trackerDate);
  if (!ironLog[key]) ironLog[key] = [];
  return ironLog[key];
}

function trackerAdd(entry) {
  entry.id = nextDishId();
  trackerEntries().push(entry);
  saveIronLog(ironLog);
  renderTracker();
}

function trackerRemove(id) {
  const key = toISODate(trackerDate);
  ironLog[key] = (ironLog[key] || []).filter((e) => e.id !== id);
  saveIronLog(ironLog);
  renderTracker();
}

function trackerUpdateGrams(id, grams) {
  const entry = trackerEntries().find((e) => e.id === id);
  if (!entry) return;
  const g = Math.max(0, Number(grams) || 0);
  entry.grams = g;
  entry.iron = Math.round(((entry.per100 * g) / 100) * 100) / 100;
  saveIronLog(ironLog);
  renderTracker();
}

function trackerOptionsHTML(term) {
  const t = term.trim().toLowerCase();
  let html = '';

  const matchingDishes = dishes
    .filter((d) => !t || d.name.toLowerCase().includes(t))
    .sort((a, b) => a.name.localeCompare(b, 'uk'));
  if (matchingDishes.length) {
    html += '<div class="combo-group-label">Страви (порція)</div>';
    matchingDishes.forEach((d) => {
      const ironLabel = d.iron ? `🩸${escapeHTML(d.iron)}мг` : '🩸—';
      html += `<div class="combo-option" data-type="dish" data-id="${d.id}"><span class="combo-rating">${ironLabel}</span><span class="combo-name">${escapeHTML(d.name)}</span></div>`;
    });
  }

  const matchingProducts = PRODUCT_LIBRARY.filter((r) => !t || r.name.toLowerCase().includes(t)).sort((a, b) =>
    a.name.localeCompare(b.name, 'uk')
  );
  if (matchingProducts.length) {
    html += '<div class="combo-group-label">Продукти, на 100 г</div>';
    matchingProducts.forEach((r) => {
      html += `<div class="combo-option" data-type="product" data-id="${r.id}"><span class="combo-rating">🩸${r.iron}мг</span><span class="combo-name">${escapeHTML(r.name)}</span></div>`;
    });
  }

  if (!matchingDishes.length && !matchingProducts.length) {
    html = '<div class="combo-empty">Нічого не знайдено</div>';
  }

  return html;
}

trackerSearchInput.addEventListener('focus', () => {
  trackerDropdown.innerHTML = trackerOptionsHTML(trackerSearchInput.value);
  trackerDropdown.hidden = false;
});

trackerSearchInput.addEventListener('input', () => {
  trackerDropdown.innerHTML = trackerOptionsHTML(trackerSearchInput.value);
  trackerDropdown.hidden = false;
});

trackerSearchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') trackerSearchInput.blur();
});

trackerDropdown.addEventListener('mousedown', (e) => {
  const opt = e.target.closest('.combo-option');
  if (!opt) return;
  e.preventDefault();
  if (opt.dataset.type === 'dish') {
    const dish = findDish(opt.dataset.id);
    if (dish) {
      trackerAdd({ type: 'dish', name: dish.name, iron: Number(dish.iron) || 0 });
    }
  } else if (opt.dataset.type === 'product') {
    const item = PRODUCT_LIBRARY.find((r) => r.id === opt.dataset.id);
    if (item) {
      trackerAdd({ type: 'top100', name: item.name, per100: item.iron, grams: 100, iron: item.iron });
    }
  }
  trackerSearchInput.value = '';
  trackerDropdown.hidden = true;
});

trackerSearchInput.addEventListener('blur', () => {
  setTimeout(() => {
    trackerDropdown.hidden = true;
  }, 100);
});

// ---------- Швидке додавання довільним текстом ----------

const UA_NUMBER_WORDS = {
  'одна': 1, 'один': 1, 'одне': 1, 'одного': 1,
  'два': 2, 'дві': 2, 'двоє': 2,
  'три': 3, 'трьох': 3, 'троє': 3,
  'чотири': 4, 'четверо': 4,
  "п'ять": 5, 'п’ять': 5, 'пять': 5, "п'ятеро": 5,
  'шість': 6, 'шестеро': 6,
  'сім': 7, 'семеро': 7,
  'вісім': 8, 'восьмеро': 8,
  "дев'ять": 9, 'дев’ять': 9, "дев'ятеро": 9,
  'десять': 10, 'десятеро': 10,
};

// Орієнтовна вага "штуки" для типових лічильних продуктів, коли грами не вказані
const DEFAULT_UNIT_GRAMS = [
  { test: /яйц/iu, grams: 50 },
];

function guessUnitGrams(name) {
  const rule = DEFAULT_UNIT_GRAMS.find((r) => r.test.test(name));
  return rule ? rule.grams : 100;
}

function splitQuickAddText(raw) {
  return raw
    .split(/,|;|\n|\+|(?:\s+і\s+)|(?:\s+та\s+)/iu)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseQuickAddLine(raw) {
  let text = raw.trim();
  let grams = null;
  let count = 1;

  let m = text.match(/^(\d+(?:[.,]\d+)?)\s*(г|грам\w*|мл)\b\.?\s*/iu);
  if (m) {
    grams = parseFloat(m[1].replace(',', '.'));
    text = text.slice(m[0].length).trim();
  } else {
    m = text.match(/^(\d+(?:[.,]\d+)?)\s*(?:х|x)?\s+/iu);
    if (m) {
      count = parseFloat(m[1].replace(',', '.'));
      text = text.slice(m[0].length).trim();
    } else {
      const words = text.split(/\s+/);
      const first = (words[0] || '').toLowerCase().replace(/[^\wа-яіїєґ']/giu, '');
      if (UA_NUMBER_WORDS[first] !== undefined) {
        count = UA_NUMBER_WORDS[first];
        text = words.slice(1).join(' ').trim();
      }
    }
  }

  return { rawText: raw.trim(), description: text, grams, count };
}

function normalizeWords(s) {
  return s
    .toLowerCase()
    .replace(/['’ʼ]/g, '')
    .replace(/[^a-zа-яіїєґ0-9\s]/giu, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3);
}

function stem3(word) {
  return word.length > 3 ? word.slice(0, 3) : word;
}

// Скільки різних назв (страв+топ-100) містять цей корінь слова — щоб оцінити
// його "унікальність". Загальні слова типу "варений"/"смажений" зустрічаються
// в десятках назв і майже не несуть інформації; "яйце"/"яловичина" — рідкісні
// й дуже показові. Рахуємо свіжо при кожному розпізнаванні (список маленький).
function buildStemDocFrequency() {
  const df = new Map();
  const allNames = dishes.map((d) => d.name).concat(PRODUCT_LIBRARY.map((r) => r.name));
  allNames.forEach((name) => {
    const stems = new Set(normalizeWords(name).map(stem3));
    stems.forEach((s) => df.set(s, (df.get(s) || 0) + 1));
  });
  return df;
}

function plainCoverage(queryWords, candidateWords) {
  if (!queryWords.length) return 0;
  const cs = new Set(candidateWords.map(stem3));
  let hits = 0;
  queryWords.forEach((w) => {
    if (cs.has(stem3(w))) hits++;
  });
  return hits / queryWords.length;
}

function weightedCoverage(queryWords, candidateWords, stemDF) {
  if (!queryWords.length) return 0;
  const cs = new Set(candidateWords.map(stem3));
  let hit = 0;
  let total = 0;
  queryWords.forEach((w) => {
    const s = stem3(w);
    const weight = 1 / (stemDF.get(s) || 1);
    total += weight;
    if (cs.has(s)) hit += weight;
  });
  return total ? hit / total : 0;
}

function findBestFoodMatch(description, stemDF) {
  const qWords = normalizeWords(description);
  if (!qWords.length) return null;

  // Проста (незважена) частка слів вирішує, чи кандидат ВЗАГАЛІ підходить —
  // це стійкий, передбачуваний бар'єр. IDF-зважування використовуємо лише
  // щоб обрати найкращого серед тих, хто вже пройшов бар'єр: воно допомагає
  // віддати перевагу специфічному слову ("яйце") над загальним ("варений"),
  // але не повинно саме по собі відкидати кандидата через випадкову
  // рідкість якогось із слів запиту.

  // Топ-100 — це чисті одноінгредієнтні продукти, тож перевіряємо їх першими:
  // короткий запит типу "яйця" чи "яловичина" повинен матчитись на сам
  // інгредієнт, а не випадково на страву, де він лише один з компонентів.
  let bestTop = null;
  let bestTopWeighted = -1;
  PRODUCT_LIBRARY.forEach((r) => {
    const cWords = normalizeWords(r.name);
    if (plainCoverage(qWords, cWords) < 0.5) return;
    const weighted = weightedCoverage(qWords, cWords, stemDF);
    if (weighted > bestTopWeighted) {
      bestTopWeighted = weighted;
      bestTop = r;
    }
  });
  if (bestTop) {
    return { type: 'top100', id: bestTop.id, name: bestTop.name, per100: bestTop.iron };
  }

  // Страви — вимагаємо збіг з обох боків (і запит переважно покритий стравою,
  // і страва переважно покрита запитом), інакше одне випадкове слово-інгредієнт
  // ("помідор") хапає на себе залізо всієї багатокомпонентної страви.
  let bestDish = null;
  let bestDishWeighted = -1;
  dishes.forEach((d) => {
    const cWords = normalizeWords(d.name);
    if (plainCoverage(qWords, cWords) < 0.5 || plainCoverage(cWords, qWords) < 0.4) return;
    const weighted = weightedCoverage(qWords, cWords, stemDF) * weightedCoverage(cWords, qWords, stemDF);
    if (weighted > bestDishWeighted) {
      bestDishWeighted = weighted;
      bestDish = d;
    }
  });
  if (bestDish) {
    return { type: 'dish', id: bestDish.id, name: bestDish.name, iron: Number(bestDish.iron) || 0 };
  }

  return null;
}

let quickPreviewItems = [];

function buildQuickPreview(rawText) {
  const stemDF = buildStemDocFrequency();
  return splitQuickAddText(rawText).map((frag) => {
    const parsed = parseQuickAddLine(frag);
    const match = findBestFoodMatch(parsed.description || parsed.rawText, stemDF);
    const item = {
      key: 'p-' + Math.random().toString(36).slice(2),
      rawText: parsed.rawText,
      description: parsed.description,
      count: parsed.count,
      match,
      grams: null,
      iron: 0,
    };
    recomputeQuickItem(item, parsed.grams);
    return item;
  });
}

function recomputeQuickItem(item, explicitGrams) {
  if (!item.match) {
    item.iron = 0;
    return;
  }
  if (item.match.type === 'dish') {
    item.iron = Math.round(item.match.iron * item.count * 100) / 100;
  } else {
    const grams = explicitGrams != null ? explicitGrams : (item.grams != null ? item.grams : guessUnitGrams(item.match.name) * item.count);
    item.grams = grams;
    item.iron = Math.round(((item.match.per100 * grams) / 100) * 100) / 100;
  }
}

function renderQuickPreview() {
  const box = document.getElementById('tracker-quick-preview');
  if (!quickPreviewItems.length) {
    box.hidden = true;
    box.innerHTML = '';
    return;
  }
  box.hidden = false;

  const rows = quickPreviewItems
    .map((item) => {
      if (!item.match) {
        return `
          <div class="quick-preview-row quick-preview-row-unmatched" data-key="${item.key}">
            <span class="quick-preview-raw">«${escapeHTML(item.rawText)}» — не розпізнано</span>
            <button type="button" class="quick-preview-manual" data-key="${item.key}">Шукати вручну</button>
            <button type="button" class="quick-preview-remove" data-key="${item.key}">✕</button>
          </div>
        `;
      }
      const badge = item.match.type === 'dish' ? 'страва' : 'продукт';
      const qtyControl =
        item.match.type === 'top100'
          ? `<input type="number" class="quick-preview-grams" data-key="${item.key}" min="0" step="1" value="${item.grams}"> г`
          : `×<input type="number" class="quick-preview-count" data-key="${item.key}" min="1" step="1" value="${item.count}">`;
      return `
        <div class="quick-preview-row" data-key="${item.key}">
          <span class="quick-preview-name">${escapeHTML(item.match.name)} <span class="quick-preview-badge">${badge}</span></span>
          <span class="quick-preview-qty">${qtyControl}</span>
          <span class="quick-preview-iron">🩸 ${formatMg(item.iron)}</span>
          <button type="button" class="quick-preview-remove" data-key="${item.key}">✕</button>
        </div>
      `;
    })
    .join('');

  box.innerHTML = `
    ${rows}
    <div class="quick-preview-actions">
      <button type="button" id="tracker-quick-add-all">Додати все в журнал</button>
      <button type="button" id="tracker-quick-cancel">Скасувати</button>
    </div>
  `;

  box.querySelectorAll('.quick-preview-remove').forEach((btn) => {
    btn.addEventListener('click', () => {
      quickPreviewItems = quickPreviewItems.filter((it) => it.key !== btn.dataset.key);
      renderQuickPreview();
    });
  });

  box.querySelectorAll('.quick-preview-grams').forEach((input) => {
    input.addEventListener('change', (e) => {
      const item = quickPreviewItems.find((it) => it.key === e.target.dataset.key);
      if (!item) return;
      recomputeQuickItem(item, Math.max(0, Number(e.target.value) || 0));
      renderQuickPreview();
    });
  });

  box.querySelectorAll('.quick-preview-count').forEach((input) => {
    input.addEventListener('change', (e) => {
      const item = quickPreviewItems.find((it) => it.key === e.target.dataset.key);
      if (!item) return;
      item.count = Math.max(1, Number(e.target.value) || 1);
      recomputeQuickItem(item, null);
      renderQuickPreview();
    });
  });

  box.querySelectorAll('.quick-preview-manual').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = quickPreviewItems.find((it) => it.key === btn.dataset.key);
      quickPreviewItems = quickPreviewItems.filter((it) => it.key !== btn.dataset.key);
      renderQuickPreview();
      trackerSearchInput.value = item ? item.description || item.rawText : '';
      trackerSearchInput.focus();
      trackerDropdown.innerHTML = trackerOptionsHTML(trackerSearchInput.value);
      trackerDropdown.hidden = false;
    });
  });

  const addAllBtn = document.getElementById('tracker-quick-add-all');
  if (addAllBtn) {
    addAllBtn.addEventListener('click', () => {
      quickPreviewItems
        .filter((item) => item.match)
        .forEach((item) => {
          const label = item.count > 1 && item.match.type === 'dish' ? `${item.count}× ${item.match.name}` : item.match.name;
          if (item.match.type === 'dish') {
            trackerEntries().push({ id: nextDishId(), type: 'dish', name: label, iron: item.iron });
          } else {
            trackerEntries().push({
              id: nextDishId(),
              type: 'top100',
              name: item.match.name,
              per100: item.match.per100,
              grams: item.grams,
              iron: item.iron,
            });
          }
        });
      saveIronLog(ironLog);
      quickPreviewItems = [];
      document.getElementById('tracker-quick-text').value = '';
      renderQuickPreview();
      renderTracker();
    });
  }

  const cancelBtn = document.getElementById('tracker-quick-cancel');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      quickPreviewItems = [];
      renderQuickPreview();
    });
  }
}

document.getElementById('tracker-quick-parse-btn').addEventListener('click', () => {
  const text = document.getElementById('tracker-quick-text').value;
  quickPreviewItems = buildQuickPreview(text);
  renderQuickPreview();
});

function renderTracker() {
  trackerDateInput.value = toISODate(trackerDate);

  const entries = trackerEntries();
  const total = entries.reduce((sum, e) => sum + (Number(e.iron) || 0), 0);
  trackerTotalValue.textContent = formatMg(total);

  trackerLogEl.innerHTML = '';
  if (!entries.length) {
    trackerLogEl.innerHTML = '<div class="empty-hint">Ще нічого не додано за цей день</div>';
    return;
  }

  entries.forEach((entry) => {
    const row = document.createElement('div');
    row.className = 'tracker-row';
    if (entry.type === 'top100') {
      row.innerHTML = `
        <div class="tracker-row-main">
          <span class="tracker-name">${escapeHTML(entry.name)}</span>
          <span class="tracker-grams-wrap">
            <input type="number" class="tracker-grams-input" min="0" step="1" value="${entry.grams}"> г
          </span>
          <span class="tracker-iron">🩸 ${formatMg(entry.iron)}</span>
          <button type="button" class="tracker-remove" title="Видалити">✕</button>
        </div>
      `;
      row.querySelector('.tracker-grams-input').addEventListener('change', (e) => {
        trackerUpdateGrams(entry.id, e.target.value);
      });
    } else {
      row.innerHTML = `
        <div class="tracker-row-main">
          <span class="tracker-name">${escapeHTML(entry.name)}</span>
          <span class="tracker-iron">🩸 ${formatMg(entry.iron)}</span>
          <button type="button" class="tracker-remove" title="Видалити">✕</button>
        </div>
      `;
    }
    row.querySelector('.tracker-remove').addEventListener('click', () => trackerRemove(entry.id));
    trackerLogEl.appendChild(row);
  });
}

trackerDateInput.addEventListener('change', () => {
  if (!trackerDateInput.value) return;
  const [y, m, d] = trackerDateInput.value.split('-').map(Number);
  trackerDate = new Date(y, m - 1, d);
  trackerDate.setHours(0, 0, 0, 0);
  renderTracker();
});

document.getElementById('tracker-prev-day').addEventListener('click', () => {
  trackerDate.setDate(trackerDate.getDate() - 1);
  renderTracker();
});

document.getElementById('tracker-next-day').addEventListener('click', () => {
  trackerDate.setDate(trackerDate.getDate() + 1);
  renderTracker();
});

document.getElementById('tracker-today-btn').addEventListener('click', () => {
  trackerDate = new Date();
  trackerDate.setHours(0, 0, 0, 0);
  renderTracker();
});

document.getElementById('tracker-manual-add-btn').addEventListener('click', () => {
  const nameInput = document.getElementById('tracker-manual-name');
  const ironInput = document.getElementById('tracker-manual-iron');
  const name = nameInput.value.trim();
  const iron = Number(ironInput.value);
  if (!name || !Number.isFinite(iron) || iron < 0) return;
  trackerAdd({ type: 'manual', name, iron: Math.round(iron * 100) / 100 });
  nameInput.value = '';
  ironInput.value = '';
  nameInput.focus();
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
renderTracker();

const appVersionEl = document.getElementById('app-version');
if (appVersionEl) appVersionEl.textContent = APP_VERSION;

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
