import {playerKneel} from './animation.js'

export function flyState(){
	
	console.log('were flying')
	
	
	
}

var flynum=0
export function setupFlying(noa){
	

noa.inputs.up.on('jump', function () {
	//isFlying=true
	
	if(playerbody==null){
		return;
	}
	
	if(rideName!=='none'){
		return;
	}
	
	flynum++
	setTimeout(function(){
		if(flynum==2){
			isFlying=!isFlying
			
		}
	flynum=0
	},500);
	//isFlying=!isFlying
	if(isFlying){
	playermesh.rotation.x=Math.PI/2
	playermesh._children[0].rotation.x=Math.PI/2
 playerbody.gravityMultiplier=0
 playerbody.airDrag = 2
 	playerbody.velocity[1]=0
	flyHeadAngle=-Math.PI/2
	
	}else {
		playerbody.gravityMultiplier=2
		playerbody.airDrag = 0.1
		playermesh.rotation.x=0
		playermesh._children[0].rotation.x=0
		flyHeadAngle=0
	}
})	




	
	
	
}