export function dragEvent(){
	
	document.addEventListener("mousedown", drag,{ passive: true});
	
}

var tt=false
var mousy=null
function drag(e){

	
	 if (currentUI !== null) {
	mouseX=e.screenX
	mouseY=e.screenY
	var mousePos = getMousePos(event);
	for (var i of currentUI) {

            var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
            var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
            switch (i.type) {
				
				  case "button":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
					
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