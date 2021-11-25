

	var bedjsony=null
export function flowerpot(noa,options,id,name,e){
	

	var scene=noa.rendering.getScene()
	
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/flowerpot/flowerpot.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
						var mesh=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/flowerpot/flowerpot.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=busmat;
							  
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							  
						}
					
			
		
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=mesh.clone(name)
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				
				mesh2.name='hitbox:flowerpot:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone(name)
			
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				
				mesh2.name='hitbox:flowerpot:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					//	var k=makeparticle(mod+'textures/particle/bubble.png',mesh2)
						//k.start()
				
				
			}
			finOpts.UnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}
