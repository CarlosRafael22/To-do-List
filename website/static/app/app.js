var app = angular.module('app', ['ngRoute','ngResource', 'ngCookies']);

app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

 //    var $cookies;
	// angular.injector(['ngCookies']).invoke(function(_$cookies_) {
	//   $cookies = _$cookies_;
	// });    
	// console.log($cookies);

 //    $httpProvider.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];

 	//A COISA QUE FUNCIONOU FOI ISSO!!!!:

 	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// app.constant("CSRF_TOKEN", '{{ csrf_token() }}');
// app.run( function run($http, $cookies ){

//     // For CSRF token compatibility with Django
//     //$http.defaults.headers.post['X-XSRF-TOKEN'] = $cookies['csrftoken'];
//     // $http.defaults.headers.post['X-CSRFTOKEN'] = $cookies['csrftoken'];
//     $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
// })

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'static/partials/loginGoogle.html',
		controller: 'LoginCtrl'
	})
	.when('/', {
		templateUrl: 'static/partials/home.html',
		controller: 'AddListController'
	})
	.when('/index',{
		templateUrl: 'static/partials/index.html',
		controller: 'mainController'
	})
	// .when('/list',{
	// 	controller: 'AddListController',
	// 	templateUrl: 'views/page1.html'
	// })
	.when('/list/:id',{
		controller: 'ListItemController',
		templateUrl: 'static/partials/list.html'
	})
	.when('/list/:id/editList',{
		controller: 'ListItemController',
		templateUrl: 'static/partials/editList.html'
	})
	.when('/list/:id/createTask',{
		controller: 'ListItemController',
		templateUrl: 'static/partials/createTask.html'
	})
	.when('/list/:id/task/:taskId',{
		controller: 'TaskController',
		templateUrl: 'static/partials/task.html'
	})
	.when('/list/:id/task/:taskId/editTask',{
		controller: 'TaskController',
		templateUrl: 'static/partials/editTask.html'
	});
});