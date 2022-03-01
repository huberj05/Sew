/*
Project: uebung24_gui_taschenrechner
Author:  Julian Huber
Date:    29.04.2021
*/

'use strict';
const APPNAME = 'Wörter';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading1').innerText = APPNAME;

//declaring the variables

const inputSentence = document.getElementById('inputSentence'); 
const btnfind = document.getElementById('btnfind');
const outputResult = document.getElementById('outputResult');

//gibt das Längste Wort in dem eingegebenen Satz aus
btnfind.onclick = function (){
  if (inputSentence.value==''){
    alert('Bitte einen Satz eingeben!');
  }
  let arraySplittedSentence=inputSentence.value.split(' ');
  let longestword = ' '; //Speichert das längste Wort hinein

  for (let index = 0; index < arraySplittedSentence.length; index++) {
     arraySplittedSentence[index];
    if (arraySplittedSentence[index].length > longestword.length){
      longestword = arraySplittedSentence[index];
    }
  }
  outputResult.innerHTML = longestword;
}



