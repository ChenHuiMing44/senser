import currentOptions from "./options"
import updateEvent from "./updateEvent"

module.exports = function(){
	window.addEventListener("load",function () {
		function dealItem(node , event){
			let attributeNode = node.attributes.getNamedItem(currentOptions.options.clickName);
			if(attributeNode){
				// console.log(attributeNode.value);
				// 上传埋点
				let eventKey = attributeNode.value;
				let updateVal = {
					elementId: node.id,
					elementType: node.nodeName,
					optionsStamp: event.timeStamp
				};
				updateEvent(eventKey, updateVal);
			}
		}

		document.addEventListener("click",function (event) {
			if(!event.path){
				dealItem(event.target);
			}else{
				for(let index in event.path){
					if(event.path[index] === document){
						break;
					}
					dealItem(event.path[index],event)
				}
			}

		})
	})
}







