/**
 * Project:  uebung03_classes_objects_intro
 * Author:  Julian Huber
 * Date:   12.10.2021
 */

'use strict';

const canvasSizeX = window.innerWidth - window.innerWidth / 10;
const canvasSizeY = window.innerHeight - window.innerHeight / 10;

let myCanvas = document.getElementById('myCanvas');
myCanvas.width = canvasSizeX;
myCanvas.height = canvasSizeY;

const ctx = myCanvas.getContext('2d');
const colorRectFill = 'lightGray';
const colorRectStroke = '#000';
ctx.fillStyle = colorRectFill;
ctx.strokeStyle = colorRectStroke;

//ctx.fillRect(0, 0, myCanvas.width, myCanvas.height); // Rechteck
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); // Rechteck

const inputColor = document.getElementById('inputColor');
const btnDraw = document.getElementById('btnDraw');
const output = document.getElementById('output');
// Test - draw a rectangle

class Square {
  constructor(ctx, startX, startY, length, inputColor) {
    this.context = ctx;
    this.startX = startX;
    this.startY = startY;
    this.length = length;
    this.inputColor = inputColor;
  }
  draw() {
    this.context.fillStyle = inputColor.value;
    this.context.fillRect(this.startX, this.startY, this.length, this.length);
  }
}

//Circle Klasse

class Circle {
  constructor(ctx,jhstartX,jhstartY,jhradius,) {
    this.jhcontext = ctx;
    this.jhstartX = jhstartX;
    this.jhstartY = jhstartY; 
    this.jhradius = jhradius;
  }
  zeichne(){
    this.jhcontext.beginPath();
    this.jhcontext.arc(this.jhstartX,this.jhstartY,this.jhradius,0,Math.PI * 2); //Code Zeile, um den Kreis zeichnen zu können
    this.jhcontext.fill();
  }
}

btnDraw.onclick = function () { //wenn man den Button "Zeichnen" anklickt, wird die function ausgeführt
  const square1 = new Square(ctx, 10, 10, 40);
  const square2 = new Square(ctx, 60, 60, 40);
  const square3 = new Square(ctx, 100, 100, 50);
  const square4 = new Square(ctx, 150, 150, 60);
  const square5 = new Square(ctx, 210, 210, 70); //Koordinaten für das Zeichnen 
  const circle1 = new Circle(ctx ,300,400,30);
  const circle2 = new Circle(ctx ,400,400,40);
  const circle3 = new Circle(ctx ,500,400,50);
  square1.draw();
  square2.draw(); 
  square3.draw(); //Zeichnet das Quadrat mit den obrigen code Zeilen
  square4.draw();
  square5.draw();
  circle1.zeichne();
  circle2.zeichne(); //Zeichnet den Kreis mit den obrigen code Zeilen
  circle3.zeichne();
  output.innerHTML='X Position ' + square2.startX + ';'+ 'Y Position ' + square2.startY + ';' + 'Länge ' + square2.length + ';'; //gibt aus welche Koordinaten square2 hat
};


