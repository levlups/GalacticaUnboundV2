var trapjson=null

export function railside(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
			
			var mesh = BABYLON.Mesh.CreatePlane('sprite-' + name, 1, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = new BABYLON.Texture('texPack/'+funpack+'/blocks/railside.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0, 0); mesh.rotation.x = 1.57;

		mesh.bakeTransformIntoVertices(offset)
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
							
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }

