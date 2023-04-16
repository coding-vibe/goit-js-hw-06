const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredients = ingredients => {
  return ingredients.map(el => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = el;
  ingredientEl.classList.add('item');
  return ingredientEl;
});
};

const ingredientElems = makeIngredients(ingredients);
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientElems);
