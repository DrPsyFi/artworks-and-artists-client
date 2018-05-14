import React from 'react'
import Artwork from './Artwork'

const ArtworksList = ({ artworks, handleEdit }) => {
  const artworkCards = artworks.map(artwork => {
    return <Artwork key={ artwork.id } artwork={ artwork } handleEdit={ handleEdit } />
  })

  return (
    <div className="col">
      <h2 className="text-center">Available Artworks ({ artworks.length })</h2>
      <hr/>
      { artworkCards }
    </div>
  )
}

export default ArtworksList
