(function(){
    angular.module('customersApp',['ngRoute']);
    angular.module('customersApp').config(function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl:'/app/views/home.html'
        })
        .when('/customers',{
            controller:'customersController',
            templateUrl:'/app/views/customers.html'
        })
        .when('/customers/:customerId',{
            controller:'customerController',
            templateUrl:'/app/views/customer.html'
        })
        .when('/orders',{
            controller:'ordersController',
            templateUrl:'/app/views/orders.html'
        })
        .when('/delete/:customerId',{
            controller:'deleteCustomerController',
            templateUrl:'/app/views/customers.html'
        })
        .when('/newCustomer',{
            controller:'newCustomerController',
            templateUrl:'/app/views/newCustomer.html'
        })
        .when('/edit/:customerId',{
            controller:'editCustomerController',
            templateUrl:'/app/views/newCustomer.html'
        })
        .otherwise({redirectTo:'/'})
    })
}())