
import tapEvent from "./tapEvent"
import inputEvent from "./inputEvent"
import currentOptions from "./options"
import updateEvent from "./updateEvent"

const init = () => {
	//注册init
	let instance = Object.assign(currentOptions,{});
	instance.init = function (options) {
		instance.setCurrentOptions(options);
		//注册点击事件
		tapEvent(instance);
		//注册输入事件
		inputEvent(instance);


	};
	//注册api
	instance.updateFlag = function (eventName,flag) {
		updateEvent(eventName,{flag: !!flag})
	};

	instance.updateVal = function (eventName,val) {
		updateEvent(eventName,{value: ""+val})
	};
	instance.infoPageLeave = function (pageName,duration) {
		let name = "page_leave";
		let data = {
			pageName:pageName,
			event_duration:duration
		}
		updateEvent(name,data)
	};
	instance.infoEvents = function (eventName,params) {
		updateEvent(eventName,params);
	}

	return instance

};

let sensor;
if(!sensor){
	sensor = init();
}

window.$sensor = sensor;

export default sensor;