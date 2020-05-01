(function(){
 var customersController=function($scope,customersFactory){
    customersFactory.getCustomers()
    .then(successCallback, errorCallback);
        function successCallback(response){
           $scope.customers=response.data;
        }
        function errorCallback(error){
            //handle errors
        }
    $scope.doSort=function(param){
        $scope.sortBy=param;
        $scope.reverse=!$scope.reverse;
    }
 }
 angular.module('customersApp').controller('customersController',customersController);
}());