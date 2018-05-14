import axios from 'axios'
import ArtistAPI from './ArtistAPI'
const url = 'http://localhost:3000/api/artworks'

class ArtworkAPI {
  static get () {
    return axios.get(url)
  }

  static getWithArtists = async () => {
    const [ artworkResponse, artistResponse ] = await Promise.all([
      ArtworkAPI.get(),
      ArtistAPI.get()
    ])

    const { artworks } = artworkResponse.data
    const { artists } = artistResponse.data

    artworks.forEach(artwork => {
      artwork.artist = artists.find(artist => artist.id === artwork.artist_id)
    })

    return artworks
  }

  static post (body) {
    return axios.post(url, body)
  }

  static put (body) {
    return axios.put(`${url}/${body.id}`, body)
  }
}

export default ArtworkAPI
