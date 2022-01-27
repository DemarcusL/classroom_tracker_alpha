// let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

const studentSchema = require('../model/StudentSchema');

router.get('/test', (req, res) => {

  res.send('Hello from your student route');

});


// READ ALL Students
router.get('/', (req, res) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
      console.log(studentSchema)
    }
  })
});

// Get Single Student 
router.get('/find/:id', (req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
});

// CREATE Student
router.post('/create', (req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// Update Student
router.put('/update/:id', (req, res, next) => {
  console.log("Update route called for id " + req.params.id);
  console.log(req.body);
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
});

// Delete Student
router.delete('/delete/:id', (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

module.exports = router;