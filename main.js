song="";
leftwristX=0;
rightwristX=0;
leftwristY=0;
rightwristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    song=loadSound("music.mp3");
    
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    
}

    function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist>0.2){
    circle(leftwristX,leftwristY,20);
    InNumberleftwristY = Number(leftWristY);
    remove_decimals =floor(InNumberleftwristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume = "+ volume;
    song.setVolume(volume);
    }
    if(scoreRightWrist>0.2){
    circle(rightwristX,rightwristY,20);
if(rightWristY >0 && rightWristY <= 100)
{
	document.getElementById("speed").innerHTML = "Speed = 0.5x";		
	song.rate(0.5);
}
        if(rightWristY >100 && rightWristY <= 200)
{
	document.getElementById("speed").innerHTML = "Speed = 1x";		
	song.rate(1);
}
        if(rightWristY >200 && rightWristY <= 300)
{
	document.getElementById("speed").innerHTML = "Speed = 1.5x";		
	song.rate(1.5);
}
        if(rightWristY >300 && rightWristY <= 400)
{
	document.getElementById("speed").innerHTML = "Speed = 2x";		
	song.rate(2);
}
        if(rightWristY >400 && rightWristY <= 500)
{
	document.getElementById("speed").innerHTML = "Speed = 2.5x";		
	song.rate(2.5);
}
    }
}

}
function play(){
    song.play();
song.setVolume(1);
    song.rate(1);
}
function gotposes(results){
    if (results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        leftwristY=results[0].pose.leftWrist.y;
    }
}
