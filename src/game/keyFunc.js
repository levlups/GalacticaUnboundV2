import { playsound } from './sound.js'
import {throwproj} from './projectile.js'
import {flyState,setupFlying} from './fly.js'
import {addHat} from './armor.js'
import {mouseFire} from './mouse/mouseFire.js'
import {mouseAltFire} from './mouse/mouseAltFire.js'
import {blocklook} from './blocklook'
import {makeEnt,makeStaticEnt, makeEntMesh} from './ent'
import { makePlayer,getHand,getThirPHand,addEquip } from './player'
import { playerKneel } from './animation'
import { portal} from './portal'
import { addToShading} from './light'
import {chestAction} from './mouse/chestAction'
import {crater,wall,box} from './shapes'
import { addMount } from './armor'

const screenshot = require("canvas-screenshot")

global.isFlying=false;
	var k=null
	var music=null
	
	
	var directions={"north":0,"south":1,"east":2,"west":3}
		

export function  initKeys(noa){
	
	
	
k=noa
noa.camera.zoomDistance=10
var scene=noa.rendering.getScene()



flyState()
// place some grass on right click
noa.inputs.down.on('alt-fire', function () {
	
	if(chatOn){
		return;
	}
	
	
	
	if(currentUI!==uis.hotbar){
		return;
	}
	if(mouseAltFire(noa)=='door'){
		fired=true;
		return;
	}
	if(mouseAltFire(noa)=='lid'){
		fired=true;
		return;
	}
	if(mouseAltFire(noa)=='trap'){
		fired=true;
		return;
	}
		fired=true;
    if (noa.targetedBlock) {
		
		
		
		
		if(noa.world.getBlockID(noa.targetedBlock.position[0], noa.targetedBlock.position[1],noa.targetedBlock.position[2])==blocks["vorax"]){
			var s=Object.keys(blocks)[Math.floor(Math.random()*Object.keys(blocks).length)]
			
			itemStack[0]=jsonItems[s]
			
			return;
		}
		/*if(itemStack[selected]!==null){
				if(entMeshes[itemStack[selected].name]!==undefined){
					 playsound('oui',0.1)
						 makeEnt(noa,itemStack[selected].name,1,[noa.targetedBlock.position[0],noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2]])
						 countStack[selected]--
						 return itemStack[selected].name;
				}
		}*/
		//playsound('blop',0.1)
		if(blockPick!==blocks['rack']){
		//portal(noa,[noa.targetedBlock.position[0],noa.targetedBlock.position[1],noa.targetedBlock.position[2]])
		}
		if(noa.world.getBlockID(noa.targetedBlock.position[0],noa.targetedBlock.position[1]+2,noa.targetedBlock.position[2])==blocks['watertop']){
		
		makeStaticEnt(noa,'boat',[noa.targetedBlock.position[0],noa.targetedBlock.position[1]+3,noa.targetedBlock.position[2]])
		
		//rideName='none';
		//rideNameRtc=rideName
		return;
		}
		if(noa.world.getBlockID(noa.targetedBlock.position[0],noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2])==blocks['rail']){
		
		makeStaticEnt(noa,'minecart',[noa.targetedBlock.position[0]+0.5,noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2]+0.5])
		
		//rideName='none';
		//rideNameRtc=rideName
		return;
		}
		if(countStack[selected]<2){
			getHand(noa,null)
		}
		if(countStack[selected]<1){
		itemStack[selected]=null
		return;
	    }
	
		if(blocks[itemStack[selected]]==undefined){
			//return;
		}
        var pos = noa.targetedBlock.adjacent
		
		playsound('place',0.1)
		
		if(itemStack[selected]!==null ){
			
	noa.setBlock(blocks[itemStack[selected].name], pos[0], pos[1], pos[2])
	
	
    
	countStack[selected]--
		}

	var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
	addToShading(pos[0],pos[1],pos[2],id)
		var dir=blocklook(noa)
		
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}else{
				
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		}

	if(itemStack[selected]!==null){
		
		datablock.content3=[blocks[itemStack[selected].name], pos[0], pos[1], pos[2],directions[dir],0]
	}
	
		
    }
	
})



noa.inputs.up.on('alt-fire', function () {
	if(chatOn){
		return;
	}
		fired=false;
  
})



noa.inputs.down.on('social', function () {
	
	if(chatOn){
		return;
	}
   facingF=!facingF
})

noa.inputs.up.on('chat', function () {
	
	
		
		
   chatOn=true
})

noa.inputs.up.on('zoom', function () {
	if(chatOn){
		return;
	}
	
	 if (noa.camera.zoomDistance == 10) {noa.camera.zoomDistance = 0;
		for (var i=0;i<playermesh.getChildren().length;i++){
					playermesh._children[i].visibility=false
				}
		}
	
        else if (noa.camera.zoomDistance == 0) {noa.camera.zoomDistance = 10;
		for (var i=0;i<playermesh.getChildren().length;i++){
					playermesh._children[i].visibility=true
				}
		}
	
})

