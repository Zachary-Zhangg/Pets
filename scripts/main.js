// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Cute Companions!';

// document.querySelector('html').onclick = function() {
    //alert("PLEASE DON'T TOUCH ME! IT HURTS!");
//};

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doge.jpg') {
        myImage.setAttribute('src', 'images/goldfishstaring.webp');
    } else {
        myImage.setAttribute('src', 'images/doge.jpg');
    };
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myHeading.textContent = localStorage.getItem('name') + ' loves pets!';

function setUsername() {
    let myName = prompt('Please enter your name:');
    if(myName!==null){
        myHeading.textContent = myName + ' loves pets!'
        localStorage.setItem('name', myName);
    } else {
        myHeading.textContent = 'Pets!'
    }
}
    

myButton.onclick = function(){
    setUsername();
}

let savedName = localStorage.getItem('name');
