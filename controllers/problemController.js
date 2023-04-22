const Problem = require('../models/problemModel');
const mongoose = require('mongoose');

//get all problems
const getAllProblems = async ( req, res ) => {
    try{
        const problems = await Problem.find({}).sort({createdAt: -1});
        res.status(200).json(problems);
    }catch( error ){
        res.status(400).json({error: error.message});
    }

};

//get single problem
const getProblem = async ( req, res ) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Problem not found"});
    }

    const problem = await Problem.findById(id);

    if(!problem){
        return res.status(404).json({ error: "Problem not found" });
    }

    res.status(200).json(problem);
};

//create new problem
const createProblem = async ( req, res ) => {
    const {left, right, goal, tiles} = req.body;

    //add to db
    try{
        const problem = await Problem.create(
            {
                left, right, goal, tiles
            }
        );
        res.status(200).json(problem);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

//delete a problem
const deleteProblem = async ( req, res ) => {
    const { id } = req.params;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Problem not found"});
    }

    const problem = await Problem.findOneAndDelete({_id: id});

    if(!problem){
        return res.status(404).json({error: "Problem not found"});
    }

    res.status(200).json(problem);
};

//update a problem
const updateProblem = async ( req, res ) => {
    const { id } = req.params;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Problem not found"});
    }

    const problem = await Problem.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!problem){
        return res.status(404).json({error: "Problem not found"});
    }

    res.status(200).json(problem);
};

module.exports = {
    getAllProblems,
    getProblem,
    createProblem,
    deleteProblem,
    updateProblem
}