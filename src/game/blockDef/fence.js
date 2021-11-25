import { blocklook } from '../blocklook'

var trapjson=null;
var namer='table'
	var mesh=null
			
			var mesh3=null
			var middlefence=null
			var fencecorner=null
			
			var directions={"0":"north","1":"south","2":"east","3":"west"}
var state={"0":"Close","1":"Open"}
export function fence(noa,options,id,texture,e){
	var scene=noa.rendering.getScene()
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	
	trapjson=e
    namer=e.name
	
	var tex = new BABYLON.Texture("./texPack/"+funpack+trapjson.texture, scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	
	
			
				  var mat = noa.rendering.makeStandardMaterial('cool')
		//	/chair/chair
			
			
			
			
			mat.diffuseTexture = tex
			
		
		
		BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/middlefence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  middlefence=meshes[0]
							 middlefence.material=mat
							  
							  
						}
						
						});
						
					/*	BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/fencecorner.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  fencecorner=meshes[0]
							 fencecorner.material=mat
							  
							  
						}
						
						});
			
			BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/oakfence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  mesh3=meshes[0]
							 mesh3.material=mat
							  
							  
						}
						
						});
			
			BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/fence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  mesh=meshes[0]
							 mesh.material=mat
							  
							  
						}
						
						 });*/
			
			var finOpts = options
			
				
		
			
			
			finOpts.onSet= function ( x, y, z) {
				
				
				
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
		
			
			       var mesh2=middlefence.clone('kelp')
				
	           
			
			console.log(c)
				console.log(trapjson)
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]//-1.57
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
					//mesh2.showBoundingBox=true
				mesh2.checkCollisions=true
			    mesh2.name='hitbox:fence:'+c+':'+JSON.stringify([x,y,z])+':'+j
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
					setTimeout(function(){  
				
			     if(noa.world.getBlockID(x,y,z+1)==blocks['fence'] && noa.world.getBlockID(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}	
				
				if(noa.world.getBlockID(x,y,z-1)==blocks['fence'] && noa.world.getBlockID(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}
				
				if(noa.world.getBlockID(x,y,z+1)==blocks['fence'] && noa.world.getBlockID(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}
				if(noa.world.getBlockID(x,y,z-1)==blocks['fence'] && noa.world.getBlockID(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}
				
				}, 1000);
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				//setTimeout(function(){  
		
				
				
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
			
		
					 	setTimeout(function(){  
				var mesh2=middlefence.clone('kelp')
				
			
			console.log(c)
				console.log(trapjson)
				
				
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
				
				
				
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]//-1.57
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				mesh2.checkCollisions=true
				offmeshes.push([[x,y,z],mesh2])
				
				}, 1000);
				setTimeout(function(){  
				
			     if(noa.getBlock(x,y,z+1)==blocks['fence'] && noa.getBlock(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}	
				
				if(noa.getBlock(x,y,z-1)==blocks['fence'] && noa.getBlock(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}
				
				if(noa.getBlock(x,y,z+1)==blocks['fence'] && noa.getBlock(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}
				if(noa.getBlock(x,y,z-1)==blocks['fence'] && noa.getBlock(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}
				
				}, 1000);
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
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
			
			return id;
	
}



