export function fire(noa,options,id,texture){
		options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	var imageheight=128
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//,//right
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),///left
	new BABYLON.Vector4(pixelx*15,-pixely*(0+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*15,-pixely*(0+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:0.9,
		width:0.9,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/fire.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.backFaceCulling = false;
			setInterval(function(){ 
     tex.vOffset -= 1/8;
     }, 100);
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0.4, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			finOpts.blockMesh = mesh
			
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}
