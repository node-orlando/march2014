module.exports = function(key) {
	key = key || "_method";
	return function methodOverride(req, res, next) {
		req.originalMethod = req.originalMethod || req.method;
	
		// req.body
		if (req.body && key in req.body) {
			req.method = req.body[key].toUpperCase();
			delete req.body[key];
	
		// req.query
		} else if (req.query && key in req.query) {
			req.method = req.query[key].toUpperCase();
			delete req.query[key]
			if (req.method != "GET") {
				req.body = req.query;
				// delete req.query; // can't do this because the jsonp doce depends on req.query
			}
	
		// check X-HTTP-Method-Override
		} else if (req.headers['x-http-method-override']) {
			req.method = req.headers['x-http-method-override'].toUpperCase();
		}
	
		next();
	};
}