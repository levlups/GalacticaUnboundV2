var hat=null
var cape=null
var transport=null
console.log('hat added')
//var armory=['bearhat','santa_hat']
export function addHat(noa,mainp,name){
	
	
	

	if(name=='none'){
		if(hat!==null){
			hat.dispose()
			hat=null;
			
			
		
			return;
		}
	 return;
	}
	
	
	var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;


  BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
          
			for (var i=0;i<meshes.length;i++){
	
	hat= meshes[0]
	 hat.material=busmat;
	   hat.scaling=new BABYLON.Vector3(0.8,0.8,0.8)
	  hat.parent=mainp._children[0];
	  
	  noa.rendering.addMeshToScene(hat, false)

 }
 
		hat.position.y+=0.35
		
		propMeshes[name]=hat
	
	
	})
	
	

	
	
}


export function addCape(noa,mainp,name){
	if(name=='none'){
	
		
		
		cape.dispose()
		cape=null;
	
		return;
	
	}
		
		console.log('add cape dude')
		cape = BABYLON.MeshBuilder.CreatePlane('cape', {width: 0.6, height: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
				cape.parent=mainp
				
				var capemat = new BABYLON.StandardMaterial("face0", scene);
					var pop = new BABYLON.Texture("texPack/item/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
					capemat.backFaceCulling=false
capemat.diffuseTexture=pop;
capemat.emissiveColor = BABYLON.Color3.White()
capemat.specularColor = BABYLON.Color3.Black()
cape.material=capemat

noa.rendering.addMeshToScene(cape, false,mainp.position)
					  cape.rotation.x=Math.PI/18
					 
					  cape.position.z-=0.2
					 cape.position.y+=1
	
	
	
}















export function addTransport(noa,mainp,name){
	
	
	if(playermesh._children[5].getChildren().length>0){
		playermesh._children[5]._children[0].dispose()
		
	}

	if(name=='none'){
		if(transport!==null){
			transport.dispose()
			transport=null;
			
			
		
			return;
		}
	 return true;
	}
	
	
	var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;


  BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            
			for (var i=0;i<meshes.length;i++){
	
	transport= meshes[0]
	transport.material=busmat;
	  transport.parent=mainp._children[5];
	  
	  noa.rendering.addMeshToScene(transport, false)

 }
 
		transport.position.y-=1
		transport.scaling.x=1.1
		transport.scaling.z=1.1
		
	
	
	})
}
	global.mount=null
	export function addMount(noa,mainp,name){
	
	
	if(mainp._children[5].getChildren().length>0){
		mainp._children[5]._children[0].dispose()
		
	}

	if(name=='none'){
		if(mount!==null){
			mount.dispose()
			mount=null;
			
			
		
			return;
		}
	 return true;
	}
	
	


 /* BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            
			for (var i=0;i<meshes.length;i++){
	
	transport= meshes[0]
	transport.material=busmat;
	  transport.parent=mainp._children[5];
	  
	  noa.rendering.addMeshToScene(transport, false)

 }
 
		transport.position.y-=1
		transport.scaling.x=1.1
		transport.scaling.z=1.1
		
	
	
	})*/
	
	mount=entMeshes[name].clone(name)
	mount.parent=mainp._children[5];
	noa.rendering.addMeshToScene(mount, false)
	//noa.rendering.addMeshToScene(transport._children[0], false)
	
mount.position.x=mainp._children[5].position._x
	mount.position.y=mainp._children[5].position._y-3.5
	mount.position.z=mainp._children[5].position._z
	for (var i=0;i<mount.getChildren().length;i++){
					 noa.rendering.addMeshToScene(mount._children[i], false)
				}
	//noa.rendering.addMeshToScene(transport, false)
 

	
	
}