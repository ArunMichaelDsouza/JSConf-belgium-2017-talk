const logger = store => next => action => {
	console.info(`Action fired - ${action.type}`);
	next(action);
};

export default logger;