const React = require("react");
const Def = require("../default.jsx");

function edit_Form({ place, id }) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form action={`/places/${id}?_method=PUT`} method="POST">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                defaultValue={place.name}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                type="url"
                id="pic"
                name="pic"
                defaultValue={place.pic}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="city">Place City</label>
              <input
                className="form-control"
                type="text"
                id="city"
                name="city"
                defaultValue={place.city}
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="state">Place State</label>
              <input
                className="form-control"
                type="text"
                id="state"
                name="state"
                defaultValue={place.state}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Place Cuisines</label>
            <input
              className="form-control"
              type="text"
              id="cuisines"
              name="cuisines"
              defaultValue={place.cuisines}
              required
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Update" />
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_Form;