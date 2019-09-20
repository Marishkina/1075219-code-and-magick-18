'use strict';

var TEXT_LINE = 'hanging';
var FONT_COLOR = '#000';
var FONT_STYLE = '16px PT Mono';

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
  var yourBarColor = 'rgba(255, 0, 0, 1)';
  var otherBarColor = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%' + ', 50%)';
  var barColor = (name === 'Вы') ? yourBarColor : otherBarColor;
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

var renderBar = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  var barX = 155;
  var barY = 245;
  var barWidth = 40;
  var barHeight = 150;
  var barGap = 50;
  var textY = 250;
  var textGap = 20;

  for (var i = 0; i < names.length; i++) {
    var columnHeight = ((barHeight * times[i]) / maxTime);
    var nextBarX = (barWidth + barGap);

    ctx.fillStyle = renderBarColor(names[i]);
    ctx.fillRect(barX + nextBarX * i, barY - columnHeight, barWidth, columnHeight);
    renderName(ctx, names[i], barX + nextBarX * i, textY);
    renderScore(ctx, Math.floor(times[i]), barX + nextBarX * i, barY - columnHeight - textGap);
  }
};

window.renderStatistics = function (ctx, names, times) {
  var signX = 130;
  var signY = 30;
  renderPopUpShadow(ctx, 'rgba(0, 0, 0, 0.7)');
  renderPopUp(ctx, '#fff');

  renderText(ctx, FONT_COLOR, FONT_STYLE, TEXT_LINE, 'Ура вы победили!', signX, signY);
  renderText(ctx, FONT_COLOR, FONT_STYLE, TEXT_LINE, 'Список результатов:', signX, signY + 20);

  renderBar(ctx, names, times);
};
