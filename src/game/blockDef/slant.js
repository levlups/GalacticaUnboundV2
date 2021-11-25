var trapjson=null
var mesh=null
export function slant(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
	
		var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = waterytexture(noa)
			
				BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/"+name+"/"+name+".babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							  
						}
			
			//mesh.material=mat
			mesh.scaling.x=0.5
			mesh.scaling.z=0.5
	
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
						
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y-0.2//+trapjson[c][j][1]=y-0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				//mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				//mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				//mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				
				            for (var i=0;i<7;i++){
								if(noa.getBlock(x+i,y,z+i)==blocks['watersource'] ){
								console.log('bingooslant')
								mesh2.position.y=y-((i+1)/10)
								 mesh2.rotation.y=Math.PI/2
							}
								
							}
							
							
								for (var i=0;i<7;i++){
								if(noa.getBlock(x-i,y,z-i)==blocks['watersource'] ){
								console.log('bingooslantyyy')
								mesh2.position.y=y-((i+1)/10)
								 mesh2.rotation.y=-Math.PI/2
							}
								
							}
							
									for (var i=0;i<7;i++){
								if(noa.getBlock(x+i,y,z-i)==blocks['watersource'] ){
								console.log('bingooslantyyy')
								mesh2.position.y=y-((i+1)/10)
								 mesh2.rotation.y=-Math.PI
							}
								
							}
				
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
			
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
		
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			});
			
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }
 
 function waterytexture(noa){
	
	      /*  var t = new Float32Array(256),
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
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 2 / 16), u = 1.2 * Math.sin(e * Math.PI * 2 / 16), l = e - 1; l <= e + 1; l++)
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
            return l;*/
	
	           var t = new Float32Array(256),
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
			return a;
	
	
	
	
}

