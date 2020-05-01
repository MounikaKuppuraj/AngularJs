(function(){
    var customersFactory=function($http){
        var factory={};
        factory.getCustomers=function(){
            return $http.get('/customers');
        }
        factory.getCustomer=function(customerId){
            return $http.get('/customers/'+customerId);
        }
        factory.getOrders=function(){
            return $http.get('/orders');
        }
        factory.deleteCustomer=function(customerId){
            return $http.delete('/customers/'+customerId);
        }
        factory.newCustomer=function(id,name,city,age){
            var data={
                "id":id,
                "name":name,
                "city":city,
                "age":age
            }
            return $http.post('/customers',data);
        }
        factory.editCustomer=function(id,name,city,age){
            var data={
                "id":id,
                "name":name,
                "city":city,
                "age":age
            }
            return $http.put('/customers',data);
        }
        return factory;
    }
    customersFactory.$inject=['$http'];
    angular.module('customersApp').factory("customersFactory",customersFactory);
}())