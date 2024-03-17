const router = require('express').Router()
const db = require('../models')

//GET retreive all the bread
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//Render New page
router.get('/new', (req, res) => {
  res.render('places/new')
})

//GET retreive by index
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  res.send ('GET edit form stub')
})

//CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then((places) => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//PUT update places
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})


//DELETE places
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.delete('/:id/rant:rantId', (req, res) => {
  res.send('GET /places/:id/rant.:rantId stub')
})

/*router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})*/

module.exports = router;