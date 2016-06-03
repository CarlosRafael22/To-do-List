app.controller('LoginCtrl', ['$scope', 'AuthService', function($scope, AuthService) { 

	// $scope.credentials = {
	// 	username: '',
	// 	password: ''
	// };
	console.log($scope.credentials);
	$scope.loginUser = function(credentials){
		console.log($scope.credentials);
		console.log(credentials);
		AuthService.login(credentials);
	};

	$scope.registerUser = function(credentials){
		AuthService.register(credentials);
	};

	$scope.deleteUser = function(){
		AuthService.delete(credentials);
	};

	$scope.upgradeUser = function(){
		AuthService.upgrade(credentials);
	};



	$scope.currentUser = null;
 
	$scope.setCurrentUser = function (user) {
    	$scope.currentUser = user;
	};

}]); 