
var walkcycle=0
global.flyHeadAngle=0//-Math.PI/2
var delay=0
export function playerAnim(mp,noa){
	
	if(playermesh==null){
		return;
	}
	
	
	if(cameraShake){
		//walkcycle++
		//noa.camera.heading= 0.1* Math.cos((0.32 *walkcycle) + (0.5 * Math.PI))-Math.PI/2;
		//return;
	}
	if(isDead){
					mp.rotation.z=Math.PI/3
					return;
				}
				
	var body=noa.ents.getPhysicsBody(noa.playerEntity)
	
	delay++
	if(!facingF){
				
				//mp.rotation.y=lerp(mp.rotation.y,noa.camera.heading,1)
				//-Math.PI/2 = flying head
				
				if(delay>50){
					
					
					mp.rotation.y=lerp(mp.rotation.y,noa.camera.heading,1)
				delay=0
				}
				mp._children[0].rotation.x=lerp(mp._children[0].rotation.x,noa.camera.pitch+flyHeadAngle,1)
		        mp._children[0].rotation.y=lerp(mp._children[0].rotation.y,noa.camera.heading-mp.rotation.y,1)
				
				}else{
					
					mp.rotation.y=lerp(mp.rotation.y,noa.camera.heading+Math.PI,1)
				
				mp._children[0].rotation.x=lerp(mp._children[0].rotation.x,-noa.camera.pitch+flyHeadAngle,1)
		        mp._children[0].rotation.y=lerp(mp._children[0].rotation.y,noa.camera.heading-mp.rotation.y+Math.PI,1)
					
				}
				
				
				if(isFlying){
					walkcycle+=0.1
					if(fired){
						
						walkcycle++
					  mp._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI))-Math.PI/2;
				      mp._children[1].rotation.z= 1.0* Math.sin((0.32 * walkcycle) + (0.25 * Math.PI))-0.1;
					}else{
					  mp._children[1].rotation.x= 0.1* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
					}
		              mp._children[2].rotation.x= 0.1* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  	mp._children[3].rotation.x= 0.1* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mp._children[4].rotation.x= 0.1* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  return;
				}
				
				if(rideName!=='none'){
					mp.rotation.x=0
					  mp._children[3].rotation.x= -20
		              mp._children[4].rotation.x= -20
					  
					  mp._children[3].rotation.z= Math.PI/6
		              mp._children[4].rotation.z= -Math.PI/6
					  
					   mp._children[1].rotation.x= -20
		              mp._children[2].rotation.x= -20
					  
					  mp._children[1].rotation.z= 50
		              mp._children[2].rotation.z= -50
					  return;
					
				}
				
				
				
					if(swimming){
						
						walkcycle++
					mp.rotation.x=Math.PI/2
					
							mp._children[0].rotation.x=lerp(mp._children[0].rotation.x,noa.camera.pitch-Math.PI/2,1)
					  mp._children[3].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (0.5 * Math.PI))/10;
		              mp._children[4].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI))/10;
					  
					 //mp._children[3].rotation.z= 0.5* Math.cos((0.16 * walkcycle) + (0.5* Math.PI))+Math.PI/6;
		             // mp._children[4].rotation.z= 0.5* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI))-Math.PI/6;
					  
					   mp._children[1].rotation.x= 0
		              mp._children[2].rotation.x= 0
					  
					  mp._children[1].rotation.z= 1.0* Math.cos((0.16 * walkcycle) + (0.5* Math.PI))+Math.PI/3;
		              mp._children[2].rotation.z= 1.0* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI))-Math.PI/3;
					  return true;
					
				}
				
				mp.rotation.x=0
				
				
				
				if(fired){
					
					
                   walkcycle++
                mp._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI))-Math.PI/2;
				mp._children[1].rotation.z= 1.0* Math.sin((0.32 * walkcycle) + (0.25 * Math.PI))-0.1;
				
			

                }else{
                      mp._children[1].rotation.x= 0
		              mp._children[2].rotation.x= 0
					  mp._children[3].rotation.x= 0
		              mp._children[4].rotation.x= 0
					  
					  mp._children[1].rotation.z= 0
		              mp._children[2].rotation.z= 0
					  mp._children[3].rotation.z= 0
		              mp._children[4].rotation.z= 0
				}					
				if(body.velocity[1]!==0 || body.velocity[0]!==0 || body.velocity[2]!==0 ){
					
					walkcycle++
					
					
					
					if(!fired){
					
					mp._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
					}
		              mp._children[2].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  	mp._children[3].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mp._children[4].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
				}else{
					
			
					if(!fired){
					  mp._children[1].rotation.x= 0
					   mp._children[1].rotation.z= 0
				}
		              mp._children[2].rotation.x= 0
					  mp._children[3].rotation.x= 0
		              mp._children[4].rotation.x= 0
					  
					 
		              mp._children[2].rotation.z= 0
					  mp._children[3].rotation.z= 0
		              mp._children[4].rotation.z= 0
					
				}
	
	
}


export function mobAnim(mp,noa){
	
		mp.rotation.y=lerp(mp.rotation.y,mp.parent.rotation.y,1)
	

				var wow=mp.parent
				
				if(wow.metadata=='moving'){
					
					walkcycle++
					
					
					
					
					
					mp._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
				
		              mp._children[2].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  	mp._children[3].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mp._children[4].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  
				}else{
					
					
					  mp._children[1].rotation.x= 0
				
		              mp._children[2].rotation.x= 0
					  mp._children[3].rotation.x= 0
		              mp._children[4].rotation.x= 0
				}
			
	
	
}


function lerp (start, end, amt){
				     return (1-amt)*start+amt*end
			        }
					
					
					
					export function playerKneel(mp , bool){
						if(bool){
						   mp._children[5].rotation.x=Math.PI/8
							mp._children[5].position.z+=0.25
							mp._children[0].position.z+=0.25
							mp._children[1].position.z+=0.25
							mp._children[2].position.z+=0.25
							
							mp._children[5].position.y-=0.2
							mp._children[0].position.y-=0.2
							mp._children[1].position.y-=0.2
							mp._children[2].position.y-=0.2
							
							mp._children[3].position.y-=0.2
							mp._children[4].position.y-=0.2
							
						}else{
						
						    mp._children[5].rotation.x=0
							mp._children[5].position.z-=0.25
							mp._children[0].position.z-=0.25
							mp._children[1].position.z-=0.25
							mp._children[2].position.z-=0.25
							
							mp._children[5].position.y+=0.2
							mp._children[0].position.y+=0.2
							mp._children[1].position.y+=0.2
							mp._children[2].position.y+=0.2
							
							mp._children[3].position.y+=0.2
							mp._children[4].position.y+=0.2
						}
						
					}
					
					
					
					
	