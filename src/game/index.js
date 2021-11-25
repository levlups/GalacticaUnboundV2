
global.worldtype='noise'
import { blocklook } from './blocklook' 
global.language="en_us"
//var lz=require("lz-string");
///rtc/////////////////////////////////////////
global.datablock = {};
global.channel=null
global.entdatablock=null
global.dominator=false
global.entMeshes={}
global.playerMeshes={}
global.rtcblocklist={}
global.storage={}
global.rideName='none'
global.rideNameRtc='none'
global.spawnedEnt=null
global.rtcHand=null
global.rtcPart=null
global.rtcName=null
global.entToRemove=null
global.isMoving=false
//rtc ////////////////////////
global.blocks={}
global.propMeshes={}
global.clerk={}
global.socketo=null
global.gameStarted=null 

	if(JSON.parse(localStorage.getItem('worldData'))==null){
		rtcblocklist={}
	}else{
	rtcblocklist=JSON.parse(localStorage.getItem('worldData'))
	}
rtcblocklist['armor']=['bearhat','','','']
rtcblocklist['seed']='00000000000'
gameStarted=localStorage.getItem('gamestarted')
gameStarted=true
//player info////////////////////
global.playermesh=null
global.playerbody=null
global.fired=false
global.blockPick=0
global.facingF=false
global.kneeling=false
global.pos=null
global.inWater=false
//player info///////////////
global.scene=null
global.listofplayers={}
global.listofmobs={}
global.dataMoblock = {};
global.hitting=false
global.itemList={}
global.health=12
global.air=12
global.target=null
global.noa2=null
///servers socket io response//
global.serverResponse=null
global.entityList ={}
var entityIgnore=0
//modding
global.funpack="mod1"

if(window.location.href.indexOf("start") > -1){
	dominator=true
}
global.uuid = require('uuid').v4;
global.mainplayerid=uuid()
/*setTimeout(function() {
		fetch('http://localhost:9559').then ( response => response.json())
			.then(function(data) {
				console.log('sweet')
				serverResponse=data
				resultChatMessage=serverResponse.welcome
				console.log(data)
				})
				})*/

import * as BABYLON from '@babylonjs/core/Legacy/legacy'
// Engine options object, and engine instantiation:
import { Engine } from 'noa-engine'
import { makePlayer,getHand,getThirPHand,addEquip } from './player'
import { getItemList } from './itemList'
import { getLangList } from './langList'
import { makeWorld} from './worldgen'
import { initBlocks } from './registry'
import { initKeys,drop } from './keyFunc'
import { playerAnim,playerKneel,mobAnim} from './animation'
import {makeEnt,makeStaticEnt, makeEntMesh,makeStaticMesh,makeProp,makeSuperEnt} from './ent'
import { makeCube } from './cuber'
import { sendChat } from './gui/chat'
import { makeparticle } from './particle'
import { makeFog } from './fog'
import { getUuid } from './xhr'
import {hurt} from './hurt'
import { initBoard} from './letterBoards'
import { rtc} from './rtc'
import {makeCanvas} from './canvas'
import {playsound,initSound} from './sound'
import {castRay} from './mouse/mouseAltFire'
import {sign} from './sign'
import {initState} from './gameState'
import {light} from './light'
import {blockActions} from './blockActions'
import {map} from './map'
import {coolcam} from './coolcam'

// or import from local filesystem when hacking locally:
// import { Engine } from '../../../noa'
var opts = {
    debug: true,
    showFPS: true,
    chunkSize: 24,
    chunkAddDistance: 4,
    chunkRemoveDistance: 5,
	playerStart: [0, 100, 0],
	clearColor: [0, 0, 0]
    // See `test` example, or noa docs/source, for more options
}
///////////////////noa engine/////////////////
var noa = new Engine(opts)
/////////////////////noa engine/////////////////
noa2=noa
initSound(noa)
initState()
light()
hurt(Engine)
scene=noa.rendering.getScene()
getItemList(scene)
getLangList()
global.k=noa
makeFog(scene,noa)
initBlocks(noa)
makeStaticMesh(noa,'boat')
makeEntMesh(noa,'evilbot')
makeEntMesh(noa,'robot')
makeEntMesh(noa,'horse')
makeEntMesh(noa,'squid')
makeEntMesh(noa,'boy')
makeEntMesh(noa,'cow')
makeStaticMesh(noa,'minecart')
sign(noa)
// global position///////////// 
pos = noa.ents.getState(noa.playerEntity, 'position').position
// each tick, consume any scroll events and use them to zoom camera

/*var optio={
				height:5,
				width:10,
				depth: 1
			}
			
			var scene=noa.rendering.getScene()
			var mat = noa.rendering.makeStandardMaterial('box')
			const box = new BABYLON.MeshBuilder.CreateBox("box", optio, scene);
			box.material=mat
			mat.hasAlpha=true
			mat.alpha=0.5
		 noa.rendering.addMeshToScene(box, false,[0,0,0])*/
