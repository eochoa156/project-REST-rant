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
  .populate('comments')
  .then(place => {
    console.log(place.comments)  
    res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  let id = req.params.id
  db.Place.findById(id)
  .then(place => {
    res.render('places/edit', { place })
  })
})

//CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then((places) => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          messgae += `rs${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }
    })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//PUT update places
router.put('/:id', (req, res) => {
  let id = req.params.id
  db.Place.findByIdAndUpdate(id, req.body)
  .then(place => {
    res.redirect(`/places/${id}`)
  })
})


//DELETE places
router.delete('/:id', (req, res) => {
  let id = req.params.id
  db.Place.findByIdAndDelete(id)
  .then(place => {
    res.redirect('/places')
  })
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