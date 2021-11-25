import { makeparticle} from './particle'
import { nametag} from './nametag'
import {chestWars} from './chestWars'
import {punchBreak} from './punchBreak'
import {addHat,addMount} from './armor'
import {cubecrater,ringcrater,crater} from './shapes'
import {mobAnim} from './animation'
import {trapAction} from './mouse/trapAction'
import {doorAction} from './mouse/doorAction'
import {chestAction} from './mouse/chestAction'
global.localStream=null
global.remoteVideo=null
global.remoteStream=null

global.streamers={}
export function rtc(){
	
	navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
		
		 localStream=stream
		 
		
		 remoteVideo = document.createElement('video')
		 
		 document.body.appendChild( remoteVideo)
		  remoteVideo.volume=0.3
		//  remoteVideo.srcObject =localStream
		
  //remoteVideo.play()//
})
	
	
	
	
	
	setTimeout(function(){  

	chestWars()

	 }, 10000);
	var scene=noa.rendering.getScene()
	noa.inputs.down.on('menu', function () {
		
		rtcblocklist['pos']=pos
	
		if(socketo!==null){
socketo.emit('save',JSON.stringify(rtcblocklist)) 
		}
})
var user=null;
let str = document.location.toString();

function makevig(id,name){
var entmesh=entMeshes[name].clone(name)
var heightvar=2
	 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:heightvar,
				width: 1,
				depth: 1,
			}, scene)
			
			


			hitboxMesh.setParent(entmesh)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, heightvar/2, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			noa.rendering.addMeshToScene(hitboxMesh, false)
listofmobs[id]= noa.entities.add( [0,50,0], 0.5, 1,entmesh, [0.2,0,0.2], false, false,true,null )//
noa.entities.addComponent(listofmobs[id], noa.entities.names.rtcMove, {
					   mesh: entmesh
})
}

function makestatic(name,po,id){
	
	if(name=='none'){
		noa.ents.deleteEntity(listofmobs[id])
		
		return true;
	}
	var entmesh=entMeshes[name].clone(name)

listofmobs[id]= noa.entities.add(po,0.5,1,entmesh,[0.2,0,0.2],false,false,false,null)

			var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:0.6,
				width: 1.2,
				depth: 1.7,
			}, scene)

			hitboxMesh.setParent(entmesh)
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5/2, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			noa.rendering.addMeshToScene(hitboxMesh, false)

}
var playerNames={}
function makeent(id){
	
	playerMeshes[id]=playermesh.clone('player')
	var busmaty = new BABYLON.StandardMaterial("busmaty", scene);
	busmaty.diffuseTexture=playermesh._children[0].material.diffuseTexture
	busmaty.specularColor = BABYLON.Color3.Black()
 for (var i=0;i<playerMeshes[id].getChildren().length;i++){
	playerMeshes[id]._children[i].material=busmaty
	
 }
	nametag(playerMeshes[id], 'narrr', 1)
	
	
	playerMeshes[id]._children[5].name='hitbox:evil:'+id
	
listofplayers[id]= noa.entities.add( [0,120,0], 0.6, 1.8,playerMeshes[id], [0,0,0], false, false,true,null )
console.log(Object.keys(playerNames).length+"wooooooooooooooooooo")
var num=Object.keys(playerNames).length////
playerNames[id]="player"+(num+1)//////////////

console.log(playerNames)
bigSign="player"+(num+1)+"joined"
	bigSignTime=300
	addHat(noa,playerMeshes[id],'santa_hat'/*rtcblocklist.armor[0]*/)
	console.log(Object.keys(listofplayers).length)
	
	bigSign=''// Object.keys(listofplayers).length+1+':players'
	
	
	if(Object.keys(listofplayers).length+1>2){
		bigSign=gameState[2]
	bigSignTime=300
    datablock.message=gameState[2]


					/*for (var i=-10; i<10; i++){
						
						for (var j=-10;j<10; j++){
						//noa.setBlock(0, i,42, j)
						noa.setBlock(0, i,41, j)
					}
					}*/

}

}

var timer=Math.round(160);

var channelisopen=false;
var cleanplayers=false;
var named=false;
var adminplayer=false;
var multiready=false;
// prompt("Please enter your name", "");
//var mystorage=window.localStorage;
    // var localstorageName=mystorage.getItem('name');
	
	
