app.factory('userResource', function($resource){
	return $resource('http://127.0.0.1:8000/users/:user', {user: '@user'});
})