let mongoose = require('mongoose');
// import mongoose , { Schema } from 'mongoose';
let StudentSchema = mongoose.Schema;
let GradebookSchema = mongoose.Schema;

// import { gradeBookSchema } from '../model/GradebookSchema';

const gradeBookSchema = GradebookSchema(
      {
            Assignment: String,
            Grade: String
      },
      {
            Assignment: String,
            Grade: String
      },
      {
            Assignment: String,
            Grade: String
      }

);

let student = new StudentSchema(
      {
            name: String,
            Image: String,
            gradeBook: [ gradeBookSchema ]
      }
);

// let student = new StudentSchema(
//       {
//             name: String,
//             Image: String,
//             id: Number,
//             gradeBook: [
//                   { Assignment: String, Grade: String },
//                   { Assignment: String, Grade: String },
//                   { Assignment: String, Grade: String }
//             ]
//       }
// );

module.exports = mongoose.model('StudentGroupTest3', student);