var ischanneloff=true;
var conplayers = {}



var litofp={}
function startchannel(action){
channel = new DataChannel();
channel.direction = 'many-to-many';

                // https://github.com/muaz-khan/WebRTC-Experiment/tree/master/socketio-over-nodejs
            // var SIGNALING_SERVER = 'https://socketio-over-nodejs2.herokuapp.com:443/';
			 var SIGNALING_SERVER ='http://localhost:9559/';
			  //var SIGNALING_SERVER ='ws://' + 'localhost:3000';
			//var SIGNALING_SERVER ='http://18.118.171.121:9559/';
                channel.openSignalingChannel = function(config) {
                   var channel = config.channel || this.channel || 'default-namespace';
                   var sender = Math.round(Math.random() * 9999999999) + 9999999999;
                   
                   
                    
                   io.connect(SIGNALING_SERVER).emit('new-channel', {
                      channel: channel,
                      sender : sender,
					  reconnection: false
                   });
                   
                 var socket = io.connect(SIGNALING_SERVER + channel);
				 
                   socket.channel = channel;
                     // console.log(socket);
                   socket.on('connect', function (userid) {
					   
					
					   socketo=socket
                      if (config.callback) config.callback(socket);
					  
					  console.log('wathhhhh')
					  ischanneloff=false;
					
                   });
				 socket.emit('getworlds','')
				 socket.once('getingworlds',async function(data) {
					 console.log(data)
					for(const key in data){
						
						console.log(key)
					 uis['worldinfo'].push({type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:data[key],action:"naming", x: 0, y:uis['worldinfo'][uis['worldinfo'].length-1].y+30, width: 200, height: 20})
					}
					 ///
					 })
				
						//socket.emit('createworld','dave')
				//uis['worldinfo'].push({type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"dave ",action:"naming", x: 0, y:90, width: 200, height: 20})
						
				
							
				   socket.once('worldinfo', async function(data) {
					   
					   
				console.log('chump')
				
				
					//console.log(JSON.parse(data))
				addHat(noa,playermesh,JSON.parse(data).armor[0])
				rtcblocklist=JSON.parse(data)
				noa.entities.setPosition(noa.playerEntity,rtcblocklist['pos'][0],rtcblocklist['pos'][1],rtcblocklist['pos'][2]);
				//rtcblocklist['worldname']='macaque'
					
					   
			})
			
						
				  // channel.onRemoteStream=function(media) {
					  // console.log(media)
       /* var audio = media.audio;
        audio.setAttribute('controls', true);
        audio.setAttribute('autoplay', true);

        //participants.insertBefore(audio, participants.firstChild);

        audio.play();
        //rotateAudio(audio);*/
  //  }  
				   
						
						

					
					socket.on('macaqueskin', function (data) {
						
                     // if (config.callback) config.callback(socket);
					 console.log(JSON.parse(data));
					 
					 addHat(noa,playermesh,JSON.parse(data).armor[0])
                   });
				   
				     socket.on('sendingchunk',data => {
						storage[data.id]=JSON.parse(data.datas)
					         //clerk[data.id]=JSON.parse(data.datas)
					         // localStorage.setItem(rtcblocklist.worldname,JSON.stringify(clerk))
					          // storage=JSON.parse(localStorage.getItem(rtcblocklist.worldname))

                         });
                      
				   socket.on('close', function () {
                      if (config.callback) config.callback(socket);
					 console.log('wooo');
                   });
                   
                   socket.send = function (message) {
                        socket.emit('message', {
                            sender: sender,
                            data  : message
                        });
                    };
                   
                   socket.on('message', config.onmessage);
                };
		
                channel.onmessage = function(data, userid, latency) {
				//console.log(peer)
				//console.log(channel)
				if(JSON.parse(data).terminate==true){
					
					/*if(dominator){
					console.log('his dead')
					channel.eject(userid)
					return;
					}*/
				}
				if(litofp[channel.userid]==undefined){
					 litofp[channel.userid]='yo'
				}
				   if(litofp[userid]==undefined){
					  	
					   //console.log(channel)
						   litofp[userid]='yo'
						  // console.log(litofp)
						checknumplayers(2)
					   }
				
					actionrtcplayer(JSON.parse(data))
                   
                };
                 /*channel.onRemoteStream=function(stream){
					 console.log(stream)
					 
					  remoteVideo.srcObject = stream
		
  remoteVideo.play()
					   };*/
                channel.onopen = function(userid) {
					//var ko=channel.channels
				//	var lok=JSON.stringify(userid)
					console.log(channel)
					//console.log(channel.channels.keys)
				console.log('channel open yo'+userid)
					channelisopen=true;
					
		
		
               
				if(named==false && adminplayer==false){
					setTimeout(function() {
				 	//user='player'+(Object.keys(conplayers).length+1);	
					user=Object.keys(conplayers).length;	
				
							//debuginfo=teams[user]
					
			
				named=true;
				multiready=true
				console.log(user);
				
				 
				 }, 3000);
			
				}
                  
                };
				
				channel.onjoin = function(userid) {
				console.log(userid+' : testu');
			
                  
                };
				
				
           var str=action.split(' ');
	
	if(str[0]==='server'){
		adminplayer=true
		multiready=true;
		    channel.open(str[1]);
			    //user='player1'
				user=1
				
			
				// debuginfo=teams[user]
	
				
			
					
	}
	
	if(str[0]==='join'){
	
		
			 channel.connect(str[1]);
	
		
		
	}
           
    /* users presence detection */
                channel.onleave = function(userid) {
                    var message = 'A user whose id is ' + userid + ' left you!';
					ischanneloff=true;
					
                     console.log(message);
					 hideplayers();
					 
					 if(adminplayer){
						  var str=action.split(' ');
					channel.open(str[1]);
					 }else{
					 setTimeout(function(){ 
					  var str=action.split(' ');
					channel.connect(str[1]);
					
					 }, 3000);
					 }
                };
				
				
				channel.onRemoteStream = function(stream) {//////////////
                   console.log('lalllllllllllllllllllllaaaaalllllllllllllllaaa')
				  // remoteVideo.play()
                };
				
				
				
				
		
				
				}
				
				
				

