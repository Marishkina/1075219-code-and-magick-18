'use strict';

(function () {
  var WIZARD_COUNT = 4;
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var userName = setup.querySelector('input[name = username]');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  var openPopup = function () {
    setup.classList.remove('hidden');
  };

  var closePopup = function () {
    setup.classList.add('hidden');
  };

  var onPopupEscDown = function (evt) {
    if (evt.keyCode === 27) {
      if (evt.target === userName) {
        evt.stopPropogation();
      } else {
        closePopup();
      }
    }
  };

  var onIconEnterDown = function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  };

  var onPopupEnterDown = function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  };

  var onWizardCoatClick = function () {
    var wizardCoatColor = getRandomItem(COAT_COLORS);
    wizardCoat.style.fill = wizardCoatColor;
    setupWizard.querySelector('input[name = coat-color]').value = wizardCoatColor;
  };

  var onWizardEyesClick = function () {
    var wizardEyesColor = getRandomItem(EYE_COLORS);
    wizardEyes.style.fill = wizardEyesColor;
    setupWizard.querySelector('input[name = eyes-color]').value = wizardEyesColor;
  };

  var onFireballClick = function () {
    var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var wizardFireballColor = getRandomItem(FIREBALL_COLORS);
    setupFireball.style.background = wizardFireballColor;
    setupFireball.querySelector('input[name = fireball-color]').value = wizardFireballColor;
  };

  var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getWizardsList = function (wizardCount) {
    var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var wizards = [];
    for (var i = 0; i < wizardCount; i++) {
      wizards[i] = {
        name: getRandomItem(WIZARD_FIRST_NAMES) + ' ' + getRandomItem(WIZARD_SECOND_NAMES),
        coatColor: getRandomItem(COAT_COLORS),
        eyesColor: getRandomItem(EYE_COLORS)
      };
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var init = function (wizards) {
    var userDialog = document.querySelector('.setup');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
    setupOpen.addEventListener('click', openPopup);
    setupClose.addEventListener('click', closePopup);
    setupOpenIcon.addEventListener('keydown', onIconEnterDown);
    document.addEventListener('keydown', onPopupEscDown);
    setupClose.addEventListener('keydown', onPopupEnterDown);
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    setupFireball.addEventListener('click', onFireballClick);
  };

  init(getWizardsList(WIZARD_COUNT));
})();
