
import {blocklook} from '../blocklook'
	var bedjsony=null
	var directions={"0":"north","1":"south","2":"east","3":"west"}
	var state={"0":"Close","1":"Open"}
export function chest(noa,options,id,name,e){
	
	
	var scene=noa.rendering.getScene()
	
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/chest/chest.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
							var mesh=null
						var mesh1=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/chest/chest.babylon", scene, function (meshes) { 
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
				
				var mesh2=mesh.clone(name)
				
				 
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			     var j='Close'
				 var c=blocklook(noa)
				 mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
				mesh2.name='hitbox:chest:north:'+JSON.stringify([x,y,z])
					mesh2._children[0].name='hitbox:chest:north:'+JSON.stringify([x,y,z])
						mesh2._children[1].name='hitbox:lid:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
				if(chestList[JSON.stringify([x,y,z])]==null){
					
					itemStack.length=9
					countStack.length=9
					chestList[JSON.stringify([x,y,z])]={items:[jsonItems["bearhat"],jsonItems["bearhat"],jsonItems["arrow"],jsonItems["bed"],null,null,null,null,null,
					null,null,null,null,null,null,null,jsonItems["arrow"],null
					,null,null,null,null,null,null,null,jsonItems["arrow"],null],itemCount:[12,1,3,2,0,0,0,0,0,
					0,0,0,0,0,0,0,1,0,
					0,0,0,0,0,0,0,1,0]}
					var newStack=itemStack.concat(chestList[JSON.stringify([x,y,z])].items)
					var newCount=countStack.concat(chestList[JSON.stringify([x,y,z])].itemCount)
					itemStack=newStack
					countStack=newCount
					
				}
				
				
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
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
					setTimeout(function(){  
					
					
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				c=directions[c]
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   
			   	mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				
				mesh2.name='hitbox:chest:north:'+JSON.stringify([x,y,z])
				mesh2._children[0].name='hitbox:chest:north:'+JSON.stringify([x,y,z])
				mesh2._children[1].name='hitbox:lid:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					
				},300);
				
			}
			finOpts.onUnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
					
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
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
						scene.removeMesh(c._children[0], false)
					scene.removeMesh(c._children[1], false)
						
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}
