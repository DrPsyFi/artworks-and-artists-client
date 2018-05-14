import React from 'react'

const NewArtworkForm = ({ artwork, artists=[], submitNewArtwork }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const { title, year, category, image, artist_id, first_name, last_name } = event.target

    let artist = artist_id.value ?
      artists.find(artist => artist.id === artist_id.value) :
      { first_name: first_name.value, last_name: last_name.value }

    submitNewArtwork({
      artist,
      artwork: {
        title: title.value,
        year: year.value,
        category: category.value,
        img_url: image.value
      }
    })

    const inputs = [ title, year, category, image, artist_id, first_name, last_name ]
    inputs.forEach(input => input.value = '')
  }

  const artistInputHandler = (event) => {
    const firstName = document.querySelector('#artist-first-name')
    const lastName = document.querySelector('#artist-last-name')

    firstName.disabled = lastName.disabled = !!event.target.value
  }

  const options = artists.map(artist => {
    return <option value={ artist.id } key={ artist.id }>{ artist.first_name } { artist.last_name }</option>
  })

  return (
    <div className="col">
      <h2 className="text-center">New Artwork Form</h2>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-category">Artwork Title</label>
              <input type="text" name="title" className="form-control" id="artwork-title" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-year">Artwork Year</label>
              <input type="number" name="year" className="form-control" id="artwork-year" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-category">Artwork Category</label>
              <input type="text" name="category" className="form-control" id="artwork-category" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artwork-image">Artwork Image URL</label>
              <input type="text" name="image" className="form-control" id="artwork-image" />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <select className="form-control" name="artist_id" id="artist" onChange={ artistInputHandler }>
                <option value="">-- Select an Artist --</option>
                { options }
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label htmlFor="artist-first-name">Artist First Name</label>
              <input type="text" name="first_name" className="form-control" id="artist-first-name" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="artist-last-name">Artist Last Name</label>
              <input type="text" name="last_name" className="form-control" id="artist-last-name" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default NewArtworkForm
