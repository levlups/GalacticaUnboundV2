import {blocklook} from './blocklook.js'

export function stairsup(){
	
	
	var side=blocklook(noa)
	console.log(side+ ':Sqid games fan game')
	
	
	if(side=='east'){
	
	for (var i=0;i<7;i++){
	noa.setBlock(blocks['stone'],pos[0]+2+i,pos[1]+i,pos[2])
	noa.setBlock(blocks['stone'],pos[0]+2+i,pos[1]+i,pos[2]+1)
	}
	}
	
	if(side=='west'){
	for (var i=0;i<7;i++){
    noa.setBlock(blocks['stone'],pos[0]-2-i,pos[1]+i,pos[2])
	noa.setBlock(blocks['stone'],pos[0]-2-i,pos[1]+i,pos[2]+1)
	}
	
	}
	
	if(side=='north'){
		
		   for (var i=0;i<7;i++){
		   noa.setBlock(blocks['stone'],pos[0],pos[1]+i,pos[2]+2+i)
		   noa.setBlock(blocks['stone'],pos[0]+1,pos[1]+i,pos[2]+2+i)
		   }
	}
	
	if(side=='south'){
		
		 for (var i=0;i<7;i++){
		noa.setBlock(blocks['stone'],pos[0]-1,pos[1]+i,pos[2]-2-i)
		noa.setBlock(blocks['stone'],pos[0],pos[1]+i,pos[2]-2-i)
		
		 }
		   
		   
	}
		
		
}  


export function wall(h ,floor){
	
	
	var side=blocklook(noa)
	console.log(side+ ':Sqid games fan game')
	
	var po=noa.targetedBlock.adjacent
	if(side=='east'){
	
		   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
			
			if(!floor){
	   noa.setBlock(blocks['stone'],po[0],po[1]+j,po[2]+i)
			}
			else{
				noa.setBlock(blocks['stone'],po[0]+j,po[1]-1,po[2]+i)
			}
		}
	
    
	}
	}
	
	if(side=='west'){
	
		
			   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
				if(!floor){
	   noa.setBlock(blocks['stone'],po[0],po[1]+j,po[2]+i)
			}else{
				   noa.setBlock(blocks['stone'],po[0]-j,po[1]-1,po[2]+i)
			}
		}
	
    
	}
	
	}
	
	if(side=='north'){
		
		   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
			
				if(!floor){
	   noa.setBlock(blocks['stone'],po[0]+i,po[1]+j,po[2])
				}else{
					noa.setBlock(blocks['stone'],po[0]+i,po[1]-1,po[2]+j)
				}
		}
	} 
	}
	
	if(side=='south'){
		
		 	   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
			
			if(!floor){
	   noa.setBlock(blocks['stone'],po[0]+i,po[1]+j,po[2])
		}else{
			 noa.setBlock(blocks['stone'],po[0]+i,po[1]-1,po[2]-j)
		}
		}
	} 
		   
		   
	}
		
		
}  
export function box(x,y,z,noa){////

var start=0
var end=6
  for(var i=start;i<end;i++){
	  
	   for(var j=start;j<end;j++){
	  
	   for(var k=start;k<end;k++){
	  
	  if(i==0 || i==5 || j==0||j==5 || k==0 || k==5){
	  noa.setBlock(blocks['deck'],x+i,y+j,z+k)
	  }
  }
	  
  }
	  
  }

}

	export function crater(x,y,z,noa,p){////

	console.log('hello')
	var radius=5;
	var rad = Math.ceil(radius)
//	console.log('wasgggg');
	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
								
											noa.setBlock(blocks['stone'],Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k );
												
												
												
									
								
						}
					}
				}
			}
			
			
			radius=12;
	rad = Math.ceil(radius)
//	console.log('wasgggg');
	for (var i=-rad-1+3;i<=rad+1-3;i++){
		for (var k=-rad-1+3;k<=rad+1-3;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
								
											
												noa.setBlock(blocks['stone'],Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k +12);
												
												
												
									
								
						}
					}
				}
			}
				  
		
	  }

     