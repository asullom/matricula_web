app.controller("naturalPersonController", function($scope, naturalPersonService) {
	
	$scope.np_list =[];

    list = function() {
        naturalPersonService.list().then(function(r){
            $scope.np_list = r.data;
        }, function (error){
            console.log("Error  " + error.data.message);
        })
        
    }
    list();

    $scope.save = function() {
        naturalPersonService.create($scope.naturalperson).then(function(r){
            console.log(r.data);
            list();
        }, function (error){
            console.log("Error  " + error.data.message);
        })
        
    }
    
});