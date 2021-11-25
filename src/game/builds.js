var config=require('./builds/castle.json')
import {makeEnt} from './ent'

function getHighestBuildBlock( x, z) {
	for (var y = 120- 1; y >= 0; y = y - 1) {
		var val = noa.world.getBlockID(x, y, z)
		if (val != 0 && val != 9) return {level: y, block: val}
	}
	return null
}



export function builds(id){
	
		 
}




var buildnum=0
var build={}
var buildsize=10
export function createBuild(){
	
	for (var i=0;i<buildsize;i++){
			
			for (var j=0;j<buildsize;j++){
				
						for (var k=0;k<buildsize;k++){
					var c=noa.world.getBlockID(i,j,k)
					
					
						build[buildnum]=[c,i,j,k]
						buildnum++
					
				}
			
		}
			
		}
		
		console.log(JSON.stringify(build))
	
	
	
}
export function clearBuild(){
	
	for (var i=0;i<buildsize;i++){
			
			for (var j=0;j<buildsize;j++){
				
						for (var k=0;k<buildsize;k++){
					var c=noa.world.getBlockID(i,j,k)
					
					if(c!==blocks['grass']){
						noa.setBlock(0,i,j,k)
						//buildnum++
					}
				}
			
		}
			
		}
		
		console.log(JSON.stringify(build))
	
	
	
}

export function pasteBuild(x,y,z,facing){
	
		
	if(facing=='north'){
		
		
	for(const key in config){
			//setTimeout(function(){ 
			noa.setBlock(config[key][0],config[key][1]+Math.round(x)-5,config[key][2]+Math.round(y),config[key][3]+Math.round(z)-5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				makeEnt(noa,'robot',1,[config[key][1]+Math.round(x),config[key][2]+Math.round(y),config[key][3]+Math.round(z)])
			}
			// }, 500);
		}
		
	}
	
	if(facing=='south'){
		
		
	for(const key in config){
			noa.setBlock(config[key][0],-config[key][1]+Math.round(x)+5,config[key][2]+Math.round(y),-config[key][3]+Math.round(z)+5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				makeEnt(noa,'robot',1,[-config[key][1]+Math.round(x),config[key][2]+Math.round(y),-config[key][3]+Math.round(z)])
			}
		}
		
	}

	if(facing=='east'){
	for(const key in config){
			
			noa.setBlock(config[key][0],config[key][3]+Math.round(x)-5,config[key][2]+Math.round(y),config[key][1]+Math.round(z)-5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				makeEnt(noa,'robot',1,[config[key][3]+Math.round(x),config[key][2]+Math.round(y),config[key][1]+Math.round(z)-5])
			}
			
		}
		
	}
	
	if(facing=='west'){
		
		
	for(const key in config){
			
			noa.setBlock(config[key][0],-config[key][3]+Math.round(x)+5,config[key][2]+Math.round(y),-config[key][1]+Math.round(z)+5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				makeEnt(noa,'robot',1,[-config[key][3]+Math.round(x),config[key][2]+Math.round(y),-config[key][1]+Math.round(z)])
			}
		}
		
	}
	
	
	
	
	
	
}

