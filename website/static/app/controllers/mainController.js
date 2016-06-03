app.controller('mainController',['$scope', '$http', 'userResource', '$location',  function($scope,$http,userResource, $location){

	$scope.users = userResource.query();


	//Dados sobre o usuario que vai logar agora


	$scope.addUser = function(){
		console.log("Fazndo o add");

		// var user = new userResource({
		// 	username: username,
		// 	password: password,
		// 	email: email});

		// $scope.newUser = {
		// 	username: username,
		// 	password: password,
		// 	email: email
		// };
		//$scope.newUser = new userResource();
		
		//$scope.newUser = new userResource(); 
		console.log($scope.credentials);
		// $scope.newUserRes = new userResource();
		// console.log($scope.newUserRes);
		// $scope.newUserRes = $scope.newUser;
		// console.log($scope.newUserRes);

		// $scope.newUserRes.create();

		// var data = $scope.newUser;
		// $http.post('http://127.0.0.1:8000/users/', data)
		// .success(function(out_data) {
  //               // do something
  //               console.log(out_data);
  //           });
		// userResource.save({
		// 	username: $scope.newUser.username,
		// 	password: $scope.newUser.password,
		// 	email: $scope.newUser.email
		// });


	// var csrfcookie = function() {
 //    var cookieValue = null,
 //        name = 'csrftoken';
 //    if (document.cookie && document.cookie !== '') {
 //        var cookies = document.cookie.split(';');
 //        for (var i = 0; i < cookies.length; i++) {
 //            var cookie = cookies[i].trim();
 //            if (cookie.substring(0, name.length + 1) == (name + '=')) {
 //                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
 //                break;
 //            }
 //        }
 //    }
 //    return cookieValue;
	// };
	


	// var request = new XMLHttpRequest();
	// request.open('POST', 'http://127.0.0.1:8000/users/', true);
	// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	// request.setRequestHeader('X-CSRFToken', csrfcookie());
	// print(csrfcookie());
	// // request.onload = callback;
	// console.log($scope.newUser);
	// request.send($scope.newUser);

		
		userResource.save($scope.credentials);

		$location.path("/");
	};
}]);