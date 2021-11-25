
import { createItems } from './itemRegistry'
global.jsonItems={}
	
		var reqContext = require.context('./json/', false, /\.json$/)
    reqContext.keys().forEach(name => {
        // convert name ('./foo.js') to bare name ('foo')
      var bareName = /\.\/(.*)\.json/.exec(name)[1]
	
		jsonItems[bareName]=reqContext(name)
		
		
      
    })
	
	export function getItemList(scene){
		
		
		
	
	
	for (const key in jsonItems){
		//console.log(key)
		 createItems(scene,key)
		
	}
	
		
	}


