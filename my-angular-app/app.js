var app = angular.module('myApp', []); 
app.controller('myCtrl', function ($scope) { 
	$scope.items = 
		['Mobile', 'Laptop', 'iPad', 'Desktop']; 
	$scope.newItem = ''; 

	$scope.removeItem = function (index) { 
		var removedItem = $scope.items.splice(index, 1)[0]; 
		console.log("Removed Item:", removedItem); 
	}; 

	$scope.addItem = function () { 
		if ($scope.newItem.trim() !== '') { 
			$scope.items.push($scope.newItem); 
			$scope.newItem = ''; 
		} 
	}; 
});
