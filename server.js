require('dotenv').config();

const express = require('express');
const problemRoutes = require('./routes/problems');
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use( '/problems', problemRoutes );
app.use( '/users', userRoutes );

//connect db
mongoose.connect( process.env.MONGO_URI )
    .then( () => {
        //listen on port
        app.listen(process.env.PORT, () =>{
            console.log( "Listening on port: ", process.env.PORT );
        })
    })
    .catch( ( error ) => {
        console.log( error );
});