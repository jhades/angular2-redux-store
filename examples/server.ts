
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let todos = [];

app.use(express.static('.'));
app.use(bodyParser.json());


app.post('/todo', (req, res) => {

    console.log(req.body);

    let todo = req.body;

    todos.push(todo);

    res.send(todos);
});

let server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});