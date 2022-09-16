const router = require('express').Router();

const { getTasks, postTasks } = require('../controllers/task.controllers');

router.get('/tasks', getTasks)
router.post('/tasks', postTasks)

module.exports = router;