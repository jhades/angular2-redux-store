
let express = require('express');

let app = express();

let todos = [];


app.use(express.static('.'));

app.post('/todo', (req, res) => {

    console.log(req.body);

    let todo = JSON.parse(req.body);

    todos.push(todo);

    res.body = JSON.stringify(todos);

    res.end();
});

let server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});