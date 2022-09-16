const router = require('express').Router();
const { getUsers, postUsers, putUsers, deleteUsers } = require('../controllers/users.controllers')


router.get('/users', getUsers)
router.post('/users', postUsers)
router.put('/users', putUsers)
router.delete('/users', deleteUsers)

module.exports = router;