function hideplayers(){
	
	for (const key in  listofplayers){
		
		noa.entities.setPosition( listofplayers[key],0,-300,0);
	}
	 
	
}

		
		


noa.on('beforeRender', async function() {

	if(ischanneloff===true){
		return;
	}
	
	
	if(playermesh==null){
		return;
	}
	datablock.content=pos
	datablock.content2=[playermesh.rotation.x,playermesh.rotation.y,playermesh.rotation.z,
	playermesh._children[0].rotation.x,playermesh._children[0].rotation.y,playermesh._children[0].rotation.z,
	playermesh._children[1].rotation.x,playermesh._children[1].rotation.y,playermesh._children[1].rotation.z,
	playermesh._children[2].rotation.x,playermesh._children[2].rotation.y,playermesh._children[2].rotation.z,
	playermesh._children[3].rotation.x,playermesh._children[3].rotation.y,playermesh._children[3].rotation.z,
	playermesh._children[4].rotation.x,playermesh._children[4].rotation.y,playermesh._children[4].rotation.z,
	playermesh._children[5].rotation.x,playermesh._children[5].rotation.y,playermesh._children[5].rotation.z]
    datablock.content5=[hitting,mainplayerid,rideNameRtc,spawnedEnt,rtcHand,rtcPart]
	datablock.clean=entToRemove
	datablock.terminate=isDead
	datablock.shaper=shapers
	datablock.move=isMoving
	//datablock.stream=stre
	//datablock.cool=entdatablock
    const youString = JSON.stringify(datablock)
   //////////////////

   channel.send(youString);

	//////////////////
	datablock.content3=null
	datablock.content4=null
	datablock.message=null
	hitting=false
	rideNameRtc=null
	spawnedEnt=null
	rtcHand=null
    rtcPart=null	
datablock.clean=null	
datablock.terminate=false
datablock.shaper=null
datablock.strike=null
datablock.blockaction=null

datablock.entcontent=null
datablock.morph=null
//datablock.stream=null

	})
                        
                
	 
	 function actionrtcplayer(options){  
	 
	 
	 
	 if(options.morph!==null){
		 noa.ents.removeComponent(listofplayers[options.morph[0]],'mesh')
		 var tmesh=entMeshes[options.morph[1]].clone(options.morph[1])
		 playerMeshes[options.morph[0]]=tmesh
		  noa.ents.addComponent(listofplayers[options.morph[0]],'mesh',{
			  mesh: playerMeshes[options.morph[0]]
		  })
	 }
	 
	 if(options.blockaction!==null){
		 console.log(options.blockaction)
		 for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==options.blockaction[0]){
						console.log('uoooo')
						//var c=offmeshes[i][1]
						if(options.blockaction[1]=='trap'){
						trapAction(offmeshes[i][1])
						}
						if(options.blockaction[1]=='chest'){
						chestAction(offmeshes[i][1]._children[0],true)
						}
						if(options.blockaction[1]=='door'){
							console.log(options.blockaction[2])
							//meshname=options.blockaction[2]
						doorAction(options.blockaction[2],true)
						}
						
						
					}
				}
	 }
	 
	  if(options.shaper!==null){
		
		// crater(options.shaper[0],options.shaper[1],options.shaper[2],noa,options.shaper[3])
		
	 }
	 if(options.strike!==null){
		 
		 var mesh=playerMeshes[options.strike[0]]
		 mesh.metadata=options.strike[0]
		 addMount(noa,mesh,options.strike[1])
		 noa.ents.getState(listofplayers[options.strike[0]],'mesh').offset[1]=0.5
		// noa.ents.deleteEntity(listofmobs[options.clean])//
	 }
	
	 if(options.clean!==null){
		 
		 
		 noa.ents.deleteEntity(listofmobs[options.clean])//
	 }
	 if(options.message!==null){
		return;
		
		if(options.message.startsWith('!^!')){
			console.log('secret message:'+options.message)
			
			bigSign=options.message.substring(3,options.message.length)
			bigSignTime=3
			bigSignColor='red'
			
			 noa.entities.setPosition(noa.playerEntity,rtcblocklist.meeting[0],rtcblocklist.meeting[1]+1,rtcblocklist.meeting[2]);
		}
		if(options.message=="IWON"){
			bigSign=playerNames[options.content5[1]]+" has  Won"
	          bigSignTime=300
		}
		else if(options.message==gameState[2] && !dominator ){
			bigSign=gameState[2]
	          bigSignTime=300
		}
		 
		 chatMessage="player says:"+options.message
	 }
	
	 if(options.entcontent!==null){
		
					if(!dominator  ){
						 
						 if(listofmobs[options.entcontent[0]]==undefined){
							  makevig(options.entcontent[0],options.entcontent[1])
							  noa.entities.setPosition(listofmobs[options.entcontent[0]],options.entcontent[2]);
						 }/*else{
						 
						 
						 /*var pos=noa.ents.getState(listofmobs[options.entcontent[0]],'position').position
				var newPos=[options.entcontent[1][0],options.entcontent[1][1],options.entcontent[1][2]]
					var move = vec3.create()	
										vec3.lerp(move, pos, newPos, 0.1)
					noa.entities.setPosition(listofmobs[options.entcontent[0]],move);
					
					var l=noa.ents.getState(listofmobs[options.entcontent[0]],'mesh').mesh
					l.rotation.y=options.entcontent[2]
				
					noa.ents.getState(listofmobs[options.entcontent[0]],'rtcMove').moving=options.entcontent[3]
					
						 }*/
					 }
					 return;
	 }
	 
	 if(listofplayers[options.content5[1]]==undefined){
		makeent(options.content5[1])
	 }
		
