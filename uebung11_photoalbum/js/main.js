// Template Version: 2021_11_10
/*
Project: uebung11_photoalbum
Author: Julian Huber
Date:    10.01.2022
*/

'use strict';
const appName = 'Students';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;

const inputID = document.getElementById('Id');
const inputPhoto = document.getElementById('photo');
const inputwidth = document.getElementById('width');
const inputheight = document.getElementById('height');
const inputtitle = document.getElementById('title');
const output2 = document.getElementById('output2');

const btnClearPhoto = document.getElementById('clearphoto');
const btnDeletePhoto = document.getElementById('deletephoto');
const btnClear = document.getElementById('clear');
const btnAdd = document.getElementById('add');
const btnshow = document.getElementById('show');

class photo {
  #id;
  #title;
  #width;
  #height;
  #pixels;



  constructor(id, title, width, height, pixels) {
    this.#id=id;
    this.#title=title;
    this.#width=width;
    this.#height=height;
    this.#pixels=pixels;
  }

  get getid() {
    return this.#id;
  }

  get getwidth() {
    return this.#width;
  }

  get getheight() {
    return this.#height;
  }
  get getpixels() {
    return this.#pixels;
  }

  set settitle(value) {
    this.#title = value;
  }

  rotate(degree){
    let tempWidth = this.#width;
    if(degree==90||degree==-90||degree==270||degree==-270){
      this.#width=this.#height;
      this.#height=tempWidth;
    }
  }
  
  resize(percent) {
    this.#width*=(percent/100);
    this.#height*=(percent/100);
    this.#pixels=this.#width*this.#height;
  }

  getInfo() {
    return   'ID:' +this.#id + ', Title:' +   this.#title + ', Width:' + this.#width + ' , Height:' + this.#height;
  }
}

let photoInventory = new Map ();

function isCorrect(input) {
  if (input > 0 && input != '') {
    return input;
  }
}

btnshow.onclick = function () {
  output2.innerHTML='';
  for (let Foto of photoInventory.values()) {
    output2.innerHTML += Foto.getInfo();
  }
};

btnAdd.onclick = function () {
  if (isCorrect(inputID.value) && isCorrect(inputtitle.value) && isCorrect(inputwidth.value) && isCorrect(inputheight.value)) {
    let newPhoto = new photo(
      inputID.value,
      inputwidth.value,
      inputheight.value,
      inputtitle.value,
    );
    photoInventory.set(inputtitle.value , newPhoto);
  }
};

btnClear.onclick = function () {
  photoInventory.clear();
  inputID.value = '';
  inputtitle.value = '';
  inputwidth.value = '';
  inputheight.value = '';
};

btnClearPhoto.onclick = function () {
  inputPhoto.value='';
};

btnDeletePhoto.onclick = function () {
  photoInventory.delete(inputPhoto.value);
  alert('The Photo has been deleted!');
};

