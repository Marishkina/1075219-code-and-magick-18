'use strict';

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb 56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomItem = function (array) {
  var randomItem = array[Math.floor(Math.random() * array.length)];
  array[i] = randomItem;
  return randomItem;
};

var wizardsArray = function (wizardCount) {
  for (var i = 0; i < wizardCount; i++) {
    wizards[i] = {
      name: getRandomItem(WIZARD_FIRST_NAME) + ' ' + getRandomItem(WIZARD_SECOND_NAME),
      coatColor: getRandomItem(COAT_COLORS),
      eyesColor: getRandomItem(EYE_COLORS)
    };
  }
  return wizardsArray;
};

wizardsArray(WIZARD_COUNT);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
