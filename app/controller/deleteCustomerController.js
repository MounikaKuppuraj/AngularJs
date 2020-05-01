(function(){
    var deleteCustomerController=function($scope,$routeParams,customersFactory){
       var customerId=$routeParams.customerId;
        customersFactory.deleteCustomer(customerId)
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
    angular.module('customersApp').controller('deleteCustomerController',deleteCustomerController);
   }());