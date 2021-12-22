// Challenge 1: Age in Days

function ageInDays() {
    var birthYear = prompt("What year were you born... Good friend?");
    var ageDay = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageDay + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
    // console.log(ageDay);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src ='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image)
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    
    
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);

    message = finalMessage(results); // {'message': 'You won!', 'color': 'green' }
    console.log(message);
   
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function