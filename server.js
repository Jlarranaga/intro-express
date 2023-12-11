//load express
const express = require('express');
const path = require('path')

//require the todo database
const todoDb = require('./data/todo-db')

//create our express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))//<-- __dirname, is a plsyical oath where the code is running

//mount middleware (app.use)

//mount routes 

//define a "root" route directly on app 
//tomorrow, we'll use better practice routing
app.get('/', function(req, res){ //<-- req = request, res = response, used for the express framework
    //path must start with a leading slash
    res.redirect('/todos') //sends the user to the path below /todos and runs the todos ejs file
})

app.get('/home', function(req, res){ //<-- req = request, res = response, used for the express framework
    //never begin name of the template with a forward slash/
    res.render('home')
})

app.get('/todos', function(req, res){
    const todos = todoDb.getAll()
    res.render('todos/index', { todos })
})

//Tell app to listen on port 3000
//for HTTPS requests from clients
app.listen(3000, function(){
    console.log('Listening on port 3000')
})
