const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');
const app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist
 
app.use('/api', api); // Set our api routes 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); //Catch all other routes and return the index file
 
const port = process.env.PORT || '8080';  //port setting
app.set('port', port);
app.listen(port, ()=> console.log(`Listening at localhost:${port}`));


//----------------------------------------

const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Portfolio');

 
router.get('/', (req, res) => {
  res.send('api works');
});
 
var col_menuItems = db.collection('userinfo');
// Get Todos
router.get('/userinfo', function(req, res, next){
    db.userinfo.findOne(function(err, userinfo){
        if(err){
           res.send(err);
        } else {
           res.json(userinfo);
        }
    });
});
/*
var col_menuItems = db.collection('masterInfo');
// Get Todos
router.get('/masterInfo', function(req, res, next){
    db.masterInfo.findOne(function(err, masterInfo){
        if(err){
           res.send(err);
        } else {
           res.json(masterInfo);
        }
    });
});

var col_menuItems = db.collection('aboutMe');
// Get Todos
router.get('/aboutMe', function(req, res, next){
    db.aboutMe.findOne(function(err, aboutMe){
        if(err){
           res.send(err);
        } else {
           res.json(aboutMe);
        }
    });
});

var col_menuItems = db.collection('graduate');
// Get Todos
router.get('/graduate', function(req, res, next){
    db.graduate.find(function(err, graduate){
        if(err){
           res.send(err);
        } else {
           res.json(graduate);
        }
    });
});

var col_menuItems = db.collection('skill');
// Get Todos
router.get('/skill', function(req, res, next){
    db.skill.find(function(err, skill){
        if(err){
           res.send(err);
        } else {
           res.json(skill);
        }
    });
});
 */
module.exports = router;	