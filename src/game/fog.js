var fogheight=0
export function makeFog(scene,noa){
	makesky(scene)
	//makeskySphere(scene)
	//makeclouds(noa)
	//makeplafond(noa)
//scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
//scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
scene.fogMode =BABYLON.Scene.FOGMODE_EXP2;
//scene.fogMode = BABYLON.Scene.FOGMODE_EXP;

//scene.fogDensity = 0.001// /.1; //was 0.01 //water = 0.08 // lava=0.2
//scene.fogStart =100//96;//800
//scene.fogEnd =550//150;//1000

scene.fogDensity = 0.1// 
scene.fogStart =1//96;//800
scene.fogEnd =550//150;//1000
//scene.fogColor = new BABYLON.Color3(.9, .9, 1)
scene.fogColor = new BABYLON.Color3(0, 0, 0)
//scene._shadowsEnabled = !0
scene.fogEnabled=false;
	
}

	function makesky(scene){
		
		
		var  uvoptions = {
        height:2e3,
		depth:2e3,
		width:2e3,
		wrap: true,
        updatable: true
    };	
			 
	 var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", uvoptions, scene);
 var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;

skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./texPack/"+funpack+"/skybox/space/skybox", scene);

skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

skyboxMaterial.diffuseColor = new BABYLON.Color3(1, 1,1);

skyboxMaterial.ambientColor = new BABYLON.Color3(0.6, 0.6, 1,0.5);
skyboxMaterial.disableLighting=true

skybox.material = skyboxMaterial;


noa.rendering.addMeshToScene(skybox,false)

	setInterval(function(){ 
   skyboxMaterial._reflectionTexture.vOffset -= 1/20;
 //  skyboxMaterial.diffuseTexture.vOffset -= 1/100;
     }, 100);
  return skybox;
	
}


function makeskySphere(scene){
		
		
			var skybox = BABYLON.MeshBuilder.CreateSphere("skyBox", {diameter:500, sideOrientation:2}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	//skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./texPack/"+funpack+"/skybox/day1/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;		
    skybox.infiniteDistance = true;	
	    noa.rendering.addMeshToScene(skybox,false)
    
  return skybox;
	
}

function makeclouds(noa){
	      var t = noa.rendering.getScene(),
            i = BABYLON.MeshBuilder.CreatePlane("planeclouds", {
                height: 2e3,
                width: 2e3
            }, t);
			
							setInterval(function(){ 
    i.material.diffuseTexture.uOffset += 1/10000;
     }, 250);
        return i.material = noa.rendering.makeStandardMaterial("cloudMat"), i.material.diffuseTexture = new BABYLON.Texture("./texPack/"+funpack+"/environment/clouds.png", t, !0, !0, BABYLON.Texture.NEAREST_SAMPLINGMODE), i.material.diffuseTexture.anisotropicFilteringLevel = 8, i.material.diffuseTexture.hasAlpha=!0,i.material.useAlphaFromDiffuseTexture = true,/* i.material.alpha=0.5,*/i.material.emissiveColor = new BABYLON.Color3(1,1,1),i.material.ambientColor = new BABYLON.Color3(0.74, 0.63, 0.62),i.material.diffuseColor = new BABYLON.Color3(0.74, 0.63, 0.62), i.material.backFaceCulling = !1, i.material.disableLighting = !0, i.rotation.x = -Math.PI / 2, i.position = new BABYLON.Vector3(0, 88.5-fogheight, 0), noa.rendering.addMeshToScene(i,false), i;
	    
    }
	
	
	function makeplafond(noa){
	      var t = noa.rendering.getScene(),
            i = BABYLON.MeshBuilder.CreatePlane("planecloudsuuu", {
                height: 2e3,
                width: 2e3
            }, t);
			
			
			const skyMat = new BABYLON.StandardMaterial('sky', t);
	skyMat.backFaceCulling = true;
	skyMat.emissiveColor = new BABYLON.Color3(0.4,0.4,1);
	skyMat.diffuseColor = skyMat.emissiveColor;

	i.infiniteDistance = true;
	i.renderingGroupId
	i.material = skyMat;

	i.rotation.x = -Math.PI / 2;

	noa.rendering.addMeshToScene(i, false);

	i.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 95-fogheight));
							//setInterval(function(){ 
    // i.material.diffuseTexture.uOffset += 1/10000;
    // }, 250);
        return i//.material = noa.rendering.makeStandardMaterial("cloudMat"),i.material.diffuseTexture = new BABYLON.Texture(mod+"textures/environment/cloudsy.png", t, !0, !0, BABYLON.Texture.NEAREST_SAMPLINGMODE), i.material.diffuseTexture.anisotropicFilteringLevel = 8/*, i.material.diffuseTexture.hasAlpha=/*, i.material.alpha=0.5*/,i.material.emissiveColor = new BABYLON.Color3(1, 1, 1),i.material.diffuseColor =i.material.emissiveColor ,i.infiniteDistance = true,i.renderingGroupId, i.material.backFaceCulling = !1, i.material.disableLighting = !0, i.rotation.x = -Math.PI / 2, i.position = new BABYLON.Vector3(0,60, 0), noa.rendering.addMeshToScene(i,false), i;
	    
    }