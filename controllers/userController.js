const mongoose = require('mongoose');
const User = require('../models/userModel');

//get all Users
const getAllUsers = async ( req, res ) => {
    try{
        const users = await User.find({}).sort({createdAt: -1});
        res.status(200).json(users);
    }catch( error ){
        res.status(400).json({error: error.message});
    }

};

//get single User
const getUser = async ( req, res ) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User not found"});
    }

    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
};

//create new User
const createUser = async ( req, res ) => {
    const {firstName, lastName, email, streak, times} = req.body;

    //add to db
    try{
        const user = await User.create(
            {
                firstName, lastName, email, streak, times
            }
        );
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

//delete a User
const deleteUser = async ( req, res ) => {
    const { id } = req.params;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"User not found"});
    }

    const user = await User.findOneAndDelete({_id: id});

    if(!user){
        return res.status(404).json({error: "User not found"});
    }

    res.status(200).json(user);
};

//update a User
const updateUser = async ( req, res ) => {
    const { id } = req.params;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"User not found"});
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!User){
        return res.status(404).json({error: "User not found"});
    }

    res.status(200).json(user);
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}