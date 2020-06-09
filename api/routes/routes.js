module.exports = function(app){
    var tasks = require('../controllers/Taskcontroller');

    app.route('/tasks')
        .get(tasks.list_all_tasks)
        .post(tasks.create_a_task);

    app.route('/tasks/:taskId')
    .get(tasks.read_task)
    .post(tasks.update_task)
    .delete(tasks.delete_task);
}