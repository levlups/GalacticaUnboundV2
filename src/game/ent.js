
var walkcycle=0
global.letgo=null
export function makeEntMesh(noa,name) {


var scene = noa.rendering.getScene()
var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial(name+"mat", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
busmat.diffuseTexture.hasAlpha=true
//var mainent=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            entMeshes[name] = new BABYLON.Mesh(name, scene);
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent= entMeshes[name]//mainent;
			   
			   if(i==1){
				  // meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			    if(i==2){
				  // meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			}
	 



	})

}


export function makeStaticMesh(noa,name) {


var scene = noa.rendering.getScene()
var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial(name+"mat", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
//var mainent=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            entMeshes[name] = new BABYLON.Mesh(name, scene);
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent= entMeshes[name]//mainent;
			   
			   
			}
	 



	})

}




var walkcycle=0

export function makeEnt(noa,name,heightvar,entpos) {
	

 
 if(entMeshes[name]==undefined){
	 return;
 }
 
  if(dominator){
	 
	  var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( entpos, 1, 2, mainentu, [0,0,0], true, false,true,null )
				   
				   
				 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:heightvar,
				width: 1,
				depth: 1,
			}, scene)
			
			


			hitboxMesh.setParent(mainentu)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, heightvar/2, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			noa.rendering.addMeshToScene(hitboxMesh, false)
			
				    mainentu.rotation.y=Math.PI*(Math.random()*8)

				   datablock.entcontent=[id,name, entpos]
				  
				  
				/*  noa.entities.addComponent(listofmobs[id], noa.entities.names.entLook, {
					   mesh:  mainentu,
					   height: heightvar
				   })*/
				   
				  /*  noa.entities.addComponent(listofmobs[id], noa.entities.names.entMove, {
					   mesh:  mainentu
					
				   })*/
				  if(propMeshes[name]==undefined){
					   
					   propMeshes[name]=mainentu
				   }
				   
				   
				  /*  noa.entities.addComponent(listofmobs[id], noa.entities.names.randLook, {
					   mesh:  mainentu
					
				   })*/
				   
				   /*noa.ents.addComponent(listofmobs[id], 'followsEntity',{
						entity:noa.playerEntity//,
					
					})*/
				   
				 /*  letgo=listofmobs[id]
				   setInterval(function(){ 
				   noa.ents.getState(noa.playerEntity,'mesh').offset[1]=0.5
walkcycle++
mainentu.rotation.y=playermesh.rotation.y//+Math.PI
rideName='minecart'
  mainentu._children[1].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (0.5* Math.PI));
		              mainentu._children[2].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI));
					  
					  mainentu._children[3].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (0.5* Math.PI));
		              mainentu._children[4].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI));
				   }, 30);*/
				  
						
						
						var body=noa.ents.getPhysicsBody(listofmobs[id])
						
						 
						 
						 
						   var onCollideEnt = function(ownID, otherID) {
				  
    snoop(noa, ownID, otherID,item)
						   }
						 
						 
						    noa.entities.addComponent(listofmobs[id], noa.entities.names.collideEntities,{
								
								callback:snoop
							})
							
							
							function snoop(noa, ownID, otherID,item){
								
								 if(otherID==noa.playerEntity){
								 var a = 7 * Math.sin(playermesh.rotation.y),
						     c = 7 * Math.cos(playermesh.rotation.y);
								
								body.applyForce([a,7,c])//
								
								  }
								
					
									
								
							}
							
					/*	  noa.entities.addComponent(listofmobs[id], noa.entities.names.info, {
					   nameinfo:  'horse',
					   idinfo: id,
					   health:5
				   })*/
							//var myVar = setInterval(myTimer, 10000);
	
					/*function myTimer(){ 
						
                             if(noa.ents.getState(listofmobs[id], 'position').position[1]<0){
                            noa.ents.deleteEntity(listofmobs[id])
							console.log('entity died')
							clearInterval(myVar);
							 }

						}*/
							
							
  }

}

export function makeStaticEnt(noa,name,epos) {
	
	



 
	  
	 var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( epos, 0.5, 1, mainentu, [0.2,0,0.2], false, false,false,null )
				   console.log(listofmobs)
				    console.log(mainentu)
 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:0.6,
				width: 1.2,
				depth: 1.7,
			}, scene)
			
			


			hitboxMesh.setParent(mainentu)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5/2, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			noa.rendering.addMeshToScene(hitboxMesh, false)
				   
				  
				  
				   
				   spawnedEnt={name:name,po:[noa.targetedBlock.position[0]+0.5,noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2]+0.5],id:id}
				   
				   
				  
						
						
						
						 
						//    noa.entities.addComponent(listofmobs[id], noa.entities.names.collideEntities)
							

}


export function makeProp(noa,name,heightvar,entpos) {
	

  if(dominator){
	  
	               var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( entpos, 1, 2, mainentu, [0,0,0], false, false,false,null )
				   console.log(listofmobs)
				    mainentu.rotation.y=Math.PI*(Math.random()*8)
					
					setInterval(function(){ mainentu.rotation.y+=0.01
                     mainentu.rotation.z+=0.01
					 walkcycle++
								    mainentu._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));					
		              mainentu._children[2].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  mainentu._children[3].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mainentu._children[4].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					 // mainentu.rotation.x+=0.01
					}, 100);
					
					currentUI=uis.kiosk
  }
 
					

 
		
	
	
	
	
}



export function makeSuperEnt(noa,name,heightvar,entpos) {
	

 
 if(entMeshes[name]==undefined){
	 return;
 }
 
  if(!dominator){
	 var scaling=1
	  var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( entpos, 1*scaling,1.8*scaling, mainentu, [0,0,0], true, false,true,null )
				 
				   
 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:2*scaling,
				width: 1*scaling,
				depth: 1*scaling,
			}, scene)
			
			
mainentu.scaling=new BABYLON.Vector3(scaling,scaling,scaling)

			hitboxMesh.setParent(mainentu)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 1*scaling, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			 hitboxMesh.metadata=id
			noa.rendering.addMeshToScene(hitboxMesh, false)
				   
				   mainentu.rotation.y=Math.PI*(Math.random()*8)
				  
				  /*noa.entities.addComponent(listofmobs[id], noa.entities.names.entLook, {
					   mesh:  mainentu,
					   height: heightvar
				   })
				   
				    noa.entities.addComponent(listofmobs[id], noa.entities.names.entMove, {
					   mesh:  mainentu
					
				   })*/
				   
				 
				   var body=noa.ents.getPhysicsBody(listofmobs[id])
						 body.autoStep=true
				  
						console.log('super')
						
						//var body=noa.ents.getPhysicsBody(listofmobs[id])
						// body.autoStep=true
						 	  noa.entities.addComponent(listofmobs[id], noa.entities.names.info, {
					   nameinfo:  name,
					   idinfo: id,
					   health:5
				   })
						 
					

														noa.entities.addComponent(listofmobs[id], noa.entities.names.aPlus, {
											   mesh:  mainentu
											
										   })
							
						 
					
							
							
  }

}
