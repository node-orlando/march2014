var methodOverride = require('../index');

describe('methodOverride', function() {
	var req, res, next, mo;
	
	beforeEach(function() {
		req = {headers:{}, method: 'GET'};
		res = {};
		next = jasmine.createSpy('next');
		mo = methodOverride();
	});
	
	afterEach(function() {
		expect(next).toHaveBeenCalled();
	});

	it('should work in the notmal (non-ovrridden) case', function() {
		mo(req, res, next);
	});
	
	it('should store the original method and override the req.method', function() {
		req.query =  query = {
			_method: "asdf",
			foo: "bar"
		};
		mo(req, res, next);
		expect(req.originalMethod).toBe('GET');
		expect(req.method).toBe('ASDF');
	});
	
	it('should work with with POST method overrides', function() {
		req.method = 'POST';
		var body = {
			_method: "asdf",
			foo: "bar"
		};
		req.body = body;
		mo(req, res, next);
		expect(req.method).toBe('ASDF');
		expect(req.body._method).not.toBeDefined();
	});
	it('should work with with GET method overrides', function() {
		var query = {
			_method: "asdf",
			foo: "bar"
		};
		req.query = query;
		mo(req, res, next);
		expect(req.method).toBe('ASDF');
		expect(req.body).toBe(query);
		expect(req.body._method).not.toBeDefined();
	});
	it('should work with with header method overrides', function() {
		req.method = 'POST';
		var body = {
			foo: "bar"
		};
		req.body = body;
		req.headers['x-http-method-override'] = 'asdf';
		mo(req, res, next);
		expect(req.method).toBe('ASDF');
		expect(req.body._method).not.toBeDefined();
	});
});