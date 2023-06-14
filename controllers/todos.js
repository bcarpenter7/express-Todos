
// Export the index function
module.exports = {
    index
}

// Standard naming convention is to make model files named singularly and imported with capitialization
const Todo = require('../models/todo')

// Index function 
function index(req, res){
    res.render('todos/index', {
        todos: Todo.getAll()
    })
}