noa.inputs.up.on('inventory', function () {
	
	localStorage.setItem('blockss',JSON.stringify(rtcblocklist))
	localStorage.setItem('chest',JSON.stringify(chestList))
	localStorage.setItem('mainChest',JSON.stringify(mainChest))
	//writeJson('info.json',rtcblocklist)
	if(chatOn){
		return;
	}
	
	if(currentUI==uis.inventory){
		 playsound('inventory',0.1)
		currentUI=uis.hotbar
		
		
			mainChest.items=itemStack.slice(9,38)
		mainChest.count=countStack.slice(9,38)
		//itemStack.length=9
		//countStack.length=9
		//noa.container.canvas.requestPointerLock()
		
		
		//setTimeout(function(){ noa.camera.applyInputsToCamera() }, 100);

	}else if(currentUI==uis.chest){
			   playerbody.mass=1
			   chestAction(chestmesh,false)
			   datablock.blockaction=[chestmesh.name.split(':')[3],'chest']
			 
			    currentUI=uis.hotbar
			
				 //noa.container.canvas.requestPointerLock();
		   }
		   
		   else if(currentUI==uis.screen){
			  
			currentUI=uis.hotbar
			uis.screen[1].framey=0
			// uis.screen[1].path="./texPack/"+funpack+"/item/cake.png"
			
				 //noa.container.canvas.requestPointerLock();
		   }
	else {
	itemStack=	 itemStack.concat(mainChest.items)
	countStack=  countStack.concat(mainChest.count)
	
      currentUI=uis.inventory
	  playsound('inventory',0.1)
	 //currentUI=uis.screen
	 document.exitPointerLock()
	
	 
	  
	}
})

noa.inputs.up.on('drop', function () {
	
	drop(noa,itemStack[selected])
})
	
	noa.inputs.up.on('menu', function () {
	
	

	
})

noa.inputs.down.on('menu', function () {
		 if(currentUI==uis.hotbar){
              currentUI=uis.menu
		 
		   }
})

	noa.inputs.up.on('screenshot', function () {
		if(chatOn){
			return;
		}
		//if (document.pointerLockElement == noa.container.canvas) {
			screenshot(noa.container.canvas, {filename: 'Squid' + Date.now() + '.png'})
		//}
	})
	noa.inputs.down.on('crouch', function () {
		playerbody.mass=1
	 	rideName='none'
		addMount(noa,playermesh,'none')
		noa.ents.getState(noa.playerEntity,'mesh').offset[1]=0
		cameraShake=false
//noa.ents.getState(noa.playerEntity, 'position').width=3
})
noa.inputs.down.on('hover', function () {
	 	isFlying=!isFlying
//noa.ents.getState(noa.playerEntity, 'position').width=3
})

noa.inputs.down.on('floor', function () {
	 	
		if(noa.targetedBlock){
			//wall(4,true)
			
			box(noa.targetedBlock.position[0],noa.targetedBlock.position[1],noa.targetedBlock.position[2],noa)
		
		}

})

noa.inputs.down.on('wall', function () {
	 	
		if(noa.targetedBlock){
			wall(4,false)
		
		}

})

// add a key binding for "E" to do the same as alt-fire

noa.inputs.bind('drop', 'Q')
noa.inputs.bind('hover', 'V')
noa.inputs.bind('inventory', 'E')
noa.inputs.bind('social', 'L')
noa.inputs.bind('zoom', 'Z')
noa.inputs.bind('chat', 'C')
noa.inputs.bind('crouch', '"<shift>"')
noa.inputs.bind('screenshot', 'P')
noa.inputs.bind('floor', '3')
noa.inputs.bind('wall', '4')
//setupFlying(noa)
mouseFire(noa)
}




	
	
	
	

	
	
	
	
	
	function checkaudio(playPromise){
	
	if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
}
	


export function drop(noa,item,spin){
	
	var radius = 3;
	
	var rndAngle = 2 * Math.random() * Math.PI;
        var randX = pos[0]+radius * Math.sin(rndAngle);
        var randY = pos[1];
        var randZ = pos[2]+radius * Math.cos(rndAngle);
        
      //  BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(randX, randY, randZ, worldMatrix, positionToUpdate);*/
	var strength=10
	if(item==null){
		return;
	}
	if(!onRail){
	countStack[selected]--
	
	if(countStack[selected]<=0){
		itemStack[selected]=null
		getHand(noa,null)
		if(playermesh._children[1].getChildren()>0){
		playermesh._children[1]._children[0].dispose()
		}
	}
	}
		var matrixangle=noa.camera.getDirection()


if(spin){
	strength=6
	matrixangle[0]+=Math.PI/(Math.random()*20-10)
}
	var coon=null
	if(propMeshes[item.name]!==undefined){
		coon=propMeshes[item.name].clone(item.name)
	}else{
	coon=itemList[item.name].clone(item.name)
	}
	coon.scaling=new BABYLON.Vector3(0.5,0.5,0.5)
	
	//coon.scaling=new BABYLON.Vector3(jsonItems[item.name].held.hand.scale[0], jsonItems[item.name].held.hand.scale[1], jsonItems[item.name].held.hand.scale[2]);
	var id=uuid()
	 listofmobs[id] = noa.entities.add([randX, randY, randZ], 0.5, 0.5, coon, [0,0.1,0], true, false,true,null )
	
	 //	var body=noa.ents.getPhysicsBody(cid)
		
		 var vec = matrixangle

			 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec, strength)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(listofmobs[id])//
			  body.applyImpulse(vec);
			   var poso = noa.ents.getState(noa.playerEntity, 'position').position
			  
			   datablock.content4=[poso,vec,strength,item.name,id]
			   
			   
			   
			  body.onCollide=function bodyOnCollide(impulse){
	

	 
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
						getHand(itemStack[selected],null)
					}
						
						
                     }

	
	
	
}