function add(){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(undefined, n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1));
}

/*
	As a method of an obj
		this -> obj

	As a function
		this -> global (window)

	//apply, bind & call

	Using the call method of the function

	Using the apply method of the function


	sum(10,20,30,40)
		10 + sum(20,30,40)
				20 + sum(30,40)
						30 + sum(40)
								40

*/





