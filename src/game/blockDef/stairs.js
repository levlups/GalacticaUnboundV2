import { blocklook } from '../blocklook'


var stairjson=null
var directions={"0":"north","1":"south","2":"east","3":"west"}
var namer='table'
global.offmeshes=[]
var boptions=[localStorage.getItem('rotations')]
export function stairs(noa,options,id,texture,e){

	var scene=noa.rendering.getScene()
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	stairjson=e
	
	
	namer=e.name
	          
			  
			  /*var mat = noa.rendering.makeStandardMaterial('cool')
		
			
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/leaves.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			
			
			mat.diffuseTexture = tex
			
			var mesh=null
			
			BABYLON.SceneLoader.ImportMesh("", "",'texPack/'+funpack+ "/models/"+namer+"/"+namer+".babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							    var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							 mesh.material=mat
							  
							  
						}*/
						
						var imageheight=16
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0.0625,0.125,0.125,0.375),//right
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0,0.125,0.046,0.375),//left
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 0.5,
		depth:1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('texPack/'+funpack+'/blocks/floor.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			mat.diffuseTexture.Alpha=0.5
			mat.Alpha=0.5
			mat.backFaceCulling=false
		
			mesh.material=mat
			
				var topmesh=mesh.clone('top')
			
			topmesh.position.y+=0.5
		    topmesh.rotation.x=Math.PI/2
			topmesh.scaling.x=0.99
			topmesh.scaling.y=0.99
			//topmesh.position.z+=0.25
			//mesh.position.y+=0.5
				var offset = BABYLON.Matrix.Translation(0, 0.25, 0)
	        mesh.bakeTransformIntoVertices(offset)
			topmesh.setParent(mesh)
			
		
		    var finOpts = options
	            propMeshes['stairs']=mesh
			
			finOpts.onLoad= function ( x, y, z) {
			
				
			var mesh2=mesh.clone('kelp')
			
			
		  
				
				//cubes['door']=mesh2
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			
			setTimeout(function(){  
			
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
				//return;
					
			 //c='Close'
			 j='Close'
				mesh2.position.x=x+stairjson[c][j][0]//0.5
				mesh2.position.y=y+stairjson[c][j][1]
				mesh2.position.z=z+stairjson[c][j][2]//0.5//
				
				mesh2.rotation.x=stairjson[c][j+'rotation'][0]
				mesh2.rotation.y=stairjson[c][j+'rotation'][1]
				mesh2.rotation.z=stairjson[c][j+'rotation'][2]
				
				mesh2.name='hitbox:stairs:'+c+':'+JSON.stringify([x,y,z])
				
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				offmeshes.push([[x,y,z],mesh2])
				
				
				
				}, 300);
			}
			
			
			
			
			
			
			finOpts.onSet= function ( x, y, z) {
				
		
				var mesh2=mesh.clone('stairs')
				
			
		//console.log(mesh2._children[0])
				
				
				
					var j="Close"
				
				var c=blocklook(noa)
				
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				setTimeout(function(){  
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				
					c=directions[c]
				
				mesh2.position.x=x+0.5//+stairjson[c][j][0]//0.5
				mesh2.position.y=y//+stairjson[c][j][1]
				mesh2.position.z=z+0.5//+stairjson[c][j][2]//0.5//
				
				mesh2.rotation.x=stairjson[c][j+'rotation'][0]
				mesh2.rotation.y=stairjson[c][j+'rotation'][1]
				mesh2.rotation.z=stairjson[c][j+'rotation'][2]
				
				mesh2.name='hitbox:stairs:'+c+':'+JSON.stringify([x,y,z])
				mesh2.checkCollisions=true
				mesh2._children[0].checkCollisions=true
				console.log(mesh2._children[0].name)
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
				
			}
			
			finOpts.onUnload= function ( x, y, z)  { removemesh(x,y,z)}
			finOpts.onUnset= function ( x, y, z) { removemesh(x,y,z)}
				
			
		
			 function removemesh(x,y,z){
				 for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						c.name='lol'
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
						
					}
				}
				 
			 }
			 
			
			noa.registry.registerBlock(id, finOpts)
			
			 //});
			 
			 return id;
	
}
