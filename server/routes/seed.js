const express = require('express');
const router = express.Router();
const studentModel = require('../model/StudentSchema');


router.get('/', (req, res, next) => {

      const students = [
            new studentModel(
                  {
                        name: 'Spencer',
                        Image: '/',
                        gradeBook: [{ Assignment: 'Test 1', Grade: 'A' }, { Assignment: 'Test 2', Grade: 'B +' }, { Assignment: 'Test 3', Grade: 'C -' }]
                  }
            ),
            new studentModel(
                  {
                        name: 'Demarcus',
                        Image: '/',
                        gradeBook: [{ Assignment: 'Test 1', Grade: 'B' }, { Assignment: 'Test 2', Grade: 'C +' }, { Assignment: 'Test 3', Grade: 'D -' }]
                  }
            ),
            new studentModel(
                  {
                        name: 'Jonathan',
                        Image: '/',
                        gradeBook: [{ Assignment: 'Test 1', Grade: 'C' }, { Assignment: 'Test 2', Grade: 'C +' }, { Assignment: 'Test 3', Grade: 'B +' }]
                  }
            )
      ]

      studentModel.create(students , (error, results) => {
            if (error) {
                  res.send(error);
            }
            else {
                  res.send(results);
            }
      });
});

module.exports = router;