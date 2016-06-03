app.service('listService', function(){

	////////////////////// FUNÇÕES LIDANDO COM LISTS 
	var lists = [];

	this.save = function(list){
		lists.push(list);
	}

	this.get = function(id){
		console.log("A lista no get" + lists);
		return lists[id];
	}

	this.lists = function(){
		return lists;
	}

	this.editList = function(listIndex,listName){
		lists[listIndex].name = listName;
	}

	this.deleteList = function(listIndex){
		console.log("Index da lista no service "+listIndex);
		console.log("Listas antes "+lists);
		lists.splice(listIndex,1);
		console.log("Listas dps "+lists);
	}

	/////////////////////// FINAL LISTS


	/*

	IRIA SÓ COLOCAR AS FUNÇÕES RELACIONADAS COM AS LISTS NESSE SERVICE PARA PODER ACESSAR DE VÁRIOS CONTROLLERS
	E FAZER SERVICES SEPARADOS PARA TASKS E COMMENTS MAS NÃO TERIA NECESSIDADE E BOTEI NO MESMO

	*/


	////////////////////// FUNÇÕES LIDANDO COM AS TASKS

	this.addTask = function(listIndex, taskName, deadline){
		console.log(lists[listIndex]);

		lists[listIndex].tasks.push({
			name: taskName,
			deadline: deadline,
			done: false,
			comments: []
		});

		console.log(lists[listIndex]);
		console.log("Tasks no service: " + lists[listIndex].tasks);
	}

	this.editTask = function(listIndex,taskIndex,taskName,deadline){
		lists[listIndex].tasks[taskIndex].name = taskName;
		lists[listIndex].tasks[taskIndex].deadline = deadline;
		// lists[listIndex].tasks[taskIndex].done = taskName;
	}

	this.getTasksFromList = function(listIndex){
		console.log("Foi pegar as tasks");
		return lists[listIndex].tasks;
	}

	this.deleteTask = function(listIndex, taskId){
		console.log("Tasks antes " + lists[listIndex].tasks);
		lists[listIndex].tasks.splice(taskId,1);
		console.log("Tasks dps " + lists[listIndex].tasks);
	}


	////////////////////// FINAL TASKS




	////////////////////// FUNÇÕES LIDANDO COM OS COMMENTS

	this.addComment = function(listIndex,taskIndex,taskComment){
		//Em lists[] pega a lista correta, dps vai nas tasks dessa lista e pega a lista correta pelo taskIndex.
		//Com a task correta pega o array dos comments e coloca mais um
		console.log("Comment antes:" + lists[listIndex].tasks[taskIndex].comments);
		lists[listIndex].tasks[taskIndex].comments.push(taskComment);
		console.log("Comment dps: " + lists[listIndex].tasks[taskIndex].comments);
	}

	this.getCommentsFromTask = function(listIndex,taskIndex){
		console.log("Foi pegar as comments");
		return lists[listIndex].tasks[taskIndex].comments;
	}


	////////////////////// FINAL COMMENTS

});