import {blocklook} from '../blocklook'
var directions={"north":0,"south":1,"east":2,"west":3}

var newStack=null
var newCount=null
var goodname=null
global.chestmesh=null
export function ebuttonAction(mesh){
	bigSign="Meeting!"
	bigSignTime=3
	bigSignColor="red"
	animateOpen(mesh.parent._children[1])
	
	console.log(listofplayers)
			datablock['message']="!^!Meeting!"
		
	

	
}


	
							
							
							
							
function animateOpen(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: -0.1
});

keyFrames.push({
    frame: endFrame,
    value: 0
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, startFrame, endFrame, false);


							}
							
							
							