var titlemenu=true	 
noa.on('tick', function (dt) {
    
	
	if(playermesh==null){
		
		return;
	}
	
	
	if(playerbody!==null && titlemenu){
		//currentUI=uis.kiosk
// playerbody.mass=0
	}
	
	if(isFlying){
			playerbody.velocity=[0,0.65,0]
			
			//var matrixangle=noa.camera.getDirection()
			if(noa.inputs.state.forward){
							//playerbody.velocity[2]=7
							
								 	 var a = -7 * Math.sin(playermesh.rotation.y+Math.PI),
						     c = -7 * Math.cos(playermesh.rotation.y+Math.PI);
								 playerbody.velocity[2]=c
								  playerbody.velocity[0]=a
								 //state.body.applyImpulse([a,0.1,c])
						}
						if(noa.inputs.state.backward){
							//playerbody.velocity[2]=7
							
								 	 var a = -7 * Math.sin(playermesh.rotation.y+Math.PI),
						     c = -7 * Math.cos(playermesh.rotation.y+Math.PI);
								 playerbody.velocity[2]=-c
								  playerbody.velocity[0]=-a
								 //state.body.applyImpulse([a,0.1,c])
						}
					
						
			if(blocklook(noa)=='north'){
					/*	if(noa.inputs.state.forward){
							playerbody.velocity[2]=7
						}
						if(noa.inputs.state.backward){
							playerbody.velocity[2]=-7
						}*/
						if(noa.inputs.state.left){
							playerbody.velocity[0]=-7
						}
						if(noa.inputs.state.right){
							playerbody.velocity[0]=7
						}	
			}
			if(blocklook(noa)=='south'){
						/*if(noa.inputs.state.forward){
							playerbody.velocity[2]=-7
						}
						if(noa.inputs.state.backward){
							playerbody.velocity[2]=7
						}*/
						if(noa.inputs.state.left){
							playerbody.velocity[0]=7
						}
						if(noa.inputs.state.right){
							playerbody.velocity[0]=-7
						}	
			}
			if(blocklook(noa)=='west'){
						/*if(noa.inputs.state.forward){
							playerbody.velocity[0]=-7
						}
						if(noa.inputs.state.backward){
							playerbody.velocity[0]=7
						}*/
						if(noa.inputs.state.left){
							playerbody.velocity[2]=-7
						}
						if(noa.inputs.state.right){
							playerbody.velocity[2]=7
						}	
			}
			if(blocklook(noa)=='east'){
						/*if(noa.inputs.state.forward){
							playerbody.velocity[0]=7
						}
						if(noa.inputs.state.backward){
							playerbody.velocity[0]=-7
						}*/
						if(noa.inputs.state.left){
							playerbody.velocity[2]=7
						}
						if(noa.inputs.state.right){
							playerbody.velocity[2]=-7
						}	
			}
	}
	
	if(mount!==null){
		mobAnim(mount,noa)
	}
	
	if(cameraShake){
		
		//noa.camera.heading= 1.0* Math.cos((0.32 *dt) + (0.5 * Math.PI))-Math.PI/2;
	}

	if(playerbody.velocity[0]!==0 || playerbody.velocity[1]!==0 || playerbody.velocity[2]!==0 || noa.inputs.state.fire==true ){
		isMoving=true
		playermesh._children[5].metadata='moving'
	}else{
		isMoving=false
		playermesh._children[5].metadata='notmoving'
	}
    var scroll = noa.inputs.state.scrolly
    if (scroll !== 0) {
		
	    selected+= (scroll > 0) ? 1 : -1
		blockPick+= (scroll > 0) ? 1 : -1
		
		if(selected<0 || selected>8){
			selected=0
		}
			getHand(noa,itemStack[selected])
			
	    if(blockPick<0 || blockPick>10){
			blockPick=0
		}
		
		
		
       
    }
	
	
		/*	 if(noa.targetedBlock){
					 
					 if(blocklook(noa)=='north'){
						 
						 box.rotation.y=Math.PI
					 }
					 
					  if(blocklook(noa)=='south'){
						 
						 box.rotation.y=0
					 }
					  if(blocklook(noa)=='east'){
						 
						 box.rotation.y=Math.PI/2
					 }
					 
					  if(blocklook(noa)=='west'){
						 
						 box.rotation.y=-Math.PI/2
					 }
					 
					 pos = noa.ents.getState(noa.playerEntity, 'position').position

					  
					 
					 box.position.copyFromFloats(m.position.x+0.5, m.position.y+2.5, m.position.z)
				
				 
				 }else{
					 	 box.position.y=1000
				 box.position.x=0
				 box.position.z=0
				 }*/
})





global.onRail=false
global.riding=false
global.swimming=false


noa.on('beforeRender', function(dt) {
	
	if(playerbody==null){
		return;
	}
		if(playermesh!==null){
		playerAnim(playermesh,noa)
		
		if(mount!==null){
			//var mesh=noa.ents.getState(letgo,'mesh').mesh
			//mobAnim(mount,noa)
		}
	}
	blockActions(noa)
	

	})


////   launching game ////////////////////////////////////////////////
rtc()
					
			if(gameStarted){
			 makeWorld(noa)	
			 makePlayer(noa,1 )		
	
			}			
            makeCanvas(noa)
	       
		   
			
					
					var timeout=setTimeout(function(){
					 //   makeSuperEnt(noa,'warden',2,[10,100,10])	
					initKeys(noa)
   //map(noa,playermesh)
  coolcam(noa)
		clearTimeout(timeout);
			}, 3000);
			
			
			var timeout1=setTimeout(function(){  
			initBoard(noa)
			clearTimeout(timeout1);
			}, 10000);
			
			if(socketo==null){
				if(localStorage.getItem(rtcblocklist.worldname)!==null){
					
				storage=JSON.parse(localStorage.getItem(rtcblocklist.worldname))
			
				}
			}
			
				
			 getUuid('sing')
			 
			 debug=true
			 bigSignTime=3000
			 
			 
			 
			 
			 setTimeout(function(){  
			 
			 currentUI=uis.hotbar
 playerbody.mass=1
			titlemenu=false
			 
			 	}, 20000);
				
				
				setTimeout(function(){  
			// dominator=true
			 playsound('oui',0.1)
			 if(dominator){
			 makeEnt(noa,'horse',2,[0,2,0])
			 }
			 
			 	}, 10000);
			 
			 
			
			 
			 
