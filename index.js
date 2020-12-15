"use strict";

function getDogImage(numberOfDogs = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => aleart('Something went wrong. Try again later'));
}

function displayResults(responseJson){
    console.log(responseJson);

    $('.results').html(`<h2>Look at these dogs!</h2>`);

    for( let dog of responseJson.message) {
        $('.results').append(`<img src="${dog}" class="results-img" widht="200" height="auto">`);
    }
    $('.results').removeClass("hidden");
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        let numberOfDogs =$(`input[name="numberOfDogs"]`).val();
        getDogImage(numberOfDogs);
    });
}

$(function(){
    console.log('App loaded! Waiting for submit!');
    watchForm();
})