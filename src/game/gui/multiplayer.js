export function multiplayer(){
	
	uis['multiplayer']= [
	         {type: "message", path:"./texPack/"+funpack+"/maingui/textbox.png",textt:"",action:"", x: 0, y:-30, width: 200, height: 20},
		    {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"choose worldname",action:"type", x: 105, y:0, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Join game",action:"join", x: 105, y:30, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Stop Game Nabil",action:"leave", x: 105, y:60, width: 200, height: 20},
			    {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Back to Game",action:"back", x: -105, y:0, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Join game",action:"join", x: -105, y:30, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Stop Game Nabil",action:"leave", x:-105, y:60, width: 200, height: 20},
			{type: "image", path:"./texPack/"+funpack+"/maingui/multiplayer.png", x: 0, y:-60, width: 158, height: 53}
	
		
		]
		
		
	
	
	
}