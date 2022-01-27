let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');


const studentSchema = require('../model/StudentSchema');




router.get('/test', (req, res) => {

  res.send('Hello from your gradebook route !');
  console.log(' Gradebook route successfully hit ! ');

});


// router.get('/:id', (req, res) => {

//   studentSchema.gradeBook.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//         console.log(data)
//     }
//   })

// });

// Found a students entire gradebook
router.get('/find/:id', (req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data.gradeBook)
      console.log(data)
    }
  })
});

router.post('/create', (req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
});



//update a students grade
router.put('/update/:id', (req, res, next) => {

  const updatedStudentData = new studentSchema({
    _id: req.params.id,
    name: req.body.name,
    Image: req.body.image,
    gradeBook: [
      {
        Assignment: req.body.gradeBook[0].Assignment,
        Grade: req.body.gradeBook[0].Grade
      },
      {
        Assignment: req.body.gradeBook[1].Assignment,
        Grade: req.body.gradeBook[1].Grade
      },
      {
        Assignment: req.body.gradeBook[2].Assignment,
        Grade: req.body.gradeBook[2].Grade
      }
    ]


  });

  studentSchema.findByIdAndUpdate({ _id: req.params.id },
    { $set: { updatedStudentData } }).then(
      () => {
        // console.log(data)
        console.log(updatedStudentData)
        console.log(studentSchema)

        res.status(201).json({
          message: ' updated successfully!'
        });
      }
    ).catch(
      (error) => {
        // res.status(400).json({
        //   error: error
        // });
        console.log(error)
      }
    );
});









module.exports = router;

// router.put('/update/:id', (req, res, next) => {

// //   const updatedGradebookData = new GradebookSchema({
// //     _id: req.params.id,
// //     gradeBook: [
// //       {
// //         Assignment: req.body.gradeBook[0].Assignment,
// //         Grade: req.body.gradeBook[0].Grade
// //       },
// //       {
// //         Assignment: req.body.gradeBook[1].Assignment,
// //         Grade: req.body.gradeBook[1].Grade
// //       },
// //       {
// //         Assignment: req.body.gradeBook[2].Assignment,
// //         Grade: req.body.gradeBook[2].Grade
// //       }
// //     ]


// //   });

// //   studentSchema.updateOne({ _id: req.params.id }, updatedGradebookData).then(
// //     () => {
// //       // console.log(data)
// //       console.log(updatedStudentData)
// //       res.status(201).json({
// //         message: ' updated successfully!'
// //       });
// //     }
// //   ).catch(
// //     (error) => {
// //       // res.status(400).json({
// //       //   error: error
// //       // });
// //       console.log(error)
// //     }
// //   );
// // });

//     // {
//     //       name: req.param.name,
//     //       Image: req.param.image,
//     //       id: Number,
//     //       gradeBook: [
//     //             { Assignment: String, Grade: String },
//     //             { Assignment: String, Grade: String },
//     //             { Assignment: String, Grade: String }
//     //       ]
    