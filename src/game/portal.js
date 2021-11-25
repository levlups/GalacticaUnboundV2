var bAtlas=[]
var num=0
var positions={}
var done=false

export function portal(noa,bpos){
	
	num=0

	done=false
	positions={}
	/*if(noa.world.getBlockID(bpos[0],bpos[1]-1,bpos[2])==blocks['rack']){
		startgrid(bpos[0],bpos[1]-1,bpos[2])
		noa.setBlock(blocks['fire'],bpos[0],bpos[1],bpos[2])
	}
	
		else if(noa.world.getBlockID(bpos[0],bpos[1]+1,bpos[2])==blocks['rack']){
		startgrid(bpos[0],bpos[1]+1,bpos[2])
		noa.setBlock(blocks['fire'],bpos[0],bpos[1],bpos[2])
	}*/
	
		setTimeout(function(){  
	console.log(num+'super')
		if(num<25){
	
			noa.setBlock(blocks['portal'],bpos[0],bpos[1]+1,bpos[2])
		}
		}, 1500);
	
	 if(noa.world.getBlockID(bpos[0],bpos[1]+1,bpos[2])==blocks['rack']){
		 console.log('rackkkkkk')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		
		return true;
		
	}
	else if(noa.world.getBlockID(bpos[0],bpos[1]-1,bpos[2])==blocks['rack']){
		console.log('rackkkkkk1')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		return true;
		
	}
	
	else if(noa.world.getBlockID(bpos[0]+1,bpos[1],bpos[2])==blocks['rack']){
		console.log('rackkkkkk2')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		return true;
		
	}
	else if(noa.world.getBlockID(bpos[0]-1,bpos[1],bpos[2])==blocks['rack']){
		console.log('rackkkkkk3')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		return true;
		
	}
	//noa.setBlock(blocks['rack'],bpos[0],bpos[1]+2,bpos[2])
	

	
}





function startgrid(e,t,i){
	num++
		console.log('regular'+num)
	//num++
	//console.log(num+'soviet')
	k=noa
	
	
	if(num>20){
		done=true
	}
	
	
	
	
	
	
	if(!done){
	                          var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t+1, i ),
                                s = k.world.getBlockID(e, t-1, i );
                            if (r == 0 ) {
									if(positions[e-1+'|'+t+'|'+i]==undefined){
									positions[e-1+'|'+t+'|'+i]='lol'
									
							 
									startgrid(e-1,t,i)
									
									
									
								}
                            }
                            if (o == 0) {
										if(positions[e+1+'|'+t+'|'+i]==undefined){
									positions[e+1+'|'+t+'|'+i]='lol'
									
									startgrid(e+1,t,i)
										
									
									
								}
                            }
                             if (a == 0) {
									if(positions[e+'|'+t+1+'|'+i]==undefined){
									positions[e+'|'+t+1+'|'+i]='lol'
									 
									startgrid(e,t+1,i)
								
									
								}
                            }
                             if (s == 0) {
											if(positions[e+'|'+t-1+'|'+i]==undefined){
									positions[e+'|'+t-1+'|'+i]='lol'
									 
									startgrid(e,t-1,i)
									
									
									
								}
                              
                            }else{
								
								console.log('tfou')
							}
						
						
							
	                        
	}
						
}
