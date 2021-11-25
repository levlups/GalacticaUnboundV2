
import {blocklook} from '../blocklook'
	var bedjsony=null
	var directions={"0":"north","1":"south","2":"east","3":"west"}
	var state={"0":"Close","1":"Open"}
export function horseStatue(noa,options,id,name,e){
	
	
	
	var scene=noa.rendering.getScene()
	
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	

	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
							var mesh=null
						var mesh1=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/"+name+"/"+name+".babylon", scene, function (meshes) { 
						 mesh1= new BABYLON.Mesh("dummy", scene);
                            
								for (var i=0;i<meshes.length;i++){
							
							
							 
							   meshes[i].material=busmat;
							  	
	                            meshes[i].parent=mesh1;
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							
							  
						}
					
			  mesh=mesh1
			propMeshes[name]=mesh
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=entMeshes['squid'].clone('cow')//propMeshes[name].clone(name)
				
				 
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			     var j='Close'
				 var c=blocklook(noa)
				 mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				noa.rendering.addMeshToScene(mesh2, false)
				
				 for (var i=0;i<mesh2.getChildren().length;i++){
					 noa.rendering.addMeshToScene(mesh2._children[i], false)
					//playermesh._children[i].visibility=false
				}
		
		
				//noa.rendering.addMeshToScene(mesh2._children[0], false)
			//	noa.rendering.addMeshToScene(mesh2._children[1], false)
				
				mesh2.name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])+':'+j
					mesh2._children[0].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])+':'+j
						//mesh2._children[1].name='hitbox:pc:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
			
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone(name)
			var c='north'
			var j='Close'
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				//noa.rendering.addMeshToScene(mesh2._children[1], false)
				
					setTimeout(function(){  
					
					
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				c=directions[c]
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   
			   	mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				
				mesh2.name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])+':'+j
				mesh2._children[0].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])+':'+j
				//mesh2._children[1].name='hitbox:pc:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					
				},300);
				
			}
			finOpts.onUnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					
					if(chestList[JSON.stringify([x,y,z])]!==null){
						delete chestList[JSON.stringify([x,y,z])]
					}
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
