

var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
  
var db = mongo.connect("mongodb://localhost:27017/Portfolio", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 
var Schema = mongo.Schema;  
 //---------------------------------------------- 
var UserInfoSchema = new Schema({      
          name: String,
          comment: String,
          overview: String
},{ versionKey: false });  

var model1 = mongo.model('userinfo', UserInfoSchema, 'userinfo');   
app.get("/api/userinfo",function(req,res){  
    model1.findOne({},function(err,data){ 
      
              if(err){  
                  res.send(err);  
              }
              else{                
                  res.send(data);
                  console.log(data); 
                  }  
          });  
})

var Schema = mongo.Schema;  
 //---------------------------------------------- 
var ProductInfoSchema = new Schema({      
          name: String,
          url: String,
          desc:String
},{ versionKey: false });  

var model2 = mongo.model('proinfo', ProductInfoSchema, 'proinfo');   
app.get("/api/proinfo",function(req,res){  
    model2.findOne({},function(err,data){ 
      
              if(err){  
                  res.send(err);  
              }
              else {                
                  res.send(data);
                  console.log(data); 
              }  
          });  
})    

  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!');
})  