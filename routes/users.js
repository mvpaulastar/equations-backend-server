const express = require('express');
const {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController');

const router = express.Router();

//GET ALL
router.get('/', getAllUsers );

//GET ONE
router.get('/:id', getUser );

//POST new User
router.post('/', createUser );

//DELETE
router.delete('/:id', deleteUser );

//UPDATE
router.patch('/:id', updateUser );

module.exports = router;