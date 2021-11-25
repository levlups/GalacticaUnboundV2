


export function  hurt(eng){
	
				 
				eng.prototype.gotHurt=function(mesh){
	 	
					mesh._children[0].material.ambientColor=BABYLON.Color3.Red()
						mesh._children[0].material.emissiveColor=BABYLON.Color3.Red()
				mesh._children[0].material.diffuseColor=BABYLON.Color3.Red()
				
				setTimeout(function(){ 
				noa.gotBetter(mesh)
				}, 500);
	 
 }
 
 
 eng.prototype.gotBetter=function(mesh){
	
	 
	 mesh._children[0].material.ambientColor=BABYLON.Color3.White()
						mesh._children[0].material.emissiveColor=BABYLON.Color3.White()
				mesh._children[0].material.diffuseColor=BABYLON.Color3.White()
	 
	 
 }
 
eng.prototype.Died=function(mesh){
	 		mesh.rotation.z=Math.PI/3
				
					mesh._children[0].material.ambientColor=BABYLON.Color3.Red()
						mesh._children[0].material.emissiveColor=BABYLON.Color3.Red()
				mesh._children[0].material.diffuseColor=BABYLON.Color3.Red()
				
			
	 
 }
	
	
	
	
	
	
	
	
}
