// var card = document.querySelector('.card');
var cards_1 = document.querySelectorAll('.row1');
var cards_2 = document.querySelectorAll('.row2');
var cards_3 = document.querySelectorAll('.row3');
var cards_4 = document.querySelectorAll('.row4');
var cards_5 = document.querySelectorAll('.row5');
var cards_6 = document.querySelectorAll('.row6');

setTimeout(function(){
    cards_1.forEach(function(card){
        card.classList.toggle('is-flipped');
    })

}, 1000);

setTimeout(function(){
    cards_2.forEach(function(card){
        card.classList.toggle('is-flipped');
    })

}, 2000);

setTimeout(function(){
    cards_3.forEach(function(card){
        card.classList.toggle('is-flipped');
    })

}, 3000);

setTimeout(function(){
    cards_4.forEach(function(card){
        card.classList.toggle('is-flipped');
    })

}, 4000);

setTimeout(function(){
    cards_5.forEach(function(card){
        card.classList.toggle('is-flipped');
    })

}, 5000);

setTimeout(function(){
    cards_6.forEach(function(card){
        card.classList.toggle('is-flipped');
    })

}, 6000);

var Mei = document.querySelector('#Mei');
var Mei_cnt = 0;
Mei.addEventListener( 'click', function() {
    Mei.classList.toggle('is-flipped');
  });