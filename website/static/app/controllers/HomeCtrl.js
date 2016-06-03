app.controller('HomeCtrl', ['$scope', 'users', 'lists', function($scope, users, lists) { 
    $scope.helloTo = 'Home boy';

    users.success(function(data) {
    console.log(data);
    $scope.users = data;
    console.log($scope.users);
    $scope.user = $scope.users[1];
  });

    lists.success(function(data) {
    console.log(data);
    $scope.lists = data;
    console.log($scope.users);
    $scope.user = $scope.users[1];
  });
}]);