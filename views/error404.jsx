const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/sleepyCat.jpg" alt="SleepyCat"/>
                <div>
                  Photo by <a href="https://unsplash.com/@plhnk">Paul Hanaoka</a> on <a href="https://unsplash.com/photos/sleeping-leopard-kitten-LcAZcVWsCIo">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404