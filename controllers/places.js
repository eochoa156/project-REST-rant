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
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})


//CREATE
router.post('/', (req, res) => {
  if (req.body.pic === '') { req.body.pic = undefined }
  if (req.body.city === '') { req.body.city = undefined }
  if (req.body.state === '') { req.body.state = undefined }
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError') {
          // TODO: Generate error message(s)
      }
      else {
          res.render('error404')
      }
  })
})

/*
router.post('/', (req, res) => { 
  if (req.body.pic === '') { req.body.pic = undefined }
    if (req.body.city === '') { req.body.city = undefined }
    if (req.body.state === '') { req.body.state = undefined }
  db.Place.create(req.body)
    .then((places) => {
      res.redirect('/places')
    })
    .catch(err => {
      let message = ''
      console.log(err)
      if (err && err.name == 'ValidationError') {
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          message += `rs${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('/places/new', { message })
      }
      else {
        res.render('/error404')
      }
    })
})
*/

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
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

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
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