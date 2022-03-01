/**
 * Project:   uebung04_classes_circle
 * Author:  Julian Huber
 * Date:   19.10.2021
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

ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); // Rechteck

const inNumber1 = document.getElementById('inNumber1'); 
const msgInNumber1 = document.getElementById('msgInNumber1');
const inputColor = document.getElementById('inputColor');
const btnDraw = document.getElementById('btnDraw');
const btnHide = document.getElementById('btnHide');
const btnShow = document.getElementById('btnShow');
const btnRadius = document.getElementById('btnRadius');
const output = document.getElementById('output');
const btnLeft = document.getElementById('btnLeft');
const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnRight = document.getElementById('btnRight');


//Circle Klasse

class Circle {
  constructor(ctx, jhstartX, jhstartY, jhradius) {
    this.jhcontext = ctx;
    this.jhstartX = jhstartX;
    this.jhstartY = jhstartY;
    this.jhradius = jhradius;
  }
  zeichne() {
    this.jhcontext.fillStyle = inputColor.value;
    this.jhcontext.globalCompositeOperation = 'source-over'; 
    this.jhcontext.beginPath();
  this.jhcontext.arc(this.jhstartX / 2, this.jhstartY / 2, this.jhradius, 0, 2 * Math.PI);
  this.jhcontext.fill();
  } 
  hide(){
    this.jhcontext.beginPath();
    this.jhcontext.globalCompositeOperation = 'destination-out';
    this.jhcontext.beginPath();
    this.jhcontext.arc(this.jhstartX / 2, this.jhstartY / 2, this.jhradius + 1, 0, 2 * Math.PI);
    this.jhcontext.fill();
  }
  changeRadius(newRadius){
    this.hide();
    this.jhradius = newRadius;
    this.zeichne();
  
  }

  //Kreis Bewegen
  move(direction, pixels){
    this.hide();
    if(direction == 'up'){
      this.jhstartY -= pixels;

    } 
    if(direction == 'right'){
      this.jhstartX += pixels;

    }
    if(direction == 'down'){
      this.jhstartY += pixels;
    }
    if(direction == 'left'){ 
      this.jhstartX -= pixels;

    }
    this.zeichne();
  }
}

 //Kreise zeichnen
 const circle1 = new Circle(ctx, myCanvas.width, myCanvas.height, 45);

 //Zeichnen

 btnDraw.onclick = function(){
   circle1.zeichne();
 }

//Hide
btnHide.onclick = function(){
  circle1.hide();
}

//Show
btnShow.onclick = function(){
  circle1.zeichne();
}

//Radius
btnRadius.onclick = function(){
  circle1.changeRadius(inNumber1.value);
  }
  
  //Rechts
  btnRight.onclick = function(){
    circle1.move('right', 10);
  }
  
  //Links
  btnLeft.onclick = function(){
    circle1.move('left', 10);
  }
  
  //Oben
  btnUp.onclick = function(){
    circle1.move('up', 10);
  }
  
  //Unten
  btnDown.onclick = function(){
    circle1.move('down', 10);
  }