export function rack(noa,options,id,texture){
	options={solid: true, opaque: true ,material:'rack',onCustomMeshCreate:null}
	/*var imageheight=512
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//,//right
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),///left
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:1,
		width:1,
		//faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreatePlane(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('texPack/'+funpack+'/blocks/minecraft/'+texture+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			mat.diffuseTexture.Alpha=0.5
			mat.Alpha=0.5
			mat.backFaceCulling=false
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.diffuseTexture.vScale = 1/32;
			setInterval(function(){ 
     tex.vOffset -= 1/32;
     }, 100);
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			
			finOpts.onUnset=function(x,y,z){
			checkVoid(x,y,z,noa)
				//checkArea(x,y,z,noa)
			}
			//finOpts.blockMesh = mesh
			
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}




function checkVoid(e,t,i,k){


                            var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t+1, i ),
                                s = k.world.getBlockID(e, t-1, i );
								
								
                            if (r == blocks['portal']) {
							
								k.setBlock(0, e-1 , t, i)
							
							
							checkVoid(e-1 , t, i,k)
							
								
								
                            }
                            if (o ==blocks['portal']){
								
									k.setBlock(0, e+1 , t, i)
									
									checkVoid(e+1, t, i,k)
                               
                            }
                            if (a ==blocks['portal']) {
							
								k.setBlock(0, e , t+1, i)
								
							checkVoid(e, t+1, i,k)
								
								
                            }
                            if (s == blocks['portal']) {
								
									k.setBlock(0, e , t-1, i)
								
								checkVoid(e, t-1, i,k)
                              
                            }
								

								
							
	
}

