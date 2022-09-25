const router = require('express').Router();
const { getUsers, postUsers, putUsers, deleteUsers } = require('../controllers/users.controllers')


router.get('/users', getUsers)
router.post('/users', postUsers)
router.put('/users/:id_user', putUsers)
router.delete('/users/:id_user', deleteUsers)

module.exports = router;