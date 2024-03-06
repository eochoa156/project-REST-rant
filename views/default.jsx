const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }  

module.exports = Def