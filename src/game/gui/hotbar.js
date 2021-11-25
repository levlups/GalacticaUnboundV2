
var dif=200
export function hotbar(){
	
	uis['hotbar']=  [
		{type: "image", path:"./texPack/"+funpack+"/maingui/item_bar.png", x: 0, y:0, width: 168, height: 24},//200 was 89
		{type: "slot", x:  0-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 0},
		{type: "slot", x:  (18 * 1)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 1},
		{type: "slot", x:  (18 * 2)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 2},
		{type: "slot", x:  (18 * 3)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 3},
		{type: "slot", x:  (18 * 4)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 4},
		{type: "slot", x:  (18 * 5)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 5},
		{type: "slot", x:  (18 * 6)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 6},
		{type: "slot", x:  (18 * 7)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 7},
		{type: "slot", x:  (18 * 8)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 8}
		
		]
		
		
	
	
	
}