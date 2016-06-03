app.controller('ListItemController', ['$scope', 'listService',  '$routeParams', '$location', function($scope, listService,  $routeParams, $location){
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


 	//////////// FUNÇÕES DOS BOTÕES QUE TRABALHAM COM AS TASKS

 	$scope.deadline = new Date();

 	$scope.addTask = function(listIndex, taskName, deadline){
 		console.log("Index: " + listIndex);
 		listService.addTask(listIndex, taskName, deadline);
 		$scope.taskName = "";
 		console.log("Tasks no controller: " + $scope.tasks);
 		$location.path("/list/"+$scope.lastIndex);
 	}

 	$scope.deleteTask = function(listIndex, taskId){
 		listService.deleteTask(listIndex, taskId);
 	}

	//////////////// TERMINA FUNÇÕES DAS TASKS


	////////////// FUNÇÕES DOS BOTÕES QUE TRABALHAM COM A LISTA


	$scope.deleteList = function(listIndex){
 		console.log("Index da lista pra deletea "+listIndex);
 		listService.deleteList(listIndex);
 		$location.path("/");
 	}

 	$scope.editList = function(listName){
 		listService.editList($scope.lastIndex,listName);
 		$location.path("/");
 	}

 	//////////////////// TERMINA FUNÇÕES DA LISTA

 	console.log("Tasks no controller outside: " + $scope.tasks);
 	
}]);