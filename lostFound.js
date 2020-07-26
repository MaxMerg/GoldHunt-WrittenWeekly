var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x;
var y;
var distance;

var lives = 0;
var single = " attempt!";
var plural = " attempts!";

var real;

function lineLength( x, y, x0, y0 ){
	document.write(Math.sqrt( ( x -= x0 ) * x + ( y -= y0 ) * y ));
};

//Square Attributes
var charX = 400;
var charY = 400;
var charW = 50;
var charH = 50;
var charCenterX;
var charCenterY;
var color = "black";

//Circle Attributes
var dotX = Math.floor((Math.random()*725));
var dotY = Math.floor((Math.random()*725));
var dotRad = 10;
var centerX = ((dotRad/2)+dotX)-15;
var centerY = ((dotRad/2)-dotY)+35;
var centerXX;
var centerYY;
var centerFinalX;
var centerFinalY;

//Makes the Circle Cords be on the 10 scale
function cleanUp() {
    var centerXX = 800-centerX;
    var stringX = centerXX.toString();
    var lengthX = stringX.length;
    var indexValue = (lengthX)-1;
    x = stringX.charAt(indexValue);
    var finalX = parseInt(x);
    centerFinalX = finalX + centerX + 5;

    var centerYY = 800-centerY;
    var stringY = centerYY.toString();
    var lengthY = stringY.length;
    var indexValueY = (lengthY)-1;
    y = stringY.charAt(indexValueY);
    var finalY = parseInt(y);
    centerFinalY = (finalY + centerY + 5)*-1;
}

//Measurements and line
function line() {
    ctx.beginPath(); 
    ctx.moveTo(centerFinalX, centerFinalY+45);
    ctx.lineTo(charCenterX-15, charCenterY+35);
    ctx.fillStyle = "white";

    //d=√((x_2-x_1)²+(y_2-y_1)²) 

    var a = (centerFinalX - charCenterX)*(centerFinalX - charCenterX);
    var b = (centerFinalY - charCenterY)*(centerFinalY - charCenterY);
    distance = (Math.ceil(Math.sqrt((a+b))));
}

function drawChar() {
    charCenterX = charX+25;
    charCenterY = (charY-25);

    //square
    ctx.beginPath();
    ctx.rect(charX, charY, charW, charH);
    ctx.fillStyle = color;
    ctx.fill();
    
    //circle
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";

    cleanUp();
    line();
}

window.addEventListener("keydown", move, false);
function move(e) {
    switch(e.keyCode) {
        case 37:
            if (charX <= 0) {
                console.log("hit");
            }
            else {
            charX -= 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawChar();
            }
            break;
        case 38:
            if (charY <= 0) {
                console.log("hit");
            }
            else {
            charY -= 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawChar();
            }
            break;
        case 39:
            if (charX >= 700) {
                console.log("hit");
            }
            else {
            charX += 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawChar();
            }
            break;
        case 40:
            if (charY >= 700) {
                console.log("hit");
            }
            else {
            charY += 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawChar();
            }
            break;
        case 32:
            //YOU WIN
            if (distance <= 150) {
                ctx.beginPath();
                ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
                ctx.fillStyle = "gold";
                ctx.strokeStyle = "black";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.rect(charX, charY, charW, charH);
                color = "red";
                ctx.fillStyle = color;
                ctx.fill();

                lives + 1;

                if (lives == 0) {
                    real = single;
                }
                else {
                    real = plural;
                }
            
                setTimeout(function() {
                    alert("YOU FOUND THE GOLD!! It took you " + (lives + 1) + real);
                    location.reload();
                }, 1500);
            }
            //YOU LOOSE
            else if (distance <= 250) {
                ctx.beginPath();
                ctx.rect(charX, charY, charW, charH);
                color = "orange";
                ctx.fillStyle = color;
                ctx.fill();

                lives = lives +1;
                if(lives == 7) {
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
                    ctx.fillStyle = "gold";
                    ctx.strokeStyle = "black";
                    ctx.fill();
                    ctx.stroke();
    
                    alert("You ran out of attempts. GAME OVER. ");

                    setTimeout(function done() {
                        location.reload();
                    }, 1500);
                    }
            }
            else if (distance <= 375 && distance >= 250) {
                ctx.beginPath();
                ctx.rect(charX, charY, charW, charH);
                color = "yellow";
                ctx.fillStyle = color;
                ctx.fill();

                lives = lives +1;
                if(lives == 7) {
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
                    ctx.fillStyle = "gold";
                    ctx.strokeStyle = "black";
                    ctx.fill();
                    ctx.stroke();
    
                    alert("You ran out of attempts. GAME OVER.");

                    setTimeout(function done() {
                        location.reload();
                    }, 1500);

                        

                }
            }
            else if (distance <= 500 && distance >= 375) {
                ctx.beginPath();
                ctx.rect(charX, charY, charW, charH);
                color = "teal";
                ctx.fillStyle = color;
                ctx.fill();

                lives = lives +1;
                if(lives == 7) {
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
                    ctx.fillStyle = "gold";
                    ctx.strokeStyle = "black";
                    ctx.fill();
                    ctx.stroke();
    
                    alert("You ran out of attempts. GAME OVER.");

                    setTimeout(function done() {
                        location.reload();
                    }, 1500);


                        
                }

            }
            else if (distance <= 675 && distance >= 500) {
                ctx.beginPath();
                ctx.rect(charX, charY, charW, charH);
                color = "blue";
                ctx.fillStyle = color;
                ctx.fill();

                lives = lives +1;
                if(lives == 7) {
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
                    ctx.fillStyle = "gold";
                    ctx.strokeStyle = "black";
                    ctx.fill();
                    ctx.stroke();
    
                    alert("You ran out of attempts. GAME OVER.");

                    setTimeout(function done() {
                        location.reload();
                    }, 1500);


                        
                }

            }
            else if (distance <= 900 && distance >= 675) {
                ctx.beginPath();
                ctx.rect(charX, charY, charW, charH);
                color = "purple";
                ctx.fillStyle = color;
                ctx.fill();

                lives = lives +1;
                if(lives == 7) {
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, dotRad, 0, 2 * Math.PI);
                    ctx.fillStyle = "gold";
                    ctx.strokeStyle = "black";
                    ctx.fill();
                    ctx.stroke();

                    alert("You ran out of attempts. GAME OVER.");

                    setTimeout(function done() {
                        location.reload();
                    }, 1500);
  
                }
            }
            break;
        default:
            "Error";
            break;
    }   
}  
drawChar();




//38 = upArrow
//39 = rightArrow
//40 = downArrow
//32 = spacebar




