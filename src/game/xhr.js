var vxhr=null
export function getUuid(name){
	
	
	
	  var xhr = new XMLHttpRequest();
    const url = 'https://galacticau.fun/getuuid.php';


    xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
    xhr.send("username=" + name);


    xhr.onreadystatechange = (e) => {
		
           if(vxhr==null){
			  
		

        if (xhr.responseText !== "") {
			
			 vxhr= xhr.responseText
				
            console.log(vxhr)
			getName(vxhr)
           localStorage.setItem('uuid', vxhr);
				}
			
              
			  
			  
		   
			  

        }
		
	}
    


    
	
	
	
}


export function getName(uid){
	
	vxhr=null
	  var xhr = new XMLHttpRequest();
    const url = 'https://galacticau.fun/getname.php';


    xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
    xhr.send("uid=" + uid);


    xhr.onreadystatechange = (e) => {
		
           if(vxhr==null){
			  
		

        if (xhr.responseText !== "") {
			
			 vxhr= xhr.responseText
				
            console.log(vxhr)
			rtcName=vxhr
           //localStorage.setItem('uuid', vxhr);
				}
			
              
			  
			  
		   
			  

        }
		
	}
	
	
}
