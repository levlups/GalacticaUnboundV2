
export function punchBreak(noa){
	console.log('stooge')
	var x=0
	var y=50
	var z=0
	var radius=6;
	var rad = Math.ceil(radius)

	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+ k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
									if(Math.floor(y)+j>-5){
											
												noa.addBlock(blocks['grass'],Math.floor(x)+i, Math.floor(y), Math.floor(z)+k)
												// socket.emit('block-place', {position: [Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k ],angle:'north',id:1,info:'positionClose'})
									}
								
						}
					}
				}
			}
			
			
		radius=10;
	rad = Math.ceil(radius)
y=60
	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+ k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
									if(Math.floor(y)+j>-5){
											
												noa.addBlock(blocks['grass'],Math.floor(x)+i, Math.floor(y), Math.floor(z)+k)
												// socket.emit('block-place', {position: [Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k ],angle:'north',id:1,info:'positionClose'})
									}
								
						}
					}
				}
			}
	
	
	
} 


export function checkState(poso){
	

 
}	
