import {checkWater,checkFlower,setUpWactions} from './waterAction.js'
import {blocklook} from '../blocklook.js'
import {makeparticle} from '../particle.js'
import {throwproj} from '../projectile.js'
import { getHand } from '../player'
import { checkState } from '../chestWars'
import { playsound } from '../sound'
export function mouseFire(noa){
	
	setUpWactions(noa)
		// clear targeted block on on left click
noa.inputs.down.on('fire', function () {
	
	
	
	if(currentGameState=='gathering'){
		//return;
	}
	
	if(!noa.container.hasPointerLock){
		return;
	}
	
	if(currentUI!==uis.hotbar){
		return;
	}
	
	if(chatOn){
		return;
	}
	fired=true;
	const entClick = castRay();
	
	if (!!entClick){
		
		console.log(entClick[1])
		if(entClick[2]!==mainplayerid && (entClick[3]-noa.camera.zoomDistance) <3){
			hitting=true
			target=entClick[2]
		}
		//console.log(listofmobs[entClick[2]])
		if(listofmobs[entClick[2]]!==undefined){
			
			pop(noa,{name:entClick[1]})
			var body=noa.ents.getPhysicsBody(listofmobs[entClick[2]])
			body.mass=1
			body.applyImpulse([0,7,0])
			noa.ents.getState(listofmobs[entClick[2]],'info').health--
		}
	}
	if(countStack[selected]>0){
	throwproj(noa,itemStack[selected])
	countStack[selected]--
	
		if(countStack[selected]<1){
			itemStack[selected]=null
		}
		getHand(noa,itemStack[selected])
	}
	
	
    if (noa.targetedBlock) {
		
		
        var pos = noa.targetedBlock.position
		
		checkState(Array.from(pos))
		
		var wow=noa.world.getBlockID(pos[0], pos[1], pos[2])
		var low=getKeyByValue(blocks, wow)
		//noa.ents.getState(noa.playerEntity,'mesh').mesh.dispose()
		var lol=entMeshes['squid'].clone('cow')
		noa.entities.removeComponent(noa.playerEntity,'mesh')
		noa.entities.addComponent(noa.playerEntity,'mesh',{
			mesh:lol
		})
		playermesh=noa.ents.getState(noa.playerEntity,'mesh').mesh
		j.dispose()
		j=playermesh.clone('squid')
		for (var i=0;i<j.getChildren().length;i++){
										j._children[i].layerMask=0x10000000
										
									}
		datablock.morph=[mainplayerid,'squid']
	//	noa.ents.getState(noa.playerEntity,'mesh').mesh=entMeshes['cow'].clone('cow')
		//console.log(getKeyByValue(blocks, wow)+'  :  sweet')
		if(itemList[low]!==undefined){
		pop(noa,{name:low})
		}
		if(noa.world.getBlockID(pos[0], pos[1], pos[2])==blocks['glass']){
			playsound('glassbreak',0.1)
		}
        noa.setBlock(0, pos[0], pos[1], pos[2])
		datablock.content3=[0, pos[0], pos[1], pos[2]]
		
		 rtcPart=[pos[0], pos[1], pos[2]]
		//var scene=noa.rendering.getScene()
	makeparticle('lol',pos,scene,11,0.3)
		var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
		}
		
		
	
		
		
		checkWater (pos[0],pos[1], pos[2])
		checkFlower(pos[0],pos[1]+1, pos[2])
		//checkWaterBelowAdd (pos[0],pos[1], pos[2])
		//checkWaterHackBelowDestroy (pos[0],pos[1], pos[2])
		 //noa.setBlock(0, pos[0], pos[1], pos[2])
    }
	
	
})

noa.inputs.up.on('fire', function () {
	if(chatOn){
		return;
	}
	
	
	
	if(currentUI==uis.inventory){
		  
		  
		  setTimeout(function(){ document.exitPointerLock() }, 100);
		  return;
	}
	if(currentUI==uis.chest){
		  
		  
		  setTimeout(function(){ document.exitPointerLock() }, 100);
		  return;
	}
	fired=false;
//	var num=Math.floor(Math.random()*2)+1
	//num=JSON.stringify(num)
//sounds['blop'].volume=0.1
	//var playPromise =sounds['blop'].play();

          //  checkaudio(playPromise)


   
})
	
	
}


function castRay() {
	
		let ray = scene.createPickingRay(
			window.innerWidth / 2,
			window.innerHeight / 2,
			BABYLON.Matrix.Identity(),
			noa.rendering.getScene().activeCameras[0]
		);

		const hit = scene.pickWithRay(
			ray,
			(mesh) => {
				
				return mesh.name.startsWith('hitbox:');
			},
			true
		);

		if (hit.pickedMesh) {
			
			var str=hit.pickedMesh.name.split(':');
			
			//raypos=hit.pickedMesh
			
			//console.log(hit.pickedMesh.name.substring(7))
			//return [hit.pickedMesh.name.substring(7), hit.distance];
			//console.log('lol')
			//console.log('yo   '+str[2])
		return [str[0], str[1],str[2],hit.distance];
		} else return null;
	}
	
	
	function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}



function pop(noa,item){
	var strength=10
	if(item==null){
		return;
	}
	
		//var matrixangle=noa.camera.getDirection()


	 var poso = [noa.targetedBlock.position[0]+0.5,noa.targetedBlock.position[1],noa.targetedBlock.position[2]+0.5]
	var coon=propMeshes[item.name].clone(item.name)//itemList[item.name].clone(item.name)
	//coon.scaling=new BABYLON.Vector3(2, 2, 2);
	
	coon.scaling=new BABYLON.Vector3(jsonItems[item.name].held.hand.scale[0], jsonItems[item.name].held.hand.scale[1], jsonItems[item.name].held.hand.scale[2]);
	var id=uuid()
	//coon.rotation.y=playermesh.rotation.y
	//coon.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
	 listofmobs[id] = noa.entities.add( poso, 0.5, 0.5, coon, [0,0.25,0], true, false,true,null )
	
	 //	var body=noa.ents.getPhysicsBody(cid)
		
//var vec = matrixangle

			// vec3.normalize(vec, vec)//
			// vec3.scale(vec, vec, strength)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(listofmobs[id])//
			 // body.applyImpulse([0,3,0]);
			  
			  
			   datablock.content4=[poso,[0,3,0],strength,item.name,id]
			   
			   
			   
			  body.onCollide=function bodyOnCollide(impulse){
	
	//console.log(impulse)
	 
 }
			  
			  	    var onCollideEnt = function(ownID, otherID) {
				  otherID=listofmobs[id]
    collideEnti(noa, ownID, otherID)
  }
				setTimeout(function(){ 
				   noa.entities.addComponent(listofmobs[id], noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  
			
				
				  

				  
				  }, 500);
				  
			
				  	  function collideEnti(noa, otherID, ownID){
						
					if(otherID==noa.playerEntity && !isDead){
						playsound('pick',0.1)
						entToRemove=id
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
					}
						
						
                     }

	
	
	
}
