
var mesh=null
var mesh2=null

export function onFire(m){
	
	if(mesh!=null){
		
		mesh.dispose()
		mesh=null
	}
	if(mesh2!=null){
		
		mesh2.dispose()
		mesh2=null
	}
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
			 
			 
			 name='cool'
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			 mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/fire.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
				mat.diffuseColor = BABYLON.Color3.White()
				mat.emissiveColor = BABYLON.Color3.White()
			mat.diffuseTexture.hasAlpha=true;
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.backFaceCulling = false;
			setInterval(function(){ 
     tex.vOffset -= 1/8;
     }, 100);
			mesh.material=mat
			mesh.scaling.y=1.3
			mesh.position.y+=0.5
			 mesh2=mesh.clone('fire')
			mesh2.parent=m
			mesh2.scaling.y=1.5
			mesh2.scaling.x=0.8
			mesh2.scaling.z=0.8
			mesh2.position.y+=1
			
			mesh.parent=m
	
	noa.rendering.addMeshToScene(mesh,false)
	noa.rendering.addMeshToScene(mesh2,false)
	console.log(m.name)
	
	
}