app.factory('AuthService', function($http,Session, userResource, $location){
	var authservice = {};

	authservice.register = function(credentials){
		//Vai usar o objeto userResource pq ele eh o resource que acessa o http da API
		userResource.save(credentials);
	};



	authservice.login = function(credentials){

		function setHeader(xhr) {
        // as per HTTP authentication spec [2], credentials must be
        // encoded in base64. Lets use window.btoa [3]
        xhr.setRequestHeader ("Authorization", "Basic " +
                               btoa(credentials.username + ':' credentials.password));
    	}

		return $http.post('/api-auth/login/',credentials, beforeSend: setHeader)
		.then(function(response){
			console.log(response);
			console.log(response.data);
			// Session.create(response.data.id,response.data.user.id,response.data.user.username);
			console.log(response.data.user);
			return response.data.user;
		});
		$location.path("/");
  	};

  	return authservice;
});