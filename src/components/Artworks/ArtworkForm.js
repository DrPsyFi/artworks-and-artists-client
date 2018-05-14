import React from 'react'

const ArtworkForm = ({ artwork }) => {
  return (
    <div className="col">
      <h2 className="text-center">
        { artwork.id ? `Editing ${ artwork.title }` : "New Artwork Form" }
      </h2>
      <hr/>
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-category">Artwork Title</label>
              <input type="text" className="form-control" id="artwork-title" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-year">Artwork Year</label>
              <input type="number" className="form-control" id="artwork-year" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-category">Artwork Category</label>
              <input type="text" className="form-control" id="artwork-category" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-image">Artwork Image URL</label>
              <input type="text" className="form-control" id="artwork-image" />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <select className="form-control" id="artist">
                <option value="">-- Select an Artist --</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label htmlFor="artist-first-name">Artist First Name</label>
              <input type="text" className="form-control" id="artist-first-name" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artist-last-name">Artist Last Name</label>
              <input type="text" className="form-control" id="artist-last-name" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ArtworkForm
