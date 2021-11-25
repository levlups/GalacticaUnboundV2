import { stairs } from './blockDef/stairs'
import { ladder } from './blockDef/ladder'
import { rail } from './blockDef/rail'
import { railside } from './blockDef/railside'
import { fire } from './blockDef/fire'
import { flowerpot } from './blockDef/flowerpot'
import { chest } from './blockDef/chest'
import { pc } from './blockDef/pc'
import { waterside } from './blockDef/waterside'
import { watersource} from './blockDef/watersource'
import { slant} from './blockDef/slant'
import { portal} from './blockDef/portal'
import { rack} from './blockDef/rack'
import { floor} from './blockDef/floor'
import { door} from './blockDef/door'
import { fence} from './blockDef/fence'
import { bed} from './blockDef/bed'
import { fenceside} from './blockDef/fenceside'
import { bell} from './blockDef/bell'
import { pusher} from './blockDef/push'
import { ebutton} from './blockDef/ebutton'
import { trap} from './blockDef/trap'
import { deckchair} from './blockDef/deckchair'
import { horseStatue} from './blockDef/horseStatue'


export function initBlocks(noa) {
	var blockids=1
	// block materials (just colors for this demo)
var texURL = "./texPack/"+funpack+"/blocks/" // replace that with a filename to specify textures
var brownish = [0.45, 0.36, 0.22]
var greenish = [0.1, 0.8, 0.2]
var white = [1, 1, 1]
noa.registry.registerMaterial('dirt', brownish, texURL +'dirt.png')
noa.registry.registerMaterial('deck', brownish, texURL +'deck.png')
noa.registry.registerMaterial('grass', white, texURL +'grass_top.png')
noa.registry.registerMaterial('grasside', greenish, texURL +'grass_side.png')
noa.registry.registerMaterial('water', [0.5, 0.5, 0.8, 0.6],null)
noa.registry.registerMaterial('lava', [1, 0.6, 0, 0.8],null)
noa.registry.registerMaterial('flower', [0.5, 0.5, 0.8, 0],null)
noa.registry.registerMaterial('stone', greenish, texURL +'stone.png')
noa.registry.registerMaterial('leaves', greenish, texURL +'leaves.png')
noa.registry.registerMaterial('log', greenish, texURL +'log.png')
noa.registry.registerMaterial('sand', greenish, texURL +'sand.png')
noa.registry.registerMaterial('bookshelf', greenish, texURL +'bookshelf.png')
noa.registry.registerMaterial('glass', white, texURL +'glass.png',true)
noa.registry.registerMaterial('vorax', white, texURL +'vorax.png')
noa.registry.registerMaterial('stairs', [0.5, 0.5, 0.8, 0],null)

noa.registry.registerMaterial('rack', greenish, texURL +'/minecraft/frame.png')
noa.registry.registerMaterial('caveair', [0.5, 0.5, 0.8, 0],null)

// block types and their material names
blocks['grass'] = noa.registry.registerBlock(blockids++, { material: ['grass','dirt','grasside'],solid:true})
makeComplexCube('grass', ['grasside','grasside','grasside','grasside','grass','dirt'])
blocks['water']= noa.registry.registerBlock(blockids++, {
        material: 'lava',
		fluidDensity: 0.5,
	    viscosity: 0,
        fluid: true
    })
blocks['stone'] = noa.registry.registerBlock(blockids++, { material: 'stone' })
makeCube('stone')
blocks['watertop']=makeWater(noa,blockids++);
	
blocks['poppy']=	makePoppy(noa,blockids++);
	blocks['leaves'] = noa.registry.registerBlock(blockids++, { material: 'leaves' })
	makeCube('leaves')
	blocks['log']  = noa.registry.registerBlock(blockids++, { material: 'log' })
	blocks['sand']  = noa.registry.registerBlock(blockids++, { material: 'sand' })
	           makeCube('sand')                                                //back,front,top,'bottom,'side',side'
	blocks['bookshelf']  = noa.registry.registerBlock(blockids++, { material: ['stone','bookshelf', 'stone', 'stone','bookshelf', 'bookshelf'] })
	blocks['stairs']  = stairs(noa,{},blockids++,null,jsonItems['stairs'])
	blocks['lava']=makeLava(noa,blockids++);
	
	var colors = ['blue', 'red', 'green']

	colors.forEach(function(color) {
		
		noa.registry.registerMaterial('sand_'+color, greenish, texURL +color+'_sand.png')
		
		blocks[color+'_sand']  = noa.registry.registerBlock(blockids++, { material: 'sand_'+color })
		//createBlock(_id++, color + '_wool', 0, ['block/' + color + '_wool' ] , {}, {drop: color + '_wool', hardness: 1, tool: 'shears', material: 'cloth'})
	})
	
	blocks['ladder']  = ladder(noa,{},blockids++,'ladder',jsonItems['ladder'])
	blocks['rail']  = rail(noa,{},blockids++,'rail',jsonItems['rail'])
	blocks['railside']  = railside(noa,{},blockids++,'railside',jsonItems['railside'])
	blocks['fire'] =fire(noa,{},blockids++,'fire')
	blocks['flowerpot']  = flowerpot(noa,{},blockids++,null,jsonItems['stairs'])
	blocks['waterside']  = waterside(noa,{},blockids++,null,jsonItems['waterside'])
	blocks['watersource']  = watersource(noa,{},blockids++,'watersource',jsonItems['waterside'])
	blocks['slant']  = slant(noa,{},blockids++,'slant',jsonItems['waterside'])
	blocks['portal'] =portal(noa,{},blockids++,'nether_portal')
    blocks['rack'] = rack(noa,{},blockids++,'nether_portal')
	
	blocks['path'] = path(noa,blockids++)
	blocks['caveair'] = noa.registry.registerBlock(blockids++, { material: 'caveair',solid:false,opaque:false})
	blocks['floor'] = floor(noa,{},blockids++,'nether_portal')
	blocks['door'] = door(noa,{},blockids++,'door',jsonItems['door'])
	blocks['fence'] = fence(noa,{},blockids++,'fence',jsonItems['oakfence'])
	blocks['fenceside'] = fenceside(noa,{},blockids++,'fenceside',jsonItems['oakfence'])
	blocks['bed'] = bed(noa,{},blockids++,'bed',jsonItems['bed'])
	blocks['chest'] = chest(noa,{},blockids++,'chest',jsonItems['stairs'])
	blocks['pc'] = pc(noa,{},blockids++,'pc',jsonItems['stairs'])
	
		    blocks['ebutton'] = ebutton(noa,{},blockids++,'ebutton',jsonItems['stairs'])
		    blocks['bell'] = bell(noa,{},blockids++,'bell',jsonItems['stairs'])
			
		    blocks['glass'] = noa.registry.registerBlock(blockids++, { material: 'glass',opaque:false })
		    makeCube('glass')
			blocks['trap'] = trap(noa,{},blockids++,'trap',jsonItems['trap'])
			blocks['deck'] = noa.registry.registerBlock(blockids++, { material: 'deck' })
			makeCube('deck')
			blocks['deckchair'] = deckchair(noa,{},blockids++,'deckchair',jsonItems['stairs'])
			blocks['horse'] = horseStatue(noa,{},blockids++,'horse',jsonItems['stairs'])
			blocks['vorax'] = noa.registry.registerBlock(blockids++, { material: 'vorax' })
            makeCube('vorax')
			 blocks['push'] = pusher(noa,{},blockids++,'push',jsonItems['stairs'])
	        blockPick=blocks['bell']
}

