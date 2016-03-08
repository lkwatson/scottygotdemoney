var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var width = canvas.width;
var height = canvas.height;
ctx.imageSmoothingEnabled = false;

var x = 0;
var y = 0;
var noOfDrops = 50;
var dollarArray = [];

    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        for (var i=0; i< noOfDrops; i++) {
	        ctx.drawImage (dollarArray[i].image, dollarArray[i].x, dollarArray[i].y,36,17); //The rain drop
	
	        dollarArray[i].y += dollarArray[i].speed; //Set the falling speed
	        
	        if (dollarArray[i].y > height) {  //Repeat the raindrop when it falls out of view
	        	dollarArray[i].y = -25 //Account for the image size
				dollarArray[i].x = Math.random() * 600;    //Make it appear randomly along the width    
        	}
        
        }
    }

    function setup() {
		if (c.getContext) {           
        setInterval(draw, 36);
        for (var i = 0; i < noOfDrops; i++) {
            var dollarObj = new Object();
            dollarObj["image"] =  new Image();
			dollarObj.image.src = 'img/dollar.png';
                
            dollarObj["x"] = Math.random() * 600;
            dollarObj["y"] = -25;
            dollarObj["speed"] = 3 + Math.random() * 5;
            dollarArray.push(dollarObj);
            }

        }
    }

setup();
