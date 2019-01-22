
import currentOptions from "./options"
import sa from "sa-sdk-javascript"

let hasInit;
if(!hasInit){
	sa.init({
		server_url: currentOptions.options.name,
		heatmap: {
			clickmap: currentOptions.options.clickmap,
			scroll_notice_map: currentOptions.options.scroll_notice_map
		}
	})
	hasInit = true
}
const getTrackParams = params =>{
	return Object.assign({
		pageName: currentOptions.options.pageName,
		appname: currentOptions.options.appname
	},params);
};


module.exports = function (eventName , params) {
	sa.track(eventName, getTrackParams(params));
};


