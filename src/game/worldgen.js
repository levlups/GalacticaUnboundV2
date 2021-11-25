const { makeNoise2D, makeNoise3D } = require('open-simplex-noise')
const {OakTree,Box,Pond} =require ('./structures')
const ndarray = require('ndarray')
const {spawner,buildspawner} = require('./spawner')
const {builds,pasteBuild} = require('./builds')

//15425763
//var myWorker = new Worker('worldgen_worker.js');
//import Worker from "./worldgen_worker.js";
//var worldgenWorker = require('worker-loader!./worldgen_worker')
var num=0;
var chunkList={}
var cruncher = require('voxel-crunch')
var hash = require('murmur-numbers')
//storage ={}//JSON.parse(localStorage.getItem('chunks'))//{}
var chunkIsStored = (id) => { return !!storage[id] }
var storeChunk = (id, arr) => { storage[id] = cruncher.encode(arr.data) 



/*var k=storage[id]
console.log(k)

var l=[JSON.stringify(k)]

console.log(Object.values(JSON.parse(l)))*/

}
var retrieveChunk = (id, arr) => { cruncher.decode(storage[id], arr.data)}



var seed,heightNoise,caveNoise,biomeNoise1,biomeNoise2,biomeNoise3,plantSeed,waterLevel,seedheight,seedSpacing,spaceNoise;





	function getBlock(x, y, z) {
		var m = biomeNoise2((x)/180, (z)/180)
		
		
		var r = getHeightMap(x, y, z, m/2)
		
		var k = getHeightMap(x/3, y, z/3, m/2)
		//if (y <= r ) return blocks['stone']
		//else if(m>0.2 && m<0.4) return  0// blocks['leaves']
		
		if (y <= r ) return blocks['stone']
		
		/*{
		if(r<100 && m>0.2  && m<0.23  && getBiome(x, z)!=='iceland' ) {
			
			 if (y == waterLevel-1 ) return blocks['lava']
		else if (y < waterLevel-1) return blocks['lava']
		  else return  0
		}else{
			return blocks['stone']
		}
		}*/
		else if (y == waterLevel-1) return blocks['watertop']
		else if (y < waterLevel-1) return blocks['water']
		
		else return 0
	}
	
	function getNoiseBlock(x, y, z) {
		//var dim = (caveNoise(x/40, y/40, z/40)+0.3)*140
		
		var m = biomeNoise2((x)/300, (z)/300)
		
		var dim2 = (caveNoise(x/20, y/20, z/20)+0.1)*1400
		//var r = getNoiseHeightMap(x, y, z, m/10)
		
		
		
		//if (dim2<0.001  && m<0.001 ) return blocks['deck']
		
	   if(y==0 && x<5 && x>-5 && z<5 && z>-5) return blocks['deck']

		
		else return 0
	}
		function getNoiseHeightMap(x, y, z, mountaines) {
		var dim = (caveNoise(x/18, y/18, z/18)+0.3)*140
		var dim2 = (caveNoise(x/20, y/20, z/20))*50
		var layer1 = heightNoise(x/14, z/14)*mountaines*2
		var layer2 = heightNoise(x/40, z/40)*20//
			
		return Math.floor((dim*30+dim2*20+layer1*20+layer2*10-3)/65) + parseInt(seedheight)//30
	}
	
	function getHeightMap(x, y, z, mountaines) {
		var dim = (caveNoise(x/180, y/180, z/180)+0.3)*140
		var dim2 = (caveNoise(x/20, y/20, z/20))*50
		var layer1 = heightNoise(x/140, z/140)*mountaines*2
		var layer2 = heightNoise(x/40, z/40)*20//
			
		return Math.floor((dim*30+dim2*20+layer1*20+layer2*10-3)/65) + parseInt(seedheight)//30
	}
	
	function getHighestBlock(chunk, x, z) {
	for (var y = 120 - 1; y >= 0; y = y - 1) {
		var val = chunk.get(x, y, z)
		if (val != 0 && val != 9) return {level: y, block: val}
	}
	return null
}

