const React = require('react')
const Def = require('../default')

function Index (data) {
  let placesFormatted = data.places.map((place, Index, i) => {
    return (
      <div className="col-sm-6" key= {i}>
        <h2>
          <a href={`/places/${Index}`}>
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
            <a href="/places/new">
                <button className="btn-primary">New Place</button>
              </a>
        </main>
    </Def>
  )
}

  module.exports = Index