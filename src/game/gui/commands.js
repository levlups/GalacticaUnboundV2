export function teleportChat(str){
	
	
		var k=str.split(" ")
			
			if(Number.isInteger(parseInt(k[1]))&&Number.isInteger(parseInt(k[2]))&&Number.isInteger(parseInt(k[3]))){
			noa.entities.setPosition(noa.playerEntity,parseInt(k[1]),parseInt(k[2]),parseInt(k[3]));
		str="player Teleported to "+k[1]+" "+k[2]+" "+k[3]
		chatMessage="player Teleported to "+k[1]+" "+k[2]+" "+k[3]
			}else{
				chatColor="red"
				chatMessage="wrong command"
				return;
			}
		
		datablock['message']=str
		str=""
		chatMessage=str
		return;
	
	
	
}

export function giveChat(str){
	
	
		var k=str.split(" ")
		
		
		for (var i=0;i<itemStack.length;i++){
			
			if(itemStack[i]==null){
					itemStack[i]=jsonItems[k[1]]
						if(Number.isInteger(parseInt(k[2]))){
					countStack[i]=parseInt(k[2])
					 break;
						}else{
							chatColor="red"
							chatMessage="wrong command"
							return;
						}
			
			}
			
		}
	
	
	
}

export function clearAll(){
	
	
		
		
		
		for (var i=0;i<itemStack.length;i++){
			
			itemStack[i]=null
			countStack[i]=0
					
			
			
		}
	
	
	
}
