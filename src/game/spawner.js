import {makeEnt} from './ent'
import {pasteBuild} from './builds'
function getHighestEntBlock( x, z) {
	for (var y = 120- 1; y >= 0; y = y - 1) {
		var val = noa.world.getBlockID(x, y, z)
		if (val != 0 && val != 9) return {level: y, block: val}
	}
	return null
}



export function spawner(id){
	
	
	var l=id.split('|')
		
       
		
		
		var k=getHighestEntBlock(l[0]*24,l[2]*24)
		 
		if(k==null)
			return;
		
		if(k.block==blocks['sand']){
			
			 
			
			makeEnt(noa,'cow',1,[l[0]*24,k.level+1,l[2]*24])
			
			
		}
	
	
	
	
}
var facings=['north','south','east','west']
export function buildspawner(id){
	
	
	setTimeout(function(){ 
	var l=id.split('|')
		
       
		
		
		var k=getHighestEntBlock(l[0]*24,l[2]*24)
		 
		if(k==null)
			return;
		
		
		
		if(k.block==blocks['grass'] && noa.getBlock(l[0]*24,k.level,l[2]*24+10)==blocks['grass']){
			
			 
			
			
			
			pasteBuild(l[0]*24,k.level,l[2]*24,facings[Math.floor(Math.random()*3)])
			//console.log([l[0]*24,k.level,l[2]*24])
			
			
			
			
		}
	
	}, 6000);
	
	
}
