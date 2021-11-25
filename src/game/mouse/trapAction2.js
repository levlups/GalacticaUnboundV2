import {blocklook} from '../blocklook'
var directions={"north":0,"south":1,"east":2,"west":3}
export function trapAction(str){
	
	console.log(str)
	//if(str.split(':')[1]=='human')
		//return;
	
	
	var pos=JSON.parse(str.split(':')[3])
	var dir=blocklook(noa)
	var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
	
	//console.log(JSON.parse(str.split))
	if(str.split(':')[4]=='Close'){
	
		
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],1]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],1]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],1]
		}
	
	noa.setBlock(0,pos[0],pos[1],pos[2])
	noa.setBlock(blocks['trap'],pos[0],pos[1],pos[2])
	
	
	}else{
	
	
	if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		}
	
	noa.setBlock(0,pos[0],pos[1],pos[2])
	noa.setBlock(blocks['trap'],pos[0],pos[1],pos[2])
	
	}
	
}