var pos=noa.ents.getState(listofplayers[options.content5[1]],'position').position
 
var newPos=[options.content[0],options.content[1],options.content[2]]
	var move = vec3.create()	
						vec3.lerp(move, pos, newPos, 0.1)
	noa.entities.setPosition(listofplayers[options.content5[1]],move);
	




	
	playerMeshes[options.content5[1]].rotation={x:options.content2[0],y:options.content2[1],z:options.content2[2]}
	playerMeshes[options.content5[1]]._children[0].rotation={x:options.content2[3],y:options.content2[4],z:options.content2[5]}
playerMeshes[options.content5[1]]._children[1].rotation={x:options.content2[6],y:options.content2[7],z:options.content2[8]}
playerMeshes[options.content5[1]]._children[2].rotation={x:options.content2[9],y:options.content2[10],z:options.content2[11]}
playerMeshes[options.content5[1]]._children[3].rotation={x:options.content2[12],y:options.content2[13],z:options.content2[14]}
playerMeshes[options.content5[1]]._children[4].rotation={x:options.content2[15],y:options.content2[16],z:options.content2[17]}
playerMeshes[options.content5[1]]._children[5].rotation={x:options.content2[18],y:options.content2[19],z:options.content2[20]}


if(options.move==true){
	
	playerMeshes[options.content5[1]]._children[5].metadata='moving'
	
}else{
	playerMeshes[options.content5[1]]._children[5].metadata='notmoving'
}



