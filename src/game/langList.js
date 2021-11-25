

global.jsonLang={}
	
		var reqContext = require.context('./lang/', false, /\.json$/)
    reqContext.keys().forEach(name => {
        // convert name ('./foo.js') to bare name ('foo')
      var bareName = /\.\/(.*)\.json/.exec(name)[1]
	
		jsonLang[bareName]=reqContext(name)
		
		
      
    })
	
	export function getLangList(){
		
		
		
	
	
	
	
		
	}


