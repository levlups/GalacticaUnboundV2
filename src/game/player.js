global.hand=null
import { playsound } from './sound.js'
import {addHat,addCape ,addTransport} from './armor'
import { makeparticle} from './particle'
import { nametag} from './nametag'
import { blocklook} from './blocklook'
import { onFire} from './onFire'
import { makeSnow} from './particle'
var vec3 = require('gl-vec3')
var hitboxMesh=null
global.isDead=false
global.onStairs=false


export function makeOtherPlayer(noa) {
	
		var name='player'
		var scene = noa.rendering.getScene()
		
		var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.diffuseTexture.hasAlpha=true
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
var mainplayer=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            mainplayer = new BABYLON.Mesh("player", scene);
		
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent=mainplayer;
			   meshes[i].isPickable=false
			   if(i==1){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			    if(i==2){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
	 
 }
 
 

	});
	 return mainplayer;
}
export function makePlayer(noa) {
	
	var name='player'/////////////////
	// get the player entity's ID and other info (position, size, ..)
var player = noa.playerEntity
var dat = noa.entities.getPositionData(player)
var w = dat.width
var h = dat.height
	
	
	
	
var scene = noa.rendering.getScene()
var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.diffuseTexture.hasAlpha=true
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
var mainplayer=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            mainplayer = new BABYLON.Mesh("player", scene);
		
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent=mainplayer;
			   meshes[i].isPickable=false
			   if(i==1){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			    if(i==2){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			 
	 
 }
 entMeshes['player']=mainplayer
 nametag(mainplayer, 'nabilefefeef',1)
 //entityList[id]=noa.playerEntity
 
 hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:human:'+'boy', {
				height:2,
				width: 0.6,
				depth: 1,
			}, scene)
			
			


			hitboxMesh.setParent(mainplayer)
		     hitboxMesh.name='boyo'
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 1, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=false;
            hitboxMesh.isPickable=false
			noa.rendering.addMeshToScene(hitboxMesh, false)
			//onFire(mainplayer)
 makeSnow('name',mainplayer,scene,100)
 
 //mainplayer=createTemplateModel('john',config)
  //mainplayer.material=busmat;
 // noa.entities.removeComponent(player, noa.entities.names.mesh)

						noa.entities.addComponent(player, noa.entities.names.mesh, {
							mesh: mainplayer,
							offset: [0, 0, 0],
						})
					var scene=noa.rendering.getScene()
						
 playermesh = noa.ents.getState(noa.playerEntity,'mesh').mesh
 
 //hitboxMesh.checkCollisions=true
   //hitboxMesh.isPickable=false
 playermesh.showBoundingBox=true
 hitboxMesh.checkCollisions=true
 
 
 scene.collisionsEnabled = true;

	var alpha=0
	var observer = scene.onBeforeRenderObservable.add(function () {
		//console.log(collidedMesh)
		
		
		
        hitboxMesh.moveWithCollisions(new BABYLON.Vector3(0,alpha, 0));
		
		alpha += 0.001;
		
	});
 // hitboxMesh.onCollideObservable.add(function () {
	//playerbody.mass=0
		//console.log("cube collideObservable work!");
	//});
	

	  hitboxMesh._onCollisionPositionChange = function (collisionId, newPosition, collidedMesh) {
		  
		 	
		if(collidedMesh!==null){
			//console.log(collidedMesh)
			alpha=collidedMesh.ellipsoid._y
			if(playerbody.resting[1]==0){
				//playermesh.position.y=alpha
				playerbody.gravityMultiplier=0
				
				if(!noa.inputs.state.forward && !noa.inputs.state.backward && !noa.inputs.state.right && !noa.inputs.state.left){
					
				  // playerbody._forces=[0,0,0]
					//	playerbody.velocity=[0,0,0]	
					  //  playerbody._impulses=[0,0,0]
							//alpha=1.5
				}
				
				if(noa.inputs.state.jump){
			        // alpha=1.5
				//playerbody.mass=1
				
				         playerbody._forces=[0,7,0]
						playerbody.velocity=[0,7,0]	
					    playerbody._impulses=[0,7,0]
				
			
				
			}
		
				return;
			}
			
			if(collidedMesh.name.includes(':Open')){
				
				
				return;
				}
			
			else if(collidedMesh.name.includes(':stairs')){
				
			
				
				if(!onStairs && noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['stairs']){
			    noa.ents.getState(noa.playerEntity,'mesh').offset=[0,-0.5,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,-0.5,0]	
				onStairs=true
				
			}
				//didit=true
			//}
			return;
		}/*else if(collidedMesh.name.includes(':trap') && collidedMesh.rotation.x==Math.PI/2){
				
			
				playerbody.mass=0
			//playerbody.gravityMultiplier=0
				
			return;
		}*/
			
			if(collidedMesh.name.includes('top')){
				
				
				if(onStairs && noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['stairs']){
				noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,0,0]	
				onStairs=false
				}
				return;
			}
	

		else if(collidedMesh.name.includes(':north') || collidedMesh.name.includes(':south') ){
		
			//noa.inputs.state.forward=false
		
			var dif=playermesh.position.z-collidedMesh.position.z
	
		var vif=playermesh.position.y-collidedMesh.position.y
			
		
			if(noa.inputs.state.backward && dif<0 && blocklook(noa)=='north'){
			
				playerbody.mass=1
			}
			
			else if(noa.inputs.state.backward && dif>0 && blocklook(noa)=='south'){
		
				//console.log('cool')
				playerbody.mass=1
			}else{
				
				//playerbody.mass=0
				     if(playerbody.resting[1]==-1){
			    // playerbody.mass=1
			      playerbody._forces=[Math.sin(playermesh.rotation.y),0,0]
						playerbody.velocity=[Math.sin(playermesh.rotation.y),0,0]	
					    playerbody._impulses=[Math.sin(playermesh.rotation.y),0,0]
				 }
				
			}
		
			
		}
		
		else if(collidedMesh.name.includes(':east') || collidedMesh.name.includes(':west') ){
			
			var dif=playermesh.position.x-collidedMesh.position.x
			//var yif=playermesh.position.y-collidedMesh.position.y
			
			/*if(yif>0 ){
				console.log(yif)
				playerbody.mass=0
				return;
			}
			else*/ if(noa.inputs.state.backward && dif<0 && blocklook(noa)=='east'){
				
				playerbody.mass=1
			}
			
			else if(noa.inputs.state.backward && dif>0 && blocklook(noa)=='west'){
				
				//console.log('cool')
				playerbody.mass=1
			}else{
			
			if(playerbody.resting[1]==-1){
			
		          playerbody._forces=[0,0,Math.cos(playermesh.rotation.y)]
						playerbody.velocity=[0,0,Math.cos(playermesh.rotation.y)]
					    playerbody._impulses=[0,0,Math.cos(playermesh.rotation.y)]
						
						
						
				   }
				   
			}
		
		
			
		
			
		}      
		
		
	
		

		 
		
		}
		
		playerbody.gravityMultiplier=2

		
	};
	
	

 playerbody=noa.ents.getPhysicsBody(noa.playerEntity)
