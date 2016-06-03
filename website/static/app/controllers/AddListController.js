app.controller('AddListController',['$scope', '$routeParams', 'listService', 'Session', function($scope, $routeParams, listService, Session){
	


 	$scope.lists = listService.lists();

 	$scope.addList = function(){
 		console.log($scope.listName);

 		$scope.list = {name: $scope.listName, tasks: []};

 		console.log($scope.list);
 		console.log("tasks da list: " + $scope.list.tasks);

 		listService.save($scope.list);
 		$scope.listName = "";
 		
 		console.log($scope.lists);
 	};

 	$scope.getList = function(){
 		console.log($routeParams.id);
 		console.log($scope.index);
 		$scope.listAccessed = listService.get($routeParams.id);
 	};

 	$scope.deleteList = function(listIndex){
 		console.log("Index da lista pra deletea "+listIndex);
 		listService.deleteList(listIndex);
 	}

 	// PEGAR O QUE TA NA SESSION E DEFINIR O USUARIO QUE ACABOU DE LOGAR COMO O CURRENTUSER

 	$scope.currentUser = null;
 
 	if(Session.id != null){
 		$scope.currentUser = Session.user;
 		console.log("User eh: " + $scope.currentUser);
 	}
 	
	$scope.setCurrentUser = function (user) {
    	$scope.currentUser = user;
	};

}]);