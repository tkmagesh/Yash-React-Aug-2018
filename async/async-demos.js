var app = (function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning the result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning the result`);
			callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);	
		});
	}

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning the result`);
				resolveFn(result);
			}, 5000);

		});
		return promise;
	}

	/*function addAsyncPromiseClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		var p = addAsyncPromise(x,y);
		p.then(function(result){
			console.log(`[@Client] result = ${result}`);	
		});
	}*/

	async function addAsyncPromiseClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		var result = await addAsyncPromise(x,y);
		console.log(`[@Client] result = ${result}`);	
	}

	return { addSyncClient, addAsyncClient, addAsyncPromiseClient };

})();