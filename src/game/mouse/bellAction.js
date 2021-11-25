import {blocklook} from '../blocklook'
var directions={"north":0,"south":1,"east":2,"west":3}

var newStack=null
var newCount=null
var goodname=null
global.chestmesh=null
export function bellAction(mesh){
	bigSign="Alert!"
	bigSignTime=3
	bigSignColor="red"
	animateOpen(mesh)
	
	console.log(listofplayers)
			datablock['message']="!^!Alert!"
		
	

	
}


	
							
							
							
							
function animateOpen(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: Math.PI/2+10
});

keyFrames.push({
    frame: endFrame,
    value: -Math.PI/2
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, startFrame, endFrame, true);


							}
							
							
							