if(playerMeshes[options.content5[1]]._children[5].getChildren().length>0){
	
	mobAnim(playerMeshes[options.content5[1]]._children[5]._children[0],noa)
	//mobAnim(playerMeshes[options.content5[1]]._children[5]._children[0],noa)
}else{
	noa.ents.getState(listofplayers[options.content5[1]],'mesh').offset[1]=0
}
if(options.content5[2]!==null){
	addEquip(noa,playerMeshes[options.content5[1]],options.content5[2])
	
	makeparticle('lol',playermesh._children[5],scene,1.5,0.3)
}

if(options.content5[3]!==null){
	
	makestatic(options.content5[3].name,options.content5[3].po,options.content5[3].id)
	//makevig(options.entcontent[0],options.entcontent[4])
}
if(options.content5[4]!==null){
getHand(noa,options.content5[4],playerMeshes[options.content5[1]])

}
if(options.content5[5]!==null){
console.log(options.content5[5])
makeparticle('lol',options.content5[5],scene,1.5,0.3)

}

	if(options.content3!==undefined){
		
		if(options.content3!==null){
		
		
		var id=noa.world._getChunkByCoords(options.content3[1], options.content3[2], options.content3[3]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]){
		rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]=[options.content3[0],options.content3[1], options.content3[2], options.content3[3],options.content3[4]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]=[options.content3[0],options.content3[1], options.content3[2], options.content3[3],options.content3[4]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]=[options.content3[0],options.content3[1], options.content3[2], options.content3[3],options.content3[4]]
		}
		
		
		
		
		//rtcblocklist.push([options.content3[0], options.content3[1], options.content3[2], options.content3[3]])
		//localStorage.setItem('blockss',JSON.stringify(rtcblocklist))
		
		if(options.content3[4]!==null){
			
			console.log('ridiculous  :'+options.content3[4])
		}
		
		
		noa.setBlock(options.content3[0], options.content3[1], options.content3[2], options.content3[3]) 
		
		}
	}
	
	if(options.content4!==null){
	drop(options)
	
			  
			  
	}
	
	
	if(options.content5[0]==true){
		
		var body=noa.ents.getPhysicsBody(noa.playerEntity)
						body.applyImpulse([0,7,0])
						
					health--
	}
	
			
		}
       
	   
	   
	  function commandator(message){
		  
		
console.log(message);
		   var str=message.split(' ');
		   
			 
	
	if(str[0]==='startserver'){
		dominator=true
		startchannel('server '+str[1]) 
		
	
	
	}
	
	if(str[0]==='joinserver'){
	
		startchannel('join '+str[1]) 
		
	
	
	}
		   
		
	   }


	
function chatmessage(data,channel,name){
  const chatdata = {messenger:name+':'+data};
  var chatblock= JSON.stringify(chatdata);
	  channel.send(chatblock)
}

/*function kickplayer(id){
	console.log(id);
	console.log(num);
	channel.eject(parseInt(id));
	 for (var i=0;i<listofplayers.length;i++){
						listofplayers[i].position.y=-300;
					
				 }

}*/

		function kickeverybody(){
			
			
for (const [key, value] of Object.entries(conplayers)) {
	// console.log(`${key}: ${value}`);
	if(`${value}`!=='player1'){
	
				  console.log(`${key}`);
				   channel.eject(`${key}`);
				   
				   for (var i=0;i<listofplayers.length;i++){
					 
					 listofplayers[i].position.y=-300;
				 }
	}
}
			
		}
	
		
		function nameplayers(data){

//  console.log( Object.keys(conplayers).length+'cool') 
			                  setTimeout(function() {
								 conplayers[data.substring(1)] = 'player'+Object.keys(conplayers).length
								  console.log(conplayers);
									 }, 3000);


		}		
