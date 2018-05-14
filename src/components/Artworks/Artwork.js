import React from 'react'

const Artwork = ({ artwork, handleEdit }) => {
  return (
    <div className="card m-3 d-inline-block" style={{ width: '45%' }}>
      <img className="card-img-top" src={ artwork.img_url } alt={ artwork.title } />
      <div className="card-body">
        <h5 className="card-title">{ artwork.title } ({ artwork.year })</h5>
        {
          artwork.artist &&
          <p className="card-text">by { artwork.artist.first_name } { artwork.artist.last_name }</p>
        }
        <a onClick={ () => handleEdit(artwork) } className="btn btn-light">Edit</a>
      </div>
    </div>
  )
}

export default Artwork
