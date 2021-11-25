


export function map(noa,mainp){
	
	var scene=noa.rendering.getScene();

	var supermesh = BABYLON.Mesh.CreatePlane('spritetest',0.7, scene) 
 var mat= noa.rendering.makeStandardMaterial('johnny')
var tex = new BABYLON.DynamicTexture("DynamicTexture", {width:50, height:50}, scene, false,BABYLON.Texture.NEAREST_SAMPLINGMODE)
		
		
		
mat.diffuseTexture = tex
supermesh.parent=mainp._children[2]
supermesh.material=mat
mat.backFaceCulling=false
noa.rendering.addMeshToScene(supermesh,false)
supermesh.position.x=mainp._children[2].position.x+0.5
supermesh.position.y=mainp._children[2].position.y-1.8//z
supermesh.position.z=mainp._children[2].position.z+0.9//y ???

	setInterval(function(){  

	
	
	
	var u=Math.round(pos[0])
	var ku=Math.round(pos[2])
	


		
	
					for (var i=(u-25);i<(u+25);i++){
						
						for (var t=(ku-25);t<(ku+25);t++){
						
						
							
						if(getHighestBlock(noa, i, t)==blocks['deck']){
							
						mat.diffuseTexture._context.fillStyle = "grey";
						mat.diffuseTexture._context.fillRect(i+25-u,t+25-ku, 1,1);
						
						}else if(getHighestBlock(noa, i, t)==blocks['grass']){
							
						mat.diffuseTexture._context.fillStyle = "green";
						mat.diffuseTexture._context.fillRect(i+25-u,t+25-ku, 1,1);
						
						}else{
							mat.diffuseTexture._context.fillStyle = "black";
						mat.diffuseTexture._context.fillRect(i+25-u,t+25-ku, 1,1);
						}
						
						
					  }
	             }

	    mat.diffuseTexture._context.fillStyle = "white";
		mat.diffuseTexture._context.fillRect(25,25, 1,1);//
		
		mat.diffuseTexture.update()
		


			   
		}, 1000);	   

			
			
			
			
			
			  
			

}

function getHighestBlock(noa, x, z) {
	for (var y = 110 - 1; y >= 0; y = y - 1) {
		var val = noa.getBlock(x, y, z)
		if (val != 0 && val != 9) return val//{level: y, block: val}
	}
	return null
}

