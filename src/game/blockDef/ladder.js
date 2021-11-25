
var directions={"0":"north","1":"south","2":"east","3":"west"}
export function ladder(noa,options,id,name,e){
	
		options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
			
			
			var finOpts = options
			
			finOpts.onLoad= function ( x, y, z) {
				
			
				var mesh2=itemList[name].clone(name)
				
		
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			
			
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				setTimeout(function(){  
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				
					c=directions[c]
		
			
				mesh2.position.x=x+e[c][j][0]//0.5
				mesh2.position.y=y+e[c][j][1]
				mesh2.position.z=z+e[c][j][2]//0.5//
				
				mesh2.rotation.x=e[c][j+'rotation'][0]
				mesh2.rotation.y=e[c][j+'rotation'][1]
				mesh2.rotation.z=e[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
				
			}
			
			finOpts.onSet= function ( x, y, z) {
				
			var mesh2=itemList[name].clone(name)
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				setTimeout(function(){  
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				
					c=directions[c]
	
			
				mesh2.position.x=x+e[c][j][0]//0.5
				mesh2.position.y=y+e[c][j][1]
				mesh2.position.z=z+e[c][j][2]//0.5//
				
				mesh2.rotation.x=e[c][j+'rotation'][0]
				mesh2.rotation.y=e[c][j+'rotation'][1]
				mesh2.rotation.z=e[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
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

/*function blocklook(noa){
	
	//var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	viewdirection='north'
	
	//'north'
	
}
if(rad>130 && rad<230){
	viewdirection='south'
	//'south'
	
}
if(rad>50 && rad<130){
	viewdirection='east'//[0,-Math.PI/2,0,[-0.4,0,0]]
	//'left'
	
	
}

if(rad>230 && rad<320){
	viewdirection='west'//[0,Math.PI/2,0,[0.4,0,0]]
	//'right'
	
}
return viewdirection;
	
	
}*/

function blocklook(noa){
	
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
			 viewdirection='north'
	//viewdirection=[0,Math.PI,0,[0,0,-0.40]]
	
	//'north'
	
}
if(rad>130 && rad<230){
	viewdirection='south'
	//viewdirection=[0,0,0,[0,0,0.40]]
	//'south'
	
}
if(rad>50 && rad<130){
	viewdirection='east'
	//viewdirection=[0,-Math.PI/2,0,[-0.4,0,0]]
	//'left'
	
	
}

if(rad>230 && rad<320){
	viewdirection='west'
	//viewdirection=[0,Math.PI/2,0,[0.4,0,0]]
	//'right'
	
}
return viewdirection;

 }
