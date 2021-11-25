var trapjson=null
global.trapist=null
import {blocklook} from '../blocklook'
var directions={"0":"north","1":"south","2":"east","3":"west"}
var state={"0":"Close","1":"Open"}
export function trap(noa,options,id,name,e){
	options={solid:false,opaque:false}
	var scene=noa.rendering.getScene()
	trapjson=e
	
	
	
	
	                    var bustex = new BABYLON.Texture("./texPack/"+funpack+"/blocks/trap.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

						var busmat = noa.rendering.makeStandardMaterial('chest')
						busmat.diffuseTexture=bustex;
						busmat.backFaceCulling = false;
						busmat.specularColor = BABYLON.Color3.Black()
						busmat.emissiveColor = BABYLON.Color3.White()
						bustex.hasAlpha=true;
                      
						
						
							var imageheight=16
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
				
				
				var n=[new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//face//top
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//back //under
	new BABYLON.Vector4(pixelx*0,-pixely*(4+num),pixelx*(4+num),-pixely*(0)),////right
	new BABYLON.Vector4(pixelx*0,-pixely*(4+num),pixelx*(4+num),-pixely*(0)),////left
	new BABYLON.Vector4(pixelx*0,-pixely*(4+num),pixelx*(4+num),-pixely*(0)),//top 
	new BABYLON.Vector4(pixelx*0,-pixely*(0+num),pixelx*(0+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:0.2,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
	
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
						mesh.material=busmat;
							var finOpts = options
					
						
							
								var offset = BABYLON.Matrix.Translation(0,0.5, 0)
			
	        mesh.bakeTransformIntoVertices(offset)
							
							
							
							propMeshes[name]=mesh
							finOpts.onSet= function ( x, y, z) {
				
				
				var mesh2=mesh.clone('kelp')
				trapist=mesh2
				console.log(mesh2)
			var c=blocklook(noa)
			
			var detail="positionClose"//
			var j="Close"
				setTimeout(function(){  
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			
	
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
			
				
				mesh2.name='hitbox:trap:'+c+':'+JSON.stringify([x,y,z])+':'+j
			//	mesh2.checkCollisions=true
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
					},300);
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
				
				
			var c=null
			
			
			var j="Close"
	           
			c='north'
			
				setTimeout(function(){  
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
			
				mesh2.name='hitbox:trap:'+c+':'+JSON.stringify([x,y,z])
				noa.rendering.addMeshToScene(mesh2, false)
				//mesh2.checkCollisions=true
				offmeshes.push([[x,y,z],mesh2])
					
			},300);
				
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

