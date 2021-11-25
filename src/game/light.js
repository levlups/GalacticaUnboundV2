
global.shade={}
export function light(){
	
	console.log('were shading')
}

export function addToShading(x,y,z,id){
	var lol=id.split('|')
	shade[JSON.stringify([lol[0],lol[1],lol[2]])]=[x,y,z]
	//console.log(shade)
	
}