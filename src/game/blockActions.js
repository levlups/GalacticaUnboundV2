var carfacing=null
var offset=false
import { blocklook } from './blocklook' 
export function blockActions(noa){
	
	riding=false
	swimming=false
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['floor']){
		
		if(!offset){
			
			
			noa.ents.getState(noa.playerEntity,'mesh').offset=[0,-0.5,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,-0.5,0]			
							offset=true
		}
		
		
	}else{
		
		if(onStairs){
		
		noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]
		noa.ents.getState(noa.playerEntity,'shadow').offset=[0,0,0]
		onStairs=false
      
		}				
          //offset=false
	}

	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))!==0){

			if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['ladder']){
		playerbody.velocity[1]=0.65
		
		if(noa.inputs.state.forward){
			
			playerbody.velocity[1]=3
			
		}
		
		if(noa.inputs.state.sprint){
			playerbody.velocity[1]=-3
		}
	}
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['fire']){
		
		playerbody.applyImpulse([0,0.3,0])
		health-=0.1
		
	}

	if(playerbody.inFluid && playerbody.ratioInFluid==1){
			swimming=true
		
	
		return;
	}
	
	if(rideName=='none'){
		return true;
	}
		
		if(playerbody.inFluid && playerbody.ratioInFluid>0.3){
			riding=true
		playerbody.velocity[1]=0.65
	
		return;
	}

	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['rail'] ){
		if(rideName!=='minecart'){
			return;
		}
		if(!onRail){
			
			carfacing=blocklook(noa)
			onRail=true
			noa.entities.removeComponent(noa.playerEntity, noa.entities.names.receivesInputs)
			
		}
		
		switch(carfacing){
	    case "north":	
        playerbody.velocity[0]=0		
		playerbody.velocity[2]=3
		
		break;
		
		 case "south":	
        playerbody.velocity[0]=0		 
		playerbody.velocity[2]=-3
		
		break;
		
			 case "east":
        playerbody.velocity[2]=0				 
		playerbody.velocity[0]=3
		
		break;
		
			 case "west":	
        playerbody.velocity[2]=0			 
		playerbody.velocity[0]=-3
		
		break;
		
		}

	}
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['railside'] ){
		if(rideName!=='minecart'){
			return;
		}
		if(!onRail){
			
			carfacing=blocklook(noa)
			onRail=true
			noa.entities.removeComponent(noa.playerEntity, noa.entities.names.receivesInputs)
			
		}
		
		switch(carfacing){
	    case "north":	
        playerbody.velocity[0]=0		
		playerbody.velocity[2]=3
		
		break;
		
		 case "south":	
        playerbody.velocity[0]=0		 
		playerbody.velocity[2]=-3
		
		break;
		
			 case "east":
        playerbody.velocity[2]=0				 
		playerbody.velocity[0]=3
		
		break;
		
			 case "west":	
        playerbody.velocity[2]=0			 
		playerbody.velocity[0]=-3
		
		break;
		
		}
	
	}

	return;
	
	}
	
	if(onRail){
		
		
		switch(carfacing){
	    case "north":		
		playerbody.velocity[2]=7
		
		break;
		
		 case "south":		
		playerbody.velocity[2]=-7
		
		break;
		
		 case "east":		
		playerbody.velocity[0]=7
		
		break;
		
		 case "west":		
		playerbody.velocity[0]=-7
		
		break;
		
		}
		noa.entities.addComponent(noa.playerEntity, noa.entities.names.receivesInputs)
		onRail=false
		
	}
	
	
}
