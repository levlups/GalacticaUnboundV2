
var doorjson=null
var directions={"0":"north","1":"south","2":"east","3":"west"}
var state={"0":"Close","1":"Open"}
export function door(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
		doorjson=e
	
			
			var scene=noa.rendering.getScene()
		
			

			
				
				var imageheight=16
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
				
				
				var n=[new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(12+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(12+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(4+num),-pixely*(0)),////right
	new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(4+num),-pixely*(0)),////left
	new BABYLON.Vector4(pixelx*4,-pixely*(0+num),pixelx*(12+num),-pixely*(0)),//top 
	new BABYLON.Vector4(pixelx*4,-pixely*(0+num),pixelx*(12+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1.9,
		depth:0.1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
	
			var supermesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
				
			
			var offset = BABYLON.Matrix.Translation(0, 1, 0)
			var mat = noa.rendering.makeStandardMaterial(name)
	        supermesh.bakeTransformIntoVertices(offset)
			supermesh.material=mat
			
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/door.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true
			mat.backFaceCulling=false
			//supermesh.setPivotPoint(new BABYLON.Vector3(0.25, 0, 0))
			var finOpts = options
			
			finOpts.onLoad= function ( x, y, z) {
				
			
				var mesh2=supermesh.clone('door')
				
				//cubes['door']=mesh2
				
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			setTimeout(function(){  
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
		
				mesh2.position.x=x+doorjson[c][j][0]//0.5
				mesh2.position.y=y+doorjson[c][j][1]
				mesh2.position.z=z+doorjson[c][j][2]//0.5//
				
					mesh2.rotation.x=doorjson[c][j+'rotation'][0]
				mesh2.rotation.y=doorjson[c][j+'rotation'][1]
				mesh2.rotation.z=doorjson[c][j+'rotation'][2]//
			
				
			
				
				mesh2.name='hitbox:door:'+c+':'+JSON.stringify([x,y,z])+':'+j
				mesh2.checkCollisions=true
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			},300);
				
			}
			
			finOpts.onSet= function ( x, y, z) {
				console.log('boom')
			var mesh2=supermesh.clone('door')
				var c=blocklook(noa)
			var detail="Close"//
			var j="Close"
			
			
			setTimeout(function(){  
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			      
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   console.log(j)
				mesh2.position.x=x+doorjson[c][j][0]//0.5
				mesh2.position.y=y+doorjson[c][j][1]
				mesh2.position.z=z+doorjson[c][j][2]//0.5//
				
				mesh2.rotation.x=doorjson[c][j+'rotation'][0]
				mesh2.rotation.y=doorjson[c][j+'rotation'][1]
				mesh2.rotation.z=doorjson[c][j+'rotation'][2]//
				
				     
					mesh2.checkCollisions=true
				
					mesh2.name='hitbox:door:'+c+':'+JSON.stringify([x,y,z])+':'+j
				
				
				
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
			}
			
			finOpts.onUnload= function ( x, y, z) {
				
				
				
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
			}
		
			
		
				
			noa.registry.registerBlock(id, finOpts)
			return id;
		
}



function blocklook(noa){
	
	
var viewdirection=null
var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)

		 
if(rad>320  || rad <50){
	 viewdirection='north'
	
	
}
if(rad>130 && rad<230){
	viewdirection='south'
	
	
}
if(rad>50 && rad<130){
	viewdirection='east'
	
	
	
}

if(rad>230 && rad<320){
	viewdirection='west'
	
	
}
return viewdirection;

 }
