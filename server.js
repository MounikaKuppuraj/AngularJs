var express=require('express');
var bodyParser=require("body-parser");
var app=express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/customers',function(req,res){
    res.json(customers);
});
app.post('/customers',function(req,res){
    customers.push(req.body);
    res.json(customers);
});
app.put('/customers',function(req,res){
    var id=req.body.id;
    for(var i=0;i<customers.length;i++){
        if(customers[i].id===parseInt(id)){
            customers.splice(i,1);
            customers.push(req.body);
        }  
    }
    res.json(customers);
});
app.get('/customers/:id',function(req,res){
    var customerId=req.params.id;
    for(var i=0;i<customers.length;i++){
        if(customers[i].id===parseInt(customerId)){
            res.json(customers[i]);
        }
    }
});
app.delete('/customers/:id',function(req,res){
    var customerId=req.params.id;
    for(var i=0;i<customers.length;i++){
        if(customers[i].id===parseInt(customerId)){
            customers.splice(i,1);
        }
    } 
    res.json(customers);
});
app.get('/orders',function(req,res){
    var orders=[];
    for(var i=0;i<customers.length;i++){
    for(var j=0;j<customers[i].orders.length;j++){
        orders.push(customers[i].orders[j]);
        }
    } 
    res.json(orders);
});
app.listen(8080);
console.log('localhost initiated in 8080 port')
var customers=[
    {   
        id:1,
        name:'Mounika',
        city:'Chennai',
        age:23,
        orderTotal:9.9956,
        orders:[
            {
                id:1001,
                productName:'Shoes',
                price:9.9956

            }
        ]
    },
    {
        id:2,
        name:'Sruthi',
        city:'Ooty',
        age:19,
        orderTotal:13.9956,
        orders:[
            {
                id:1002,
                productName:'Bottle',
                price:3.653
            },
            {
                id:1003,
                productName:'Umbrella',
                price:6.653
            },
            {
                id:1004,
                productName:'Towel',
                price:4.653
            }
        ]
    },
    {   
        id:3,
        name:'Kuppuraj',
        city:'Bangalore',
        age:53,
        orderTotal:18.9956,
        orders:[
            {
                id:1005,
                productName:'Bottle',
                price:3.653
            },
            {
                id:1006,
                productName:'Googles',
                price:15.653
            }
        ]
    },
    {
        id:4,
        name:'Sumithra',
        city:'Mumbai',
        age:43,
        orderTotal:3.9956,
        orders:[
            {
                id:1007,
                productName:'Bottle',
                price:3.653
            }
        ]
    }
    ];