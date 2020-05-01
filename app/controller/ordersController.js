(function(){
    var ordersController=function($scope,customersFactory){
        customersFactory.getOrders()
        .then(successCallback,errorCallback);
            function successCallback(response){
                $scope.orders=response.data;
            }
            function errorCallback(response){
                //handle errors
            }  
    }
    angular.module('customersApp').controller('ordersController',ordersController);
   }());