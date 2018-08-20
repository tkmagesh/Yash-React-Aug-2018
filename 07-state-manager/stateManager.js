var SM = (function(){	
	var _currentState = undefined,
		_listeners = [],
		_reducer = null,
		_init_action = '@@INIT/ACTION'

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function crearteStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return { getState, subscribe, dispatch };
	}

	return { crearteStore };
})();
