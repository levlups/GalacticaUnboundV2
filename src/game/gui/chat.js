import {teleportChat,giveChat,clearAll} from './commands'
import {pasteBuild,clearBuild,createBuild} from '../builds'
import {blocklook} from '../blocklook'

var longstring=""


document.addEventListener('keydown', (event) => {
	if(event.key=="1"){
		debug=!debug
		if(debug){
			bigSignTime=3000
		}
		
	}
	if(!chatOn)
		return;
	
	if (event.key==1){
		//createBuild()
		pasteBuild(pos[0],pos[1]-1,pos[2],blocklook(noa))
		blockPick=blocks['stone']
	}
	if (event.key==2){
		blockPick=blocks['grass']
		
		clearBuild()
	}
	//console.log(event.key)
	
	
	chatMessageOn=true
	if(event.key=="Backspace"){
		console.log(longstring.length)
		if(longstring.length<1){
			return;
		}else{
			
			var newstring=longstring.slice(0, -1)
			longstring=newstring
			chatMessage=longstring
		}
		
		return;
	}
	
	if(event.key=="/"){
		longstring="/"
		chatMessage=longstring
		return;
	}
	
	if(event.key=="Escape"){
		longstring=""
		chatMessage=longstring
		chatOn=false
		return;
	}
	
	if(event.key=="Enter"){
		
		if(longstring.startsWith("/tp")){
			
			teleportChat(longstring)
			return;
		}
		
		if(longstring.startsWith("/give")){
			
			giveChat(longstring)
		}
		if(longstring.startsWith("/clearall")){
			
			clearAll()
		}
		chatMessage=""
		
		resultChatMessage=longstring.replace(/ /g,'')
		rtcblocklist.worldname=longstring.replace(/ /g,'')
		
		if(socketo!==null){
		socketo.emit('createworld',rtcblocklist.worldname)
		}
		 uis.multiplayer[0].textt=""
		  uis.worldinfo[0].textt=""
		longstring=""
		chatOn=false
		
		 
		setTimeout(function(){ chatMessageOn=false }, 3000);
		
		return;
	}
	
	if(event.key=="Shift"){
		return;
	}
	var c=event.key.toString()
	longstring=longstring.concat(c)
 
     
	 chatMessage=longstring
	 if(longstring.length>26){
		 return;
	 }
	 uis.multiplayer[0].textt=longstring.replace(/ /g,'')
     uis.worldinfo[0].textt=longstring.replace(/ /g,'')
})


export function sendChat(str){
	
}

