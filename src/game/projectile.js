import { playsound } from './sound.js'
import {makeparticle} from './particle.js'
import {getHand} from './player'
import {onFire} from './onFire'
import {cubecrater,ringcrater,crater} from './shapes'
global.shapers=null
//import { makePlayer } from './player'
export function throwproj(noa,item){
	
	var matrixangle=noa.camera.getDirection()
	var scene=noa.rendering.getScene()
	
	/*var options={
		height:1,
		width:1,
		depth:1
	}*/
	
		//var mat = new BABYLON.StandardMaterial("coon", noa.scene);
			//var tex = new BABYLON.Texture("./texPack/blocks/stone.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			//mat.diffuseTexture=tex
			
			var coon=null
			if(propMeshes[item.name]!==undefined){
				coon=propMeshes[item.name].clone(item.name)
			}else{
	       coon=itemList[item.name].clone(item.name)
			}//BABYLON.MeshBuilder.CreateBox("box", options, noa.scene);
	//coon.material=mat
	coon.rotation.y=-Math.PI/2+playermesh.rotation.y
	coon.rotation.z=-Math.PI/3-noa.camera.pitch
	coon.scaling=new BABYLON.Vector3(jsonItems[item.name].held.hand.scale[0], jsonItems[item.name].held.hand.scale[1], jsonItems[item.name].held.hand.scale[2]);
	 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:arrow', {
				height:0.5,
				width: 0.5,
				depth: 0.5,
			}, scene)
			
			


			hitboxMesh.setParent(coon)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=false;
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			noa.rendering.addMeshToScene(hitboxMesh, false)
	
	var id=uuid()

	 listofmobs[id] = noa.entities.add( [pos[0],pos[1]+1,pos[2]], 0.1, 0.1, coon, [0.2,0,0.2], true, false,false,null )
	
	 	var body=noa.ents.getPhysicsBody( listofmobs[id])
		   noa.entities.addComponent( listofmobs[id], noa.entities.names.collideTerrain, {
					callback: booya
				  })
				  
				  	  function booya(){
					  
					  
					  if(item.name=='vortex'){
						  
						  var posa = noa.ents.getState(  listofmobs[id], 'position').position
						   noa.entities.setPosition(noa.playerEntity,posa[0],posa[1],posa[2]);
						   
					  }
					   if(item.name=='firecracker'){
						  
						  var posa = noa.ents.getState(  listofmobs[id], 'position').position
						  // noa.entities.setPosition(noa.playerEntity,posa[0],posa[1],posa[2]);
						  crater(posa[0],posa[1],posa[2],noa,1)
						    noa.ents.deleteEntity(listofmobs[id])
						//	shapers=[posa[0],posa[1],posa[2],1]
							//datablock.shaper=[posa[0],posa[1],posa[2],noa,1]
					  }
					  
				  }
		
			hitboxMesh.onCollideObservable.add(function (m) {
				//console.log(m.name)
				//return;
				
				
				if(m.metadata!==null){
					
				
					body.mass=0
					var coon2=coon.clone('yo')
					noa.rendering.addMeshToScene(coon2, false)
					noa.rendering.addMeshToScene(coon2._children[0], false)
					var poso=noa.ents.getState(listofmobs[m.metadata], 'position').position
					console.log(poso)
				
					
					var mesh=noa.ents.getState(listofmobs[m.metadata], 'mesh').mesh
					onFire(m)
					coon2.parent=m
					//coon2.position.y=mesh._children[4].position._y+(poso[1]% (Math.floor(poso[1])))
					//coon2.position.x=mesh._children[4].position._x+(poso[0]% (Math.floor(poso[0])))
					//coon2.position.z=mesh._children[4].position._z+(poso[2]% (Math.floor(poso[2])))
					noa.ents.getPhysicsBody(listofmobs[m.metadata]).mass=1
					noa.ents.getPhysicsBody(listofmobs[m.metadata]).applyImpulse(0,3,0)
					
					/*c.parent=playermesh._children[1]
	c.position.x=playermesh._children[1].position._x-0.25
	c.position.y=playermesh._children[1].position._y-2
	c.position.z=playermesh._children[1].position._z+0.2*/
					// var cid2 = noa.entities.add( [poso[0],poso[1],poso[2]], 0.1, 0.1, coon2, [0.2,0,0.2], false, false,false,null )
					 
					 
					/*  noa.entities.addComponent(cid2, noa.entities.names.followsEntity, {
					entity: listofmobs[m.metadata],
					offset: [0,pos[1],0]
				  })
				  */
				//  noa.ents.getState(listofmobs[m.metadata], 'info').health-=1//
					//coon2.setParent(m.parent._children[0])
					//coon2.position.y=25
	noa.ents.deleteEntity(cid)
					//coon.setParent(m)
					/*var poso=noa.ents.getState(cid, 'position').position
							noa.ents.deleteEntity(cid)
							
							var coon2=coon.clone(item.name)
							noa.rendering.addMeshToScene(coon2, false)
                        coon2.position.x=poso[0]
						coon2.position.y=poso[1]
						coon2.position.z=poso[2]*/
		
				}
	});
	var alpha=0
		var observer = scene.onBeforeRenderObservable.add(function () {
		//console.log(collidedMesh)
		
		
		
        hitboxMesh.moveWithCollisions(new BABYLON.Vector3(0,alpha, 0));
		
		alpha += 0.001;
		 hitboxMesh.moveWithCollisions(new BABYLON.Vector3(0,-alpha, 0));
	});
	//var collided=false
	
	/* scene.onBeforeRenderObservable.add(() => {
        if(!collided) {
           coon._children[0].moveWithCollisions(new BABYLON.Vector3(-0.01, 0 ,0))
        }
    })*/
		
		 var vec = matrixangle

			 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec, 40)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody( listofmobs[id])
			  body.applyImpulse(vec);
			  var poso = noa.ents.getState(noa.playerEntity, 'position').position
			 //  datablock.content4=[poso,vec,40]
	             datablock.content4=[poso,vec,40,item.name,id]
			
				  
				    var onCollideEnt = function(ownID, otherID) {
				  otherID= listofmobs[id]
    collideEnti(noa, ownID, otherID,item)
  }
				  
				   noa.entities.addComponent( listofmobs[id], noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  		  noa.entities.addComponent( listofmobs[id], noa.entities.names.info, {
					   nameinfo:  'arrow',
					   health:1
				   })
				  
				/*  setTimeout(function(){ 
	var blockp= noa.ents.getState(cid, 'position').position
					
                            crater(blockp[0],blockp[1],blockp[2],noa,blockPick)
				  }, 1000);*/
				
				  
				  

}





				  function collideEnti(noa, otherID, ownID,item){
					  
					  if(otherID==noa.playerEntity){
						  noa.ents.deleteEntity(ownID)
						for (var i=0;i<itemStack.length;i++){
							 if(itemStack[i]==jsonItems[item.name]){
								countStack[i]+=1
								break;
								
							}else if(itemStack[i]==null){
								itemStack[i]=jsonItems[item.name]
								countStack[i]+=1
								break;
							}
							
							
							
							
						}
						getHand(noa,itemStack[selected])
						return;
					  }
						
						if(otherID!==noa.playerEntity){
							//var c=itemList['arrow'].clone('arrow')
							
						//	noa.ents.getState(otherID,'info').health-=1
							
							//if(noa.ents.getState(otherID,'info').health<1){
								//return;
							//}
						var entpos=noa.ents.getState(otherID,'position').position
						
						var body=noa.ents.getPhysicsBody(otherID)
						body.applyImpulse([0,7,0])
						makeparticle('lol',entpos,scene,2,0.3)
							
							
							playsound('blop',0.1)
							
						}
						noa.ents.deleteEntity(ownID)
						
						//console.log(otherID)
						/*for (const key in listofmobs) {
							console.log(listofmobs[key])
							if(ownID==listofmobs[key]){
								var body=noa.ents.getPhysicsBody(otherID)
								console.log('wow')
										body.applyImpulse([0,1,0])
							}
						}*/
						
						
}




