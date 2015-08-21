describe('BookDetailsController', function() {

	beforeEach(function() {
		var mockBookService = {};

		module('bookstore', function($provide) {
			$provide.value('BookService', mockBookService);
		});
		
		inject(function($q) {
			mockBookService.getBook = function(id) {
				var defer = $q.defer();
				defer.resolve({
					data: {
						title: 'Sample Book',
						description: 'Sample Description'
					}
				});
				return defer.promise;
    		};
  		});
	});

	it('Should extract book from payload data', 
		inject(function($controller, $rootScope, _$location_, _BookService_) {
			var scope = $rootScope.$new();
			$location = _$location_;
			var bookService = _BookService_;

			$controller('BookDetailsController',
                {	$scope: scope, 
                	$location: $location, 
                	BookService: bookService });

			// Required to resolve promises
 			scope.$digest();
 			expect(scope.book.title).toBe('Sample Book');
		})
	);
});