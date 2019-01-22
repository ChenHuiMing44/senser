import defaultOptions from "./defaultOptions"


let currentOptions;

const init = options => {
	currentOptions = {};
	currentOptions.options = Object.assign(defaultOptions,options);
	currentOptions.defaultOptions = defaultOptions;
	currentOptions.setCurrentOptions = function (options) {
		this.options = Object.assign(this.options , options);
	}
};

if(!currentOptions){
	init();
}

module.exports = currentOptions;
