var module = angular.module('bookstore');

module.controller('BookDetailsController', 

function($routeParams, $scope, $sce, BookService) {
	$scope.book = BookService.getBook($routeParams.isbn);
	$scope.description = $sce.trustAsHtml(
		$scope.book.description);
});