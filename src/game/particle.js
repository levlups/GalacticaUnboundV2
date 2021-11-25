

/*var MPS = require('mesh-particle-system');
export function makeparticle(name,pos,scene,time,size){
var tex = new BABYLON.Texture("./texPack/"+funpack+"/particle/bubble.png", scene);
var capacity = 200;
var rate = 30;           // particles/second
var mps = new MPS(capacity, rate, scene);
mps.setTexture(tex);


}*/



export function makeparticle(name,pos,scene,time,size){
	 //audio.volume=0.5
	 //audio.play()
	 
	  var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
	  var c=new BABYLON.Texture("./texPack/"+funpack+"/particle/bubble.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
	  /*c.wrapU = 1, c.wrapV = 1
	 c.uOffset = .5;
c.vOffset = .5;*/
    particleSystem.particleTexture= c//new BABYLON.Texture('/textures/'+name+'.png', scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

    // Position where the particles are emiited from
	//var box=pos
	
	
	
	var partmesh= new BABYLON.Mesh("dummy", scene);//	//partmesh.clone('tot')
	partmesh.position.x=pos[0]+0.5
	partmesh.position.y=pos[1]+1
	partmesh.position.z=pos[2]+0.5
	//partmesh.layerMask = 0x10000000;
		 particleSystem.gravity = new BABYLON.Vector3(0,-10, 0);

	
	
	
	
	/*particleSystem.startSpriteCellID = 0;
                particleSystem.endSpriteCellID = 3;
                particleSystem.spriteCellHeight = 4;
               particleSystem.spriteCellWidth = 4;
                particleSystem.spriteCellLoop = true;
				 particleSystem.spriteCellChangeSpeed=1;
				particleSystem.spriteRandomStartCell=false;*/
	


           particleSystem.emitter= partmesh//pos// new BABYLON.Vector3(pos[0], pos[1], pos[2])//partmesh
	       particleSystem.minSize =size/2
           particleSystem.maxSize =size
		   
		   particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
particleSystem.colorDead = new BABYLON.Color4(1, 1, 1, 1);
		   particleSystem.blendMode =BABYLON.ParticleSystem.BLENDMODE_STANDARD;
	
		//  particleSystem.manualEmitCount=8
		   particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 2;
            particleSystem.updateSpeed = 0.020
		
				noa.rendering.addMeshToScene(partmesh,false)
	function init(p) {
		
		//for (let p = 0; p < particleSystem.nbParticles; p++) {
      p.position.x = Math.random() * 0.8 - 0.4
      p.position.y = Math.random() * 0.8 - 0.4
      p.position.z = Math.random() * 0.8 - 0.4
      p.velocity.x = p.position.x / 2
      p.velocity.y = p.position.y / 2
      p.velocity.z = p.position.z / 2
      p.size =     Math.random()/2 // was 0.5
      p.age = Math.random()/2
      p.lifetime =  10
	  
		//}
	  
    }
		
			 
	particleSystem.start()
	
	setTimeout(function() {
		particleSystem.dispose()
		partmesh.dispose()
			}, time*1000);
		
			 
	return particleSystem;
	
}


export function makeSnow(name,pos,scene,time){
	 //audio.volume=0.5
	 //audio.play()
	 
	  var particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
	  var c=new BABYLON.Texture("./texPack/"+funpack+"/particle/star.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
	
    particleSystem.particleTexture= c
	c.hasAlpha=true
	particleSystem.emitter = pos;
    particleSystem.minEmitBox = new BABYLON.Vector3(10, 10, 10); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(-10, -1, -10); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1.0);
    particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(1, 1, 1,1);

    // Size of each particle (random between...
    particleSystem.minSize = 0.05;
    particleSystem.maxSize = 0.1;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;

    // Emission rate
    particleSystem.emitRate = 500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    //particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -1, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-1, 0, 1);
    particleSystem.direction2 = new BABYLON.Vector3(1, 0, -1);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 0;
    particleSystem.updateSpeed = 0.003;

    // Noise
    var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
    noiseTexture.animationSpeedFactor = 5;
    noiseTexture.persistence = 2;
    noiseTexture.brightness = 0.5;
    noiseTexture.octaves = 2;

    particleSystem.noiseTexture = noiseTexture;
    particleSystem.noiseStrength = new BABYLON.Vector3(60, 60, 60);
	
	
		
			 
	particleSystem.start()
	
	setTimeout(function() {
		particleSystem.dispose()
		//partmesh.dispose()
			}, time*1000);
		
			 
	return particleSystem;
	
}