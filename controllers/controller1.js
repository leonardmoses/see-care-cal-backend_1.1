// =======================================
//        CONTROLLER DEPENDENCIES
// =======================================
const express = require('express');
const { appendFile } = require('fs');
// Use this var in place of app.method for controller routes
const controller1 = express.Router();
// =======================================
//              MODELS
// =======================================
// Import model into controller
// This will be the Database Object
const SchemaModel_callingFrom_model1_schema = require('../models/schema-model.js');
// =======================================
//           CONTROLLER ROUTES
// =======================================
// INDEX (get)
controller1.get('/' , (req,res) => { /* Test route to index */
    res.render('index.ejs');
})

// NEW (get)
controller1.get('/new' , (req,res) => { /* Test route to new */
    res.render('new.ejs');
})

// DESTROY (delete)


// UPDATE (put)


// CREATE (post)


// EDIT (get) (put)
controller1.get('/edit' , (req,res) => { /* Test route to edit */
    res.render('edit.ejs');
})

// SHOW (get)
controller1.get('/show' , (req,res) => { /* Test route to show */
    res.render('show.ejs');
})

// =======================================
//         CONTROLLER EXPORT
// =======================================
// Export controller to server
module.exports = controller1;