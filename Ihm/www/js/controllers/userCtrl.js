angular.module('starter.controllers.user', ['ionic', 'authserv.service'])
	.controller('userCtrl', ['$scope', '$state', 'AuthServ', function($scope,$state, AuthServ) {

	$scope.insc = {};
	$scope.infor = {};



	$scope.inscription = function(){

		var name = $scope.insc.name;
		var email = $scope.insc.email;
		var password = $scope.insc.password;
		
		var success = function(res){
				console.log(res);
				if (res) {
					//console.log("Coucou bisou")
					$state.go( "dashboard" ); //redirection vers la bonne vue
				}
		};
		var error = function(err){
			console.log(err);
		};
		// Le .then permet d'attendre la "promesse" de l'asynchrone de connexion
		AuthServ.setInscription(name,email,password).then(success,error);
	};

	$scope.information = function(){

	var id = $scope.infor.id;

	var success = function(res){
		console.log(res);
		if (res) {
			$state.go( "information" ); //redirection vers la bonne vue
		}
		};
		var error = function(err){
			console.log(err);
		};
		// Le .then permet d'attendre la "promesse" de l'asynchrone de connexion
		AuthServ.getInformation(id).then(success,error);
	};
	}

}]);