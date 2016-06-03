app.service('Session', function(){

	this.create = function(sessionId, userId, sessionUsername){
		this.id = sessionId;
		this.userId = userId;
		this.userUsername = sessionUsername;
	};

	this.destroy = function(){
		this.id = null;
		this.userId = null;
		this.userUsername = null;
	};
});