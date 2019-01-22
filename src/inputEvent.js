
import currentOptions from "./options"
import updateEvent from "./updateEvent"

module.exports = function () {
	window.addEventListener("load", function () {
		let inputList = document.querySelectorAll("input");
		inputList.forEach(function (node , index) {
			//	input的输入  判断是否为需要埋点的值
			let nodeAttribute = node.attributes.getNamedItem(currentOptions.options.inputName);
			if(nodeAttribute){
				node.addEventListener("focus" , function (event) {
					this.focusTimeStamp = event.timeStamp;
				})
				node.addEventListener("blur" , function (event) {
					let sensorKey = nodeAttribute.value;
					let event_duration = event.timeStamp - this.focusTimeStamp;
					if(!event_duration || event_duration < 0){
						event_duration = 0
					}
					let val = this.value;
					//上传三个值
					console.log(sensorKey+event_duration+val);
					let updateVal = {
						elementId: node.id,
						elementType: node.nodeName,
						value: val,
						event_duration: event_duration
					}
					updateEvent(sensorKey, updateVal);
				})

			}
		})

	});
}