function makeCube(name){
	var scene=noa.rendering.getScene()
	var options={
		height:0.5,
		width: 0.5,
		depth:0.5
	}
	const box = BABYLON.MeshBuilder.CreateBox("box", options, scene)
	var mat = new BABYLON.StandardMaterial("mat", scene);
	mat.diffuseTexture=new BABYLON.Texture('texPack/'+funpack+'/blocks/'+name+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	box.material=mat
	mat.specularColor = BABYLON.Color3.Black()
	propMeshes[name]=box
	scene.removeMesh(box);
	
}



function makeComplexCube(name,url){
	
	var mesh = {}
	var mat = {}
			
		
	for (var x = 0; x < 6; x++) {
		var matname = name + '-' + x || 'sprite-mat'
		mesh[x] = BABYLON.Mesh.CreatePlane('sprite-' + matname, 1, scene)
		mat[x] = noa.rendering.makeStandardMaterial(matname + x)
		mat[x].backFaceCulling = false
			  mat[x].diffuseTexture = new BABYLON.Texture('./texPack/'+funpack+'/blocks/' + url[x]+ '.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		  
		
		mat[x].diffuseTexture.hasAlpha = true
		mesh[x].material = mat[x]
		var offset
		if (x == 0) {offset = BABYLON.Matrix.Translation(0, 0.5, 0.5); mesh[x].rotation.y = 1.57}
		else if (x == 1) {offset = BABYLON.Matrix.Translation(0, 0.5, -0.5); mesh[x].rotation.y = 1.57}
		else if (x == 2) {offset = BABYLON.Matrix.Translation(0, 0.5, 0.5);}
		else if (x == 3) {offset = BABYLON.Matrix.Translation(0, 0.5, -0.5);}
		else if (x == 4) {offset = BABYLON.Matrix.Translation(0, 0, -1); mesh[x].rotation.x = 1.57}
		else if (x == 5) {offset = BABYLON.Matrix.Translation(0, 0, 0); mesh[x].rotation.x = 1.57}

		mesh[x].bakeTransformIntoVertices(offset)
	}
	
	var newmesh = BABYLON.Mesh.MergeMeshes(Object.values(mesh), true, true, undefined, false, true)
	newmesh.scaling=new BABYLON.Vector3(0.5, 0.5, 0.5);
	
	newmesh.bakeCurrentTransformIntoVertices();
	propMeshes['grass']=newmesh
	scene.removeMesh(newmesh);
	
	
}

function makePoppy(noa,currentID ) {
	var scene=noa.rendering.getScene()
	var mesh= makePlantSpriteMesh(noa, scene, '/blocks/poppy', 'poppy') 

	scene.removeMesh(mesh);
	
	
	  var flowerID = noa.registry.registerBlock( currentID, { material:'flower',
	
	 opaque:false,
	 solid:false,
	
	 blockMesh:mesh,
	
	 onCustomMeshCreate: function (mesh, x, y, z) {
		
		 	
		 	
	 },
	
	  })
	
		
		return currentID;
}

function path(noa,currentID ) {
	var scene=noa.rendering.getScene()
	var mesh= BABYLON.MeshBuilder.CreateBox("box",{height:0.5,width:0.5,depth:0.5}, scene);
	var mat = new BABYLON.StandardMaterial("mat", scene);
	mat.diffuseTexture=new BABYLON.Texture('texPack/'+funpack+'/blocks/path.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	mesh.material=mat
	scene.removeMesh(mesh);
	
	
	  var pathID = noa.registry.registerBlock( currentID, { material:'flower',
	
	 opaque:false,
	 solid:false,
	
	// blockMesh:null,
	blockMesh:mesh,
	 onCustomMeshCreate: function (mesh, x, y, z) {
		
		 	mesh.position.y+=0.25
		 	
	 },
	
	  })
	
		
		return currentID;
}

function makeWater(noa,currentID ) {
	
	var mesh= BABYLON.MeshBuilder.CreatePlane("plane", { size: 1 }, scene);//waterytexture(noa)
//	mesh.rotation.x=Math.PI/2
	var face0 = new BABYLON.StandardMaterial("face0", scene);
	mesh.material=face0
	face0.diffuseTexture=waterytexture(noa)//new BABYLON.Texture('texPack/'+funpack+'/blocks/water_still.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)//waterytexture(noa)
	face0.diffuseTexture.hasAlpha=true;
	face0.alpha = 0.99;
	
	face0.emissiveColor=BABYLON.Color3.White()
	face0.diffuseColor=BABYLON.Color3.White()
	//face0.diffuseTexture.vScale = 0.0625;
	
	//setInterval(function(){ 
   //face0.diffuseTexture.vOffset -= 0.0625;
   //  }, 500);
	face0.specularColor = BABYLON.Color3.Black()
face0.emissiveColor = BABYLON.Color3.Green()
face0.ambientColor=BABYLON.Color3.Red()
face0.emissiveColor = BABYLON.Color3.White()
	face0.backFaceCulling = false;
	var scene=noa.rendering.getScene()
	scene.removeMesh(mesh);
	//noa.rendering.addMeshToScene(mesh, false)
	
	  var waterID = noa.registry.registerBlock( currentID, { material:'lava'/*[null,null, null, null, null, null]*/,
	 fluid:true,
	 opaque:false,
	
	 fluidDensity: 0.5,
	 viscosity: 0,
	 blockMesh:mesh,
	
	 onCustomMeshCreate: function (mesh, x, y, z) {
		mesh.position.y=0.9;
		 mesh.rotation.x=Math.PI/2
		 
		 	
		 	
	 },
	
	  })
	
		
		return currentID;
}

function makeWaterSide(noa,currentID ) {
	
	var mesh= BABYLON.MeshBuilder.CreatePlane("plane", { width:1,height:Math.hypot(0.9,0.8) }, scene);//waterytexture(noa)
//	mesh.rotation.x=Math.PI/2
	var face0 = new BABYLON.StandardMaterial("face0", scene);
	mesh.material=face0
	face0.diffuseTexture=//waterytexture(noa)
	face0.diffuseTexture.hasAlpha=true;
	face0.alpha = 0.7;
	face0.specularColor = BABYLON.Color3.Black()
face0.emissiveColor = BABYLON.Color3.Green()
face0.ambientColor=BABYLON.Color3.Red()
	face0.backFaceCulling = false;
	var scene=noa.rendering.getScene()
	scene.removeMesh(mesh);
	//noa.rendering.addMeshToScene(mesh, false)
	
	  var waterID = noa.registry.registerBlock( currentID, { material:'water'/*[null,null, null, null, null, null]*/,
	 fluid:true,
	 opaque:false,
	
	 fluidDensity: 0.5,
	 viscosity: 0,
	 blockMesh:mesh,
	
	 onCustomMeshCreate: function (mesh, x, y, z) {
		mesh.position.y=0.8;
		 mesh.rotation.x=Math.PI/2+Math.tan(0.225,0.2)
		 
		 	
		 	
	 },
	
	  })
	
		
		return currentID;
}

function makeLava(noa,id){
	var options={opaque:true,solid:false,fluid:true}
	var imageheight=512
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0.0625,0.125,0.125,0.375),//right
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0,0.125,0.046,0.375),//left
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			

  
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			
	
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/lava_still.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex//waterytexture(noa)//tex
			mat.emissiveColor = BABYLON.Color3.White()
			//tex.hasAlpha=true
			//mat.alpha=1
			//mat.diffuseTexture.uOffset = 1/32;
			mesh.material=mat
			mat.diffuseTexture.hasAlpha=true
			var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			finOpts.blockMesh = mesh
		/*	setInterval(function(){ 
     tex.vOffset -= 1/32;
     }, 500);*/
	 
	 
	  /*  blockIDs.waterObject = noa.registry.registerBlock(_id++, {
        blockMesh: mesh,
        opaque: false,
        material: 'water',
        fluid: true,
    })*/
			
			
			
			noa.registry.registerBlock(id, finOpts)
			return id;
}

function waterytexture(noa){
	
	       var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("lavaTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = !1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 1 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 3 / 16), u = 1.2 * Math.sin(e * Math.PI * 3 / 16), l = e - 1; l <= e + 1; l++)
                                for (var h = a - 1; h <= a + 1; h++) {
                                    var f = l + c & 15,
                                        d = h + u & 15;
                                    s += t[f + 16 * d]
                                }
                          i[e + 16 * a] = s / 10 + (n[(e + 0 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 1 & 15)] + n[(e + 0 & 15) + 16 * (a + 1 & 15)]) / 4 * .8, n[e + 16 * a] += .01 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .06, Math.random() < .005 && (r[e + 16 * a] = 1.5)
                        }
                    var p = i;
                    i = t, t = p;
                    for (var m = 0; m < 256; m++) {
                        var s = 2 * t[m];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var g = s,
                            _ = 100 * g + 155,
                            v = g * g * 255,
                            y = g * g * g * g * 128;
                        o[4 * m + 0] = _, o[4 * m + 1] = v, o[4 * m + 2] = y, o[4 * m + 3] = 255
                    }
                }
            };
            return a;
	
	       /*    var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("waterTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = 1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1,a.alpha=0.7;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 0 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
							
                            for (var s = 0, c = e - 1; c <= e + 1; c++) {
                                var u = 15 & c,
                                    l = 15 & a;
                                s += t[u + 16 * l]
                            }
                            i[e + 16 * a] = s / 3.3 + .8 * n[e + 16 * a]
                        }
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) n[e + 16 * a] += .05 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .1, Math.random() < .05 && (r[e + 16 * a] = .5);
                    var h = i;
                    i = t, t = h;
                    for (var f = 0; f < 256; f++) {
                        var s = t[f];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var d = s * s,
                            p = 32 + 32 * d,
                            m = 50 + 64 * d,
                            g = 196 + 50 * d;
                        o[4 * f + 0] = p, o[4 * f + 1] = m, o[4 * f + 2] = 255, o[4 * f + 3] = g
                    }
                }
            };
			return a;*/
	
	
	
	
}

