app.factory('users', ['$http', function($http) {
  return $http.get('http://127.0.0.1:8000/users/.json')
            .success(function(data) {
              console.log(data);
              return data;
            })
            .error(function(err) {
              console.log("Mrda");
              return err;
            });
}]);