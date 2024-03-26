const React = require('react')
const Def = require('../default')

function New_form(data) {
    let message ='Validation error'
        if (data.message) {
            message = (
                <h4 className='alert-danger'>
                    {data.message}
                </h4>
            )
        }
    let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
            {Math.round(averageRating)} stars
            </h3>
        )
        
    return(
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                        type= "number"
                        className="form-control" 
                        id = "founded" 
                        name="founded"
                        value= {new Date().getFullYear} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = New_form