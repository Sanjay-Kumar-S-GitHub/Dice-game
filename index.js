var name1 = prompt('Enter name of player 1: ');

var name2 = prompt('Enter name of player 2: ');


document.querySelectorAll('p')[0].textContent = name1;
document.querySelectorAll('p')[1].textContent = name2;


var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = 'dice'+randomNumber1+'.png';

var randomImageSource = 'images/'+randomDiceImage;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src',randomImageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = 'images/dice'+randomNumber2+'.png';

document.querySelectorAll('img')[1].setAttribute('src',randomImageSource2);



if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = '🚩'+name1+' Wins!';
}
else if (randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML = name2+' Wins!🚩';
}
else{
    document.querySelector('h1').innerHTML = '🏳️Draw!🏳️';
}


