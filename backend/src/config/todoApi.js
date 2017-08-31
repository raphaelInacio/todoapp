module.exports = (router) => {
    const todoService = require('../service/todoService')
    todoService.register(router, '/todos')
}