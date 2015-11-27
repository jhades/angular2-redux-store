
let express = require('express');
let bodyParser = require('body-parser');
let _ = require('lodash');

let app = express();

let todos = [];

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.route('/todo')
    .get((req, res) => {
        console.log(JSON.stringify(todos));
        res.send(todos);
    })
    .put((req, res) => {
        let todo = req.body;
        let toggled = _.find(todos, (todo) => todo.id === toggled.id);
        toggled.completed = !toggled.completed;
        res.send(todos);
    })
    .delete((req,res) => {
        console.log('removing todo with id = ' + req.query.id);
        todos = _.remove(todos,(todo) => todo.id != req.query.id );
        console.log(JSON.stringify(todos));
        res.send(todos);
    })
    .post((req, res) => {
        todos.push(req.body);
        console.log(JSON.stringify(todos));
        res.send(todos);
    });

let server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});