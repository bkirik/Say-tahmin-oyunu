//GENERATE RANDOM NUMBER
function generateNumber(){
    a = Math.floor(Math.random()*11)
    return a
}
//TAKE THE INPUT AND CHECK IT

let points = 0;
function takeInput(){
    input = document.getElementsByClassName("inputBox")[0].value
    function clampAndWrite(n){
        if (n>10){
            input = 10;
            document.getElementsByClassName("inputBox")[0].value = 10;
        }
        else if (n<0){
            n = 0;
            document.getElementsByClassName("inputBox")[0].value = 0;
        }
    }
    clampAndWrite(input);
    number = generateNumber();
    if (input == ""){
        alert("Bir sayı girmediniz!")
    }
    else if (input == number){
        document.getElementById("checker").style.backgroundColor = "green";
        document.getElementById("sonucText2").innerHTML = "DOĞRU TAHMİN";
        points+=10
        document.getElementById("sonucText").innerHTML = "PUAN: " + points

    }
    else if (input != number){
        document.getElementById("checker").style.backgroundColor = "red";
        document.getElementById("sonucText2").innerHTML = "YANLIŞ TAHMİN.. CEVAP: " + number;
        points-=1;
        document.getElementById("sonucText").innerHTML = "PUAN: " + points
    }
}