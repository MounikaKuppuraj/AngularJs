(function(){
    var editCustomerController=function($scope,$routeParams,customersFactory,$location){
       var customerId=$routeParams.customerId;
       $scope.title="Edit Customer"
       customersFactory.getCustomer(customerId)
       .then(successCallback, errorCallback);
           function successCallback(response){
                $scope.customer=response.data;
                $scope.id=$scope.customer.id;
                $scope.name=$scope.customer.name;
                $scope.city=$scope.customer.city;
                $scope.age=$scope.customer.age;
           }
           function errorCallback(error){
               //handle errors
           }
           $scope.submit=function(){
            var name=$scope.name;
            var city=$scope.city;
            var age=$scope.age;
            var id=$scope.id;
            customersFactory.editCustomer(id,name,city,age)
            .then(successCallback, errorCallback);
            function successCallback(response){
                $location.path('/customers');
            }
            function errorCallback(error){
               //handle errors
            }
           }
    }
    angular.module('customersApp').controller('editCustomerController',editCustomerController);
   }());