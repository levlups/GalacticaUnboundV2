

var noa2=null
var charNums={"0":[0,0],"1":[5,0],"2":[10,0],"3":[15,0],"4":[20,0],"5":[25,0],"6":[30,0],"7":[35,0],"8":[40,0],"9":[45,0],":":[0,32]}

var num=0
export function initBoard(noa){
	
	
	noa2=noa
	var time='0'+num.toString()+':00'
	go(time)
	


	
	
}


function go(time){
	
	
		var l= document.createElement('canvas');

	
	var objectContext=l.getContext('2d')
	objectContext.fillStyle = "blue";
	objectContext.fillText(time,0,0,18,18)
	var imaga=new Image();
	
	

		imaga.src='./texPack/'+funpack+'/maingui/letters.png'
		
		setTimeout(function(){  
	objectContext.drawImage(imaga,charNums[time.charAt(0)][0],charNums[time.charAt(0)][1],5,8,0,0,5,8);
	
	objectContext.drawImage(imaga,charNums[time.charAt(1)][0],charNums[time.charAt(1)][1],5,8,6,0,5,8);
	
	objectContext.drawImage(imaga,charNums[time.charAt(2)][0],charNums[time.charAt(2)][1],5,8,12,0,5,8);
	
	objectContext.drawImage(imaga,charNums[time.charAt(3)][0],charNums[time.charAt(3)][1],5,8,18,0,5,8);
	objectContext.drawImage(imaga,charNums[time.charAt(4)][0],charNums[time.charAt(4)][1],5,8,24,0,5,8);
			}, 1000);
	
	setTimeout(function(){  
	var bits=30; // 16 pixels
				for (var intFor1 = 0; intFor1 <bits; intFor1 += 1) {
					for (var intFor2 = 0; intFor2 <8; intFor2 += 1) {
						var intColor = objectContext.getImageData(intFor1, intFor2,1, 1).data
						
						
						
						if (intColor[3] === 0) {
							continue;
						}
						//console.log(new BABYLON.Color3(intColor[0], intColor[1],intColor[2] ))
						noa2.setBlock(3, 0,(-intFor2)+42+18, intFor1)
					}
					
				}
				
				
					setTimeout(function(){  
	var bits=30; // 16 pixels
				for (var intFor1 = 0; intFor1 <bits; intFor1 += 1) {
					for (var intFor2 = 0; intFor2 <8; intFor2 += 1) {
						var intColor = objectContext.getImageData(intFor1, intFor2,1, 1).data
						
						
						
						
						noa2.setBlock(1, 0,(-intFor2)+42+18, intFor1)
					}
					
				}
				num++
				go('0'+num.toString()+':00')
				
				}, 2000);
				
				}, 4000);
	
	
}
