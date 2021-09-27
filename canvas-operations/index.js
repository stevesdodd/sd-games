"use strict";
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
//Set constants
canvas.width = 800;
canvas.height = 3 * canvas.width / 4.0;
var carPosX = 200;
var baseHeight = 540;
var roofHeight = baseHeight - 150;
var BonnetHeight = baseHeight - 75;
var carWidth = 450;
var wheel1CenterX = carPosX + 75;
var wheel1CenterY = baseHeight - 15;
var wheel2CenterX = carPosX + carWidth - 75;
var wheel2CenterY = baseHeight - 15;
var image = new Image();
image.src = "cloud-large.png";
var eraseCanvas = function (context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
};
var drawGradientBackground = function (context) {
    var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'lightBlue');
    gradient.addColorStop(.5, 'blue');
    gradient.addColorStop(1, 'lightBlue');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
};
var drawFillCircle = function (context, x, y, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
};
var drawStrokeCircle = function (context, x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.stroke();
    context.closePath();
};
var drawRoad = function (context) {
    context.fillStyle = 'gray';
    context.fillRect(0, canvas.height - 50, canvas.width, 50);
    context.beginPath();
    context.lineWidth = 5;
    context.setLineDash([10, 40]);
    context.strokeStyle = 'orange';
    context.moveTo(0, canvas.height - 15);
    context.lineTo(canvas.width, canvas.height - 15);
    context.stroke();
    context.setLineDash([]);
};
var drawRoof = function (context, color, delta) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(carPosX + 25 + delta, BonnetHeight);
    context.lineTo(carPosX + 100, roofHeight + delta);
    context.lineTo(carPosX + carWidth - 150, roofHeight + delta);
    context.lineTo(carPosX + carWidth - 75 - delta, BonnetHeight);
    context.fill();
};
var drawClouds = function (context) {
    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(image, 600, 100, 128, 128);
    context.restore();
    context.drawImage(image, 450, 125, 96, 96);
    context.drawImage(image, 600, 175, 128, 128);
};
var drawWindowGap = function (context) {
    var windowGapCenterX = carPosX + carWidth / 2 - 15;
    context.fillStyle = 'red';
    context.beginPath();
    context.moveTo(windowGapCenterX - 5, roofHeight);
    context.lineTo(windowGapCenterX + 5, roofHeight);
    context.lineTo(windowGapCenterX + 10, BonnetHeight);
    context.lineTo(windowGapCenterX - 10, BonnetHeight);
    context.closePath();
    context.fill();
};
var draw = function (context) {
    drawGradientBackground(context);
    drawRoad(context);
    context.fillStyle = 'red';
    context.fillRect(carPosX, BonnetHeight, carWidth, baseHeight - BonnetHeight);
    drawFillCircle(context, wheel1CenterX, wheel1CenterY, 50, 'black');
    drawFillCircle(context, wheel1CenterX, wheel1CenterY, 40, 'gray');
    drawStrokeCircle(context, wheel1CenterX, wheel1CenterY, 5, 'black');
    drawFillCircle(context, wheel2CenterX, wheel2CenterY, 50, 'black');
    drawFillCircle(context, wheel2CenterX, wheel2CenterY, 40, 'gray');
    drawStrokeCircle(context, wheel2CenterX, wheel2CenterY, 5, 'black');
    drawRoof(context, 'red', 0);
    drawRoof(context, '#99f6ff', 15);
    drawWindowGap(context);
    drawClouds(context);
    context.font = '80px Arial';
    context.fillStyle = 'white';
    context.textAlign = "center";
    context.fillText("Masterpiece", canvas.width / 2, 75);
    context.drawImage(image, 40, 45, 50, 90, 450, 410, 50, 90);
    context.restore();
};
window.onload = function () {
    if (context) {
        draw(context);
    }
};
