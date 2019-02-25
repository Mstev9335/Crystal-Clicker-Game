// variables
var randomNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
 var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var counter=0;
var wins = 0;
var losses = 0;


//display
$("#wins").text(wins);
$("#losses").text(losses);
$("#total-score").text(counter);



// images to click
// $("#image1").prepend('<img  class="img" id="crystal-image1" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />')
// $("#image2").prepend('<img class="img" id="crystal-image2" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />')
// $("#image3").prepend('<img class="img" id="crystal-image3" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />')
// $("#image4").prepend('<img class="img" id="crystal-image4" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />')

$('#image1').prepend('<img class="img" id="crystal-image1" src="assets/images/gem1.png">');
$('#image2').prepend('<img class="img" id="crystal-image2" src="assets/images/gem2.png">');
$('#image3').prepend('<img class="img" id="crystal-image3" src="assets/images/gem3.png">');
$('#image4').prepend('<img class="img" id="crystal-image4" src="assets/images/gem4.png">');


// ----------- functions -------------------


// create random number
function createRandom(){
  randomNumber = Math.floor(Math.random()*(120-19+1)+19);
$("#random-Number").text(randomNumber);
}



createRandom();

// give crystals values
function assignValues(){
  crystalValue1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  crystalValue2 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  crystalValue3 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  crystalValue4 = numberOptions[Math.floor(Math.random() * numberOptions.length)];

  // testing random values given to crystals
  console.log("crystal 1 : "+crystalValue1);
  console.log("crystal 2 : "+crystalValue2);
  console.log("crystal 3 : "+crystalValue3);
  console.log("crystal 4 : "+crystalValue4);
 }
assignValues(); 


// ------ event functions --------
// crystal 1
$("#crystal-image1").on("click", function() {

  crystalValue1 = parseInt(crystalValue1);
  
  counter += crystalValue1;

  
  $("#total-score").text(counter);

  if (counter === randomNumber) {
    wins++;
    counter=0;
    $("#wins").text(wins);
    createRandom();
    assignValues(); 
    $("#total-score").text(counter);
  }

  else if (counter >= randomNumber) {
    losses++;
    counter=0;
    $("#losses").text(losses);
    createRandom();
    assignValues(); 
    $("#total-score").text(counter);
  }
});

// crystal 2
$("#crystal-image2").on("click", function() {

  crystalValue2 = parseInt(crystalValue2);
 
  counter += crystalValue2;

  
  $("#total-score").text(counter);

  if (counter === randomNumber) {
    wins++;
    counter=0;
    $("#wins").text(wins);
    createRandom();
    assignValues(); 
    $("#total-score").text(counter);
  }

  else if (counter >= randomNumber) {
    losses++;
    counter=0;
    $("#losses").text(losses);
    createRandom();
    assignValues();
    $("#total-score").text(counter); 
  }

  // crystal 3
});
$("#crystal-image3").on("click", function() {

  crystalValue3 = parseInt(crystalValue3);
 
  counter += crystalValue3;

  
  $("#total-score").text(counter);

  if (counter === randomNumber) {
    wins++;
    counter=0;
    $("#wins").text(wins);
    createRandom();
    assignValues();
    $("#total-score").text(counter); 
  }

  else if (counter >= randomNumber) {
    losses++;
    counter=0;
    $("#losses").text(losses);
    createRandom();
    assignValues(); 
    $("#total-score").text(counter);
  }
});

// crytal 4
$("#crystal-image4").on("click", function() {

  crystalValue4 = parseInt(crystalValue4);

  counter += crystalValue4;

  $("#total-score").text(counter);

  if (counter === randomNumber) {
    wins++;
    counter=0;
    $("#wins").text(wins);
    createRandom();
    assignValues(); 
    $("#total-score").text(counter);
  }

  else if (counter >= randomNumber) {
    losses++;
    counter=0;
    $("#losses").text(losses);
    createRandom();
    assignValues();
    $("#total-score").text(counter); 
  }
});
