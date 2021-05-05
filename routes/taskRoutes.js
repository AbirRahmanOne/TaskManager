const express = require('express') ;
const taskController = require('../controllers/taskControllers');

const router = express.Router() ;

// Get all tasks
router.get('/all', taskController.task_list);
// Get specific task info
router.get('/:id', taskController.task_details);

//Post a task 
router.post('/', taskController.task_create) ;
// Post all task
router.post('/all', taskController.task_creates);

// Modify Task 
router.put('/:id', taskController.task_update) ;

//Delete Task
router.delete('/:id', taskController.task_delete);

module.exports = router ;