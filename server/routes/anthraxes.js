const router = require('express').Router();
let Anthrax = require('../models/anthrax.model');

router.route('/').get((req, res) => {
  Anthrax.find()
    .then(anthraxes => res.json(anthraxes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  
  const hospitalDistrict = req.body.hospitalDistrict;
  const hospitalVisited = req.body.hospitalVisited;
  const facilityType = req.body.facilityType;
  const disease = req.body.disease;
  const visitDate = Date.parse(req.body.visitDate);
  age = Number(req.body.age);
  gender = req.body.gender;

  const newEntry = new Anthrax({
    username,
    description,
    duration,
    date,

    hospitalDistrict,
    hospitalVisited,
    facilityType,
    disease,
    visitDate,
    age,
    gender,    
  });

  newEntry.save()
  .then(() => res.json('Entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
/*
router.route('/:id').get((req, res) => {
  Anthrax.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Anthrax.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Anthrax.findById(req.params.id)
    .then(entry => {
      entry.username = req.body.username;
      entry.description = req.body.description;
      entry.duration = Number(req.body.duration);
      entry.date = Date.parse(req.body.date);

      entry.save()
        .then(() => res.json('Entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
*/
module.exports = router;