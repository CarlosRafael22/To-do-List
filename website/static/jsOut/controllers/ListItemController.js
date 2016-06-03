app.controller('ListItemController', ['$scope', 'listService',  '$routeParams', function($scope, listService,  $routeParams){
	// $scope.getList = function(){
 // 		console.log($routeParams.id);
 // 		console.log($scope.index);
 // 		$scope.listAccessed = listService.get($routeParams.id);
 // 	};

 	console.log($routeParams.id);
 	console.log($scope.index);

 	// $scope.tasks = [];

 	//Pegar o index da última lista acessada pra poder usar na url que vai criar as tarefas nessa lista
 	$scope.lastIndex = $routeParams.id;
 	console.log($scope.lastIndex);

 	$scope.listAccessed = listService.get($scope.lastIndex);
 	console.log($scope.listAccessed);
 
 	//PARA VER AS LISTAS QUE TEM 
 	$scope.listsCreated = listService.lists();

 	// Pegar as tarefas da lista que a gnt ta vendo
 	// toda vez que a gnt tiver na pagina da List vai automaticamente pegar as tasks
 	$scope.tasks = listService.getTasksFromList($scope.lastIndex);


 	$scope.listName = $scope.listAccessed.name;

 	$scope.addTask = function(listIndex, taskName){
 		console.log("Index: " + listIndex);
 		listService.addTask(listIndex, taskName);
 		$scope.taskName = "";
 		console.log("Tasks no controller: " + $scope.tasks);
 	}

 	$scope.editList = function(listName){
 		listService.editList($scope.lastIndex,listName);
 	}

 	console.log("Tasks no controller outside: " + $scope.tasks);
 	
}]);