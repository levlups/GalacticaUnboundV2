
var k=null
export function setUpWactions(noa){
	
	k=noa;
}

export function checkWater(e,t,i){

                            var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t, i + 1),
                                s = k.world.getBlockID(e, t, i - 1);
                            if (r == blocks['water'] || r == blocks['watertop']) {
								k.setBlock(r, e , t, i)
								datablock.content3=[r, e , t, i]
								setJson(r,[e , t, i])
								setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
									
								if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[blocks['water'], e , t-1, i]
										setJson(r,[e , t-1, i])
								}
								
								
                            }
                            if (o == blocks['water'] || o == blocks['watertop']) {
									k.setBlock(o, e , t, i)
									datablock.content3=[o, e , t, i]
									setJson(o,[e , t, i])
											setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
									
									
									if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[r, e , t-1, i]
										setJson(r,[e , t-1, i])
								}
                               
                            }
                            if (a == blocks['water'] || a == blocks['watertop']) {
								k.setBlock(a, e , t, i)
								datablock.content3=[a, e , t, i]
								setJson(a,[e , t, i])
									setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
								if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[blocks['water'], e , t-1, i]
									setJson(a,[e , t-1, i])
								}
								
								
                            }
                            if (s == blocks['water'] || s == blocks['watertop']) {
									k.setBlock(s, e , t, i)
									datablock.content3=[s, e , t, i]
									setJson(s,[e , t, i])
										setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
								
									
									if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[blocks['water'], e , t-1, i]
									setJson(s,[e , t-1, i])
									
								}
								
                              
                            }
	
}

	function checkNeighboursAsWater(e, t, i){
		

		                       var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t, i + 1),
                                s = k.world.getBlockID(e, t, i - 1);
								
								    if (r == 0) {
										
								k.setBlock(blocks['watertop'], e -1, t, i)
								datablock.content3=[blocks['watertop'], e-1 , t, i]
								setJson(blocks['watertop'],[e-1 , t, i])
								setTimeout(function(){ checkNeighboursAsWater(e -1, t, i) }, 500);
								
                            }
                            if (o ==0) {
									k.setBlock(blocks['watertop'], e +1, t, i)
									datablock.content3=[blocks['watertop'], e +1, t, i]
									setJson(blocks['watertop'],[e+1 , t, i])
									setTimeout(function(){ checkNeighboursAsWater(e +1, t, i) }, 500);
								
                            }
                            if (a ==0) {
								k.setBlock(blocks['watertop'], e , t, i+1)
								datablock.content3=[blocks['watertop'], e , t, i+1]
								setJson(blocks['watertop'],[e , t, i+1])
								setTimeout(function(){ checkNeighboursAsWater(e , t, i+1) }, 500);
							
                            }
                            if (s == 0) {
									k.setBlock(blocks['watertop'], e , t, i-1)
									datablock.content3=[blocks['watertop'], e , t, i-1]
									setJson(blocks['watertop'],[e , t, i-1])
									setTimeout(function(){ checkNeighboursAsWater(e , t, i-1) }, 500);
									
									
		
		
	}
	}
	
	
export	function checkFlower (x, y, z) {
		if(k.world.getBlockID(x, y, z)==0){
			return;
		}
		if(k.world.getBlockID(x, y, z)==6){
						k.setBlock(0, x , y, z)
		datablock.content3=[0, x , y, z]
		}
		
	}
	
	
	
	function setJson(ids,pos){
		
		
		var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[ids, pos[0], pos[1], pos[2]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[ids, pos[0], pos[1], pos[2]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[ids, pos[0], pos[1], pos[2]]
		}
	}