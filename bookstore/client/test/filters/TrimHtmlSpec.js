describe('trimHtml filter', function() {

	var filter;

	beforeEach(function() {
		module('bookstore');
		inject(function(trimHtmlFilter) {
			filter = trimHtmlFilter;
		});
	});

	it('Should remove simple tags', function() {
		expect(filter('<p>Hello</p>')).toEqual('Hello');
	});

	it('Should remove self-closing tags', function() {
		expect(filter('Hello<br />')).toEqual('Hello');
	});

	it('Should remove namespaced tags', function() {
		expect(filter('Hello<test:br />')).toEqual('Hello');
	});

	it('Should remove tags with attributes', function() {
		expect(filter('Hello<span width="20px" >')).toEqual('Hello');
	});

});