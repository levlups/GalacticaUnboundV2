
import { multiplayer} from './gui/multiplayer'
import { worldinfo} from './gui/worldinfo'
import { menu} from './gui/menu'
import { hotbar} from './gui/hotbar'
import { inventory} from './gui/inventory'
import { screen} from './gui/screen'
import { chest} from './gui/chest'
import { settings} from './gui/settings'
import { clickEvent} from './gui/clickEvent'
import { moveEvent} from './gui/moveEvent'
import { dragEvent} from './gui/dragEvent'
import { kiosk} from './gui/kiosk'
import { getHand} from './player'
import { blocklook} from './blocklook'
global.mouseX=null,global.mouseY=null;

global.chatOn=false,global.uis={}
global.chatMessageOn=false
global.chatMessage=""
global.chatColor="white"
global.resultChatMessage="Welcome to Galactica"
global.c=null
global.currentUI=null
global.imgzoom=2
global.itemStack=[jsonItems["vorax"],jsonItems["horse"],jsonItems["arrow"],jsonItems["deckchair"],jsonItems["door"],jsonItems["deck"],jsonItems["trap"],jsonItems["firecracker"],null]
                    
global.countStack=[12,13,3,2,10,10,10,2,0]
                   
global.heldItem=null
global.heldItemCount=0;
global.selected=0
global.ctx=null
global.bigSign=''
global.bigSignTime=0
global.bigSignColor='white'
global.debug=false
global.percent=0
var time=0
var time2=0
export function makeCanvas(noa){
	multiplayer()
	menu()
	hotbar()
	inventory()
	settings()
	clickEvent()
	moveEvent()
	dragEvent()
	worldinfo()
	kiosk()
	chest()
	screen()

	if(gameStarted=='false'){
    currentUI=uis.worldinfo
	}else{
		 currentUI=uis.hotbar
		 
		localStorage.setItem('gamestarted',gameStarted)
	}
	
	
	var selector =new Image()
	selector.src="./texPack/"+funpack+"/maingui/selector.png"
	var hrtimg=new Image()
   hrtimg.src="./texPack/"+funpack+"/maingui/heart.png"
   
   var ehrtimg=new Image()
   ehrtimg.src="./texPack/"+funpack+"/maingui/eheart.png"
   
   var bblimg=new Image()
   bblimg.src="./texPack/"+funpack+"/maingui/air.png"
   
   
   var ebblimg=new Image()
   ebblimg.src="./texPack/"+funpack+"/maingui/eair.png"  
   
   
  c = document.getElementById("canva");
  
ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
c.style.zIndex = "104";
c.style.position = "absolute";
c.style.top = "0";
c.style.left = "0";
c.style.backgroundColor = "rgba(0, 0, 0,0.2)";
  

	
var lol=0
var night=true
var internum=0


	noa.on('beforeRender', function(dt) {
		
		time+=(1/60)
		if(time>15){
			time2+=1
			time=0
			air--
			/*air-=12
			if(air<1){
			health=0
			air=12
			}*/
			//mult=0
		}
		
		if(time2>60){
			
		}
		

	ctx.clearRect(0, 0,c.width ,c.height);
	lol++
		if (currentUI !== null) {
			
			  if(currentUI==uis.menu){
			   
			   			var j = new Image();
					j.src='./texPack/'+funpack+'/blocks/dirt.png'
						  if(currentUI==uis.menu){
			   
			   
			   var pat = ctx.createPattern(j, "repeat");
ctx.rect(0, 0, c.width, c.height);
ctx.fillStyle = pat;
ctx.fill();
		   }
			
		   }
			
			for (var i of currentUI) {
		var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
           var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
		   
		 	if(night){
																scene.ambientColor.r=0.00//Math.sin(c)+1.01
	scene.ambientColor.g=0.00//Math.sin(c)+1.01
	scene.ambientColor.b=0.00//Math.sin(c)+1.01*/
	//scene.lights[0].diffuse.r=0.4
	//scene.lights[0].diffuse.g=0.4
	//scene.lights[0].diffuse.b=0.4
	
			}
	
			
			switch (i.type) {
			case "image":
			
			
		

					var j = new Image();
					j.src =i.path;
				//j.src=mat.diffuseTexture.toDataURL('image/jpeg');
					if(currentUI==uis.hotbar){
				    ctx.drawImage(j,x,c.height-62,i.width*imgzoom,i.height*imgzoom);
					
					}else{
						
						  ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					}
					
					
					
					if(i.message){
					ctx.font = 32*Math.sin(dt)+'px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "Yellow";
					ctx.rotate(5 * Math.PI / 180);
					  ctx.fillText(i.message,x+i.width*imgzoom-20,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					  ctx.rotate(-5 * Math.PI /180);
					  
			             }
					
					if(currentUI==uis.hotbar){
					ctx.drawImage(selector,x+(36*selected),c.height-62,16*3,16*3);
					}
					break;
					
					case "imagesp":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					internum+=0.3
			
					ctx.drawImage(j,0,i.framey,16,16,x,y+internum,i.width*imgzoom,i.height*imgzoom);
					
					break;
					
						case "hlight":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					for(var l=0;l<4;l++){
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					// ctx.drawImage(j,x+(l*50)+20,y,i.width*imgzoom,i.height*imgzoom);
					 //ctx.drawImage(j,c.width/2-(l*50)+20,y,i.width*imgzoom,i.height*imgzoom);
					}
					
					break;
					
						case "light":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					for(var l=-2;l<2;l++){
				    //ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					 ctx.drawImage(j,c.width/2-(l*50)+i,y,i.width*imgzoom,i.height*imgzoom);
					// ctx.drawImage(ehrtimg,c.width/2-( i*20)+80+20, c.height-118,16,16);//*/
					}
					
					break;
					
					
					
					case "button":
			
					var j = new Image();
					j.src = i.path;
				
					
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "white";
					  ctx.fillText(i.textt,x+(i.width*imgzoom)/2,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					/*if(currentUI==uis.hotbar){
						
					ctx.drawImage(selector,x+(36*selected),y,16*3,16*3);
						
					}*/
					break;
					
						case "border":
					var j = new Image();
					j.src = i.path;
				     ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					
					
					  
					
					
					break;
					
					case "lever":
					var j = new Image();
					j.src = i.path;
				     ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					
					
					
					ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "white";
					  ctx.fillText(i.textt,x+(i.width*imgzoom)/2,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					  
					
					
					break;
					
					case "message":
					var j = new Image();
					j.src = i.path;
				
					
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "white";
					  ctx.fillText(i.textt,x+(i.width*imgzoom)/2,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					if(currentUI==uis.hotbar){
						
					ctx.drawImage(selector,x+(36*selected),y,16*3,16*3);
						
					}
					break;

					
					
					case "slot":
					
					if(itemStack[i.slotNum]!==null){
					var j = new Image();
					j.src = "./texPack/"+funpack+"/"+itemStack[i.slotNum].texture//i.path;
				
					
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					
							if(countStack[i.slotNum]>0){
							ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
							  
							  ctx.fillStyle = "grey";
							  ctx.fillText(countStack[i.slotNum], x+8,y,i.width*imgzoom,i.height*imgzoom);
								ctx.fillStyle = "white";
							  ctx.fillText(countStack[i.slotNum], x+4,y,i.width*imgzoom,i.height*imgzoom);
							}
							
					
					
					}
					
					break;
		
			 
			}
			
			}
			
		
			
			if(heldItem!==null){
					var j = new Image();
				j.src="./texPack/"+funpack+heldItem.texture
				ctx.drawImage(j, mouseX, mouseY-100, 16*imgzoom, 16*imgzoom);
				ctx.fillText(heldItemCount, mouseX, mouseY-100, 16*imgzoom, 16*imgzoom);
			}

			 
		}
		
		if(currentUI==uis.menu){
			
		
			
			return;
		}
		
					if(currentUI==uis.hotbar){
						
						for (var i=0;i< 12;i++){
						  ctx.drawImage(ehrtimg,c.width/2-( i*20)+80+20, c.height-118,16,16);//*/
						  
						  }
						for (var i=0;i< health;i++){
						  ctx.drawImage(hrtimg,c.width/2-( i*20)+80+20, c.height-118,16,16);//*/
						  
						  }
						     for (var i=0;i< 12;i++){
						  ctx.drawImage(ebblimg,c.width/2-( i*20)+80+20, c.height-136,16,16);//*/
						  
						  }
						  
						  for (var i=0;i< air;i++){
						  ctx.drawImage(bblimg,c.width/2-( i*20)+80+20, c.height-136,16,16);//*/
						  
						  }
						  
						 
					}
						  
			  if(serverResponse!==null){
				  var j = new Image();
				  j.src=serverResponse.serverImage
				  ctx.drawImage(j,c.width/2, c.height-100,450/2,240/2);//*/
			  }
			  
			  	if(bigSign!==''){
				
				bigSignTime-=1/75
				ctx.font = 'bold 100px  myFirstFont';
				
				
							 
							 	ctx.fillStyle = "grey";
								ctx.fillText(bigSign, c.width/2+4,c.height/2+4);
					ctx.fillStyle = bigSignColor;
					
					
							
							    ctx.fillText(bigSign, c.width/2,c.height/2);
							
							  if(bigSignTime<1){
								  bigSign=''
								  bigSignTime=0
							  }
			}
			
		
			
				if(debug){
				
				      bigSignTime-=1/75
				      ctx.font = '50px myFirstFont';
					  ctx.strokeStyle = "black";
					  ctx.fillStyle = "white";
					
					 ctx.lineWidth   = 5;
					  if (noa.targetedBlock) {

                        var posb = noa.targetedBlock.position
						var btype=noa.world.getBlockID(posb[0],posb[1],posb[2])	 
						var leo=Object.keys(blocks).find(key => blocks[key] === btype)
						var chunk=noa.world._getChunkByCoords(posb[0], posb[1], posb[2]).requestID
						
						
							    ctx.fillText('x:'+posb[0]+' y:'+posb[1]+' z:'+posb[2], 110,c.height/2);
								ctx.fillText('blocktype:'+btype, 110,c.height/2-40);
								ctx.fillText(leo, 110,c.height/2-80);
								ctx.fillText(chunk, 110,c.height/2-120);
								ctx.fillText(blocklook(noa), 110,c.height/2-160);
								ctx.fillText('time:'+time2+':'+Math.round(time)+'pm',110,c.height/2-200);
								ctx.fillText('Daytime', 110,c.height/2-240);
								ctx.fillText(Object.keys(listofplayers).length+1+':player', 110,c.height/2-280);
								ctx.fillText('state:'+currentGameState, 110,c.height/2-320);
					  }
					  
					  
							  if(bigSignTime<1){
								  debug=false
								  bigSignTime=0
							  }
			}
			  
			  if(chatOn){
			 ctx.font = '32px myFirstFont';
				
                      ctx.textAlign = "center";
					  
					 ctx.globalAlpha = 0.1;
					  		  ctx.beginPath();
					ctx.lineWidth = "10";
					ctx.fillStyle = "grey";
					ctx.fillRect(0, window.innerHeight-50, window.innerWidth, 100);
					ctx.globalAlpha = 0.2;
					 
					ctx.fillRect(0, window.innerHeight-150, window.innerWidth/2, 80);
                       ctx.globalAlpha = 1;
					 ctx.fillStyle = chatColor;
					  ctx.fillText(chatMessage,chatMessage.length+ 100,window.innerHeight-30,c.width/2,c.height/2);
					  
					  ctx.fillStyle = chatColor;
					  ctx.fillText(resultChatMessage,resultChatMessage.length+ 100,window.innerHeight-120,c.width/2,c.height/2);
			  }else{
				  
				  if(chatMessageOn){
				  ctx.globalAlpha = 0.2;
					 	ctx.fillStyle = "grey";
					ctx.fillRect(0, window.innerHeight-150, window.innerWidth/2, 80);
					ctx.globalAlpha = 1;
					ctx.fillStyle = chatColor;
					  ctx.fillText(resultChatMessage,resultChatMessage.length+ 100,window.innerHeight-120,c.width/2,c.height/2);
				  }
				  
			  }
					  
			
			 
			
	  
	})
	
	
	
	
	
	
}


function getMousePos(event) {
    var rect = c.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}
	
	
	function isInsideRect(pos, x, y, w, h){
	return pos.x > x && pos.x < x + w * 4 && pos.y < y + h * 4 && pos.y > y;
}


window.addEventListener("resize", resizer, false);


function resizer(){
	c.width = window.innerWidth;
c.height = window.innerHeight;
//c.imageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
}


	

