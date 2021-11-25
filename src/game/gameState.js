
global.gameState={1:'gathering',2:'started',3:'ended'}
global.currentGameState=null
export function initState(){
	currentGameState=gameState[1]
	console.log('states inited')
}