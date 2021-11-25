console.log('were making cubes!')

export function makeCube(noa,name){
	
	//return;
	 if(cubes[name]!==undefined){
		 return;
	 }
	var mesh = {}
	var mat = {}
	for (var x = 0; x < 6; x++) {
		var matname = name + '-' + x || 'sprite-mat'
		mesh[x] = BABYLON.Mesh.CreatePlane('sprite-' + matname, 1, scene)
		mat[x] = noa.rendering.makeStandardMaterial(matname + x)
		mat[x].backFaceCulling = false
		
		
		if(url.length>2){
		if(x<4){
			mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[2]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		}else{
			
			if(x==4){
				mat[4].diffuseTexture = new BABYLON.Texture( mod+'textures/'+url[0]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			}
			if(x==5){
			mat[5].diffuseTexture = new BABYLON.Texture( mod+'textures/'+url[1]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			}
			
		}
		}
		else{
			mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[0]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		}
		
		if(url.length>4){
			
					if(x==0){
					//right
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[5]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE) //
				}
				if(x==1){
					//left
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[4]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==2){
					//front
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[0]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==3){
					//back
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[3]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==4){
					//top
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[1]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==5){
					//bottom
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[2]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
		}
		/*if ( ( ( (x < 4) ? url[1] : url[0]).startsWith('http://') || ( (x < 4) ? url[1] : url[0]).startsWith('https://') ) && game.allowCustom == true) mat[x].diffuseTexture = new BABYLON.Texture( ((x < 4) ? url[1] : url[0]), scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		else  mat[x].diffuseTexture = new BABYLON.Texture('textures/' + ((x < 4) ? url[1] : url[0]) + '.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)*/
		
		mat[x].diffuseTexture.hasAlpha = true
		mesh[x].material = mat[x]
		var offset
		if (x == 0) {offset = BABYLON.Matrix.Translation(0, 0.5, 0.5); mesh[x].rotation.y = 1.57}
		else if (x == 1) {offset = BABYLON.Matrix.Translation(0, 0.5, -0.5); mesh[x].rotation.y = 1.57}
		else if (x == 2) {offset = BABYLON.Matrix.Translation(0, 0.5, 0.5);}
		else if (x == 3) {offset = BABYLON.Matrix.Translation(0, 0.5, -0.5);}
		else if (x == 4) {offset = BABYLON.Matrix.Translation(0, 0, -1); mesh[x].rotation.x = 1.57}
		else if (x == 5) {offset = BABYLON.Matrix.Translation(0, 0, 0); mesh[x].rotation.x = 1.57}

		mesh[x].bakeTransformIntoVertices(offset)
	}
	
	var newmesh = BABYLON.Mesh.MergeMeshes(Object.values(mesh), true, true, undefined, false, true)
	
	 newmesh.scaling.y=0.5
  newmesh.scaling.x=0.5
  newmesh.scaling.z=0.5
	
	
	
  if(cubes[name]==undefined){
cubes[name]=newmesh;
  }

	//return newmesh
}
