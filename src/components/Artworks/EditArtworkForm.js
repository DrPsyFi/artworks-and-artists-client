import React from 'react'

const EditArtworkForm = ({ artwork, updateExistingArtwork }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { title, year, category, image, first_name, last_name } = event.target

    updateExistingArtwork({
      artist: {
        id: artwork.artist.id,
        first_name: first_name.value,
        last_name: last_name.value
      },
      artwork: {
        id: artwork.id,
        title: title.value,
        year: year.value,
        category: category.value,
        img_url: image.value
      }
    })

    const inputs = [ title, year, category, image, first_name, last_name ]
    inputs.forEach(input => input.value = '')
  }

  return (
    <div className="col">
      <h2 className="text-center">
        { artwork.id ? `Editing ${ artwork.title }` : "New Artwork Form" }
      </h2>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-category">Artwork Title</label>
              <input type="text" name="title" className="form-control" id="artwork-title" defaultValue={ artwork.title } />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-year">Artwork Year</label>
              <input type="number" name="year" className="form-control" id="artwork-year" defaultValue={ artwork.year } />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-category">Artwork Category</label>
              <input type="text" name="category" className="form-control" id="artwork-category" defaultValue={ artwork.category } />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-image">Artwork Image URL</label>
              <input type="text" name="image" className="form-control" id="artwork-image" defaultValue={ artwork.img_url } />
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
              <input type="text" name="first_name" className="form-control" id="artist-first-name" defaultValue={ artwork.artist.first_name } />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artist-last-name">Artist Last Name</label>
              <input type="text" name="last_name" className="form-control" id="artist-last-name" defaultValue={ artwork.artist.last_name } />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default EditArtworkForm
