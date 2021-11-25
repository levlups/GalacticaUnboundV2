var hash = require('murmur-numbers')
var ndarray = require('ndarray')


export function OakTree(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	for (var y = 0; y < height; y++) {
		gen.set(8, y, 8, blocks['log'])
	}

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 5; y++) {
			for (var z = -5; z <= 5; z++) {
				if (gen.get(x+8, y+height, z+8) == 0 && hash(x, y, z, seed*2) > 0.3 && dist(x, y, z) <= 4 + size - Math.round( hash(x, y, z, seed*7) )) gen.set(x+8, y+height, z+8, blocks['leaves'])
			}
		}
	}

	return gen
}

export function Pond(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = 3//Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	for (var y = 0; y < height; y++) {
		//gen.set(8, y, 8, blocks['log'])
	}

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 5; y++) {
			for (var z = -5; z <= 5; z++) {
				if (gen.get(x+8, y+height-height-8, z+8) == 0 /*&& hash(x, y, z, seed*2)*/ > 0.3 && dist(x, y, z) <= 4 + size /*- Math.round( hash(x, y, z, seed*7))*/) gen.set(x+8, y+height, z+8, blocks['caveair'])
			}
		}
	}

	return gen
}

export function OakTreessss(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = 3//Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 0; y++) {
			for (var z = -5; z <= 5; z++) {
				if (gen.get(x+8, y+height, z+8) == 0 && dist(x, y, z) <= 4  ) 
				if(x==-5|| x==5 || z==-5||z==5){
            gen.set(x+8, y+height, z+8, blocks['stone'])
				}else{
				gen.set(x+8, y+height, z+8, blocks['water'])
				}
					//gen.set(x+8, y+height, z+8, blockIDs.grass_snow)
			}
		}
	}

	return gen
}

export function Box(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = 3//Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 5; y++) {
			for (var z = -5; z <= 5; z++) {
				
            gen.set(x, y+height, z, blocks['caveair'])
				
					//gen.set(x+8, y+height, z+8, blockIDs.grass_snow)
			}
		}
	}

	return gen
}


function dist(x, y, z) {
	return Math.sqrt(x*x + y*y + z*z)
}