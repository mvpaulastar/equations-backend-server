const express = require('express');
const {
    getAllProblems,
    getProblem,
    createProblem,
    deleteProblem,
    updateProblem
} = require('../controllers/problemController');

const router = express.Router();

//GET ALL
router.get('/', getAllProblems );

//GET ONE
router.get('/:id', getProblem );

//POST new problem
router.post('/', createProblem );

//DELETE
router.delete('/:id', deleteProblem );

//UPDATE
router.patch('/:id', updateProblem );

module.exports = router;