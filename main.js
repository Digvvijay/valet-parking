cv=document.getElementById("cv");
ctx=cv.getContext("2d");

car_width=100;
car_height=100;
car_x=10;
car_y=10;

background_image = "parkingLot.jpg";
car_image = "car2.png";


function add() {
	bg=new Image();
    bg.onload=upload_background;
    bg.src=background_image;

    c=new Image();
    c.onload=upload_car;
    c.src=car_image;
}
function upload_background() {
    ctx.drawImage(bg,0,0,cv.width,cv.height);

}

function upload_car() {
    ctx.drawImage(c,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if (car_y>=0)
    {
        car_y=car_y-10;

        console.log("when up arrow key pressed,x="+car_x+",y="+car_y);

        upload_background();
        upload_car();
    }
}

function down()
{
    if(car_y<=500)
    {
        car_y=car_y+10;

        console.log("when up arrow key pressed,x="+car_x+",y="+car_y);

        upload_background();
        upload_car();
    }
}

function left()
{
    if(car_x>=0)
    {
        car_x=car_x-10;
        console.log("when up arrow key pressed,x="+car_x+",y="+car_y);

        upload_background();
        upload_car();
    }
}

function right()
{
    if(car_x<=700)
    {
        car_x=car_x+10;
        console.log("when up arrow key pressed,x="+car_x+",y="+car_y);

        upload_background();
        upload_car();
    }
}