function makePlantSpriteMesh(noa, scene, url, name) {

	
	

	var matname = name || 'sprite-mat'
	/*if ( (url.startsWith('http://') || url.startsWith('https://') ) && game.allowCustom == true)*/ 
	/*var tex = new BABYLON.Texture(url, scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	else*/ var tex = new BABYLON.Texture('texPack/'+funpack+url+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	tex.hasAlpha = true
	
	var mesh = BABYLON.Mesh.CreatePlane('sprite-' + matname, 1, scene)
	
	
		var shaderMaterial = new BABYLON.ShaderMaterial("shader1", scene, {
                    vertex: "custom",
                    fragment: "custom",
                },
                    {
                needAlphaBlending: true,

                        attributes: ["position", "normal", "uv"],
                        uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
                    });




	shaderMaterial.backFaceCulling=false


	 shaderMaterial.setFloat("time", 0);
shaderMaterial.setTexture("textureSampler", tex);
shaderMaterial.diffuseTexture=tex
	shaderMaterial.diffuseColor = BABYLON.Color3.White()
	shaderMaterial.ambientColor = BABYLON.Color3.White()

	var time = 0;
	
	
		setInterval(function(){ 
    var shaderMaterial = scene.getMaterialByName("shader1");
                shaderMaterial.setFloat("time", time);
                time += 0.02;

                shaderMaterial.setVector3("cameraPosition", scene.activeCamera.position);
				
        scene.render();
     }, 100);
	
	
	
	
	
	var mat = noa.rendering.makeStandardMaterial(matname)
	mat.backFaceCulling = false
	mat.diffuseTexture = tex
	mat.diffuseTexture.vOffset = 0.99	
	
	
	
	
	mesh.material =mat
	mesh.rotation.y += 0.81

	var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	mesh.bakeTransformIntoVertices(offset)
	var clone = mesh.clone()
	clone.rotation.y += 1.62
	
    //var newmesh=BABYLON.Mesh.MergeMeshes([mesh, clone], true, true, undefined, false, false)
	return BABYLON.Mesh.MergeMeshes([mesh, clone], true, true, undefined, false, false)//newmesh*/
}
