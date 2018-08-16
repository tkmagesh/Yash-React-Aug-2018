/*
var isPrime = (function (){
	var cache={};
	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = true;
		for(var index = 2, count = (n/2); index < count; index++)
			if (n % index === 0)
				cache[n] = false;
		return cache[n];
	}
})();

var isOddOrEven = (function(){
	var cache={};
	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = n % 2 === 0 ? 'even' : 'odd';
		return cache[n];
	}
})();
*/


function memoize(fn){
	var cache={};
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = fn(n);
		return cache[n];
	}
}

var isPrime = memoize(function(n){
	console.log('processing ', n);
	for(var index = 2, count = (n/2);index < count; index++)
		if (n % index === 0)
			return false;
	return true;
});

var isOddOrEven = memoize(function(n){
	console.log('processing ' ,n);
	return n % 2 === 0 ? 'even' : 'odd';
})
