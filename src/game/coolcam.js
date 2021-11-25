global.cam=null
global.j=null
global.background=null
var heldItem=null
var scene=null
export function coolcam(noa){


		
	       
	scene=noa.rendering.getScene()
	 j=entMeshes['player'].clone('player')//
	
		
		 
		 
	 var bob= new BABYLON.Mesh("dummy", scene);
												 	 j.parent=bob
	noa.rendering.addMeshToScene(j,false)
	
	for (var i=0;i<j.getChildren().length;i++){
		noa.rendering.addMeshToScene(j._children[i],false)
		j._children[i].layerMask=0x10000000
	}
	

		j.position._y=-100
	
	 cam = new BABYLON.FollowCamera("UniversalCamera", new BABYLON.Vector3(0, -100, 0), scene);
	 cam.lockedTarget =j;
	 cam.fov=0.4
	
cam.layerMask=j._children[0].layerMask
	scene.activeCameras=[]
	
												
												 
												   scene.activeCameras.push(scene.cameras[0])
												    scene.activeCameras.push(cam)
									setInterval(function(){ 
									
									if(currentUI==uis.hotbar){
		                      cam.viewport = new BABYLON.Viewport(1-0.2, 1-0.35, 0.2, 0.3);
							  
							 cam.layerMask=j._children[0].layerMask
							
							   
							 j.rotation=playermesh.rotation
									for (var i=0;i<j.getChildren().length;i++){
										j._children[i].layerMask=0x10000000
										j._children[i].rotation=playermesh._children[i].rotation
									}
	                                 }
									
									if(heldItem!==itemStack[selected]){
									heldItem=itemStack[selected]
									getHand(noa,itemStack[selected])
									
									}
									}, 30);

	
}


export function mapcam(noa){
	
	var scene=noa.rendering.getScene()
	 cam = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, 0), scene);
	
	cam.cameraRotation.x=45
	cam.viewport = new BABYLON.Viewport(1-0.3, 1-0.3, 0.3, 0.3);
	cam._parentNode=playermesh
	cam._position._y=45
	scene.activeCameras=[]
	
												
												 
												   scene.activeCameras.push(scene.cameras[0])
												    scene.activeCameras.push(cam)
									

	
}


document.addEventListener('mousemove', logKey);

function logKey(e) {
	
	if(currentUI==uis.hotbar){
		return;
	}
	if(j==null){
		return;
	}
	
	if(document.pointerLockElement!==null){
		//j._children[0].rotation.x=0
	//j._children[0].rotation.y=0
		return;
	}

cam.viewport = new BABYLON.Viewport(0.5-0.11, 0.5-0.05, 0.2, 0.23);
 cam.layerMask=playermesh._children[0].layerMask
 
 for (var i=0;i<j.getChildren().length;i++){
		
		j._children[i].layerMask=playermesh._children[0].layerMask
		j._children[i].rotation={x:0,y:0,z:0}
	}
   let x = e.clientX / innerWidth;
   
    let y = e.clientY / innerHeight;
	
	
	
	if(x>0.5){
	j.rotation.y=-x
	j._children[0].rotation.y=-x
	}else{
		j.rotation.y=-(x-0.5)
		j._children[0].rotation.y=-(x-0.5)
	}
	
	if(y>0.5){
	j._children[0].rotation.x=y
	}else{
		
		j._children[0].rotation.x=y-0.5
	}

 
}


export function getHand(noa,item){

	/*var gl = new BABYLON.GlowLayer("glow", scene);
gl.customEmissiveColorSelector = function(mesh, subMesh, material, result) {
    if (mesh.name === playermesh._children[0].name) {
        result.set(0, 0, 1, 1);
    } else {
        result.set(0, 0, 0, 0);
    }
}

gl.intensity =0.2;*/
	if(j==null){
		
		return;
	}
	
	if(j._children[1].getChildren().length>0){
		j._children[1]._children[0].dispose()
		
	}
	
	if(item==null){
		return;
	}


	//var name=item.name
	var c=null
	if(propMeshes[item.name]!==undefined){
		c=propMeshes[item.name].clone(item.name)
	}else{
c=itemList[item.name].clone(item.name)
	}
	c.parent=j._children[1]
	c.position.x=j._children[1].position._x-0.25
	c.position.y=j._children[1].position._y-2
	c.position.z=j._children[1].position._z+0.2
	
	c.rotation.x=item.held.hand.rotation[0]
	c.rotation.y=item.held.hand.rotation[1]
	c.rotation.z=item.held.hand.rotation[2]
		//c.layerMask=0x10000000
	
	
	noa.rendering.addMeshToScene(c, false)
	
	for (var i=0;i<c.getChildren().length;i++){
					 noa.rendering.addMeshToScene(c._children[i], false)
				}
	
	c.scaling=new BABYLON.Vector3(0.5,0.5,0.5)

	
}
