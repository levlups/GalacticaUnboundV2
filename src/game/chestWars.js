import { playsound } from './sound.js'
import { drop } from './keyFunc.js'
var mycolor=''
var colors=['red','blue']
mycolor=colors[Math.floor(Math.random()*2)]
console.log('mycolor is :'+mycolor)

var score={'red':0,'blue':0};

var teamSpawn={'-48,50,-7':'red','-26,48,48':'blue'}//,'yellow':[-71,62,35],'green':[-7,41,7]}
var num=2
export function chestWars(){
	//debug=true
	
	//bigSign=rtcblocklist.worldname//'Game:'+gameState[num]
	//bigSign=''
	//bigSignTime=3000
	//bigSignColor='white'
} 


export function checkState(poso){
	
	
	if(teamSpawn[poso.toString()]!==undefined){
		bigSign=teamSpawn[poso.toString()]+' has lost'//gameState[3]
	   bigSignTime=10
	   
	   
	   score[teamSpawn[poso.toString()]]=1
	   console.log(score)
	   
	   if(teamSpawn[poso.toString()].toString()==mycolor){
		 bigSign='youuuuuuuuuuuuuuuuu lost'
		 bigSignTime=10
		 
		 noa.ents.setPosition(noa.playerEntity,poso[0],poso[1]+100,poso[2])
	   }
		
	}
	
	if(score['red'] ==1 && score['blue']==1){
		bigSign='Game:'+gameState[3]
		
		
	}

 
}	


setInterval(function(){ 

if(pos[1]>60){
	
	bigSign='You Won'
	//bigSign=''
	bigSignTime=3000
		bigSignColor='yellow'
	
}

else if(health<10){
	
	
	
	if(health<1){
			
bigSign='You Died'
	//bigSign=''
	bigSignTime=3000
	bigSignColor='red'
	
	playsound('hurt',0.1)
				health=12
				isDead=true
				playerbody.mass=0
	noa.Died(playermesh)
	
				var i = 0, howManyTimes = itemStack.length;
				
			function f() {
				if(itemStack[i]==null){
					howManyTimes=i-1
					
					reBoot()
				}
				if(itemStack[i]!==null && countStack[i]>0){
			  
			  
			  
				drop(noa,itemStack[i],true)
				countStack[i]--
				}
				
				if(countStack[i]<1){
			  i++;
			 
				}
				
				
			  if (i < howManyTimes) {
				
				setTimeout(f, 30);
				
				
			  }
			}

			f();
		

	
   }
	
}





 }, 1000);
 
 

 
 
 
 
 
 
 
 
 
 
 function reBoot(){
	 
	 	bigSign=''
	
	bigSignTime=0
	bigSignColor='white'
	 
	 playermesh._children[0].material.alpha=1
playermesh._children[0].material.ambientColor=BABYLON.Color3.White()
			playermesh._children[0].material.emissiveColor=BABYLON.Color3.White()
	playermesh._children[0].material.diffuseColor=BABYLON.Color3.White()
	noa.ents.setPosition(noa.playerEntity,0,50,0)
	isDead=false
	playerbody.mass=1
	
	playermesh.rotation.z=0
	 
 }
