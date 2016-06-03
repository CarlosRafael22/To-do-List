var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	// .when('/outbox',{
	// 	controller: 'HomeController',
	// 	templateUrl: 'views/home.html'
	// })

	// .when('/outbox/:id',{
	// 	controller: 'EmailController',
	// 	templateUrl: 'views/email.html'
	// })
	.when('/list',{
		controller: 'AddListController',
		templateUrl: 'views/page1.html'
	})
	.when('/list/:id',{
		controller: 'ListItemController',
		templateUrl: 'views/list.html'
	})
	.when('/list/:id/editList',{
		controller: 'ListItemController',
		templateUrl: 'views/editList.html'
	})
	.when('/list/:id/createTask',{
		controller: 'ListItemController',
		templateUrl: 'views/createTask.html'
	})
	.when('/list/:id/task/:taskId',{
		controller: 'TaskController',
		templateUrl: 'views/task.html'
	})
	.when('/list/:id/task/:taskId/editTask',{
		controller: 'TaskController',
		templateUrl: 'views/editTask.html'
	})
	.otherwise({redirectTo: '/list'});
});