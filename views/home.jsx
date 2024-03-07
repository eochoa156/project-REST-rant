const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/pancake.jpg" alt="Pancake"/>
                <div>
                  Photo by <a href="https://unsplash.com/@briewilly">Chad Montano</a> on <a href="https://unsplash.com/photos/baked-pancakes-eeqbbemH9-c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home