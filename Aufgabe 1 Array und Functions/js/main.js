/*
Project: Aufgabe 1 Array und Functions
Author: Julian HUBER
Date:    21.09.2021
*/


'usestrict';
const appName='Arrays';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;
 
let output=document.getElementById('output');
let output2=document.getElementById('output2');
let output3=document.getElementById('output3');
let canvas=document.getElementById('myCanvas');



    function showArrayWithMessage(message,thisArray){
        let myoutput = '<div>'+message+'<br>';
        for (let index = 0; index < thisArray.length; index++) {
            myoutput += thisArray[index] +'<br>';
        }
        return myoutput + '</div>';
    }
    let message = 'Hallo';
    let thisArray = [1,2,3,4]
    output.innerHTML=showArrayWithMessage(message,thisArray);


    function calculateProductArray(arrayOfNumbers){
        let result =1;
    for (let index = 0; index < arrayOfNumbers.length; index++) {
        result = result*arrayOfNumbers[index]
    }
    return result;
    }
    let arrayOfNumbers = [2,4,6];
    output2.innerHTML=calculateProductArray(arrayOfNumbers);

    function getArrayElements (from, to, myArray){
        let huabaArray = [];
        for (let index = from; index < to+1; index++) {
            huabaArray.push(myArray[index]);
        }
        return huabaArray;
    }
    output3.innerHTML=getArrayElements(3,6,[4,6,3,2,1,8,6,4,43]);


  //Erweitert
  /*
  function existsEachItem(itemsArray,myArray){
      for (let index = 0; index < itemsArray.length; index++) {
          result1 = itemsArray[index];
          
      }
      for (let index = 0; index < myArray.length; index++) {
          result2 = myArray[index];
          
      }
      if (result1 != result2){
          return false;
      } else {
          return true;
      }
  }
  let result1;
  let result2;
  let itemsArray = [1,2,3,4];
  let myArray = [1,2,3,4];
  existsEachItem(result2,result1);

  if(existsEachItem == true){
      output.innerHTML= 'zahlen sind gleich';
  }
  */