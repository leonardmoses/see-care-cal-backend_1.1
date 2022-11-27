// =======================================
//        SCHEMA MODEL DEPENDENCIES
// =======================================
const mongoose = require('mongoose');


// =======================================
//               SCHEMA  
// =======================================
const schema1 = new mongoose.Schema({
  name: {type: String , required: false},
  description: {type: String , required: false},
  img: {type: String, required: false},
  price: {type: Number, },
  qty: {type: Number , required: true}
});

// =======================================
//                 MODEL 
// =======================================
const schemaModel_toBeCalledInController = mongoose.model('User', schema1);

// =======================================
//             EXPORT MODEL
// =======================================
// Export model to controller
module.exports = schemaModel_toBeCalledInController;