var rtcspawns={1:[-30,2,30],2:[-30,2,-30],3:[30,2,-30]

}	
function checknumplayers(num){
	
	//setTimeout(function() {
		
		 if(Object.keys(litofp).length==num){
			                     
							//	noa.entities.setPosition(noa.playerEntity,10,50,10)
								  
	
							 }
										
				// }, 3000);
	
	
}
	
				 

			 if (location.hash.includes('start')) {
				 var word=location.hash.split('_');
				  commandator('startserver '+word[1]);
				
			 }
			 
			 if (location.hash.includes('join')) {
				 var word=location.hash.split('_');
				  commandator('joinserver '+word[1]);
				
			 }
			 
			
			 


var transport=null
function addEquip(noa,mainp,name){
	
	if(mainp._children[5].getChildren().length>0){
		mainp._children[5]._children[0].dispose()
		
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



function drop(options){//

	
		var tap=null
	if(propMeshes[options.content4[3]]!==undefined){
		tap=propMeshes[options.content4[3]].clone(options.content4[3])
	}else{
	tap=itemList[options.content4[3]].clone(options.content4[3])
	}
			
	//var tap=itemList[options.content4[3]].clone(options.content4[3])
	tap.scaling=new BABYLON.Vector3(jsonItems[options.content4[3]].held.hand.scale[0], jsonItems[options.content4[3]].held.hand.scale[1], jsonItems[options.content4[3]].held.hand.scale[2]);
	 listofmobs[options.content4[4]] = noa.entities.add(options.content4[0], 0.5, 0.5, tap, [0.2,1/2,0.2], true, false,true,null )
	 var vec=options.content4[1]
	 	 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec,options.content4[2])//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(listofmobs[options.content4[4]] )
			  body.applyImpulse(vec);
			  
			  var onCollideEnt = function(ownID, otherID) {
				  otherID=listofmobs[options.content4[4]]
    collideEnti(noa, ownID, otherID)
  }
				setTimeout(function(){ 
				   noa.entities.addComponent(listofmobs[options.content4[4]], noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  
				  }, 500);
				  
				  
				  	  function collideEnti(noa, otherID, ownID){
						  
						
						
					
					if(otherID==noa.playerEntity){
						entToRemove=options.content4[4]
						noa.ents.deleteEntity(ownID)
						
						for (var i=0;i<itemStack.length;i++){
							 if(itemStack[i]==jsonItems[options.content4[3]]){
								countStack[i]+=1
								break;
								
							}else if(itemStack[i]==null){
								itemStack[i]=jsonItems[options.content4[3]]
								countStack[i]+=1
								break;
							}
							
							
							
							
						}
						
					}
						
						
                     }
	
	
}


function getHand(noa,itemname,mesh){
	
	var item=jsonItems[itemname]
	if(mesh._children[1].getChildren().length>0){
		mesh._children[1]._children[0].dispose()
		
	}
	
	if(itemname=='none'){
		return;
	}

	
	var c=null
	if(propMeshes[itemname]!==undefined){
		c=propMeshes[itemname].clone(itemname)
	}else{
c=itemList[itemname].clone(itemname)
	}
	
	c.parent=mesh._children[1]
	c.position.x=mesh._children[1].position._x-0.25
	c.position.y=mesh._children[1].position._y-2
	c.position.z=mesh._children[1].position._z+0.2
	
	c.rotation.x=item.held.hand.rotation[0]
	c.rotation.y=item.held.hand.rotation[1]
	c.rotation.z=item.held.hand.rotation[2]
	
	noa.rendering.addMeshToScene(c, false)
for (var i=0;i<c.getChildren().length;i++){
					 noa.rendering.addMeshToScene(c._children[i], false)
				}
	c.scaling=new BABYLON.Vector3(0.5,0.5,0.5)
	
}


}


