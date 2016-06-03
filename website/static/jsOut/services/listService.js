app.service('listService', function(){
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

	// var task = {
	// 	name: '',
	// 	deadline: '',
	// 	done: false,
	// 	comments : []
	// };

	this.addTask = function(listIndex, taskName){
		console.log(lists[listIndex]);

		lists[listIndex].tasks.push({
			name: taskName,
			deadline: 'Hoje',
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

});