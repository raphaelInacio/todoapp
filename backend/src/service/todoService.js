const Todo = require('../domain/todo')

Todo.methods(['get', 'put', 'post', 'delete'])

Todo.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Todo