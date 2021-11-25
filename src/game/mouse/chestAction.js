import {blocklook} from '../blocklook'
var directions={"north":0,"south":1,"east":2,"west":3}

var newStack=null
var newCount=null
var goodname=null
global.chestmesh=null
export function chestAction(mesh,remote){
	if(mesh.parent._children[1].rotation.x==0){
	
	animateOpen(mesh.parent._children[1])
	
	if(remote){
		return;
	}
	
	setTimeout(function(){ 
        
		chestmesh=mesh
		goodname=mesh.name.split(':')
		console.log(goodname[3])
			if(chestList[goodname[3]]!==null){
					console.log('word')
					itemStack.length=9
					countStack.length=9
				
					 newStack=itemStack.concat(chestList[goodname[3]].items)
					 newCount=countStack.concat(chestList[goodname[3]].itemCount)
					itemStack=newStack
					countStack=newCount
					console.log(itemStack)
					playerbody.mass=0
					
				}
				
		
		
		
	}, 1000);
	}else{
		playerbody.mass=1
		animateClose(mesh.parent._children[1])
			if(remote){
		return;
	}
		currentUI=uis.hotbar
		
		if(goodname!==null){
			
		chestList[goodname[3]].items=itemStack.slice(9,36)
		chestList[goodname[3]].itemCount=countStack.slice(9,36)
		
					itemStack.length=9
					countStack.length=9
		newStack=null
		newCount=null
		goodname=null
		
		}
	}

	
}


	
							
							
							
							
function animateOpen(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: 0
});

keyFrames.push({
    frame: endFrame,
    value: -Math.PI/3
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, startFrame, endFrame, false);

	
							}
							
							
							
							function animateClose(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: 0
});

keyFrames.push({
    frame: endFrame,
    value: -Math.PI/3
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, endFrame, startFrame, false);

	
							}