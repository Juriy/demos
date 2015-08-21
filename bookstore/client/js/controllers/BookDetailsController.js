(function() {
	
	angular
		.module('bookstore')
		.controller('BookDetailsController', BookDetailsController);

	function BookDetailsController($routeParams, $scope, $sce, BookService) {
		BookService
			.getBook(+$routeParams.id)
			.then(function(payload) {
				$scope.book = payload.data;
				$scope.description = $sce.trustAsHtml(
					$scope.book.description);
			});
	}
})();

