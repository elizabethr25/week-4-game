//Document ready tag
$(document).ready(function (){
//$(document).ready(function() {

//Declare global variables: wins, losses, random numbers? 
var wins = 0;
var losses = 0;
var yourscore = 0;

//When the page loads, pput random number in Random Number div
   
    var randomnumber = parseInt(Math.floor(Math.random()*101)+9);
    console.log(randomnumber);
       
    $("#randomnum").text(randomnumber);
    
//Assign hidden random numbers to each of the crystals

    var blue = parseInt(Math.floor(Math.random()*12)+1)
    console.log("Blue = " + blue);

    var green = parseInt(Math.floor(Math.random()*12)+1)
    console.log("Green = " + green);

    var pink = parseInt(Math.floor(Math.random()*12)+1)
    console.log ("Pink = " + pink);

    var purple = parseInt(Math.floor(Math.random()*12)+1)
    console.log ("Purple = " + purple);


//After the game is over reset the game:
    function reset () {
        yourscore = 0;
        $("#yourscore").text(yourscore);
        randomnumber = parseInt(Math.floor(Math.random()*101)+9);
        $("#randomnum").text(randomnumber);
        console.log ("New random number: " + randomnumber);        
        blue = parseInt(Math.floor(Math.random()*12)+1);
        console.log("New blue number: " + blue);
        green = parseInt(Math.floor(Math.random()*12)+1);
        console.log ("New green number: " + green);
        pink = parseInt(Math.floor(Math.random()*12)+1);
        console.log ("New pink number: " + pink);
        purple = parseInt(Math.floor(Math.random()*12)+1);
        console.log ("New purple number: " + purple);
    }

//When a crystal is clicked, add it's random number to the "your score" section



    $("#blue-crystal").click(function() {
        yourscore = yourscore + blue;
        $("#yourscore").text(yourscore);
        
        if (yourscore === randomnumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
            reset();
        } else if (yourscore > randomnumber) {
            losses ++;
            $("#losses").html("Losses: " + losses);
            reset();
        }
    })

    $("#green-crystal").click(function() {
        yourscore = yourscore + green;
        $("#yourscore").text(yourscore);

        if (yourscore === randomnumber){
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
            reset();
        } else if (yourscore > randomnumber){
            losses++;
            $("#losses").html("Losses: " + losses);
            reset();
        }
    })

    $("#pink-crystal").click(function() {
        yourscore = yourscore + pink;
        $("#yourscore").text(yourscore);

        if (yourscore === randomnumber){
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log(wins);
            reset();
        } else if (yourscore > randomnumber){
            losses++;
            $("#losses").html("Losses " + losses);
            reset();
        }
    })

    $("#purple-crystal").click(function() {
        yourscore = yourscore + purple;
        $("#yourscore").text(yourscore);

        if (yourscore === randomnumber){
            wins++;
            $("wins").html("Wins: " + wins);
            console.log(wins);
            reset();
        } else if (yourscore > randomnumber){
            losses++;
            $("losses").html("Losses: " + losses);
            reset();
        }
    })






//Assign new random numbers to the crystals 

//Generate a new random number

//Reset "your score" to zero

})
