export function menu(){
	
	uis['menu']= [
		    {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:jsonLang[language]["backtogame"],action:"back", x: 0, y:0, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"join a game",action:"join", x: 0, y:30, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Close game",action:"leave", x: 0, y:60, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:jsonLang[language]["saveworld"],action:"save", x: 0, y:90, width: 200, height: 20},
			//{type: "image", path:"./texPack/"+funpack+"/maingui/bokkusu.png",message:"Im cool Dude", x: 0, y:-60, width: 158, height: 53}
	
		    {type: "image", path:"./texPack/"+funpack+"/maingui/cooldude.png",message:"Im cool Dude", x: 0, y:-80, width: 129, height: 165}
		]
		
		
	
	
	
}