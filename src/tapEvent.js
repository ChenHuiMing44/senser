import updateEvent from "./updateEvent"

export default function(currentOptions){

	function dealItem(node , event){
		// let attributeNode = node.attributes.getNamedItem(currentOptions.options.clickName);
		let nodeAttribute = node.getAttribute("blh5-sensor");
		if(nodeAttribute){
			// console.log(attributeNode.value);
			// 上传埋点
			let eventKey = nodeAttribute;
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

}







