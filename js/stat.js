'use strict';

var BAR_X = 155;
var BAR_Y = 245;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var TEXT_Y = 250;
var TEXT_GAP = 20;
var textLine = 'hanging';
var fontColor = '#000';
var fontStyle = '16px PT Mono';
var SIGN_X = 130;
var SIGN_Y = 30;
var yourBarColor = 'rgba(255, 0, 0, 1)';

var renderText = function (ctx, color, font, textBaseLine, text, x, y) {
  ctx.fillStyle = fontColor;
  ctx.textBaseline = textLine;
  ctx.font = fontStyle;
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

var renderBarColor = function (ctx) {
  ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%' + ', 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
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

  ctx.fillStyle = '#fff';
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

  renderText(ctx, fontColor, fontStyle, textLine, 'Ура вы победили!', SIGN_X, SIGN_Y);
  renderText(ctx, fontColor, fontStyle, textLine, 'Список результатов:', SIGN_X, SIGN_Y + 20);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = yourBarColor;
    } else {
      renderBarColor(ctx);
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = fontColor;
    ctx.fillText(names[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillText(Math.floor(times[i]), BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_GAP);
  }
};
