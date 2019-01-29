
import updateEvent from "./updateEvent"

export default function (currentOptions) {

	window.addEventListener("load", function () {
		document.addEventListener("focusin",function (event) {
			// alert("1212");
			if(event.target.nodeName === "INPUT"){
				console.log(event);
				let inputName = currentOptions.options.inputName;
				let nodeAttribute = event.target.getAttribute("blh5-sensor");
				if(nodeAttribute){
					event.target.focusTimeStamp = event.timeStamp;
				}
			}
		})
		document.addEventListener("focusout",function (event) {
			if(event.target.nodeName === "INPUT") {
				console.log(event);
				let inputName = currentOptions.options.inputName;
				let nodeAttribute = event.target.getAttribute("blh5-sensor");
				if (nodeAttribute) {
					let sensorKey = nodeAttribute;
					let event_duration = event.timeStamp - event.target.focusTimeStamp;
					if (!event_duration || event_duration < 0) {
						event_duration = 0
					}
					let val = event.target.value;
					//上传三个值
					let updateVal = {
						elementId: event.target.id,
						elementType: event.target.nodeName,
						value: val,
						event_duration: event_duration
					};
					updateEvent(sensorKey, updateVal);
				}
			}
		})

		// let inputList = document.querySelectorAll("input");
		// inputList.forEach(function (node , index) {
		// 	//	input的输入  判断是否为需要埋点的值
		// 	let inputName = currentOptions.options.inputName;
		// 	let nodeAttribute = node.getAttribute("blh5-sensor");  //node.getAttribute(inputName);
		// 	if(nodeAttribute){
		// 		node.addEventListener("focus" , function (event) {
		// 			this.focusTimeStamp = event.timeStamp;
		// 		})
		// 		node.addEventListener("blur" , function (event) {
		// 			let sensorKey = nodeAttribute;
		// 			let event_duration = event.timeStamp - this.focusTimeStamp;
		// 			if(!event_duration || event_duration < 0){
		// 				event_duration = 0
		// 			}
		// 			let val = this.value;
		// 			//上传三个值
		// 			let updateVal = {
		// 				elementId: node.id,
		// 				elementType: node.nodeName,
		// 				value: val,
		// 				event_duration: event_duration
		// 			};
		// 			updateEvent(sensorKey, updateVal);
		// 		})
		//
		// 	}
		// })

	});
}




