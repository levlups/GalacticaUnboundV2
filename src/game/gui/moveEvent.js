export function moveEvent(){
	
	document.addEventListener('mousemove', mouseinfo,{ passive: true});
	
}


function mouseinfo(e){

	
	 if (currentUI !== null) {
//	mouseX=e.screenX
//	mouseY=e.screenY
	var mousePos = getMousePos(event);
	for (var i of currentUI) {

            var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
            var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
            switch (i.type) {
				
				  case "button":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
                      i.path="./texPack/"+funpack+"/maingui/button-hover.png"
                    }else{
						i.path="./texPack/"+funpack+"/maingui/button-normal.png"
					}
					break;
					
					
					 case "slot":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
						
						if(itemStack[i.slotNum]!==null){
               
				bigSign=itemStack[i.slotNum].name
				bigSignTime=3000
				
					ctx.fillText(itemStack[i.slotNum].name, c.width/2, c.height/2, 16*imgzoom, 16*imgzoom);
						}else{
							bigSign=''
						}
					}
					break;
					
					case "border":
					
				 if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
						i.textt=(mouseX-c.width/2)+200
				      uis.settings[1].x=i.textt-100
				 
				 
						
						if(i.textt<-180 ){
						
						//i.textt=-100
						uis.settings[1].x=-100
						uis.settings[1].textt=0
						return;
						//uis.settings[1].textt=i.textt
						
					}
					
					if(i.textt>180){
						
						//i.textt=100
						uis.settings[1].x=100
						uis.settings[1].textt=100
						return;
						//uis.settings[1].textt=i.textt
						
					}
			            uis.settings[1].x=i.textt-100
						uis.settings[1].textt=Math.round(i.textt/2)
						rtcblocklist['chunkview']=uis.settings[1].textt
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