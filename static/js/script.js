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