function getBiome(x, z/*, temperature, biomerng*/) {
		
		var temperature=heightNoise(x/seedSpacing , z/seedSpacing )*20
		var biomerng=heightNoise(x/20, z/20)*30
		if (0.2 < temperature && biomerng < 0.3) return 'desert'
		else if ( 1 < temperature < 0.2 && biomerng < 0.1) return 'iceland'
		else if ( 0.5 < temperature < 0.2 && biomerng < 0.1) return 'iceland'
		else if ( 0.3 < temperature < 0.3 && biomerng < 0.2) return 'plants'
		else return 'plants'
	}


/*const worker = new Worker("worldgen_worker.js");

worker.postMessage({
	              msg:'init'
                
                });*/
				
				
			/*function saveWokie(){
				if(socket!==null && storage!=={}){
					
					
				//socket.emit('saveChunk',storage)
				console.log(socket)
				}
					//console.log(storage)
					
				}*/
				
				//setInterval(function(){ saveWokie() }, 15000);
export function makeWorld(noa) {
	//setTimeout(function(){  
	//storage=JSON.parse(localStorage.getItem('cool'))
	//}, 3000);
	
	
	    heightNoise = makeNoise2D(Math.round(seed * Math.sin(seed^1) * 10000)),
        seed=parseInt(rtcblocklist['seed']),
		caveNoise = makeNoise3D(Math.round(seed * Math.sin(seed^2) * 10000)),
		spaceNoise = makeNoise3D(Math.round(seed * Math.sin(seed^2) / 100000000)),
		biomeNoise1 = makeNoise2D(Math.round(seed * Math.sin(seed^3) * 10000)),
		biomeNoise2 = makeNoise2D(Math.round(seed * Math.sin(seed^4) * 10000)),
		biomeNoise3 = makeNoise2D(Math.round(seed * Math.sin(seed^5) * 10000)),
		plantSeed = Math.round(seed * Math.sin(seed^6) * 10000),waterLevel=40,seedheight=seed.toString().slice(0, 2),seedSpacing=seed.toString().slice(2, 5);

 /* 
 *      World generation
 * 
 *  The world is divided into chunks, and `noa` will emit an 
 *  `worldDataNeeded` event for each chunk of data it needs.
 *  The game client should catch this, and call 
 *  `noa.world.setChunkData` whenever the world data is ready.
 *  (The latter can be done asynchronously.)
 * 
*/



// register for world events

    // catch engine's chunk removal event, and store the data
    noa.world.on('chunkBeingRemoved', function (id, array, userData) {
	  
	  
	 
       storeChunk(id, array)
	 
	   
	   if(rtcblocklist.worldname==undefined){
		   return;
	   }
	
	  /* if(socketo!==null){
	   var k=JSON.stringify(storage[id])
	   socketo.emit('chunk',{ids:id,chk:k,name:rtcblocklist.worldname});
	   }*/
	 
	  
    })


  

    // catch worldgen requests, and queue them to handle asynchronously
    var requestQueue = []
    noa.world.on('worldDataNeeded', function (id, array, x, y, z, worldName) {
		
        requestQueue.push({ id, array, x, y, z, worldName })
		
		 if(rtcblocklist.worldname==undefined){
		   return;
	   }
	
	
			  if(socketo!==null){
	   socketo.emit('getchunk',{ids:id,name:rtcblocklist.worldname});
	  }
    })



    // process the worldgen request queue:
    setInterval(function () {
        if (requestQueue.length === 0) return
        var req = requestQueue.shift()
		
	

		
        if (chunkIsStored(req.id)) {
			
			
			var k=storage[req.id]
			
			
			var l=[JSON.stringify(k)]



           storage[req.id]=Object.values(JSON.parse(l))
		
			
           retrieveChunk(req.id, req.array)
		
        } else {
			
			if(worldtype=='normal'){
           generateChunk(req.id,req.array, req.x, req.y, req.z, req.worldName)
		   	buildspawner(req.id)
			}else if(worldtype=='noise'){
				  generateNoiseChunk(req.id,req.array, req.x, req.y, req.z, req.worldName)
			}else{
				generateFlatChunk(req.id,req.array, req.x, req.y, req.z, req.worldName)
			}
			
        }
        // pass the finished data back to the game engine
		
		 noa.world.setChunkData(req.id, req.array)
		// spawner(req.id)
	
		/*if(!!storage[req.id]){
			return;
		}
		if(!!rtcblocklist[req.id]){
			
			
			for (const i in rtcblocklist[req.id]){
				
				noa.setBlock(rtcblocklist[req.id][i][0],rtcblocklist[req.id][i][1], rtcblocklist[req.id][i][2], rtcblocklist[req.id][i][3])
			}
		
		}*/
		
    }, 50)

function generateFlatChunk(id,array, x, y, z) {
	
	 var l=id.split("|")

	 var xoff = l[0]*24
		var zoff = l[2]*24
		var yoff = l[1]*24
        for (var i = 0; i < 24; ++i) {
			 for (var j = 0; j <24; ++j) {
                for (var k = 0; k < 24; ++k) {
            
               
				
							
							   
								
								if ( j+yoff<=0 ) {
									 array.set(i,j,k, blocks['grass'])
							
								}else{
									
									array.set(i,j,k, 0)
								}
								    
						
						
						
					
                }
				
				
				
				
				
				
				
				
				
				
				
            }
        }
		
		
		
	
}



function generateNoiseChunk(id,array, x, y, z) {
	
	 var l=id.split("|")

	 var xoff = l[0]*24
		var zoff = l[2]*24
		var yoff = l[1]*24
        for (var i = 0; i < 24; ++i) {
			 for (var j = 0; j <24; ++j) {
                for (var k = 0; k < 24; ++k) {
            
               
				
							
							   var block = getNoiseBlock(i+xoff,j+yoff, k+zoff)
								
										if (block != 0 ) {
									 array.set(i,j,k, block)
							
								}else{
									
									array.set(i,j,k, 0)
								}
								    
						
						
						
					
                }
				
				
				
				
				
				
				
				
				
				
				
            }
        }
		
		
		
	
}

 function generateChunk(id,array, x, y, z) {
	 var l=id.split("|")

	 var xoff = l[0]*24
		var zoff = l[2]*24
		var yoff = l[1]*24
        for (var i = 0; i < 24; ++i) {
			 for (var j = 0; j <24; ++j) {
                for (var k = 0; k < 24; ++k) {
            
               
				
						var block = getBlock(i+xoff,j+yoff, k+zoff)
						var biome = getBiome(i+xoff,k+zoff )
						if (block != 0 ) {
							
							   
								
								if ( 0 < j < 50 && getBlock(i+xoff, j+yoff, k+zoff) == blocks['stone'] && getBlock(i+xoff, j+yoff+1, k+zoff) == 0 ) {
									if (biome == 'plants' || biome == 'forest') array.set(i,j,k, blocks['grass'])
										

										
									 if (biome == 'desert' ) array.set(i,j,k, blocks['sand'])
										 
									 if (biome == 'iceland' ) array.set(i,j,k, blocks['sand'])
							
								}else{
						
						array.set(i,j,k,block)
								}
								
								    
						
						
						}
					
                }
				
				
				
				
				
				
				
				
				
				
				
            }
        }
	
		//storeChunk(id, array)
		
		
				for (var x = 0; x < array.shape[0]; x++) {
		   for (var z = 0; z <   array.shape[2]; z++) {
			   if (5 < x && x < 17 && 5 < z && z < 17) {
				 
			
				
			 if ( hash( (x+xoff), (z+zoff), seed) < 0.2) {
				
				var high = {...getHighestBlock(array, x, z)}
				if (high.block !== blocks['leaves']) {
						//var gen = OakTree( hash( (x+xoff), (z+zoff), seed)*1 )
						var gen = Pond( hash( (x+xoff), (z+zoff), seed)*1 )
				       // var gen1 = Box( hash( (x+xoff), (z+zoff), seed)*1 )
				if(high.level <=waterLevel+2){
				//pasteStructure(array, gen, x, high.level+1, z)
				
				//setTimeout(function(){ 
				//pasteBuild(x,high.level,z,'north')
				
				//console.log([x,high.level,z])
					//console.log('castle')
					
				//	}, 3000);
				//pasteStructure(array, gen1, x, high.level-40, z)
				}
				
				
				}
				
			}
			
			if ( hash( (x+xoff), (z+zoff), seed) < 0.1) {
				
				var high = {...getHighestBlock(array, x, z)}
				if (high.block !== blocks['leaves']) {
						//var gen = OakTree( hash( (x+xoff), (z+zoff), seed)*1 )
							var gen = Pond( hash( (x+xoff), (z+zoff), seed)*1 )
				       // var gen1 = Box( hash( (x+xoff), (z+zoff), seed)*1 )
				if(high.level <=waterLevel+2){
					
					//pasteBuild(x,high.level,z,'north')
					//console.log('castle')
				//pasteStructure(array, gen, x, high.level+1, z)
				
				//pasteStructure(array, gen1, x, high.level-40, z)
				}
				
				
				}
				
			}
			
			  if(hash( (x+xoff), (z+zoff), plantSeed*2) < 0.1 ){
				
			   	var high = {...getHighestBlock(array, x, z)}
				if (high.block == blocks['grass']) {
				array.set(x, high.level+1,z, blocks['poppy'] ) 
				}
				}
			
				   }
			   }
		   }
		   
		    
		

 }
 
 

		
 
}
		
 
		
		
		/*for (var x = 0; x < array.shape[0]; x++) {
		   for (var z = 0; z <   array.shape[2]; z++) {
			   if (5 < x && x < 17 && 5 < z && z < 17) {
				   //if (15< x && x < 17 && 15 < z && z < 17) {
			 if(hash( (x+xoff), (z+zoff), plantSeed*2) < 0.1 ){
				
			   	var high = {...getHighestBlock(array, x, z)}
				if (high.block == blocks['grass']) {
				array.set(x, high.level+1,z, blocks['poppy'] ) 
				}
				}
				
				else if ( hash( (x+xoff), (z+zoff), seed) < 10) {
				
				var high = {...getHighestBlock(array, x, z)}
				if (high.block !== blocks['leaves']) {
						var gen = OakTree( hash( (x+xoff), (z+zoff), seed)*100 )
				
				if(high.level <=waterLevel+20){
				pasteStructure(array, gen, x, high.level+1, z)
				}
				}
				
			}
				
				
			   
			   
			
			
			   
				
				
			
			   
		   }
		   
		}
		
		
		
		
		
		
    }
	//return array
	
}*/

 


function pasteStructure(chunk, gen, x, y, z) {
		var xm = Math.round(gen.shape[0]/2)
		var zm = Math.round(gen.shape[2]/2)

		for (var i = 0; i < gen.shape[0]; i++) {
			for (var j = 0; j < gen.shape[1]; j++) {
				for (var k = 0; k < gen.shape[2]; k++) {
					if (gen.get(i, j, k) != 0) { 
					
					var val = chunk.get(x-xm+i, y+j, z-zm+k)
					//if(val!==9){
						chunk.set(x-xm+i, y+j, z-zm+k, gen.get(i, j, k) ) 
					//}
						
					}
				}
			}
		}
	}
	
