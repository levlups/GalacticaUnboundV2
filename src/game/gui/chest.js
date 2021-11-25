
global.chestList={}
export function chest(){
	
	
	if(localStorage.getItem('chest')!==null){
		chestList=JSON.parse(localStorage.getItem('chest'))
	}
	
	uis['chest']=   [
		{type: "image", path:"./texPack/"+funpack+"/maingui/chest.png", x: 0, y: 0, width: 170, height: 87},//200 was 89
		{type: "slot", x:  0-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 0},
		{type: "slot", x:  (18 * 1)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 1},
		{type: "slot", x:  (18 * 2)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 2},
		{type: "slot", x:  (18 * 3)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 3},
		{type: "slot", x:  (18 * 4)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 4},
		{type: "slot", x:  (18 * 5)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 5},
		{type: "slot", x:  (18 * 6)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 6},
		{type: "slot", x:  (18 * 7)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 7},
		{type: "slot", x:  (18 * 8)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 8},
		
		
			{type: "slot", x:  0-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 9},
		{type: "slot", x:  (18 * 1)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 10},
		{type: "slot", x:  (18 * 2)-72, y: 4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 11},
		{type: "slot", x:  (18 * 3)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 12},
		{type: "slot", x:  (18 * 4)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 13},
		{type: "slot", x:  (18 * 5)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 14},
		{type: "slot", x:  (18 * 6)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 15},
		{type: "slot", x:  (18 * 7)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 16},
		{type: "slot", x:  (18 * 8)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 17},
		
		
		{type: "slot", x:  0-72,        y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 18},
		{type: "slot", x:  (18 * 1)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 19},
		{type: "slot", x:  (18 * 2)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 20},
		{type: "slot", x:  (18 * 3)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 21},
		{type: "slot", x:  (18 * 4)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 22},
		{type: "slot", x:  (18 * 5)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 23},
		{type: "slot", x:  (18 * 6)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 24},
		{type: "slot", x:  (18 * 7)-72, y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 25},
		{type: "slot", x:  (18 * 8)-72, y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 26},
		
		{type: "slot", x:  0-72,        y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 27},
		{type: "slot", x:  (18 * 1)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 28},
		{type: "slot", x:  (18 * 2)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 29},
		{type: "slot", x:  (18 * 3)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 30},
		{type: "slot", x:  (18 * 4)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 31},
		{type: "slot", x:  (18 * 5)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 32},
		{type: "slot", x:  (18 * 6)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 33},
		{type: "slot", x:  (18 * 7)-72, y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 34},
		{type: "slot", x:  (18 * 8)-72, y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 35}
		
		]
		
		
	
	
	
}