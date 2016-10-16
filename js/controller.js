var Movies = angular.module('Movies', ['ngRoute']);

Movies.controller('moviesController', ['$scope', '$http', function($scope, $http){

	$http.get('js/data.json').success(function(data){
		$scope.movies = data;
	});
	
}]);
Movies.controller('singleController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http,$location,$routeParams){

	$http.get('js/data.json').success(function(data){
		$scope.movies = data;
		$scope.movieSingle = $routeParams.singleId;
	});

	$scope.home = function(){ $location.path('/index.html') }
	
}]);

Movies.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'partial/movies.html',
		controller: 'moviesController'
	})
	$routeProvider.when('/single/:singleId', {
		templateUrl: 'partial/single.html',
		controller: 'singleController'
	})
	$routeProvider.otherwise({redirectTo : '/'});
	
	
});