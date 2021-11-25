
import { playsound } from '../sound.js'

export function clickEvent(){
	
	window.addEventListener("click", click, false);
	
}

	var sev=null
function click(event) {

   
    if (currentUI !== null) {
		
		
		

        var mousePos = getMousePos(event);

        for (var i of currentUI) {

            var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
            var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
            switch (i.type) {

					
					  case "button":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
						
						switch (i.action){
						case "back":
                        i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
					    currentUI=uis.hotbar
						
					    break;
						 
						 
						  case "ventilate":
						  i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
					playsound('ventilate',0.1)
					if(air<12){
						air++
						health++
					}
						break;
						
						  case "garbage":
						  i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
					playsound('garbage',0.1)
					scene.fogEnabled=false
					if(uis.screen[2].num>0){
					uis.screen[2].num-=0.5
					}
					if(uis.screen[3].framey<48){
					uis.screen[3].framey+=16
					}
						break;
						 
						 case "join":
						  i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						if(sev==null){
						// commandator('startserver '+'nabilov');
						 sev='not null'
						 dominator=true
						 //console.log('wow')
						}
						break;
						case "leave":
							 i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						//closeGame()
						break;
						
						case "type":
						   i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						chatOn=true
						
						console.log('lets chat')
							 //i.path="./maingui/button-pressed.png"
						//closeGame()
						break;
						
						case "save":
						   i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						   
							localStorage.setItem('worldData',JSON.stringify(rtcblocklist))
							gameStarted=false
							localStorage.setItem('gamestarted',gameStarted)
							
								currentUI=uis.hotbar
								var pos=noa.ents.getState(noa.playerEntity, 'position').position
						noa.world.invalidateVoxelsInAABB({base:[pos[0]-2000,pos[1]-1000,pos[2]-2000],max:[2000+pos[0],1000+pos[1],2000+pos[2]]})

						bigSign='Saving...'
						setTimeout(function(){  



						localStorage.setItem(rtcblocklist.worldname,JSON.stringify(storage))


						if(socketo!==null){
						for (const key in storage){
							
							var k=JSON.stringify(storage[key])
							
							
							   socketo.emit('chunk',{ids:key,chk:k,name:rtcblocklist.worldname});
						}
						}
						//socketo.emit('chunk',localStorage.getItem('cool'));
						location.reload()

						}, 3000);
						   
						   
						   
						
						break;
						
						case "naming":
						   i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						//chatOn=true
						
						//console.log('lets chat')
						rtcblocklist.worldname=i.textt
						
						//chacha()
						localStorage.setItem('worldData',JSON.stringify(rtcblocklist))
						currentUI=uis.hotbar
						if(socketo!==null){
							var cleandedtext=i.textt.replace(/ /g,'')
						socketo.emit('createworld',cleandedtext)
						}
						
						    gameStarted=true
							localStorage.setItem('gamestarted',gameStarted)
							location.reload()
						break;
						}
					 
                    }
					
					break;
					
					
					
					case "slot":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
                       if(itemStack[i.slotNum]!==null&& heldItem==null ){
						   heldItemCount=countStack[i.slotNum]
						heldItem=itemStack[i.slotNum]
						itemStack[i.slotNum]=null
						
					   }
					    else if(itemStack[i.slotNum]==null){
							itemStack[i.slotNum]=heldItem
							countStack[i.slotNum]= heldItemCount
							heldItem=null
						}
						
						else if(itemStack[i.slotNum]!==null && heldItem!==null ){
							var st=itemStack[i.slotNum]
							var ct=countStack[i.slotNum]
							itemStack[i.slotNum]=heldItem
							countStack[i.slotNum]= heldItemCount
							heldItem=st
							heldItemCount=ct
							
							
						}
                    }
					
					break;
			}
		}
	}
}


function isInsideRect(pos, x, y, w, h){
	return pos.x > x && pos.x < x + w * 4 && pos.y < y + h * 4 && pos.y > y;
}

function getMousePos(event) {
    var rect = c.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}