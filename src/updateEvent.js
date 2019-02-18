
import currentOptions from "./options"
import sa from "sa-sdk-javascript"

let hasInit;
if(!hasInit){
	sa.init({
		server_url: currentOptions.options.server_url,
		heatmap: {
			clickmap: currentOptions.options.clickmap,
			scroll_notice_map: currentOptions.options.scroll_notice_map
		}
	})
	sa.quick('autoTrack');
	hasInit = true
}
const getTrackParams = (eventName,params) =>{
	return Object.assign({
		pageName: currentOptions.options.pageName,
		appname: currentOptions.options.appname,
		_event: eventName
	},params);
};

export default function (eventName , params) {
	sa.track(currentOptions.options.eventname, getTrackParams(eventName,params));
};


