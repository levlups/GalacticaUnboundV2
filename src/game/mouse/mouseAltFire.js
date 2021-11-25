import {checkWater,checkFlower,setUpWactions} from './waterAction.js'
import {doorAction} from './doorAction.js'
import {trapAction} from './trapAction.js'
import {chestAction} from './chestAction.js'
import {bellAction} from './bellAction.js'
import {ebuttonAction} from './ebuttonAction.js'
import {blocklook} from '../blocklook.js'
import {playsound} from '../sound.js'
import {stairsup,wall} from '../shapes.js'
import { makePlayer,getHand,getThirPHand,addEquip } from '../player'
import { addMount } from '../armor'

global.cameraShake=false
global.meshname=null
global.meshhit=null
export function mouseAltFire(noa){
	
	

	//wall(5)
	
	const entClick = castRay();
	
	if (!!entClick && (entClick[4]-noa.camera.zoomDistance) <3){
		
		
		
		if(entClick[1]=='door'){
				playsound('doorOpen',0.1)
			doorAction(meshname,false)
		
			
			return 'door'
			
		}
		if(entClick[1]=='trap'){
				playsound('doorOpen',0.1)
			trapAction(meshhit)
			console.log(meshhit.name.split(':')[3])
			datablock.blockaction=[meshhit.name.split(':')[3],entClick[1]]
			return 'trap'
			
		}
		if(entClick[1]=='fence'){
			doorAction(meshname)
			return 'fence'
			
		}
		if(entClick[1]=='stairs'){
			doorAction(meshname)
			return 'stairs'
			
		}
		if(entClick[1]=='lid'){
		
			chestAction(meshhit)
			return 'lid'
			
		}
		if(entClick[1]=='chest'){
		playsound('chestOpen',0.1)
			chestAction(meshhit)
				datablock.blockaction=[meshhit.name.split(':')[3],entClick[1]]
				currentUI=uis.chest
			return 'chest'
			
		}if(entClick[1]=='pc'){
		
			currentUI=uis.screen
			return 'pc'
			
		}
		if(entClick[1]=='ebutton'){
		
			playsound('click',0.1)
			ebuttonAction(meshhit)
			return 'ebuttontop'
			
		}
		if(entClick[1]=='bell'){
		
			playsound('bell',0.1)
			bellAction(meshhit)
			return 'bell'
			
		}if(entClick[1]=='push'){
		
			playsound('bell',0.1)
			ebuttonAction(meshhit)
			return 'push'
			
		}
		if(entClick[1]=='horse'){
		
			playsound('bell',0.1)
			var l=meshhit.name.split(':')
			console.log(l[2])
			
			noa.ents.getState(noa.playerEntity,'mesh').offset[1]=0.5
			rideName=entClick[1]
			noa.ents.deleteEntity(listofmobs[entClick[2]])
			
			addMount(noa,playermesh,entClick[1])
			datablock.strike=[mainplayerid,entClick[1]]
			//datablock.entcontent=[entClick[2],entClick[1]]
			
			return 'horse'
			
		} 
		
		if(entClick[1]=='deckchair'){
		
			playsound('bell',0.1)
			var l=meshhit.name.split(':')
			console.log(l[3])
			var k=JSON.parse(l[3])
			noa.entities.setPosition(noa.playerEntity,k[0]+0.5,k[1],k[2]+0.5);
			playerbody.mass=0
			playermesh.rotation.y=meshhit.rotation.y
			rideName='minecart'
			cameraShake=true
			//bellAction(meshhit)
			return 'deckchair'
			
		}
		
			 
	   if(entClick[1]=='boat'){
		noa.ents.getState(listofmobs[entClick[2]], 'position').position
		var entpos=noa.ents.getState(listofmobs[entClick[2]], 'position').position
		
			noa.ents.setPosition(noa.playerEntity,[entpos[0],entpos[1]+1,entpos[2]])
			
			noa.ents.deleteEntity(listofmobs[entClick[2]])
			 spawnedEnt={name:'none',po:[0,0,0],id:entClick[2]}
			addEquip(entClick[1],playermesh)
			rideName=entClick[1]
			rideNameRtc=rideName
			
	   }
	   if(entClick[1]=='minecart'){
		noa.ents.getState(listofmobs[entClick[2]], 'position').position
		var entpos=noa.ents.getState(listofmobs[entClick[2]], 'position').position
		
			noa.ents.setPosition(noa.playerEntity,[entpos[0],entpos[1]+1,entpos[2]])
			
			noa.ents.deleteEntity(listofmobs[entClick[2]])
			 spawnedEnt={name:'none',po:[0,0,0],id:entClick[2]}
			addEquip(entClick[1],playermesh)
			rideName=entClick[1]
			rideNameRtc=rideName
			
	   }
			
		if(entClick[2]!==mainplayerid && (entClick[3]-noa.camera.zoomDistance) <3){
			hitting=true
			target=entClick[2]
			
		}
		
		fired=true;
		    return true;
	}
	

}



export function castRay() {
	
		let ray = scene.createPickingRay(
			window.innerWidth / 2,
			window.innerHeight / 2,
			BABYLON.Matrix.Identity(),
			noa.rendering.getScene().activeCameras[0]
		);

		const hit = scene.pickWithRay(
			ray,
			(mesh) => {
				
				if(mesh.name=='boyo'){
					return false;
				}else{
				return mesh.name.startsWith('hitbox:');
				}
			},
			true
		);

		if (hit.pickedMesh) {
			meshhit=hit.pickedMesh
			var str=hit.pickedMesh.name.split(':');
			
			meshname=hit.pickedMesh.name
			
			//console.log(hit.pickedMesh.name.substring(7))
			//return [hit.pickedMesh.name.substring(7), hit.distance];
			//console.log('lol')
			//console.log('yo   '+str[2])
		return [str[0], str[1],str[2],str[3],hit.distance];
		} else return null;
	}



