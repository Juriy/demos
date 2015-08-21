describe('limitBy filter', function() {

	var filter;

	beforeEach(function() {
		module('bookstore');
		inject(function(limitByFilter) {
			filter = limitByFilter;
		});
	});

	it('Should trim the big string', function() {
		var str = '.... ....';
		expect(filter(str, 5).length).toEqual(4);
	});

	it('Should trim string with no spaces', function() {
		var str = '........';
		expect(filter(str, 5).length).toEqual(5);
	});

});