playerbody.autoStep=true
//body.gravityMultiplier=2
 /*playerbody.gravityMultiplier=0
 noa.camera.zoomDistance = 0
 noa.camera.pitch=Math.PI/3
 setInterval(function(){ noa.camera.heading+=0.001 }, 30);*/
  noa.camera.pitch=Math.PI/3
 for (var i=0;i<playermesh.getChildren().length;i++){
					//playermesh._children[i].visibility=false
				}
		
		playerbody.onStep=function bodyOnStep(impulse){
			
			//noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]//playerbody.applyImpulse([0,3,0])
		}
playerbody.onCollide=function bodyOnCollide(impulse){
	playsound('pick',0.1)
	//console.log(playerbody.ratioInFluid)
	 if(playerbody.ratioInFluid==0){
		
		 if((impulse[1])/20 >0.99){
			  playsound('hurt',0.1)
	//health-=(impulse[1])/20 *5
	 noa.gotHurt(playermesh)
	
		 }
	 }else{
		 //sounds['splash'].volume=0.5
		 makeparticle('lol',playermesh._children[5],scene,11,0.3)
		//  rtcPart=pos
	//var playPromise =sounds['splash'].play();
	 }
	 
 }
 
 
	 
	 noa.entities.setPosition(noa.playerEntity,0,50,0);
	// playebody.mass=0
	// scene.gravity=0
 //playerbody.gravityMultiplier=0
 //playerbody.airDrag=-3
 noa.camera.zoomDistance = -1
 // setInterval(function(){ noa.camera.heading+=0.001 }, 30);
