import { playsound } from './sound.js'
var num=15
global.plane=null
export function sign(noa){
	
	
	var scene=noa.rendering.getScene()
			var name='cool'
			var mesh = BABYLON.MeshBuilder.CreatePlane('sprite-' + name, {width:10,height:5}, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			//var mat= noa.rendering.makeStandardMaterial(name)
			
	   
    //Set font type
    var font_type = "myFirstFont";
	
	//Set width an height for plane
    var planeWidth = 10;
    var planeHeight = 5;

    //Create plane
    plane = BABYLON.MeshBuilder.CreatePlane("plane", {width:planeWidth, height:planeHeight}, scene);

    //Set width and height for dynamic texture using same multiplier
    var DTWidth = planeWidth * 60;
    var DTHeight = planeHeight * 60;

    //Set text
    var text = "Some words to fit";
    
    //Create dynamic texture
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", {width:DTWidth, height:DTHeight}, scene);

    //Check width of text for given font type at any size of font
    var ctx = dynamicTexture.getContext();
	var size = 12; //any value will work
    ctx.font = size + "px " + font_type;
    var textWidth = ctx.measureText(text).width;
    
    //Calculate ratio of text width to size of font used
    var ratio = textWidth/size;
	
	//set font to be actually used to write text on dynamic texture
    var font_size = Math.floor(DTWidth / (ratio * 1)); //size of multiplier (1) can be adjusted, increase for smaller text
    var font = font_size + "px " + font_type;
	
	//Draw text
    dynamicTexture.drawText(text, null, null, font, "#000000", "#ffffff", true);

    //create material
    var mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseTexture = dynamicTexture;
   dynamicTexture.hasAlpha=true
    //apply material
   mesh.material = mat;
   
   
 

noa.rendering.addMeshToScene(mesh)
	var inter=setInterval(function(){ 
	
	if(bigSign!==gameState[2]){
		return;
	}
	num--
 dynamicTexture.drawText("Game starts in :"+num+" seconds", null, null, font, "#000000", "#ffffff", true);
 
    var img = new Image();
	img.src = 'texPack/'+funpack+'/blocks/sand.png';
	//mesh.material.diffuseTexture.clear()
	img.onload = function() {
	mesh.material.diffuseTexture._context.drawImage(img,300-32,0,64,64)
	//mesh.material.diffuseTexture.drawText('  fudu', null, null, font, "#eeeeee", "#00000066", true)
	mesh.material.diffuseTexture.update()
	}
 
 
 if(num<1){
	// noa.setPaused(true)
	// currentUI=uis.menu
	 var message =null
	 if(pos[2]>25){
	 message="You Won!"
	 }else {
		 message="You Lost"
	 }
	  dynamicTexture.drawText(message, null, null, font, "#000000", "#ffffff", true);
 
    var img = new Image();
	img.src = 'texPack/'+funpack+'/blocks/dirt.png';
	//mesh.material.diffuseTexture.clear()
	img.onload = function() {
	mesh.material.diffuseTexture._context.drawImage(img,300-32,0,64,64)
	//mesh.material.diffuseTexture.drawText('  fudu', null, null, font, "#eeeeee", "#00000066", true)
	mesh.material.diffuseTexture.update()
	}
	debug=true
	 bigSign=message
	  bigSignTime=1000
	 setTimeout(function(){ 
	 
	 if(message=="You Lost"){
	//bigSign=message="Game:"+gameState[3]
playsound('blop',0.1)
	 }
	 else{
		 currentUI=uis.menu
		 datablock.message="IWON"
		 
		 
	 }
	 }, 3000);
	 
	 clearInterval(inter)
 }
 

	}, 1000);
		
		mesh.position.y=25
	mesh.position.z=50
}