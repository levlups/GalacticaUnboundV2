import {blocklook} from '../blocklook'

	var bedjsony=null
export function bed(noa,options,id,texture,e){
	
	var scene=noa.rendering.getScene()
	
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	var redtex = new BABYLON.Texture("texPack/"+funpack+"/models/bed/redbed.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/bed/bed.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var bluemat = new BABYLON.StandardMaterial("face0", scene);
						bluemat.diffuseTexture=bustex;
bluemat.backFaceCulling = false;
bluemat.specularColor = BABYLON.Color3.Black()
bluemat.emissiveColor = BABYLON.Color3.White()

var redmat = new BABYLON.StandardMaterial("face0", scene);


redmat.diffuseTexture=redtex;
redmat.backFaceCulling = false;
redmat.specularColor = BABYLON.Color3.Black()
redmat.emissiveColor = BABYLON.Color3.White()

                      
					  
					  var colors={"black":bluemat,"red":redmat}
					
						var mesh=null
					
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/bed/bed.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=bluemat;
							  
							  
							    var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							 
							  
							  
						}
					
			
		
			
			finOpts.onSet= function ( x, y, z) {
			
					var mesh2=mesh.clone('bed')
				var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			var ccolor='red'
			
	/*	var item=itemStack[selected]
		
		if(item=='bed'){
			ccolor='black'
		}
		
		if(item=='bed_red'){
			ccolor='red'
		}*/
		
			
			//	mesh2.material=colors[ccolor]
			
				mesh2.position.x=x+bedjsony[c][j][0]//0.5
				mesh2.position.y=y+bedjsony[c][j][1]
				mesh2.position.z=z+bedjsony[c][j][2]//0.5//
				
					mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
			
				noa.rendering.addMeshToScene(mesh2, false)
				
				mesh2.name='hitbox:bed:'+c+':'+JSON.stringify([x,y,z])
				
				
				offmeshes.push([[x,y,z],mesh2])
				
				//noa.soundy('blop.mp3',1)
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone('bed')
					
			var c=null
			var ccolor='black'
			var detail="Close"//
			var j="Close"
	           
			
					
					mesh2.material=colors[ccolor]
				
			
				mesh2.position.x=x+bedjsony[c][j][0]//0.5
				mesh2.position.y=y+bedjsony[c][j][1]
				mesh2.position.z=z+bedjsony[c][j][2]//0.5//
				
				
				mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
			   
				
				mesh2.name='hitbox:bed:'+c+':'+JSON.stringify([x,y,z])
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
						
				
				
			}
			finOpts.UnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						c.name='lol'
						scene.removeMesh(c, false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						c.name='lol'
						
						scene.removeMesh(c, false)
					}
					
				}
				//noa.soundy('blop.mp3',1)
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
							 
				
						 
						 
						
						 	 
										 });
										 
										  return id;
	
	
}
