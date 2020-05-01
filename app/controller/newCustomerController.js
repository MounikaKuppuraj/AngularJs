(function(){
    var newCustomerController=function($scope,customersFactory,$location){
        $scope.title="New Customer"
        $scope.submit=function(){
       var name=$scope.name;
       var city=$scope.city;
       var age=$scope.age;
       var id;
        customersFactory.getCustomers()
        .then(successCallback, errorCallback);
            function successCallback(response){
               $scope.id=response.data.length;
            }
            function errorCallback(error){
                //handle errors
            }
        id=$scope.id+1;
        if(id){
            customersFactory.newCustomer(id,name,city,age)
            .then(successCallback, errorCallback);
            function successCallback(response){
                $location.path('/customers');
            }
            function errorCallback(error){
               //handle errors
            }
        }
      }
    }
    angular.module('customersApp').controller('newCustomerController',newCustomerController);
   }());