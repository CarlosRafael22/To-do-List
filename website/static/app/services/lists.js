app.factory('lists', ['$http', function($http) {
  return $http.get('/lists/')
            .success(function(data) {
              console.log(data);
              return data;
            })
            .error(function(err) {
              console.log("Mrda");
              return err;
            });
}]);