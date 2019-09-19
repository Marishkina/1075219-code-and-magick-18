'use strict';

var BAR_X = 155;
var BAR_Y = 245;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var NEXT_BAR_X = (BAR_WIDTH + BAR_GAP);
var TEXT_Y = 250;
var TEXT_GAP = 20;
var TEXT_LINE = 'hanging';
var FONT_COLOR = '#000';
var FONT_STYLE = '16px PT Mono';
var SIGN_X = 130;
var SIGN_Y = 30;
var YOUR_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var renderPopUp = function (ctx, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 20);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(310, 270);
  ctx.lineTo(100, 280);
  ctx.lineTo(100, 10);
  ctx.closePath();
  ctx.fill();
};

var renderPopUpShadow = function (ctx, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(320, 30);
  ctx.lineTo(530, 20);
  ctx.lineTo(530, 290);
  ctx.lineTo(320, 280);
  ctx.lineTo(110, 290);
  ctx.lineTo(110, 20);
  ctx.closePath();
  ctx.fill();
};

var renderText = function (ctx, color, font, textBaseLine, text, x, y) {
  ctx.fillStyle = FONT_COLOR;
  ctx.textBaseline = TEXT_LINE;
  ctx.font = FONT_STYLE;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderBarColor = function (name) {
  var barColor = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%' + ', 50%)';

  if (name === 'Вы') {
    barColor = YOUR_BAR_COLOR;
  }
  return barColor;
};

var renderName = function (ctx, name, x, y) {
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText(name, x, y);
};

var renderScore = function (ctx, time, x, y) {
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText(time, x, y);
};

window.renderStatistics = function (ctx, names, times) {

  renderPopUpShadow(ctx, 'rgba(0, 0, 0, 0.7)');
  renderPopUp(ctx, '#fff');

  renderText(ctx, FONT_COLOR, FONT_STYLE, TEXT_LINE, 'Ура вы победили!', SIGN_X, SIGN_Y);
  renderText(ctx, FONT_COLOR, FONT_STYLE, TEXT_LINE, 'Список результатов:', SIGN_X, SIGN_Y + 20);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var columnHeight = ((BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = renderBarColor(names[i]);
    ctx.fillRect(BAR_X + NEXT_BAR_X * i, BAR_Y - columnHeight, BAR_WIDTH, columnHeight);
    renderName(ctx, names[i], BAR_X + NEXT_BAR_X * i, TEXT_Y);
    renderScore(ctx, Math.floor(times[i]), BAR_X + NEXT_BAR_X * i, BAR_Y - columnHeight - TEXT_GAP);
  }
};


