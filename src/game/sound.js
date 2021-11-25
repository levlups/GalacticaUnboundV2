var soundsource=null
console.log('were musicians!!')
global.sounds={}
global.noSound=false
export function initSound(noa){
	BABYLON.Engine.audioEngine.setGlobalVolume(0.1);
	//sounds['blop']=
	var scene=noa.rendering.getScene()
	sounds['oui']=new BABYLON.Sound("oui", "./texPack/"+funpack+"/audio/oui.ogg", scene,null)
	sounds['blop']=new BABYLON.Sound("blop", "./texPack/"+funpack+"/audio/blop.ogg", scene,null)
	sounds['pick']=new BABYLON.Sound("pick", "./texPack/"+funpack+"/audio/pick.ogg", scene,null)
	sounds['place']=new BABYLON.Sound("place", "./texPack/"+funpack+"/audio/place.ogg", scene,null)
	sounds['inventory']=new BABYLON.Sound("inventory", "./texPack/"+funpack+"/audio/inventory.ogg", scene,null)
	sounds['glassbreak']=new BABYLON.Sound("glassbreak", "./texPack/"+funpack+"/audio/glassbreak.ogg", scene,null)
	sounds['chestOpen']=new BABYLON.Sound("chestOpen", "./texPack/"+funpack+"/audio/chestOpen.ogg", scene,null)
	sounds['doorOpen']=new BABYLON.Sound("doorOpen", "./texPack/"+funpack+"/audio/dooropen.ogg", scene,null)
	sounds['hurt']=new BABYLON.Sound("hurt", "./texPack/"+funpack+"/audio/hurt.ogg", scene,null)
	sounds['bell']=new BABYLON.Sound("bell", "./texPack/"+funpack+"/audio/bell.ogg", scene,null)
	sounds['click']=new BABYLON.Sound("click", "./texPack/"+funpack+"/audio/click.ogg", scene,null)
	sounds['garbage']=new BABYLON.Sound("garbage", "./texPack/"+funpack+"/audio/garbage.ogg", scene,null)
	sounds['ventilate']=new BABYLON.Sound("ventilate", "./texPack/"+funpack+"/audio/ventilate.ogg", scene,null)
	sounds['swim']=new BABYLON.Sound("swim",  "./texPack/"+funpack+"/audio/swim.ogg",scene, null, { loop: true, autoplay: false ,volume:0.1 })//new


	sounds['splash']=new BABYLON.Sound("splash",  "./texPack/"+funpack+"/audio/splash.ogg",scene, null, { loop: false, autoplay: false,volume:0.05 })//new 
sounds['whitenoise']=new BABYLON.Sound("whitenoise",  "./texPack/"+funpack+"/audio/whitenoise.ogg",scene, null, { loop: true, autoplay: false,volume:0.05 })
	
//setTimeout(function(){ playsound('whitenoise',0.2) }, 6000);
	

	
}
export function playsound(sound, volume) {
	
	if(noSound){
		return;
	}

	sounds[sound].volume=0.5
soundsource=sounds[sound]
soundsource.play()


}