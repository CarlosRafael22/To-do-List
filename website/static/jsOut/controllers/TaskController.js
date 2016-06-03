app.controller('TaskController', ['$scope', '$routeParams', 'listService', function($scope,$routeParams,listService){

	$scope.taskIndex = $routeParams.taskId;
	console.log("A task eh: " + $scope.taskIndex);

	$scope.listIndex = $routeParams.id;
	console.log("A list eh: " + $scope.listIndex);

	//Pegar a lista com a ID que a gnt ta vendo
	$scope.list = listService.get($scope.listIndex);

	$scope.addComment = function(listIndex,taskIndex,taskComment){
		listService.addComment(listIndex,taskIndex,taskComment);
	}

	//pega o nome da task para ser visivel em sua pagina
	$scope.taskName = $scope.list.tasks[$scope.taskIndex].name;

	$scope.comments = listService.getCommentsFromTask($scope.listIndex,$scope.taskIndex);


	//Pegar os valores da tarefa para dps poder modifica-la
	$scope.tasks = listService.getTasksFromList($scope.listIndex);

	$scope.taskName = $scope.tasks[$scope.taskIndex].name;
	$scope.deadline = $scope.tasks[$scope.taskIndex].deadline;
	$scope.done = $scope.tasks[$scope.taskIndex].done;

	$scope.editTask = function(listIndex,taskIndex,taskName, deadline){
		listService.editTask(listIndex,taskIndex,taskName,deadline);
	}
}]);