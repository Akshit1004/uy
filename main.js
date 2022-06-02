var canvas =  new fabric.Canvas('myCanvas');
// Create canvas variable
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		player_object = Img;
		player_object.scaleToWidth(50);
		player_object.scaleToHeight(50);
		player_object.set({top:hole_y,left:hole_x});
		canvas.add(hole_object);
		});
		new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_object = Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.set({top:ball_y,left:ball_x});
		canvas.add(ball_object);
		});
		
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
	
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
		if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}

	function down()
	{
		if(player_y <=500)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	    canvas.remove(player_object);
		player_update();
	}

	function left()
	{
		if(ball_x >5)
		{
			if(player_x >=0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	    canvas.remove(player_object);
		player_update();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	    canvas.remove(player_object);
		player_update();
		}
	}
	


