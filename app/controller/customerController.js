(function(){
    var customerController=function($scope,$routeParams,customersFactory){
        var customerId=$routeParams.customerId;
        customersFactory.getCustomer(customerId)
        .then(successCallback,errorCallback);
            function successCallback(response){
                $scope.customer=response.data;
            }
            function errorCallback(response){
                //handle errors
            }
    }
    angular.module('customersApp').controller('customerController',customerController);
   }());