// playerbody.airDrag=-3
 //addHat(noa,playermesh,/*rtcblocklist['armor'][0]*/'santa_hat')

  //addCape(noa,playermesh,rtcblocklist['armor'][0])
 //setTimeout(function(){ getHand(noa,itemStack[Selected])

//getThirPHand(noa,itemStack[Selected])
 //}, 3000);
		
	})
	
	
	
}


export function addEquip(name,mp){
	
	 addTransport(noa,mp,name)
}

export function getHand(noa,item){

	
	if(playermesh==null){
		
		return;
	}
	
	if(playermesh._children[1].getChildren().length>0){
		playermesh._children[1]._children[0].dispose()
		
	}
	
	if(item==null){
		rtcHand='none'
		return;
	}

	//var name=item.name
	var c=null
	if(propMeshes[item.name]!==undefined){
		c=propMeshes[item.name].clone(item.name)
	}else{
c=itemList[item.name].clone(item.name)
	}
	c.parent=playermesh._children[1]
	c.position.x=playermesh._children[1].position._x-0.25
	c.position.y=playermesh._children[1].position._y-2
	c.position.z=playermesh._children[1].position._z+0.2
	
	c.rotation.x=item.held.hand.rotation[0]
	c.rotation.y=item.held.hand.rotation[1]
	c.rotation.z=item.held.hand.rotation[2]
	
	noa.rendering.addMeshToScene(c, false)
	
	for (var i=0;i<c.getChildren().length;i++){
					 noa.rendering.addMeshToScene(c._children[i], false)
				}
	//noa.rendering.addMeshToScene(c._children[0], false)
	//noa.rendering.addMeshToScene(c._children[1], false)
	c.scaling=new BABYLON.Vector3(0.5,0.5,0.5)
	
	rtcHand=item.name
	
}

export function getThirPHand(noa,item){
var scene=noa.rendering.getScene()

    if( hand!==null){
		 hand.dispose()
	}


if(noa.camera.zoomDistance==0){
		
		if(playermesh._children[1].getChildren().length>0){
		playermesh._children[1]._children[0].dispose()
	}
	
}
	
	if(item==null){
		return;
	}

	var name=item.name
hand=itemList[name].clone(name)

	console.log(hand)
var bob= new BABYLON.Mesh("dummy", scene);
				bob.parent=scene.activeCameras[0]
			
				hand.parent = bob
				bob.position.x=playermesh._children[1].position._x-0.25
	bob.position.y=playermesh._children[1].position._y-2
	bob.position.z=playermesh._children[1].position._z+0.2
//lhand.parent=scene.activeCameras[0]
//hand.position = new BABYLON.Vector3(0.4, -0.6, 1)
//hand.rotation.y=Math.PI/2
	noa.rendering.addMeshToScene(hand, false)
	noa.rendering.addMeshToScene(hand._children[0], false)
	noa.rendering.addMeshToScene(hand._children[1], false)
	hand.renderingGroupId = 1;

}