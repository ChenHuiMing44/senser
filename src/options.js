import defaultOptions from "./defaultOptions"


let currentOptions;

const init = () => {
	// let instance = Object.assign(defaultOptions,)
	currentOptions = {};
	currentOptions.options = defaultOptions;
	currentOptions.defaultOptions = defaultOptions;
	currentOptions.setCurrentOptions = function (options) {
		this.options = Object.assign(this.options , options);
	}
};

if(!currentOptions){
	init();
}


export default currentOptions;
